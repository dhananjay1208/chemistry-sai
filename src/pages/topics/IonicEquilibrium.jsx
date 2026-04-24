import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals } from '../../data/ionicEquilibrium.js'
import { Zap } from 'lucide-react'

/* ---------- CONCEPT TAB ---------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">What is Ionic Equilibrium?</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          When an electrolyte dissolves in water, it splits into <strong>ions</strong>. For <em>strong</em> electrolytes
          (NaCl, HCl, NaOH) the splitting is near 100% — there's no "un-dissolved" molecule left. For <em>weak</em>
          ones (CH<sub>3</sub>COOH, NH<sub>4</sub>OH, HF), only a fraction ionizes and the rest stays as molecules.
          That fraction — together with the back-reaction — sets up a dynamic <strong>ionic equilibrium</strong>:
        </p>
        <div className="mt-3 text-center text-2xl font-mono text-brand-700">
          CH<sub>3</sub>COOH ⇌ CH<sub>3</sub>COO<sup>–</sup> + H<sup>+</sup>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card p-5 border-l-4 border-emerald-400">
          <div className="font-extrabold text-emerald-700">Strong electrolytes</div>
          <div className="text-sm text-slate-700 mt-1">Ionize ~100% (α ≈ 1). No molecular form exists in solution.</div>
          <div className="text-xs text-emerald-900 mt-2 italic">HCl · HNO<sub>3</sub> · NaOH · KNO<sub>3</sub> · BaCl<sub>2</sub></div>
        </div>
        <div className="card p-5 border-l-4 border-amber-400">
          <div className="font-extrabold text-amber-700">Weak electrolytes</div>
          <div className="text-sm text-slate-700 mt-1">Partially ionize (α &lt;&lt; 1). Governed by K<sub>a</sub>/K<sub>b</sub>.</div>
          <div className="text-xs text-amber-900 mt-2 italic">CH<sub>3</sub>COOH · HF · NH<sub>4</sub>OH · H<sub>2</sub>CO<sub>3</sub> · HCN</div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🎯 Ostwald's Dilution Law</h3>
        <p className="text-slate-700 mt-1">For a weak acid HA at concentration C with degree of dissociation α:</p>
        <div className="mt-3 rounded-xl bg-brand-50 p-4 text-center text-lg font-mono text-brand-700">
          K<sub>a</sub> = Cα² / (1 – α) &nbsp;≈&nbsp; Cα²&nbsp;&nbsp;(if α &lt;&lt; 1)
        </div>
        <p className="text-slate-700 mt-3">Rearranging: <strong>α = √(K<sub>a</sub>/C)</strong>. Dilution <em>increases</em> α — this is why weak acids behave "more ionized" when you add water.</p>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">💧 Self-ionization of water (K<sub>w</sub>)</h3>
        <p className="text-slate-700 mt-1">Water itself is a very weak electrolyte:</p>
        <div className="mt-2 text-center text-xl font-mono text-brand-700">
          2 H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + OH<sup>–</sup>
        </div>
        <p className="text-slate-700 mt-3">At 25 °C: <strong>K<sub>w</sub> = [H<sup>+</sup>][OH<sup>–</sup>] = 10<sup>–14</sup></strong>.
        It is temperature-dependent — K<sub>w</sub> increases with T because ionization is endothermic.</p>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">⚗️ The three acid–base concepts</h3>
        <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-3">
            <div className="font-bold text-rose-700">Arrhenius</div>
            <div className="text-slate-700 mt-1">Acid gives H<sup>+</sup> in water; base gives OH<sup>–</sup>.</div>
            <div className="text-xs italic text-rose-700 mt-1">Limited to aqueous.</div>
          </div>
          <div className="rounded-xl bg-sky-50 border border-sky-200 p-3">
            <div className="font-bold text-sky-700">Brønsted–Lowry</div>
            <div className="text-slate-700 mt-1">Acid donates H<sup>+</sup>; base accepts H<sup>+</sup>.</div>
            <div className="text-xs italic text-sky-700 mt-1">Works in non-aqueous too.</div>
          </div>
          <div className="rounded-xl bg-violet-50 border border-violet-200 p-3">
            <div className="font-bold text-violet-700">Lewis</div>
            <div className="text-slate-700 mt-1">Acid = e<sup>–</sup> pair acceptor; base = donor.</div>
            <div className="text-xs italic text-violet-700 mt-1">Most general (BF<sub>3</sub>, AlCl<sub>3</sub>…).</div>
          </div>
        </div>
      </div>

      <Callout type="trick" title="NEET Trick: Conjugate pairs differ by a single H⁺">
        To find a conjugate <em>acid</em>, <strong>add</strong> H<sup>+</sup>. To find a conjugate <em>base</em>, <strong>remove</strong> H<sup>+</sup>.
        H<sub>2</sub>PO<sub>4</sub><sup>–</sup> conjugate base ⇒ HPO<sub>4</sub><sup>2–</sup>. Conjugate acid ⇒ H<sub>3</sub>PO<sub>4</sub>.
        The weaker the parent acid → the stronger its conjugate base (and vice-versa).
      </Callout>

      <Callout type="warn" title="Traps that cost marks">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Ostwald's law applies only to weak electrolytes</strong> — don't use α = √(K/C) for strong acids!</li>
          <li><strong>K<sub>w</sub> changes with T</strong> — at 50 °C pure water has pH &lt; 7 but is still <em>neutral</em>.</li>
          <li><strong>BF<sub>3</sub>, AlCl<sub>3</sub>, Fe<sup>3+</sup></strong> are Lewis acids but NOT Brønsted acids (no H to donate).</li>
          <li><strong>H<sub>2</sub>O is amphoteric</strong> — it can be either a B–L acid or base depending on partner.</li>
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
      title: 'Write the equilibrium',
      body: 'For a weak acid HA of initial conc. C:',
      expr: 'HA ⇌ H⁺ + A⁻',
      sol: 'Initial: C, 0, 0  →  Eq: C(1−α), Cα, Cα',
    },
    {
      title: 'Set up Kₐ',
      body: 'Apply law of mass action:',
      expr: 'Kₐ = [H⁺][A⁻] / [HA]',
      sol: 'Kₐ = (Cα)(Cα)/(C(1−α)) = Cα²/(1−α)',
    },
    {
      title: 'Simplify for weak acid',
      body: 'Since α << 1, (1−α) ≈ 1:',
      expr: 'Kₐ ≈ Cα²',
      sol: 'α = √(Kₐ/C) — Ostwald\'s dilution law',
    },
    {
      title: 'Dilution behaviour',
      body: 'Halve the concentration → α changes by √2:',
      expr: 'α ∝ 1/√C',
      sol: 'Dilution INCREASES ionization. At infinite dilution α → 1.',
    },
    {
      title: '[H⁺] from Kₐ and C',
      body: 'Most useful form for a weak acid:',
      expr: '[H⁺] = Cα = √(Kₐ·C)',
      sol: 'Example: 0.01 M HA with Kₐ = 10⁻⁵ → [H⁺] = √(10⁻⁷) ≈ 3.16 × 10⁻⁴ M',
    },
  ]
  const curr = steps[step]
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <Zap className="text-brand-600" size={22}/> Ostwald's Law — derived step by step
        </h2>
        <p className="text-slate-600 mt-1 text-sm">Click <em>Next</em> to see each step unfold.</p>

        <div className="mt-5 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 p-6 border border-brand-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs font-bold text-brand-700 uppercase tracking-wider">Step {step+1} of {steps.length}</div>
              <div className="mt-1 text-2xl font-extrabold text-slate-900">{curr.title}</div>
              <div className="mt-3 text-slate-700">{curr.body}</div>
              <div className="mt-2 text-2xl font-mono text-brand-700">{curr.expr}</div>
              <div className="mt-3 text-lg font-mono text-emerald-700">{curr.sol}</div>
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
        <h3 className="font-extrabold text-slate-900">📈 How α changes with dilution</h3>
        <p className="text-sm text-slate-600 mt-1">For K<sub>a</sub> = 1.8 × 10<sup>–5</sup> (acetic acid):</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-brand-700">
              <tr className="border-b border-slate-200">
                <th className="text-left py-2">Concentration (M)</th>
                <th className="text-left py-2">α = √(K<sub>a</sub>/C)</th>
                <th className="text-left py-2">% ionized</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2">1.0</td><td>4.24 × 10<sup>–3</sup></td><td>0.42%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">0.1</td><td>1.34 × 10<sup>–2</sup></td><td>1.34%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">0.01</td><td>4.24 × 10<sup>–2</sup></td><td>4.24%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">0.001</td><td>1.34 × 10<sup>–1</sup></td><td>13.4%</td></tr>
              <tr><td className="py-2">0.0001</td><td>≈ 0.42</td><td>~42% (approximation breaks!)</td></tr>
            </tbody>
          </table>
        </div>
        <div className="text-xs italic text-slate-500 mt-3">Notice: as we dilute 10×, α grows roughly √10 ≈ 3.16×.</div>
      </div>
    </div>
  )
}

/* ---------- PAGE ---------- */
export default function IonicEquilibrium() {
  return (
    <TopicShell
      topicId="ionic-equilibrium"
      title="Ionic Equilibrium"
      subtitle="Weak vs strong electrolytes, Ostwald's dilution law, Kw, and the acid–base concepts."
      emoji="⚖️"
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
