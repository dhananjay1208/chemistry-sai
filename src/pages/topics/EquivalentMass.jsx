import { useState } from 'react'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals } from '../../data/equivalentMass.js'
import { Calculator, RefreshCw } from 'lucide-react'

function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">Equivalent Mass — the smart way to compare reactions</h2>
        <p className="text-slate-700 mt-2">
          The <strong>equivalent mass</strong> of a substance is the mass that can either combine with, displace, or supply
          <strong> one mole of electrons</strong> (or equivalently, 1 mole of H⁺ in acid-base reactions).
        </p>
        <div className="mt-4 rounded-xl bg-brand-50 border border-brand-100 p-4">
          <div className="text-xs font-bold text-brand-700 uppercase">Core formula</div>
          <div className="text-2xl font-mono mt-1">Equivalent mass = <span className="text-brand-700">Molar mass / n-factor</span></div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">What is the n-factor?</h3>
        <div className="mt-2 grid sm:grid-cols-2 gap-3 text-sm">
          <div className="p-3 rounded-xl bg-sky-50 border border-sky-200">
            <div className="font-bold text-sky-800">Acids</div>
            <div className="text-sky-900">n = basicity = # of H⁺ released. H₂SO₄ ⇒ 2, HCl ⇒ 1, H₃PO₄ ⇒ 3.</div>
          </div>
          <div className="p-3 rounded-xl bg-violet-50 border border-violet-200">
            <div className="font-bold text-violet-800">Bases</div>
            <div className="text-violet-900">n = acidity = # of OH⁻ released. NaOH ⇒ 1, Ca(OH)₂ ⇒ 2.</div>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="font-bold text-emerald-800">Salts</div>
            <div className="text-emerald-900">n = total + charge of cations (or – charge of anions). Na₂CO₃ ⇒ 2.</div>
          </div>
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
            <div className="font-bold text-rose-800">Redox</div>
            <div className="text-rose-900">n = total change in oxidation number (electrons exchanged). KMnO₄ acidic ⇒ 5.</div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">Normality & the Law of Equivalence</h3>
        <div className="mt-2 space-y-2 text-sm text-slate-700">
          <div>Normality <strong>N = Molarity × n-factor</strong></div>
          <div>Number of equivalents = <strong>N × V (in L)</strong> = mass / equivalent mass</div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-amber-900 font-semibold">
            At equivalence point: N₁V₁ = N₂V₂  (and in moles: n₁M₁V₁ = n₂M₂V₂)
          </div>
        </div>
      </div>

      <Callout type="trick" title="The one-formula shortcut for titrations">
        Always write <strong>n₁M₁V₁ = n₂M₂V₂</strong> (equivalents equal on both sides). Plug in the n-factors,
        solve for the unknown. This single equation clears 90% of NEET stoichiometry questions involving KMnO₄, K₂Cr₂O₇, oxalic acid, FeSO₄.
      </Callout>

      <Callout type="warn" title="Don't forget mixed n-factors">
        FeC₂O₄ (ferrous oxalate) has <strong>n = 3</strong>, not 1! Fe²⁺ loses 1 e⁻ and C₂O₄²⁻ loses 2 e⁻ ⇒ 1 + 2 = 3.
        NEET loves this question.
      </Callout>
    </div>
  )
}

