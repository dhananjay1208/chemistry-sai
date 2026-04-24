import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals, gameCards } from '../../data/solubility.js'
import { Beaker, Trophy, RefreshCw, CheckCircle2, XCircle } from 'lucide-react'

/* ---------- CONCEPT TAB ---------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">Solubility Product (K<sub>sp</sub>)</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          For a sparingly soluble salt in equilibrium with its saturated solution, the product of ionic concentrations
          (each raised to the power of its stoichiometric coefficient) is a constant at a given temperature —
          the <strong>solubility product K<sub>sp</sub></strong>.
        </p>
        <div className="mt-3 text-center text-xl font-mono text-brand-700">
          A<sub>x</sub>B<sub>y</sub>(s) ⇌ x A<sup>y+</sup> + y B<sup>x–</sup>
        </div>
        <div className="mt-2 text-center text-xl font-mono text-brand-700">
          K<sub>sp</sub> = [A<sup>y+</sup>]<sup>x</sup> · [B<sup>x–</sup>]<sup>y</sup>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🎯 Ksp–solubility relationships (memorize these!)</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-brand-700">
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-2">Salt type</th>
                <th className="text-left py-2">Example</th>
                <th className="text-left py-2">Expression</th>
                <th className="text-left py-2">Solubility s =</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 font-semibold">AB</td><td>AgCl, BaSO<sub>4</sub></td>
                <td className="font-mono">K<sub>sp</sub> = s²</td><td className="font-mono text-emerald-700">√K<sub>sp</sub></td>
              </tr>
              <tr className="border-b border-slate-100 bg-sky-50">
                <td className="py-2 font-semibold">AB<sub>2</sub></td><td>CaF<sub>2</sub>, PbCl<sub>2</sub></td>
                <td className="font-mono">K<sub>sp</sub> = 4s³</td><td className="font-mono text-emerald-700">(K<sub>sp</sub>/4)<sup>1/3</sup></td>
              </tr>
              <tr className="border-b border-slate-100 bg-violet-50">
                <td className="py-2 font-semibold">A<sub>2</sub>B</td><td>Ag<sub>2</sub>CrO<sub>4</sub></td>
                <td className="font-mono">K<sub>sp</sub> = 4s³</td><td className="font-mono text-emerald-700">(K<sub>sp</sub>/4)<sup>1/3</sup></td>
              </tr>
              <tr className="bg-amber-50">
                <td className="py-2 font-semibold">A<sub>2</sub>B<sub>3</sub></td><td>Bi<sub>2</sub>S<sub>3</sub>, As<sub>2</sub>S<sub>3</sub></td>
                <td className="font-mono">K<sub>sp</sub> = 108 s<sup>5</sup></td><td className="font-mono text-emerald-700">(K<sub>sp</sub>/108)<sup>1/5</sup></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">⚡ Q vs K<sub>sp</sub> — the precipitation predictor</h3>
        <p className="text-slate-700 mt-2">For any solution (not necessarily saturated), we calculate the <strong>ionic product Q</strong>
          using the <em>current</em> concentrations. Compare to K<sub>sp</sub>:</p>
        <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <div className="font-bold text-emerald-700">Q &lt; K<sub>sp</sub></div>
            <div className="text-slate-700 mt-1">Unsaturated — more salt can dissolve. No precipitate.</div>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <div className="font-bold text-amber-700">Q = K<sub>sp</sub></div>
            <div className="text-slate-700 mt-1">Saturated — at equilibrium. No net change.</div>
          </div>
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
            <div className="font-bold text-rose-700">Q &gt; K<sub>sp</sub></div>
            <div className="text-slate-700 mt-1">Supersaturated — precipitation happens until Q returns to K<sub>sp</sub>.</div>
          </div>
        </div>
      </div>

      <Callout type="trick" title="NEET exam tactic: the dilution trap">
        When two solutions are <strong>mixed</strong>, always <strong>halve</strong> (or adjust for new volume) the concentrations
        BEFORE computing Q. Students forget and end up using pre-mix concentrations — wrong answer.
      </Callout>

      <Callout type="warn" title="Things to watch for">
        <ul className="list-disc list-inside space-y-1">
          <li>K<sub>sp</sub> varies with <strong>temperature</strong> — most salts have larger K<sub>sp</sub> at higher T (endothermic dissolution).</li>
          <li>Common ion <strong>reduces solubility</strong> but does NOT change K<sub>sp</sub>.</li>
          <li>pH affects solubility of hydroxides and sulphides — Mg(OH)<sub>2</sub> is more soluble in acidic solution.</li>
          <li>Complex formation can <em>increase</em> solubility (AgCl dissolves in NH<sub>3</sub> via [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>).</li>
        </ul>
      </Callout>
    </div>
  )
}

/* ---------- VISUALIZE TAB ---------- */
function Visualize() {
  const [step, setStep] = useState(0)
  const steps = [
    {
      k: 'AgCl',
      title: 'AB type',
      eq: 'AgCl(s) ⇌ Ag⁺ + Cl⁻',
      ksp: '[Ag⁺][Cl⁻] = s·s',
      sol: 's = √Kₛₚ',
      given: 'Kₛₚ = 1.8 × 10⁻¹⁰ → s = √(1.8 × 10⁻¹⁰) ≈ 1.34 × 10⁻⁵ M',
    },
    {
      k: 'CaF₂',
      title: 'AB₂ type',
      eq: 'CaF₂(s) ⇌ Ca²⁺ + 2F⁻',
      ksp: '[Ca²⁺][F⁻]² = s·(2s)² = 4s³',
      sol: 's = (Kₛₚ/4)^(1/3)',
      given: 'Kₛₚ = 3.2 × 10⁻¹¹ → s = (8 × 10⁻¹²)^(1/3) ≈ 2.0 × 10⁻⁴ M',
    },
    {
      k: 'Ag₂CrO₄',
      title: 'A₂B type',
      eq: 'Ag₂CrO₄(s) ⇌ 2Ag⁺ + CrO₄²⁻',
      ksp: '[Ag⁺]²[CrO₄²⁻] = (2s)²·s = 4s³',
      sol: 's = (Kₛₚ/4)^(1/3)',
      given: 'Kₛₚ = 1.1 × 10⁻¹² → s ≈ 6.5 × 10⁻⁵ M',
    },
    {
      k: 'Common ion: AgCl in 0.1 M NaCl',
      title: 'Common ion effect',
      eq: 'AgCl(s) ⇌ Ag⁺ + Cl⁻',
      ksp: 'Kₛₚ = [Ag⁺] × (0.1 + s) ≈ [Ag⁺] × 0.1',
      sol: 's = Kₛₚ / [Cl⁻]',
      given: 's = 1.8 × 10⁻¹⁰ / 0.1 = 1.8 × 10⁻⁹ M (∼7500× suppression)',
    },
    {
      k: 'Q vs Kₛₚ test',
      title: 'Precipitation prediction',
      eq: 'Mix 1 mL 0.1 M AgNO₃ + 1 mL 0.1 M NaCl → 2 mL total',
      ksp: 'After mixing: [Ag⁺] = [Cl⁻] = 0.05 M',
      sol: 'Q = 0.05 × 0.05 = 2.5 × 10⁻³',
      given: 'Q (2.5 × 10⁻³) ≫ Kₛₚ (1.8 × 10⁻¹⁰) → massive precipitation',
    },
  ]
  const curr = steps[step]
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <Beaker className="text-brand-600" size={22}/> Worked walkthrough
        </h2>
        <p className="text-slate-600 mt-1 text-sm">Click Next to see each type of K<sub>sp</sub> calculation.</p>

        <div className="mt-5 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 p-6 border border-brand-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs font-bold text-brand-700 uppercase tracking-wider">Case {step+1} of {steps.length} — {curr.title}</div>
              <div className="mt-1 text-3xl font-extrabold text-slate-900">{curr.k}</div>
              <div className="mt-4 text-slate-700">Equilibrium:</div>
              <div className="text-xl font-mono text-brand-700 mt-1">{curr.eq}</div>
              <div className="mt-4 text-slate-700">Expression:</div>
              <div className="text-lg font-mono text-brand-700 mt-1">K<sub>sp</sub> = {curr.ksp}</div>
              <div className="mt-4 text-slate-700">Solve:</div>
              <div className="text-lg font-mono text-emerald-700 mt-1 font-bold">{curr.sol}</div>
              <div className="mt-4 text-sm italic text-slate-600">💡 {curr.given}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex justify-between">
          <button className="btn-ghost" disabled={step===0} onClick={() => setStep(s => s-1)}>← Prev</button>
          <div className="flex gap-1 items-center">
            {steps.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i===step ? 'bg-brand-600 w-6' : 'bg-slate-300'} transition-all`}/>
            ))}
          </div>
          <button className="btn-primary" disabled={step===steps.length-1} onClick={() => setStep(s => s+1)}>Next →</button>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🧮 Common K<sub>sp</sub> values (25 °C)</h3>
        <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
          {[
            ['AgCl',         '1.8 × 10⁻¹⁰'],
            ['AgBr',         '5.0 × 10⁻¹³'],
            ['AgI',          '8.3 × 10⁻¹⁷'],
            ['Ag₂CrO₄',      '1.1 × 10⁻¹²'],
            ['BaSO₄',        '1.1 × 10⁻¹⁰'],
            ['CaF₂',         '3.2 × 10⁻¹¹'],
            ['CaSO₄',        '9.0 × 10⁻⁶'],
            ['CaCO₃',        '3.4 × 10⁻⁹'],
            ['Mg(OH)₂',      '5.6 × 10⁻¹²'],
            ['Fe(OH)₃',      '4.0 × 10⁻³⁸'],
            ['PbSO₄',        '1.8 × 10⁻⁸'],
            ['PbI₂',         '7.1 × 10⁻⁹'],
            ['CuS',          '6.0 × 10⁻³⁷'],
            ['HgS',          '1.6 × 10⁻⁵²'],
          ].map(([salt, ksp]) => (
            <div key={salt} className="rounded-xl bg-slate-50 border border-slate-200 p-3 flex justify-between">
              <span className="font-semibold text-slate-800" dangerouslySetInnerHTML={{ __html: salt }}/>
              <span className="font-mono text-brand-700">K<sub>sp</sub> = {ksp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- GAME TAB — Ksp vs Q predictor ---------- */
function Game() {
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [best, setBest] = useState(() => Number(localStorage.getItem('ksp-best') || 0))

  const shuffled = useMemo(() => [...gameCards].sort(() => Math.random() - 0.5), [])
  const total = 10
  const card = shuffled[round % shuffled.length]

  const choose = (choice) => {
    if (picked !== null) return
    setPicked(choice)
    if (choice === card.answer) setScore(s => s + 1)
  }

  const next = () => {
    setPicked(null)
    if (round + 1 >= total) {
      if (score > best) { setBest(score); localStorage.setItem('ksp-best', score) }
    }
    setRound(r => r + 1)
  }

  const reset = () => { setRound(0); setScore(0); setPicked(null) }

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

  const choices = ['precipitate', 'saturated', 'unsaturated']

  return (
    <div className="space-y-4">
      <div className="card p-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-lg font-extrabold text-slate-900">🧪 Ksp vs Q Predictor</div>
          <div className="text-sm text-slate-600">Will it precipitate, be saturated, or stay unsaturated?</div>
        </div>
        <div className="flex gap-3 text-sm">
          <div className="chip bg-brand-100 text-brand-700">Round {round+1}/{total}</div>
          <div className="chip bg-emerald-100 text-emerald-700">Score {score}</div>
          <div className="chip bg-pink-100 text-pink-700">Best {best}</div>
        </div>
      </div>

      <motion.div key={round} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card p-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-wider text-slate-500">Salt</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-1" dangerouslySetInnerHTML={{ __html: card.salt }}/>
          <div className="text-sm font-mono text-brand-700 mt-2">K<sub>sp</sub> = {card.ksp.toExponential(1)}</div>
          <div className="text-sm text-slate-700 mt-3">{card.label}</div>
          <div className="text-sm font-mono text-slate-600 mt-1">Q = {card.q.toExponential(2)}</div>
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {choices.map((c) => {
            const isCorrect = c === card.answer
            const isPicked = picked === c
            let cls = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            if (picked !== null && isCorrect) cls = 'bg-emerald-50 border-emerald-300 text-emerald-900'
            else if (picked !== null && isPicked && !isCorrect) cls = 'bg-rose-50 border-rose-300 text-rose-900'
            return (
              <button
                key={c}
                disabled={picked !== null}
                onClick={() => choose(c)}
                className={`px-4 py-3 rounded-xl border font-semibold capitalize transition ${cls}`}
              >
                {c}
                {picked !== null && isCorrect && <CheckCircle2 className="inline ml-2 text-emerald-600" size={16}/>}
                {picked !== null && isPicked && !isCorrect && <XCircle className="inline ml-2 text-rose-600" size={16}/>}
              </button>
            )
          })}
        </div>

        <AnimatePresence>
          {picked !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700"
            >
              <span className="font-bold text-slate-900">Why: </span>{card.explain}
            </motion.div>
          )}
        </AnimatePresence>

        {picked !== null && (
          <div className="mt-4 text-center">
            <button onClick={next} className="btn-success">Next →</button>
          </div>
        )}
      </motion.div>

      <div className="text-center">
        <button onClick={reset} className="btn-ghost text-xs"><RefreshCw size={12}/> Reset game</button>
      </div>
    </div>
  )
}

/* ---------- PAGE ---------- */
export default function Solubility() {
  return (
    <TopicShell
      topicId="solubility"
      title="Solubility & Ksp"
      subtitle="When will a precipitate form? Solubility product, common ion effect, and the Q vs Ksp test."
      emoji="🧂"
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
