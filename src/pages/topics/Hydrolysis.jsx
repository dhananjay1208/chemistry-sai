import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals } from '../../data/hydrolysis.js'
import { FlaskConical } from 'lucide-react'

/* ---------- CONCEPT TAB ---------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">What is Salt Hydrolysis?</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          When a salt dissolves, its ions may react <em>back</em> with water. The ion of the <strong>weaker</strong> parent
          (acid or base) tends to "reclaim" a proton (or OH<sup>–</sup>), disturbing water's own neutrality and
          making the solution acidic or basic.
        </p>
        <div className="mt-3 text-center text-lg font-mono text-brand-700">
          CH<sub>3</sub>COO<sup>–</sup> + H<sub>2</sub>O ⇌ CH<sub>3</sub>COOH + OH<sup>–</sup> &nbsp;(basic)
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🎯 The 4-types table (must memorize)</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-brand-700">
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-2">Salt from</th>
                <th className="text-left py-2">Example</th>
                <th className="text-left py-2">Hydrolysed ion</th>
                <th className="text-left py-2">Nature</th>
                <th className="text-left py-2">pH formula</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 font-semibold">SA + SB</td>
                <td>NaCl, KNO<sub>3</sub></td>
                <td>Neither</td>
                <td className="font-bold text-slate-700">Neutral (pH 7)</td>
                <td>—</td>
              </tr>
              <tr className="border-b border-slate-100 bg-sky-50">
                <td className="py-2 font-semibold">WA + SB</td>
                <td>CH<sub>3</sub>COONa</td>
                <td>Anion (A<sup>–</sup>)</td>
                <td className="font-bold text-sky-700">Basic (pH &gt; 7)</td>
                <td className="font-mono text-xs">7 + ½(pK<sub>a</sub> + log C)</td>
              </tr>
              <tr className="border-b border-slate-100 bg-rose-50">
                <td className="py-2 font-semibold">SA + WB</td>
                <td>NH<sub>4</sub>Cl</td>
                <td>Cation (M<sup>+</sup>)</td>
                <td className="font-bold text-rose-700">Acidic (pH &lt; 7)</td>
                <td className="font-mono text-xs">7 – ½(pK<sub>b</sub> + log C)</td>
              </tr>
              <tr className="bg-violet-50">
                <td className="py-2 font-semibold">WA + WB</td>
                <td>CH<sub>3</sub>COONH<sub>4</sub></td>
                <td>Both</td>
                <td className="font-bold text-violet-700">Depends on K<sub>a</sub> vs K<sub>b</sub></td>
                <td className="font-mono text-xs">7 + ½(pK<sub>a</sub> – pK<sub>b</sub>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">📐 Key formulas</h3>
        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-sky-50 border border-sky-200 p-3">
            <div className="font-bold text-sky-700">Hydrolysis constant (K<sub>h</sub>)</div>
            <div className="font-mono text-slate-800 mt-1">K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub> &nbsp;(WA–SB salt)</div>
            <div className="font-mono text-slate-800 mt-1">K<sub>h</sub> = K<sub>w</sub>/K<sub>b</sub> &nbsp;(SA–WB salt)</div>
            <div className="font-mono text-slate-800 mt-1">K<sub>h</sub> = K<sub>w</sub>/(K<sub>a</sub>·K<sub>b</sub>) &nbsp;(WA–WB)</div>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
            <div className="font-bold text-emerald-700">Degree of hydrolysis (h)</div>
            <div className="font-mono text-slate-800 mt-1">h = √(K<sub>h</sub>/C)</div>
            <div className="text-slate-700 mt-1">⇒ h ∝ 1/√C (dilution <em>increases</em> hydrolysis)</div>
          </div>
        </div>
      </div>

      <Callout type="trick" title="Quick pH decision tree">
        1. <strong>Identify parents</strong> — which acid + which base would make this salt?<br/>
        2. <strong>Compare strengths</strong> — strong acid + strong base ⇒ neutral. Else the weaker parent determines the character.<br/>
        3. <strong>Apply formula</strong>:  7 + ½(pK<sub>a</sub> + log C)  for WA–SB ; 7 – ½(pK<sub>b</sub> + log C) for SA–WB.<br/>
        4. For WA–WB, <strong>pH is independent of concentration</strong> — only K<sub>a</sub> vs K<sub>b</sub> matter.
      </Callout>

      <Callout type="warn" title="Subtle traps">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>FeCl<sub>3</sub>, AlCl<sub>3</sub>, CuSO<sub>4</sub></strong> — acidic due to cation hydrolysis ([Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> loses H<sup>+</sup>).</li>
          <li><strong>Na<sub>2</sub>CO<sub>3</sub>, K<sub>2</sub>CO<sub>3</sub></strong> — strongly basic (CO<sub>3</sub><sup>2–</sup> hydrolyzes in two steps).</li>
          <li><strong>CH<sub>3</sub>COONH<sub>4</sub></strong> — nearly neutral because K<sub>a</sub>(HOAc) ≈ K<sub>b</sub>(NH<sub>3</sub>).</li>
          <li>Higher charge + smaller cation ⇒ more hydrolysis. Al<sup>3+</sup> &gt; Mg<sup>2+</sup> &gt; Na<sup>+</sup>.</li>
        </ul>
      </Callout>
    </div>
  )
}

/* ---------- VISUALIZE TAB ---------- */
function Visualize() {
  const [active, setActive] = useState('wa-sb')
  const cases = {
    'sa-sb': {
      label: 'NaCl (SA + SB)',
      reaction: 'Na⁺ + Cl⁻ (no hydrolysis)',
      note: 'Neither ion reacts with water → pH = 7 (neutral).',
      pHShift: 7,
      color: 'from-slate-400 to-slate-600',
    },
    'wa-sb': {
      label: 'CH₃COONa (WA + SB)',
      reaction: 'CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻',
      note: 'Acetate grabs H⁺ from water → OH⁻ left behind → basic.',
      pHShift: 9,
      color: 'from-sky-400 to-blue-600',
    },
    'sa-wb': {
      label: 'NH₄Cl (SA + WB)',
      reaction: 'NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺',
      note: 'Ammonium gives up H⁺ → H₃O⁺ dominates → acidic.',
      pHShift: 5,
      color: 'from-rose-400 to-red-600',
    },
    'wa-wb': {
      label: 'CH₃COONH₄ (WA + WB)',
      reaction: 'NH₄⁺ + CH₃COO⁻ + H₂O ⇌ NH₃ + CH₃COOH + H₂O',
      note: 'Both hydrolyse. Since Ka ≈ Kb, effects cancel → ≈ neutral.',
      pHShift: 7,
      color: 'from-violet-400 to-purple-600',
    },
  }
  const curr = cases[active]
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <FlaskConical className="text-brand-600" size={22}/> The 4 hydrolysis outcomes — interactive
        </h2>
        <p className="text-slate-600 mt-1 text-sm">Click a salt to see what its aqueous solution actually does.</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(cases).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                active === k ? 'bg-brand-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >{v.label}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-5 rounded-2xl overflow-hidden border border-slate-200"
          >
            <div className={`bg-gradient-to-r ${curr.color} p-5 text-white`}>
              <div className="text-xs uppercase font-bold tracking-wider opacity-90">Reaction</div>
              <div className="text-xl font-mono mt-1">{curr.reaction}</div>
            </div>
            <div className="p-5 bg-white">
              <div className="text-slate-700">{curr.note}</div>
              <div className="mt-4">
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">Estimated pH</div>
                <div className="h-3 mt-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-300 via-emerald-400 to-violet-700 relative">
                  <div className="absolute top-0 w-3 h-3 rounded-full bg-white border-2 border-slate-900 -translate-y-0"
                       style={{ left: `${(curr.pHShift/14)*100}%`, transform: 'translateX(-50%)' }}/>
                </div>
                <div className="flex justify-between text-xs mt-1 text-slate-500">
                  <span>0 (acidic)</span><span>7</span><span>14 (basic)</span>
                </div>
                <div className="text-sm mt-2 font-semibold text-slate-800">pH ≈ {curr.pHShift}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">📘 Example: compute pH of 0.1 M CH<sub>3</sub>COONa</h3>
        <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal list-inside">
          <li>pK<sub>a</sub>(CH<sub>3</sub>COOH) = 4.74.</li>
          <li>pH = 7 + ½(pK<sub>a</sub> + log C) = 7 + ½(4.74 + log 0.1).</li>
          <li>= 7 + ½(4.74 – 1) = 7 + ½(3.74).</li>
          <li>= 7 + 1.87 = <strong className="text-brand-700">8.87</strong> — slightly basic, as expected for a SA/SB's weaker cousin's salt.</li>
        </ol>
      </div>
    </div>
  )
}

/* ---------- PAGE ---------- */
export default function Hydrolysis() {
  return (
    <TopicShell
      topicId="hydrolysis"
      title="Salt Hydrolysis"
      subtitle="Why NaCl is neutral, NH₄Cl is acidic, CH₃COONa is basic — and the math that predicts the exact pH."
      emoji="🧪"
      backTo="/equilibrium"
      backLabel="Back to Equilibrium"
      tabs={{
        concept:   Concept,
        visualize: Visualize,
        mcq:       () => <MCQList questions={mcqs} title="Concept-check MCQs" />,
        pyq:       () => <MCQList questions={pyqs} title="NEET Previous Year Questions" />,
        numerical: () => <NumericalList problems={numericals} title="Worked Numericals" />,
      }}
    />
  )
}
