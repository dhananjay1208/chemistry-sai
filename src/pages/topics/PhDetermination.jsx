import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals, gameCards } from '../../data/phDetermination.js'
import { Droplet, Trophy, RefreshCw, CheckCircle2, XCircle } from 'lucide-react'

/* ---------- CONCEPT TAB ---------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">What is pH?</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          <strong>pH</strong> is just a clever way to write the [H<sup>+</sup>] concentration without all those zeros.
          Sorensen suggested: <em>why not take the negative logarithm?</em>
        </p>
        <div className="mt-3 rounded-xl bg-brand-50 p-4 text-center text-2xl font-mono text-brand-700">
          pH = – log<sub>10</sub>[H<sup>+</sup>]
        </div>
        <p className="mt-3 text-slate-700">
          Similarly pOH = –log[OH<sup>–</sup>]. At 25 °C they are locked together by K<sub>w</sub>:
        </p>
        <div className="mt-2 text-center text-xl font-mono text-brand-700">
          pH + pOH = 14
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🎨 The pH scale at 25 °C</h3>
        <div className="mt-4 relative h-12 rounded-xl overflow-hidden border border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-300 via-emerald-400 to-violet-700"/>
          <div className="absolute inset-0 flex">
            {Array.from({length: 15}).map((_, i) => (
              <div key={i} className="flex-1 border-r border-white/30 text-center text-[10px] font-bold text-white flex items-end justify-center pb-1">{i}</div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 mt-2 text-sm font-bold">
          <div className="text-rose-600">Acidic (pH &lt; 7)</div>
          <div className="text-slate-700 text-center">Neutral (7)</div>
          <div className="text-violet-700 text-right">Basic (pH &gt; 7)</div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">📐 How to compute pH — by solution type</h3>
        <div className="mt-3 space-y-3 text-sm">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">
            <div className="font-bold text-rose-700">Strong acid (HCl, HNO<sub>3</sub>)</div>
            <div className="font-mono text-slate-800 mt-1">[H<sup>+</sup>] = C<sub>acid</sub> × n</div>
            <div className="text-slate-700 mt-1">(n = basicity: 1 for HCl, 2 for H<sub>2</sub>SO<sub>4</sub>) → pH = –log[H<sup>+</sup>]</div>
          </div>
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-3">
            <div className="font-bold text-violet-700">Strong base (NaOH, KOH)</div>
            <div className="font-mono text-slate-800 mt-1">[OH<sup>–</sup>] = C<sub>base</sub> × n</div>
            <div className="text-slate-700 mt-1">pOH = –log[OH<sup>–</sup>], then pH = 14 – pOH</div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
            <div className="font-bold text-amber-700">Weak acid (CH<sub>3</sub>COOH)</div>
            <div className="font-mono text-slate-800 mt-1">[H<sup>+</sup>] = √(K<sub>a</sub>·C) → pH = ½(pK<sub>a</sub> – log C)</div>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3">
            <div className="font-bold text-sky-700">Weak base (NH<sub>3</sub>)</div>
            <div className="font-mono text-slate-800 mt-1">[OH<sup>–</sup>] = √(K<sub>b</sub>·C) → pOH = ½(pK<sub>b</sub> – log C), pH = 14 – pOH</div>
          </div>
        </div>
      </div>

      <Callout type="trick" title="NEET quick formula">
        For a weak acid: <strong>pH = ½(pK<sub>a</sub> – log C)</strong>.
        For a weak base: <strong>pOH = ½(pK<sub>b</sub> – log C)</strong>.
        Memorize both — they come up in PYQs almost every year.
      </Callout>

      <Callout type="warn" title="The 10⁻⁸ M HCl trap">
        For very dilute strong acids (10<sup>–7</sup> to 10<sup>–9</sup> M), water's own H<sup>+</sup> can't be ignored.
        10<sup>–8</sup> M HCl does <strong>NOT</strong> have pH = 8! Correct answer ≈ <strong>6.98</strong>.
        Charge balance: [H<sup>+</sup>]·[Cl<sup>–</sup>] + K<sub>w</sub> = [H<sup>+</sup>]² (solve quadratic).
      </Callout>
    </div>
  )
}

/* ---------- VISUALIZE TAB ---------- */
function Visualize() {
  const [conc, setConc] = useState(0.01)
  const [type, setType] = useState('strong-acid')

  const pH = useMemo(() => {
    if (conc <= 0) return null
    if (type === 'strong-acid') return -Math.log10(conc)
    if (type === 'strong-base') return 14 - (-Math.log10(conc))
    if (type === 'weak-acid') {
      const Ka = 1.8e-5
      return 0.5 * (-Math.log10(Ka) - Math.log10(conc))
    }
    if (type === 'weak-base') {
      const Kb = 1.8e-5
      const pOH = 0.5 * (-Math.log10(Kb) - Math.log10(conc))
      return 14 - pOH
    }
    return null
  }, [conc, type])

  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <Droplet className="text-brand-600" size={22}/> Live pH Calculator
        </h2>
        <p className="text-slate-600 mt-1 text-sm">Slide concentration, pick solution type, watch pH change.</p>

        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase">Solution type</label>
            <select value={type} onChange={e => setType(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none font-semibold">
              <option value="strong-acid">Strong monoprotic acid (e.g. HCl)</option>
              <option value="strong-base">Strong monoprotic base (e.g. NaOH)</option>
              <option value="weak-acid">Weak acid (K<sub>a</sub> = 1.8e-5)</option>
              <option value="weak-base">Weak base (K<sub>b</sub> = 1.8e-5)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase">Concentration (M) — log scale</label>
            <input
              type="range"
              min={-8}
              max={0}
              step={0.1}
              value={Math.log10(conc)}
              onChange={e => setConc(Math.pow(10, parseFloat(e.target.value)))}
              className="w-full mt-1 accent-brand-600"
            />
            <div className="text-sm font-mono text-brand-700 mt-1">C = {conc.toExponential(2)} M</div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 p-6 border border-brand-100 text-center">
          <div className="text-sm font-bold text-brand-700 uppercase tracking-wider">pH</div>
          <div className="text-6xl font-extrabold text-slate-900 mt-1">{pH !== null ? pH.toFixed(2) : '—'}</div>
          <div className="text-sm text-slate-600 mt-2">
            {pH < 7 && 'Acidic'}
            {pH === 7 && 'Neutral'}
            {pH > 7 && 'Basic'}
          </div>
        </div>
        <div className="text-xs italic text-slate-500 mt-3">
          Note: this simplified model ignores water's contribution at very low concentrations (&lt; 10<sup>–6</sup> M for strong acid/base).
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">Common solutions & their approximate pH</h3>
        <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
          {[
            ['Gastric juice', '1.5 – 3.0', 'bg-rose-50 border-rose-200'],
            ['Lemon juice',   '2.0 – 2.5', 'bg-rose-50 border-rose-200'],
            ['Vinegar',       '2.5 – 3.5', 'bg-rose-50 border-rose-200'],
            ['Tomato juice',  '4.0 – 4.5', 'bg-amber-50 border-amber-200'],
            ['Black coffee',  '5.0',       'bg-amber-50 border-amber-200'],
            ['Milk',          '6.5',       'bg-yellow-50 border-yellow-200'],
            ['Pure water',    '7.0',       'bg-slate-50 border-slate-200'],
            ['Blood plasma',  '7.35 – 7.45', 'bg-emerald-50 border-emerald-200'],
            ['Sea water',     '8.0 – 8.4', 'bg-emerald-50 border-emerald-200'],
            ['Baking soda',   '9.0',       'bg-sky-50 border-sky-200'],
            ['Ammonia (household)', '11',  'bg-violet-50 border-violet-200'],
            ['0.1 M NaOH',    '13.0',      'bg-violet-50 border-violet-200'],
          ].map(([name, ph, cls]) => (
            <div key={name} className={`rounded-xl border p-3 flex items-center justify-between ${cls}`}>
              <span className="font-semibold text-slate-800">{name}</span>
              <span className="font-mono font-bold">pH ≈ {ph}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- GAME TAB — pH Guess ---------- */
function Game() {
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [best, setBest] = useState(() => Number(localStorage.getItem('ph-best') || 0))

  const shuffled = useMemo(() => [...gameCards].sort(() => Math.random() - 0.5), [])
  const total = 10
  const card = shuffled[round % shuffled.length]

  const submit = () => {
    const val = Number(input)
    if (Number.isNaN(val)) return
    // within ±1 pH unit counts as correct
    if (Math.abs(val - card.answer) <= 1) {
      setFeedback('correct')
      setScore(s => s + 1)
    } else {
      setFeedback('wrong')
    }
  }

  const next = () => {
    setFeedback(null)
    setInput('')
    if (round + 1 >= total) {
      if (score > best) { setBest(score); localStorage.setItem('ph-best', score) }
    }
    setRound(r => r + 1)
  }

  const reset = () => { setRound(0); setScore(0); setInput(''); setFeedback(null) }

  if (round >= total) {
    const stars = score >= 9 ? '⭐⭐⭐' : score >= 7 ? '⭐⭐' : score >= 5 ? '⭐' : ''
    return (
      <div className="card p-8 text-center">
        <Trophy className="mx-auto text-amber-500 mb-2" size={48}/>
        <div className="text-2xl font-extrabold text-slate-900">Game over!</div>
        <div className="text-6xl font-extrabold text-brand-600 mt-3">{score} / {total}</div>
        <div className="text-3xl mt-1">{stars}</div>
        <div className="text-slate-600 mt-2">Best score: <strong>{best}</strong></div>
        <button onClick={reset} className="btn-primary mt-5"><RefreshCw size={16}/> Play again</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="card p-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-lg font-extrabold text-slate-900">🎯 pH Guess Game</div>
          <div className="text-sm text-slate-600">Guess pH to the nearest integer. Within ±1 counts as correct.</div>
        </div>
        <div className="flex gap-3 text-sm">
          <div className="chip bg-brand-100 text-brand-700">Round {round+1}/{total}</div>
          <div className="chip bg-emerald-100 text-emerald-700">Score {score}</div>
          <div className="chip bg-pink-100 text-pink-700">Best {best}</div>
        </div>
      </div>

      <motion.div
        key={round}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-10 text-center"
      >
        <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Estimate the pH of</div>
        <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{card.formula}</div>
        <div className="text-sm text-slate-500 italic mt-2">Hint: {card.hint}</div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <input
            type="number"
            min="0"
            max="14"
            step="1"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !feedback) submit(); else if (e.key === 'Enter' && feedback) next() }}
            disabled={!!feedback}
            placeholder="pH (0–14)"
            className="w-40 text-center text-2xl font-bold px-3 py-2 rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none"
          />
          {!feedback ? (
            <button onClick={submit} className="btn-primary">Check</button>
          ) : (
            <button onClick={next} className="btn-success">Next →</button>
          )}
        </div>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-5 p-4 rounded-xl font-semibold ${
                feedback === 'correct' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                       : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {feedback === 'correct' ? (
                <div className="flex items-center justify-center gap-2"><CheckCircle2/> Close enough! Actual pH ≈ {card.answer}</div>
              ) : (
                <div className="flex items-center justify-center gap-2"><XCircle/> Not quite. Actual pH ≈ {card.answer}</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="text-center">
        <button onClick={reset} className="btn-ghost text-xs"><RefreshCw size={12}/> Reset game</button>
      </div>
    </div>
  )
}

/* ---------- PAGE ---------- */
export default function PhDetermination() {
  return (
    <TopicShell
      topicId="ph"
      title="pH Determination"
      subtitle="The log scale that turns 10⁻⁷ into a clean single number. Master pH + pOH = 14 and all the formulas."
      emoji="💧"
      backTo="/equilibrium"
      backLabel="Back to Equilibrium"
      tabs={{
        concept:   Concept,
        visualize: Visualize,
        game:      Game,
        mcq:       () => <MCQList questions={mcqs} title="Concept-check MCQs" />,
        pyq:       () => <MCQList questions={pyqs} title="NEET Previous Year Questions" />,
        numerical: () => <NumericalList problems={numericals} title="Worked Numericals" />,
      }}
    />
  )
}