function Visualize() {
  // Mini n-factor calculator + titration simulator
  const species = [
    { name: 'H₂SO₄', m: 98, n: 2, kind: 'acid' },
    { name: 'NaOH',  m: 40, n: 1, kind: 'base' },
    { name: 'KMnO₄ (acidic)', m: 158, n: 5, kind: 'redox' },
    { name: 'K₂Cr₂O₇ (acidic)', m: 294, n: 6, kind: 'redox' },
    { name: 'Oxalic acid H₂C₂O₄', m: 90, n: 2, kind: 'acid' },
    { name: 'FeSO₄', m: 152, n: 1, kind: 'redox' },
    { name: 'Na₂CO₃', m: 106, n: 2, kind: 'base' },
    { name: 'FeC₂O₄', m: 144, n: 3, kind: 'redox' },
  ]

  // Titration sim state
  const [n1, setN1] = useState(5)
  const [m1, setM1] = useState(0.1)
  const [v1, setV1] = useState(20)
  const [n2, setN2] = useState(1)
  const [m2, setM2] = useState(0.1)
  // Compute required V2
  const v2 = (n1 * m1 * v1) / (n2 * m2)

  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">Equivalent Mass lookup</h2>
        <p className="text-sm text-slate-600 mt-1">Tap a species to see its n-factor and equivalent mass.</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {species.map(s => (
            <div key={s.name} className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 transition">
              <div className="font-bold text-slate-900">{s.name}</div>
              <div className="text-xs text-slate-500 uppercase mt-1">{s.kind}</div>
              <div className="mt-2 text-sm grid grid-cols-3 gap-2">
                <div className="bg-slate-50 rounded-lg p-2 text-center"><div className="text-[10px] text-slate-500">Molar</div><div className="font-bold">{s.m}</div></div>
                <div className="bg-brand-50 rounded-lg p-2 text-center"><div className="text-[10px] text-brand-500">n-factor</div><div className="font-bold text-brand-700">{s.n}</div></div>
                <div className="bg-pink-50 rounded-lg p-2 text-center"><div className="text-[10px] text-pink-500">Eq mass</div><div className="font-bold text-pink-700">{(s.m/s.n).toFixed(2)}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900 flex items-center gap-2"><Calculator size={18} className="text-brand-600"/> Titration Calculator</h3>
        <p className="text-sm text-slate-600">Enter the oxidizer (species 1) and titrant (species 2). We solve for V₂.</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-violet-50 border border-violet-200 p-4">
            <div className="font-bold text-violet-900 mb-2">Species 1 (known)</div>
            <Field label="n-factor" val={n1} set={setN1}/>
            <Field label="Molarity (M)" val={m1} set={setM1} step={0.01}/>
            <Field label="Volume (mL)" val={v1} set={setV1}/>
          </div>
          <div className="rounded-2xl bg-pink-50 border border-pink-200 p-4">
            <div className="font-bold text-pink-900 mb-2">Species 2 (find V)</div>
            <Field label="n-factor" val={n2} set={setN2}/>
            <Field label="Molarity (M)" val={m2} set={setM2} step={0.01}/>
            <div className="mt-3 rounded-xl bg-white border p-3">
              <div className="text-xs text-slate-500">Required Volume V₂</div>
              <div className="text-2xl font-extrabold text-pink-700">{isFinite(v2) ? v2.toFixed(2) : '—'} mL</div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-500 font-mono">n₁M₁V₁ = n₂M₂V₂   ⇒   V₂ = (n₁·M₁·V₁)/(n₂·M₂)</div>
      </div>
    </div>
  )
}

function Field({ label, val, set, step = 1 }) {
  return (
    <div className="mb-2">
      <label className="text-xs text-slate-600">{label}</label>
      <input
        type="number" step={step} value={val}
        onChange={e => set(Number(e.target.value))}
        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-brand-500 outline-none font-bold"
      />
    </div>
  )
}

function Game() {
  // n-factor quiz: given species, choose correct n-factor
  const pool = [
    { s: 'H₂SO₄',                 n: 2, choices: [1,2,3,4] },
    { s: 'H₃PO₄',                 n: 3, choices: [1,2,3,4] },
    { s: 'KMnO₄ (acidic)',        n: 5, choices: [1,3,5,7] },
    { s: 'KMnO₄ (neutral)',       n: 3, choices: [1,3,5,7] },
    { s: 'KMnO₄ (alkaline)',      n: 1, choices: [1,3,5,7] },
    { s: 'K₂Cr₂O₇ (acidic)',      n: 6, choices: [2,3,6,7] },
    { s: 'FeSO₄',                 n: 1, choices: [1,2,3,5] },
    { s: 'FeC₂O₄ (with KMnO₄)',   n: 3, choices: [1,2,3,5] },
    { s: 'Oxalic acid (as acid)', n: 2, choices: [1,2,3,4] },
    { s: 'Na₂CO₃ (as base)',      n: 2, choices: [1,2,3,4] },
  ]
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const curr = pool[idx]
  const pick = (c) => { if (picked !== null) return; setPicked(c); if (c === curr.n) setScore(s => s+1) }
  const next = () => { setPicked(null); setIdx(i => i+1) }
  const reset = () => { setIdx(0); setPicked(null); setScore(0) }

  if (idx >= pool.length) {
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl">🏅</div>
        <div className="text-2xl font-extrabold mt-2">Final Score: {score} / {pool.length}</div>
        <button onClick={reset} className="btn-primary mt-4"><RefreshCw size={16}/> Play again</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="card p-5 flex items-center justify-between">
        <div className="font-bold text-slate-900">🧮 n-factor Rapid-Fire</div>
        <div className="flex gap-3 text-sm">
          <span className="chip bg-brand-100 text-brand-700">{idx+1}/{pool.length}</span>
          <span className="chip bg-emerald-100 text-emerald-700">Score {score}</span>
        </div>
      </div>
      <div className="card p-8 text-center">
        <div className="text-sm text-slate-500">n-factor of</div>
        <div className="text-4xl font-extrabold text-slate-900 mt-2">{curr.s}</div>
        <div className="mt-5 flex justify-center gap-2 flex-wrap">
          {curr.choices.map(c => {
            const isCorrect = picked !== null && c === curr.n
            const isWrong = picked === c && c !== curr.n
            return (
              <button key={c} onClick={() => pick(c)} disabled={picked !== null}
                className={`px-5 py-3 rounded-xl text-xl font-extrabold border-2 transition ${
                  isCorrect ? 'bg-emerald-100 border-emerald-400 text-emerald-800' :
                  isWrong   ? 'bg-rose-100 border-rose-400 text-rose-800' :
                  'bg-white border-slate-200 hover:bg-slate-50'
                }`}>{c}</button>
            )
          })}
        </div>
        {picked !== null && (
          <div className="mt-4">
            <button onClick={next} className="btn-primary">Next →</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function EquivalentMass() {
  return (
    <TopicShell
      topicId="equivalent-mass"
      title="Equivalent Mass & n-factor"
      subtitle="The language of titrations — equivalents, normality, and redox stoichiometry."
      emoji="🧪"
      tabs={{
        concept:   Concept,
        visualize: Visualize,
        game:      Game,
        mcq:       () => <MCQList questions={mcqs} title="Concept-check MCQs" />,
        pyq:       () => <MCQList questions={pyqs} title="NEET Previous Year Questions" />,
        numerical: () => <NumericalList problems={numericals} title="Titration & Equivalent-Mass Numericals" />,
      }}
    />
  )
}
