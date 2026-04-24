import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Atom, ArrowRight, Trophy, BookOpen, Zap } from 'lucide-react'

const features = [
  { icon: BookOpen,  title: 'Story-based Concepts',  text: 'Every idea explained with relatable analogies — no more rote learning.' },
  { icon: Atom,      title: 'Interactive Visuals',   text: 'Watch electrons transfer, see oxidation numbers change in real time.' },
  { icon: Zap,       title: 'Games That Teach',      text: 'Play short games to lock concepts into memory — the fun way.' },
  { icon: Trophy,    title: 'NEET PYQs + MCQs',      text: 'Actual NEET previous-year questions with step-by-step explanations.' },
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-brand-600 via-violet-600 to-pink-500 text-white shadow-soft">
        <div className="absolute -right-10 -top-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"/>
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"/>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold mb-4">
            <Sparkles size={14}/> Made for Sai · NEET 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Chemistry, but <span className="bg-white text-brand-700 px-2 rounded-lg">actually fun</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/90 text-lg">
            Hey Sai! 👋 Let's make Chemistry your favourite subject. We'll learn with games, visuals, and real NEET questions — one topic at a time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/redox" className="btn bg-white text-brand-700 hover:bg-slate-100">
              Start with Redox Reactions <ArrowRight size={16}/>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Why this works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}} className="card p-5">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-3"><Icon size={20}/></div>
                <div className="font-bold text-slate-900">{f.title}</div>
                <div className="text-sm text-slate-600 mt-1">{f.text}</div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Chapters</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/redox" className="card p-6 hover:scale-[1.01] transition group">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Chapter 1</div>
                <div className="text-xl font-extrabold text-slate-900 mt-1">Redox Reactions</div>
                <div className="text-sm text-slate-600 mt-2">Oxidation Number · Stock Notation · Balancing · Equivalent Mass</div>
              </div>
              <div className="text-4xl group-hover:rotate-12 transition">⚛️</div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="chip bg-emerald-100 text-emerald-700">4 topics</span>
              <span className="chip bg-amber-100 text-amber-700">High NEET weight</span>
            </div>
          </Link>
          <Link to="/equilibrium" className="card p-6 hover:scale-[1.01] transition group">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Chapter 2</div>
                <div className="text-xl font-extrabold text-slate-900 mt-1">Equilibrium</div>
                <div className="text-sm text-slate-600 mt-2">Ionic Equilibrium · pH · Hydrolysis · Common Ion · Buffers · Solubility</div>
              </div>
              <div className="text-4xl group-hover:rotate-12 transition">⚖️</div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="chip bg-emerald-100 text-emerald-700">6 topics</span>
              <span className="chip bg-amber-100 text-amber-700">Very High NEET weight</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
