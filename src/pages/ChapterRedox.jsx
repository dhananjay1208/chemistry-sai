import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { topicCompletionPct } from '../utils/progress.js'
import ProgressBar from '../components/ProgressBar.jsx'

const topics = [
  {
    id: 'oxidation-number',
    num: '01',
    emoji: '🔢',
    title: 'Oxidation Number',
    subtitle: 'The hypothetical charge that tells you who lost and who gained electrons.',
    color: 'from-violet-500 to-fuchsia-500',
    path: '/redox/oxidation-number',
    tags: ['Foundation', 'Must know'],
  },
  {
    id: 'stock-notation',
    num: '02',
    emoji: '🏷️',
    title: 'Stock Notation',
    subtitle: 'Use Roman numerals to show oxidation state — Fe(II), Fe(III), Mn(VII)…',
    color: 'from-sky-500 to-cyan-500',
    path: '/redox/stock-notation',
    tags: ['Naming', '1–2 marks'],
  },
  {
    id: 'balancing',
    num: '03',
    emoji: '⚖️',
    title: 'Balancing Redox Reactions',
    subtitle: 'Half-reaction method & oxidation-number method, with acid/base medium tricks.',
    color: 'from-emerald-500 to-teal-500',
    path: '/redox/balancing',
    tags: ['High weight', 'Numericals'],
  },
  {
    id: 'equivalent-mass',
    num: '04',
    emoji: '🧪',
    title: 'Equivalent Mass',
    subtitle: 'n-factor, equivalents, and how normality connects to redox titrations.',
    color: 'from-amber-500 to-orange-500',
    path: '/redox/equivalent-mass',
    tags: ['Numericals', 'Titration'],
  },
  {
    id: 'stoichiometry',
    num: '05',
    emoji: '🧮',
    title: 'Redox Stoichiometry & Mole Concept',
    subtitle: 'The equivalents bridge, mole ratios, electron counting & forming reactions to solve numericals.',
    color: 'from-rose-500 to-pink-500',
    path: '/redox/stoichiometry',
    tags: ['High weight', 'Numericals'],
  },
]

export default function ChapterRedox() {
  const [pcts, setPcts] = useState({})
  useEffect(() => {
    const out = {}
    topics.forEach(t => { out[t.id] = topicCompletionPct(t.id) })
    setPcts(out)
  }, [])

  return (
    <div>
      <Link to="/" className="btn-ghost text-sm mb-4"><ArrowLeft size={16}/> Home</Link>

      <div className="card p-6 sm:p-10 mb-6 bg-gradient-to-br from-white to-brand-50">
        <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Chapter 1</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Redox Reactions</h1>
        <p className="text-slate-600 mt-3 max-w-2xl">
          Every time something burns, rusts, rots, or even when your body digests food — <strong>redox</strong> is happening.
          In this chapter we'll master the core tools: reading <em>oxidation numbers</em>, writing <em>stock notation</em>,
          <em> balancing</em> any redox equation, finding <em>equivalent mass</em>, and tying it all together with
          <em> stoichiometry &amp; the mole concept</em> for numericals.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="chip bg-violet-100 text-violet-700">NEET weight: High</span>
          <span className="chip bg-emerald-100 text-emerald-700">5 topics</span>
          <span className="chip bg-pink-100 text-pink-700">≈ 4–6 marks expected</span>
        </div>
      </div>

      <Link to="/redox/paper" className="card p-5 sm:p-6 mb-6 block bg-gradient-to-br from-amber-50 to-white border-amber-200 hover:-translate-y-0.5 transition group">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📄</div>
            <div>
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">Your question paper</div>
              <div className="text-xl font-extrabold text-slate-900">My Paper — Solved</div>
              <div className="text-sm text-slate-600 mt-0.5">All 53 questions from your paper, solved step-by-step, in one place.</div>
            </div>
          </div>
          <ArrowRight className="text-amber-500 group-hover:translate-x-1 transition shrink-0" size={22}/>
        </div>
      </Link>

      <div className="grid sm:grid-cols-2 gap-4">
        {topics.map((t, i) => (
          <motion.div key={t.id} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}}>
            <Link to={t.path} className="card p-6 block hover:-translate-y-0.5 transition group h-full">
              <div className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-md text-white bg-gradient-to-r ${t.color}`}>TOPIC {t.num}</div>
              <div className="flex items-start justify-between mt-2">
                <div className="text-3xl">{t.emoji}</div>
                <ArrowRight className="text-slate-400 group-hover:text-brand-600 transition" size={20}/>
              </div>
              <div className="text-xl font-extrabold text-slate-900 mt-2">{t.title}</div>
              <div className="text-sm text-slate-600 mt-1">{t.subtitle}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.tags.map(tag => <span key={tag} className="chip bg-slate-100 text-slate-700">{tag}</span>)}
              </div>
              <div className="mt-4"><ProgressBar value={pcts[t.id] || 0}/></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
