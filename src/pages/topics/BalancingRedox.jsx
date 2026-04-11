import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals } from '../../data/balancingRedox.js'
import { CheckCircle2, XCircle, RefreshCw, ArrowRight } from 'lucide-react'

function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">Balancing Redox Reactions</h2>
        <p className="mt-2 text-slate-700">
          A redox reaction has electrons flowing from one species (which loses them — oxidation) to another
          (which gains them — reduction). To balance, we make sure:
        </p>
        <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
          <li><strong>Atoms are balanced</strong> on both sides.</li>
          <li><strong>Charge is balanced</strong>.</li>
          <li><strong>Electrons lost = electrons gained</strong>.</li>
        </ul>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">Method 1 — Oxidation Number method</h3>
        <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-slate-700">
          <li>Assign O.N. to all atoms. Find the one that increases (oxidized) and the one that decreases (reduced).</li>
          <li>Calculate <strong>Δ O.N.</strong> per atom for each.</li>
          <li>Take LCM of the two Δ values. Multiply each species so total e⁻ lost = total e⁻ gained.</li>
          <li>Balance the rest of the atoms (non-redox), then balance H and O using H₂O and H⁺/OH⁻.</li>
          <li>Finally, verify charge balance.</li>
        </ol>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">Method 2 — Half-reaction (Ion-Electron) method ⭐</h3>
        <p className="text-sm text-slate-600 mt-1">This is the method <strong>NEET loves</strong>. Use for ionic equations.</p>
        <ol className="mt-3 space-y-1 list-decimal list-inside text-sm text-slate-700">
          <li>Split into <strong>oxidation half</strong> and <strong>reduction half</strong>.</li>
          <li>Balance all atoms <strong>except O and H</strong>.</li>
          <li>Balance <strong>O</strong> by adding H₂O.</li>
          <li>Balance <strong>H</strong> by adding H⁺ (acidic medium).</li>
          <li>Balance <strong>charge</strong> by adding e⁻ to the more-positive side.</li>
          <li>Multiply each half so e⁻ are equal; add the halves and cancel common species.</li>
          <li>For <strong>basic medium</strong>: add OH⁻ equal to H⁺ on both sides, combine to H₂O, cancel.</li>
        </ol>
      </div>

      <div className="card p-6 bg-gradient-to-br from-brand-50 to-pink-50 border-brand-100">
        <h3 className="font-extrabold text-slate-900">n-factor cheat sheet (oxidizing agents)</h3>
        <div className="grid sm:grid-cols-2 gap-3 mt-3 text-sm">
          <div className="p-3 bg-white rounded-xl">
            <strong>KMnO₄ (acidic)</strong> → Mn²⁺ · <span className="text-brand-700 font-bold">n = 5</span>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <strong>KMnO₄ (neutral)</strong> → MnO₂ · <span className="text-brand-700 font-bold">n = 3</span>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <strong>KMnO₄ (alkaline)</strong> → MnO₄²⁻ · <span className="text-brand-700 font-bold">n = 1</span>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <strong>K₂Cr₂O₇ (acidic)</strong> → 2 Cr³⁺ · <span className="text-brand-700 font-bold">n = 6</span>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <strong>H₂O₂ (as oxidizer)</strong> → H₂O · <span className="text-brand-700 font-bold">n = 2</span>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <strong>H₂O₂ (as reducer)</strong> → O₂ · <span className="text-brand-700 font-bold">n = 2</span>
          </div>
        </div>
      </div>

      <Callout type="trick" title="Fast trick: electron accounting">
        Write the O.N. change of each atom, multiply by the number of atoms. Balance by cross-multiplying the two totals.
        For example Cr₂O₇²⁻ → 2 Cr³⁺: Δ = 3 per Cr × 2 Cr = 6 electrons. KMnO₄ (acidic): Δ = 5 per Mn × 1 = 5 electrons.
        Ratio Cr₂O₇²⁻ : KMnO₄ electron capacity = 6 : 5.
      </Callout>
    </div>
  )
}

function Visualize() {
  const [step, setStep] = useState(0)
  const steps = [
    { t: 'Target', text: 'Balance:  MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺  (acidic medium)' },
    { t: 'Step 1 — Split into half-reactions', text: 'Oxidation: Fe²⁺ → Fe³⁺  |  Reduction: MnO₄⁻ → Mn²⁺' },
    { t: 'Step 2 — Balance atoms (not O/H yet)', text: 'Fe²⁺ → Fe³⁺  ✓  (Mn already balanced)' },
    { t: 'Step 3 — Balance O with H₂O', text: 'MnO₄⁻ → Mn²⁺ + 4 H₂O' },
    { t: 'Step 4 — Balance H with H⁺', text: 'MnO₄⁻ + 8 H⁺ → Mn²⁺ + 4 H₂O' },
    { t: 'Step 5 — Balance charge with e⁻', text: 'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O   |   Fe²⁺ → Fe³⁺ + e⁻' },
    { t: 'Step 6 — Equalize electrons', text: 'Multiply Fe half by 5:  5 Fe²⁺ → 5 Fe³⁺ + 5 e⁻' },
    { t: 'Step 7 — Add halves', text: 'MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O ✅' },
  ]

  const curr = steps[step]
  return (
    <div className="card p-6">
      <h2 className="text-xl font-extrabold text-slate-900">Interactive Balancer — Step by Step</h2>
      <p className="text-sm text-slate-600 mt-1">Follow along as we balance MnO₄⁻ / Fe²⁺ one step at a time.</p>

      <div className="mt-5 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 p-6 border border-brand-100 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xs font-bold text-brand-700 uppercase tracking-wider">{curr.t}</div>
            <div className="mt-3 text-xl sm:text-2xl font-mono text-slate-900 break-words">{curr.text}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button className="btn-ghost" disabled={step===0} onClick={() => setStep(s => s-1)}>← Prev</button>
        <div className="text-sm text-slate-500">Step {step+1} / {steps.length}</div>
        <button className="btn-primary" disabled={step===steps.length-1} onClick={() => setStep(s => s+1)}>Next →</button>
      </div>
    </div>
  )
}

