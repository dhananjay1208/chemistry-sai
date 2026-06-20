import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText } from 'lucide-react'
import MCQList from '../components/MCQList.jsx'
import NumericalList from '../components/Numerical.jsx'
import * as ON from '../data/oxidationNumber.js'
import * as BAL from '../data/balancingRedox.js'
import * as EQ from '../data/equivalentMass.js'
import * as STO from '../data/redoxStoichiometry.js'

const isPaperQ = (q) => /\[Paper/i.test(q.q)
const isPaperN = (n) => (n.tag || '').toLowerCase().startsWith('paper')

const sections = [
  {
    id: 'ox',
    emoji: '🔢',
    title: 'Oxidation Numbers',
    blurb: 'Assigning O.N., ordering, peroxide traps, structure-based cases.',
    to: '/redox/oxidation-number',
    mcq: ON.mcqs.filter(isPaperQ),
    num: ON.numericals.filter(isPaperN),
  },
  {
    id: 'bal',
    emoji: '⚖️',
    title: 'Identifying & Balancing Redox',
    blurb: 'Redox vs non-redox, types, and balancing by the oxidation-number method.',
    to: '/redox/balancing',
    mcq: BAL.mcqs.filter(isPaperQ),
    num: BAL.numericals.filter(isPaperN),
  },
  {
    id: 'eq',
    emoji: '🧪',
    title: 'Equivalent Mass',
    blurb: 'n-factor for tricky species (FeS₂, As₂S₃), disproportionation, oxide & H₂ methods.',
    to: '/redox/equivalent-mass',
    mcq: EQ.mcqs.filter(isPaperQ),
    num: EQ.numericals.filter(isPaperN),
  },
  {
    id: 'sto',
    emoji: '🧮',
    title: 'Stoichiometry & Mole Concept',
    blurb: 'Equivalents bridge, titration %, electron counting, forming the reaction.',
    to: '/redox/stoichiometry',
    mcq: STO.pyqs.filter(isPaperQ),
    num: STO.numericals.filter(isPaperN),
  },
]

const total = sections.reduce((s, sec) => s + sec.mcq.length + sec.num.length, 0)

export default function PaperSolved() {
  return (
    <div>
      <Link to="/redox" className="btn-ghost text-sm mb-4"><ArrowLeft size={16} /> Back to Redox</Link>

      <div className="card p-6 sm:p-10 mb-6 bg-gradient-to-br from-amber-50 to-white border-amber-200">
        <div className="flex items-start gap-4">
          <div className="text-4xl">📄</div>
          <div>
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">Your question paper</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">My Paper — Solved</h1>
            <p className="text-slate-600 mt-3 max-w-2xl">
              Every question from your redox paper, gathered in one place and solved.
              Tap an MCQ option to check your answer and see the explanation, or expand a worked
              solution for the full step-by-step working. They're also highlighted inside each topic.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip bg-amber-200 text-amber-900">{total} questions</span>
              <span className="chip bg-emerald-100 text-emerald-700">All worked out</span>
            </div>
          </div>
        </div>

        {/* quick jump */}
        <div className="mt-5 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#sec-${s.id}`} className="chip bg-white border border-slate-200 text-slate-700 hover:bg-slate-100">
              {s.emoji} {s.title} ({s.mcq.length + s.num.length})
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {sections.map((s, i) => (
          <motion.section
            key={s.id}
            id={`sec-${s.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="scroll-mt-4"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>{s.emoji}</span> {s.title}
              </h2>
              <Link to={s.to} className="btn-ghost text-xs">Open full topic →</Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">{s.blurb}</p>

            {s.mcq.length > 0 && (
              <div className="mb-6">
                <MCQList questions={s.mcq} title="Multiple-choice (tap an option)" />
              </div>
            )}
            {s.num.length > 0 && (
              <NumericalList problems={s.num} title="Step-by-step worked solutions" />
            )}
          </motion.section>
        ))}
      </div>

      <div className="mt-10 card p-6 text-center bg-gradient-to-br from-white to-brand-50">
        <div className="text-2xl">💪</div>
        <p className="font-bold text-slate-900 mt-1">That's the whole paper, Sai — you've got this!</p>
        <p className="text-sm text-slate-600 mt-1">Revisit any topic for the concept, visualiser and games.</p>
        <Link to="/redox" className="btn-primary mt-4 inline-flex"><FileText size={16} /> Back to Redox topics</Link>
      </div>
    </div>
  )
}
