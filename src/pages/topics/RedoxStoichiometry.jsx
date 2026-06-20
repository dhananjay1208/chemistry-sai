import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals, gameCards } from '../../data/redoxStoichiometry.js'
import { CheckCircle2, XCircle, RefreshCw, Lightbulb } from 'lucide-react'

const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b] } return a || 1 }

/* ----------------------------- CONCEPT ----------------------------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">The one idea that solves everything 🔑</h2>
        <p className="mt-2 text-slate-700">
          In a redox reaction, every electron lost by one species is gained by another. So at the moment the
          reaction is complete:
        </p>
        <div className="mt-3 p-4 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 border border-brand-100 text-center">
          <div className="text-lg sm:text-xl font-extrabold text-slate-900">equivalents of oxidant = equivalents of reductant</div>
          <div className="text-sm text-slate-600 mt-1">and <strong>equivalents = moles × n-factor</strong></div>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          The <strong>n-factor</strong> is just the number of electrons one formula unit gives or takes
          (= total change in oxidation number). Master this and you never have to memorise mole ratios again.
        </p>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">Your 3 master tools</h3>
        <div className="grid sm:grid-cols-3 gap-3 mt-3 text-sm">
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <div className="text-2xl">①</div>
            <div className="font-bold text-slate-900 mt-1">Equivalents bridge</div>
            <div className="text-slate-600 mt-1">equiv = moles × n-factor. In a titration, equiv = N × V (litres).</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <div className="text-2xl">②</div>
            <div className="font-bold text-slate-900 mt-1">Mole ratio from n-factors</div>
            <div className="text-slate-600 mt-1">moles(oxidant) : moles(reductant) = n(reductant) : n(oxidant).</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <div className="text-2xl">③</div>
            <div className="font-bold text-slate-900 mt-1">Electron counting</div>
            <div className="text-slate-600 mt-1">electrons = moles × (ΔO.N. per atom) × (atoms changing).</div>
          </div>
        </div>
      </div>

      <Callout type="trick" title="Why the mole ratio flips">
        If KMnO₄ (n = 5) reacts with Fe²⁺ (n = 1): one KMnO₄ can take 5 electrons, one Fe²⁺ can give only 1.
        So you need <strong>5 Fe²⁺ for every 1 KMnO₄</strong> — the big n-factor needs more partners. That is why
        the ratio is <em>n(reductant) : n(oxidant)</em>, the other way round from the n-factors.
      </Callout>

      <div className="card p-6 bg-gradient-to-br from-amber-50 to-white border-amber-100">
        <h3 className="font-extrabold text-slate-900">🛠️ How to "form the reaction" and solve it (4 steps)</h3>
        <p className="text-sm text-slate-600 mt-1">
          Most of these questions don't even need a fully balanced equation. Follow this every time:
        </p>
        <ol className="mt-3 space-y-2 list-decimal list-inside text-sm text-slate-700">
          <li><strong>Spot who changes.</strong> Assign oxidation numbers and find the atom that goes up (oxidised) and the one that goes down (reduced).</li>
          <li><strong>Write each electron change (n-factor).</strong> ΔO.N. per atom × number of such atoms in the formula unit.</li>
          <li><strong>Use the given data with the bridge.</strong> Convert grams/volumes/moles into equivalents and set equiv(oxidant) = equiv(reductant).</li>
          <li><strong>Only balance fully if the question asks for coefficients.</strong> Otherwise the bridge already gives the answer.</li>
        </ol>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">📋 % purity from a titration — the template</h3>
        <div className="mt-3 text-sm text-slate-700 space-y-1">
          <div>1. equivalents of titrant = N × V (in litres)</div>
          <div>2. equivalents of analyte = equivalents of titrant <span className="text-slate-400">(the bridge)</span></div>
          <div>3. moles of analyte = equivalents ÷ n-factor</div>
          <div>4. mass of analyte = moles × molar mass</div>
          <div>5. <strong>% = (mass of analyte ÷ mass of sample) × 100</strong></div>
        </div>
      </div>

      <Callout type="warn" title="The #1 mistake">
        Don't equate <em>moles</em> of oxidant and reductant — equate <em>equivalents</em>. Moles are only equal
        when both n-factors are the same. Always multiply moles by the n-factor first.
      </Callout>
    </div>
  )
}

/* ----------------------------- VISUALIZE ----------------------------- */
const OXIDANTS = [
  { id: 'kmno4a', label: 'KMnO₄ (acidic) → Mn²⁺', n: 5 },
  { id: 'kmno4n', label: 'KMnO₄ (neutral) → MnO₂', n: 3 },
  { id: 'kmno4b', label: 'KMnO₄ (alkaline) → MnO₄²⁻', n: 1 },
  { id: 'cr2o7', label: 'K₂Cr₂O₇ (acidic) → 2 Cr³⁺', n: 6 },
  { id: 'hno3no', label: 'HNO₃ → NO', n: 3 },
  { id: 'hno3no2', label: 'HNO₃ → NO₂', n: 1 },
  { id: 'hno3n2o', label: 'HNO₃ → N₂O (per N)', n: 4 },
]
const REDUCTANTS = [
  { id: 'fe', label: 'Fe²⁺ → Fe³⁺', n: 1 },
  { id: 'oxalate', label: 'C₂O₄²⁻ → 2 CO₂', n: 2 },
  { id: 'fec2o4', label: 'FeC₂O₄ → Fe³⁺ + 2 CO₂', n: 3 },
  { id: 'fes2', label: 'FeS₂ → Fe³⁺ + 2 SO₂', n: 11 },
  { id: 'as2s3', label: 'As₂S₃ → 2 AsO₄³⁻ + 3 SO₄²⁻', n: 28 },
  { id: 'h2o2', label: 'H₂O₂ → O₂', n: 2 },
]

