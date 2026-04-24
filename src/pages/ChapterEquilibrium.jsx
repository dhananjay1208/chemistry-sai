import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { topicCompletionPct } from '../utils/progress.js'
import ProgressBar from '../components/ProgressBar.jsx'

const topics = [
  {
    id: 'ionic-equilibrium',
    num: '01',
    emoji: '⚖️',
    title: 'Ionic Equilibrium',
    subtitle: 'Strong vs weak electrolytes, Ostwald\'s dilution law, Kw, and acid–base concepts.',
    color: 'from-violet-500 to-fuchsia-500',
    path: '/equilibrium/ionic',
    tags: ['Foundation', 'Must know'],
  },
  {
    id: 'ph',
    num: '02',
    emoji: '💧',
    title: 'pH Determination',
    subtitle: 'The log scale that turns 10⁻⁷ into a clean single number. Master pH + pOH = 14.',
    color: 'from-sky-500 to-cyan-500',
    path: '/equilibrium/ph',
    tags: ['High weight', 'Numericals'],
  },
  {
    id: 'hydrolysis',
    num: '03',
    emoji: '🧪',
    title: 'Hydrolysis',
    subtitle: 'Why NaCl is neutral, NH₄Cl is acidic, and CH₃COONa is basic — with exact pH formulas.',
    color: 'from-emerald-500 to-teal-500',
    path: '/equilibrium/hydrolysis',
    tags: ['Salts', 'pH formulas'],
  },
  {
    id: 'common-ion',
    num: '04',
    emoji: '🧲',
    title: 'Common Ion Effect',
    subtitle: 'Le Chatelier in action — the reason qualitative-analysis group separations actually work.',
    color: 'from-amber-500 to-orange-500',
    path: '/equilibrium/common-ion',
    tags: ['Qualitative analysis'],
  },
  {
    id: 'buffers',
    num: '05',
    emoji: '🛡️',
    title: 'Buffer Solutions',
    subtitle: 'How blood stays at pH 7.4 and the Henderson–Hasselbalch equation that explains it.',
    color: 'from-pink-500 to-rose-500',
    path: '/equilibrium/buffers',
    tags: ['Henderson', 'Biology crossover'],
  },
  {
    id: 'solubility',
    num: '06',
    emoji: '🧂',
    title: 'Solubility & Ksp',
    subtitle: 'When does a precipitate form? Ksp, the Q-test, and common ion suppression.',
    color: 'from-indigo-500 to-blue-500',
    path: '/equilibrium/solubility',
    tags: ['Precipitation', 'Numericals'],
  },
]

export default function ChapterEquilibrium() {
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
        <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Chapter 2</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Equilibrium</h1>
        <p className="text-slate-600 mt-3 max-w-2xl">
          Why does milk go sour, fizzy drinks lose their fizz, and your blood stay at <strong>pH 7.4</strong> no matter
          what you eat? The answer is <em>equilibrium</em> — the quiet push-and-pull between ions in solution. In this
          chapter we master <em>ionic equilibrium</em>, learn to compute <em>pH</em> on sight, understand why some
          salts are acidic and others basic (<em>hydrolysis</em>), and predict precipitation using <em>K<sub>sp</sub></em>.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="chip bg-violet-100 text-violet-700">NEET weight: Very High</span>
          <span className="chip bg-emerald-100 text-emerald-700">6 topics</span>
          <span className="chip bg-pink-100 text-pink-700">≈ 5–7 marks expected</span>
        </div>
      </div>

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