function Game() {
  // Balance-the-coefficients puzzle
  const puzzles = [
    {
      display: 'a MnO₄⁻ + b Fe²⁺ + c H⁺ → d Mn²⁺ + e Fe³⁺ + f H₂O',
      correct: { a:1, b:5, c:8, d:1, e:5, f:4 },
      hint: 'Mn: +7 → +2 (5e⁻). Fe: +2 → +3 (1e⁻). LCM = 5.'
    },
    {
      display: 'a Cr₂O₇²⁻ + b Fe²⁺ + c H⁺ → d Cr³⁺ + e Fe³⁺ + f H₂O',
      correct: { a:1, b:6, c:14, d:2, e:6, f:7 },
      hint: 'Each Cr: +6→+3 (3e⁻), 2 Cr ⇒ 6e⁻. Fe: 1e⁻. So 6 Fe per 1 Cr₂O₇²⁻.'
    },
    {
      display: 'a MnO₄⁻ + b C₂O₄²⁻ + c H⁺ → d Mn²⁺ + e CO₂ + f H₂O',
      correct: { a:2, b:5, c:16, d:2, e:10, f:8 },
      hint: 'Mn gets 5e⁻, each oxalate gives 2e⁻. LCM 10 ⇒ 2 Mn, 5 oxalate.'
    },
  ]

  const [pi, setPi] = useState(0)
  const [vals, setVals] = useState({ a:'', b:'', c:'', d:'', e:'', f:'' })
  const [result, setResult] = useState(null) // 'ok' | 'no' | null
  const [score, setScore] = useState(0)

  const puzzle = puzzles[pi]

  const check = () => {
    const ok = Object.keys(puzzle.correct).every(k => Number(vals[k]) === puzzle.correct[k])
    setResult(ok ? 'ok' : 'no')
    if (ok) setScore(s => s + 1)
  }
  const next = () => {
    setResult(null); setVals({ a:'', b:'', c:'', d:'', e:'', f:'' })
    setPi(i => i + 1)
  }
  const reset = () => { setPi(0); setScore(0); setResult(null); setVals({ a:'', b:'', c:'', d:'', e:'', f:'' }) }

  if (pi >= puzzles.length) {
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl">🎯</div>
        <div className="text-2xl font-extrabold mt-2">Puzzles complete!</div>
        <div className="text-lg text-slate-600 mt-1">Score: {score} / {puzzles.length}</div>
        <button onClick={reset} className="btn-primary mt-4"><RefreshCw size={16}/> Play again</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="card p-5 flex items-center justify-between">
        <div className="font-bold text-slate-900">⚖️ Balance the Equation</div>
        <div className="flex gap-3 text-sm">
          <span className="chip bg-brand-100 text-brand-700">{pi+1}/{puzzles.length}</span>
          <span className="chip bg-emerald-100 text-emerald-700">Score {score}</span>
        </div>
      </div>

      <div className="card p-6">
        <div className="text-sm text-slate-500">Fill in the coefficients (integers).</div>
        <div className="mt-3 text-lg sm:text-2xl font-mono text-slate-900 leading-relaxed">{puzzle.display}</div>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {['a','b','c','d','e','f'].map(k => (
            <div key={k}>
              <label className="text-xs text-slate-500 font-bold">{k} =</label>
              <input
                type="number" value={vals[k]}
                onChange={e => setVals(v => ({ ...v, [k]: e.target.value }))}
                className="w-full px-2 py-2 text-center text-xl font-bold rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          {result === null ? (
            <button onClick={check} className="btn-primary">Check</button>
          ) : (
            <button onClick={next} className="btn-success">Next →</button>
          )}
          <button onClick={() => alert(puzzle.hint)} className="btn-ghost text-sm">💡 Hint</button>
        </div>

        {result === 'ok' && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-2">
            <CheckCircle2/> Perfect balance! Electrons lost = electrons gained.
          </div>
        )}
        {result === 'no' && (
          <div className="mt-4 p-3 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 font-semibold flex items-center gap-2">
            <XCircle/> Not quite. Correct: {Object.entries(puzzle.correct).map(([k,v]) => `${k}=${v}`).join(', ')}
          </div>
        )}
      </div>
    </div>
  )
}

export default function BalancingRedox() {
  return (
    <TopicShell
      topicId="balancing"
      title="Balancing Redox Reactions"
      subtitle="Half-reaction method and oxidation-number method, for acidic & basic media."
      emoji="⚖️"
      tabs={{
        concept:   Concept,
        visualize: Visualize,
        game:      Game,
        mcq:       () => <MCQList questions={mcqs} title="Concept-check MCQs" />,
        pyq:       () => <MCQList questions={pyqs} title="NEET Previous Year Questions" />,
        numerical: () => <NumericalList problems={numericals} title="Worked Balancing Problems" />,
      }}
    />
  )
}