function Visualize() {
  const [oxId, setOxId] = useState('kmno4a')
  const [redId, setRedId] = useState('fe')
  const ox = OXIDANTS.find(o => o.id === oxId)
  const red = REDUCTANTS.find(r => r.id === redId)
  const g = gcd(red.n, ox.n)
  const molesOx = red.n / g
  const molesRed = ox.n / g
  const electrons = ox.n * molesOx

  // electron-transfer counter (stepper) for Al + Fe3O4
  const [step, setStep] = useState(0)
  const steps = [
    { t: 'Skeleton', text: 'Al + Fe₃O₄ → Al₂O₃ + Fe' },
    { t: 'Assign O.N.', text: 'Al: 0 → +3  (up = oxidised)   |   Fe in Fe₃O₄: +8/3 → 0  (down = reduced)' },
    { t: 'Electron change per atom', text: 'Each Al loses 3 e⁻. Each Fe gains 8/3 e⁻.' },
    { t: 'Balance the equation', text: '8 Al + 3 Fe₃O₄ → 4 Al₂O₃ + 9 Fe' },
    { t: 'Count electrons', text: 'Lost: 8 × 3 = 24 e⁻.   Gained: 9 × 8/3 = 24 e⁻.' },
    { t: 'Answer', text: 'Total electrons transferred = 24 ✅' },
  ]
  const curr = steps[step]

  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">⚖️ Equivalence Balance Explorer</h2>
        <p className="text-sm text-slate-600 mt-1">Pick an oxidant and a reductant — see the mole ratio appear from the n-factors.</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Oxidant (gains e⁻)</label>
            <select value={oxId} onChange={e => setOxId(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none text-sm bg-white">
              {OXIDANTS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            <div className="mt-2 text-sm">n-factor = <span className="font-bold text-brand-700">{ox.n}</span></div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Reductant (loses e⁻)</label>
            <select value={redId} onChange={e => setRedId(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none text-sm bg-white">
              {REDUCTANTS.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
            </select>
            <div className="mt-2 text-sm">n-factor = <span className="font-bold text-brand-700">{red.n}</span></div>
          </div>
        </div>

        <div className="mt-5 p-5 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 border border-brand-100 text-center">
          <div className="text-xs font-bold text-brand-700 uppercase tracking-wider">Balanced mole ratio</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            {molesOx} <span className="text-slate-400">oxidant</span> : {molesRed} <span className="text-slate-400">reductant</span>
          </div>
          <div className="text-sm text-slate-600 mt-3">
            1 mole of reductant needs <strong>{(red.n / ox.n).toFixed(2)}</strong> mole of oxidant ·
            electrons exchanged = <strong>{electrons}</strong>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">
          ratio = n(reductant) : n(oxidant) = {red.n} : {ox.n}, reduced to lowest terms.
        </p>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">🔢 Electron-Transfer Counter</h2>
        <p className="text-sm text-slate-600 mt-1">Count electrons the safe way — step through Al + Fe₃O₄ (thermite).</p>

        <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-6 min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
              <div className="text-xs font-bold text-brand-700 uppercase tracking-wider">{curr.t}</div>
              <div className="mt-2 text-lg sm:text-xl font-mono text-slate-900 break-words">{curr.text}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button className="btn-ghost" disabled={step === 0} onClick={() => setStep(s => s - 1)}>← Prev</button>
          <div className="text-sm text-slate-500">Step {step + 1} / {steps.length}</div>
          <button className="btn-primary" disabled={step === steps.length - 1} onClick={() => setStep(s => s + 1)}>Next →</button>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------- GAME ----------------------------- */
function Game() {
  const [i, setI] = useState(0)
  const [val, setVal] = useState('')
  const [res, setRes] = useState(null) // 'ok' | 'no' | null
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [best, setBest] = useState(() => Number(localStorage.getItem('redox-stoich-best') || 0))

  const card = gameCards[i]

  const check = () => {
    if (val === '') return
    const ok = Math.abs(parseFloat(val) - card.answer) < 0.001
    setRes(ok ? 'ok' : 'no')
    if (ok) setScore(s => s + 1)
  }
  const next = () => { setRes(null); setVal(''); setShowHint(false); setI(x => x + 1) }
  const reset = () => { setI(0); setScore(0); setRes(null); setVal(''); setShowHint(false) }

  if (i >= gameCards.length) {
    if (score > best) { localStorage.setItem('redox-stoich-best', String(score)); }
    const finalBest = Math.max(score, best)
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl">🏆</div>
        <div className="text-2xl font-extrabold mt-2">Round complete!</div>
        <div className="text-lg text-slate-600 mt-1">Score: {score} / {gameCards.length}</div>
        <div className="text-sm text-slate-500 mt-1">Best: {finalBest}</div>
        <button onClick={reset} className="btn-primary mt-4"><RefreshCw size={16} /> Play again</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="card p-5 flex items-center justify-between">
        <div className="font-bold text-slate-900">⚡ n-factor / electrons Rapid-Fire</div>
        <div className="flex gap-3 text-sm">
          <span className="chip bg-brand-100 text-brand-700">{i + 1}/{gameCards.length}</span>
          <span className="chip bg-emerald-100 text-emerald-700">Score {score}</span>
          <span className="chip bg-amber-100 text-amber-700">Best {best}</span>
        </div>
      </div>

      <div className="card p-6">
        <div className="text-sm text-slate-500">Type the number (electrons, n-factor or moles).</div>
        <div className="mt-3 text-lg sm:text-xl font-semibold text-slate-900" dangerouslySetInnerHTML={{ __html: card.q }} />
        <div className="mt-4 flex items-center gap-3">
          <input
            type="number" value={val} onChange={e => setVal(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') (res === null ? check() : next()) }}
            disabled={res !== null}
            className="w-32 px-3 py-2 text-center text-xl font-bold rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none"
            placeholder="?"
          />
          {res === null ? (
            <button onClick={check} className="btn-primary">Check</button>
          ) : (
            <button onClick={next} className="btn-success">Next →</button>
          )}
          <button onClick={() => setShowHint(true)} className="btn-ghost text-sm">
            <Lightbulb size={14} /> Hint
          </button>
        </div>

        {showHint && res === null && (
          <div className="mt-3 p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-sm" dangerouslySetInnerHTML={{ __html: '💡 ' + card.hint }} />
        )}

        {res === 'ok' && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-2">
            <CheckCircle2 /> Correct! ({card.hint})
          </div>
        )}
        {res === 'no' && (
          <div className="mt-4 p-3 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 font-semibold flex items-center gap-2">
            <XCircle /> Answer: {card.answer} — {card.hint}
          </div>
        )}
      </div>
    </div>
  )
}

/* ----------------------------- PAGE ----------------------------- */
export default function RedoxStoichiometry() {
  return (
    <TopicShell
      topicId="stoichiometry"
      title="Redox Stoichiometry & Mole Concept"
      subtitle="Equivalents, mole ratios and electron counting — the toolkit for every numerical redox question."
      emoji="🧮"
      tabs={{
        concept: Concept,
        visualize: Visualize,
        game: Game,
        mcq: () => <MCQList questions={mcqs} title="Concept-check MCQs" />,
        pyq: () => <MCQList questions={pyqs} title="Exam Questions — Worked (tap an option)" />,
        numerical: () => <NumericalList problems={numericals} title="Worked Step-by-Step Solutions" />,
      }}
    />
  )
}
