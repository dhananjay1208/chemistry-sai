import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, Eye, Gamepad2, CheckCircle2, FileQuestion, Calculator } from 'lucide-react'
import ProgressBar from './ProgressBar.jsx'
import { markTabComplete, topicCompletionPct } from '../utils/progress.js'

const TABS = [
  { key: 'concept',    label: 'Concept',     icon: BookOpen },
  { key: 'visualize',  label: 'Visualize',   icon: Eye },
  { key: 'game',       label: 'Game',        icon: Gamepad2 },
  { key: 'mcq',        label: 'MCQs',        icon: CheckCircle2 },
  { key: 'pyq',        label: 'NEET PYQs',   icon: FileQuestion },
  { key: 'numerical',  label: 'Numericals',  icon: Calculator },
]

export default function TopicShell({ topicId, title, subtitle, emoji, tabs, backTo = '/redox', backLabel = 'Back to Redox' }) {
  const [active, setActive] = useState('concept')
  const [pct, setPct] = useState(0)

  useEffect(() => { setPct(topicCompletionPct(topicId)) }, [topicId, active])

  const handleTab = (k) => {
    setActive(k)
    markTabComplete(topicId, k)
  }

  const ActiveComponent = tabs[active] || (() => <div className="text-slate-500">Coming soon.</div>)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Link to={backTo} className="btn-ghost text-sm"><ArrowLeft size={16}/> {backLabel}</Link>
        <div className="w-40"><ProgressBar value={pct} label="Progress" /></div>
      </div>

      <div className="card p-6 sm:p-8 mb-4">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{emoji}</div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h1>
            <p className="text-slate-600 mt-1">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1">
        {TABS.map(t => {
          const Icon = t.icon
          const isActive = active === t.key
          return (
            <button
              key={t.key}
              onClick={() => handleTab(t.key)}
              className={`shrink-0 px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2 transition ${
                isActive ? 'bg-brand-600 text-white shadow-soft' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Icon size={16}/> {t.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
