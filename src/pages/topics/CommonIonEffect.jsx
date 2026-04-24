import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals } from '../../data/commonIonEffect.js'
import { Scale } from 'lucide-react'

/* ---------- CONCEPT TAB ---------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">What is the Common Ion Effect?</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          When we add an ion to a solution that <strong>already contains that same ion</strong> from another
          source, the ionization of the weak electrolyte (or dissolution of a sparingly-soluble salt) is
          <strong> suppressed</strong>. It's just Le Chatelier in action.
        </p>
        <div className="mt-3 text-center text-xl font-mono text-brand-700">
          CH<sub>3</sub>COOH ⇌ CH<sub>3</sub>COO<sup>–</sup> + H<sup>+</sup>
        </div>
        <p className="mt-2 text-slate-700 text-sm">
          Add CH<sub>3</sub>COONa → floods the solution with CH<sub>3</sub>COO<sup>–</sup> → the equilibrium shifts
          <strong> left</strong> → [H<sup>+</sup>] drops → α of acetic acid drops.
        </p>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">⚡ Two classic uses in NEET</h3>
        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-sky-50 border border-sky-200 p-4">
            <div className="font-bold text-sky-700">1. Qualitative analysis — Group II</div>
            <div className="text-slate-700 mt-1">Dilute HCl added before H<sub>2</sub>S suppresses H<sub>2</sub>S ionization (common H<sup>+</sup>) →
            very low [S<sup>2–</sup>] → only the <em>most insoluble</em> sulphides (Pb, Cu, Hg, Cd, Bi) precipitate.</div>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <div className="font-bold text-emerald-700">2. Qualitative analysis — Group III</div>
            <div className="text-slate-700 mt-1">NH<sub>4</sub>Cl added before NH<sub>4</sub>OH suppresses NH<sub>4</sub>OH ionization (common NH<sub>4</sub><sup>+</sup>) →
            low [OH<sup>–</sup>] → only Fe(OH)<sub>3</sub>, Al(OH)<sub>3</sub>, Cr(OH)<sub>3</sub> precipitate (lowest K<sub>sp</sub>).</div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🧪 Effect on solubility</h3>
        <p className="text-slate-700 mt-2">For a sparingly-soluble salt AgCl in 0.1 M NaCl:</p>
        <div className="mt-3 text-slate-700 text-sm font-mono">
          K<sub>sp</sub>(AgCl) = [Ag<sup>+</sup>][Cl<sup>–</sup>] <br/>
          Since [Cl<sup>–</sup>] ≈ 0.1 M (from NaCl): &nbsp; [Ag<sup>+</sup>] = K<sub>sp</sub>/0.1
        </div>
        <p className="text-slate-700 mt-3 text-sm">
          For K<sub>sp</sub> = 1.8 × 10<sup>–10</sup>, solubility falls from 1.34 × 10<sup>–5</sup> M (pure water) to
          1.8 × 10<sup>–9</sup> M — about <strong>7,500× less soluble</strong>.
        </p>
      </div>

      <Callout type="trick" title="NEET shortcut for solubility with common ion">
        If common ion concentration is <em>C</em> (much larger than s):<br/>
        — AB salt:  s ≈ K<sub>sp</sub> / C<br/>
        — AB<sub>2</sub> salt:  s ≈ K<sub>sp</sub> / C² (if common = B); or K<sub>sp</sub>/C ·(1/4) complication (if common = A)<br/>
        — General rule: solubility falls by a factor of ~(C/s<sub>pure</sub>)<sup>n</sup> where n = stoichiometry of common ion.
      </Callout>

      <Callout type="warn" title="Watch out">
        <ul className="list-disc list-inside space-y-1">
          <li>Common ion effect works <strong>only for weak electrolytes / sparingly soluble salts</strong>. Strong electrolytes already ionize fully.</li>
          <li>"Common ion" means the <em>same ion</em> — not just the same element! NaCl + KNO<sub>3</sub> share <em>no</em> common ion.</li>
          <li>Common ion → decreased ionization ≠ decreased K<sub>a</sub> or K<sub>sp</sub>. The constant is unchanged — only the <em>position</em> of equilibrium shifts.</li>
        </ul>
      </Callout>
    </div>
  )
}

/* ---------- VISUALIZE TAB ---------- */
function Visualize() {
  const [cNaCl, setCNaCl] = useState(0)

  // AgCl: Ksp = 1.8e-10
  const Ksp = 1.8e-10
  const sInWater = Math.sqrt(Ksp)
  const sWithCommon = cNaCl > 0 ? Ksp / cNaCl : sInWater
  const suppression = sInWater / sWithCommon

  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <Scale className="text-brand-600" size={22}/> AgCl solubility vs [NaCl]
        </h2>
        <p className="text-slate-600 mt-1 text-sm">
          Watch how adding NaCl crushes AgCl\'s solubility. K<sub>sp</sub>(AgCl) = 1.8 × 10<sup>–10</sup>.
        </p>

        <div className="mt-5">
          <label className="text-xs font-bold text-slate-600 uppercase">[NaCl] in solution</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={cNaCl}
            onChange={e => setCNaCl(parseFloat(e.target.value))}
            className="w-full mt-1 accent-brand-600"
          />
          <div className="text-sm font-mono text-brand-700 mt-1">[NaCl] = {cNaCl.toFixed(2)} M</div>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5">
            <div className="text-xs uppercase font-bold text-emerald-700 tracking-wider">Solubility in pure water</div>
            <div className="text-3xl font-extrabold text-slate-900 mt-1">{sInWater.toExponential(2)}</div>
            <div className="text-xs text-slate-600 mt-1">mol/L</div>
          </div>
          <div className="rounded-2xl bg-rose-50 border border-rose-200 p-5">
            <div className="text-xs uppercase font-bold text-rose-700 tracking-wider">Solubility with common ion</div>
            <div className="text-3xl font-extrabold text-slate-900 mt-1">
              {cNaCl === 0 ? sInWater.toExponential(2) : sWithCommon.toExponential(2)}
            </div>
            <div className="text-xs text-slate-600 mt-1">mol/L</div>
          </div>
        </div>

        {cNaCl > 0 && (
          <div className="mt-4 rounded-xl bg-gradient-to-r from-brand-50 to-pink-50 p-4 text-center">
            <div className="text-sm text-slate-700">Solubility suppressed by factor of</div>
            <div className="text-4xl font-extrabold text-brand-700 mt-1">{suppression.toFixed(0)}×</div>
          </div>
        )}
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">How [Cl<sup>–</sup>] affects AgCl solubility</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-brand-700">
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-2">[NaCl] (M)</th>
                <th className="text-left py-2">[Ag<sup>+</sup>] = s (M)</th>
                <th className="text-left py-2">Factor (vs pure water)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2">0 (pure water)</td><td>1.34 × 10<sup>–5</sup></td><td>1 ×</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">0.001</td><td>1.80 × 10<sup>–7</sup></td><td>~75 × less</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">0.01</td><td>1.80 × 10<sup>–8</sup></td><td>~745 × less</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">0.1</td><td>1.80 × 10<sup>–9</sup></td><td>~7,450 × less</td></tr>
              <tr><td className="py-2">1.0</td><td>1.80 × 10<sup>–10</sup></td><td>~74,500 × less</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ---------- PAGE ---------- */
export default function CommonIonEffect() {
  return (
    <TopicShell
      topicId="common-ion"
      title="Common Ion Effect"
      subtitle="Le Chatelier applied to ionic equilibria — the reason group separations actually work."
      emoji="🧲"
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
