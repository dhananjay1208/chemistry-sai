import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals, gameCards } from '../../data/bufferSolutions.js'
import { Shield, Trophy, RefreshCw, CheckCircle2, XCircle } from 'lucide-react'

/* ---------- CONCEPT TAB ---------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">What is a Buffer?</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          A <strong>buffer</strong> is a solution whose pH hardly changes when a small amount of acid or base is added.
          The secret: it contains both a <em>weak proton donor</em> AND a <em>weak proton acceptor</em> in similar
          amounts. When H<sup>+</sup> is added, the acceptor grabs it; when OH<sup>–</sup> is added, the donor hands over
          its H<sup>+</sup> to neutralize.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card p-5 border-l-4 border-rose-400">
          <div className="font-extrabold text-rose-700">Acidic buffer</div>
          <div className="text-sm text-slate-700 mt-1">Weak acid + its salt with a strong base.</div>
          <div className="text-xs italic text-rose-900 mt-2">Example: CH<sub>3</sub>COOH + CH<sub>3</sub>COONa → pH ≈ 4–6</div>
        </div>
        <div className="card p-5 border-l-4 border-sky-400">
          <div className="font-extrabold text-sky-700">Basic buffer</div>
          <div className="text-sm text-slate-700 mt-1">Weak base + its salt with a strong acid.</div>
          <div className="text-xs italic text-sky-900 mt-2">Example: NH<sub>4</sub>OH + NH<sub>4</sub>Cl → pH ≈ 8–10</div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🎯 Henderson–Hasselbalch equation</h3>
        <div className="mt-3 rounded-xl bg-brand-50 p-4 text-center text-xl font-mono text-brand-700">
          Acidic buffer: &nbsp; pH = pK<sub>a</sub> + log<sub>10</sub>([salt]/[acid])
        </div>
        <div className="mt-3 rounded-xl bg-brand-50 p-4 text-center text-xl font-mono text-brand-700">
          Basic buffer: &nbsp; pOH = pK<sub>b</sub> + log<sub>10</sub>([salt]/[base])
        </div>
        <p className="text-slate-700 text-sm mt-3">
          When [salt] = [acid], pH = pK<sub>a</sub>. This is the buffer's "sweet spot" — <strong>maximum capacity</strong>.
          To build a buffer at a target pH, pick an acid with pK<sub>a</sub> close to that pH.
        </p>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🩸 Buffers in real life</h3>
        <div className="mt-3 space-y-2 text-sm">
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-3">
            <span className="font-bold text-rose-700">Blood (pH 7.4):</span> H<sub>2</sub>CO<sub>3</sub>/HCO<sub>3</sub><sup>–</sup> buffer, ratio ~1:20. Deviations of 0.4 units cause acidosis/alkalosis.
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
            <span className="font-bold text-emerald-700">Biological cells:</span> H<sub>2</sub>PO<sub>4</sub><sup>–</sup>/HPO<sub>4</sub><sup>2–</sup>, pK<sub>a2</sub> ≈ 7.21 — perfect for intracellular pH.
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
            <span className="font-bold text-amber-700">Detergents, shampoos, drugs:</span> citrate and phosphate buffers keep formulations stable.
          </div>
        </div>
      </div>

      <Callout type="trick" title="Buffer quick-picker">
        To build a buffer at <strong>target pH</strong>, choose a weak acid with <strong>pK<sub>a</sub> within ±1</strong> of the target.
        Then use Henderson to fix the ratio:<br/>
        <span className="font-mono">[salt]/[acid] = 10<sup>(pH – pK<sub>a</sub>)</sup></span>.<br/>
        For blood pH 7.4 using H<sub>2</sub>CO<sub>3</sub> (pK<sub>a1</sub> = 6.1): ratio = 10<sup>1.3</sup> ≈ 20 : 1.
      </Callout>

      <Callout type="warn" title="Common pitfalls">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Dilution doesn't change pH much</strong> — the ratio [salt]/[acid] stays the same on dilution.</li>
          <li><strong>HCl + NaCl is NOT a buffer</strong> — you need a <em>weak</em> acid.</li>
          <li>Buffer capacity is limited — a huge addition of strong acid/base CAN break it.</li>
          <li>pH = pK<sub>a</sub> happens at the <strong>half-equivalence point</strong> in a weak-acid titration — a favourite NEET graph.</li>
        </ul>
      </Callout>
    </div>
  )
}

/* ---------- VISUALIZE TAB ---------- */
function Visualize() {
  const [salt, setSalt] = useState(0.1)
  const [acid, setAcid] = useState(0.1)
  const [pKa, setPKa] = useState(4.74)

  const pH = useMemo(() => {
    if (salt <= 0 || acid <= 0) return null
    return pKa + Math.log10(salt / acid)
  }, [salt, acid, pKa])

  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <Shield className="text-brand-600" size={22}/> Buffer pH calculator (Henderson–Hasselbalch)
        </h2>
        <p className="text-slate-600 mt-1 text-sm">Drag the sliders to see how buffer composition controls pH.</p>

        <div className="mt-5 grid sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase">pK<sub>a</sub></label>
            <input type="range" min={1} max={12} step={0.05} value={pKa} onChange={e => setPKa(parseFloat(e.target.value))}
                   className="w-full mt-1 accent-brand-600"/>
            <div className="text-sm font-mono text-brand-700 mt-1">pK<sub>a</sub> = {pKa.toFixed(2)}</div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase">[salt] (M)</label>
            <input type="range" min={0.01} max={1} step={0.01} value={salt} onChange={e => setSalt(parseFloat(e.target.value))}
                   className="w-full mt-1 accent-brand-600"/>
            <div className="text-sm font-mono text-brand-700 mt-1">[salt] = {salt.toFixed(2)} M</div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase">[acid] (M)</label>
            <input type="range" min={0.01} max={1} step={0.01} value={acid} onChange={e => setAcid(parseFloat(e.target.value))}
                   className="w-full mt-1 accent-brand-600"/>
            <div className="text-sm font-mono text-brand-700 mt-1">[acid] = {acid.toFixed(2)} M</div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 p-6 border border-brand-100 text-center">
          <div className="text-sm font-bold text-brand-700 uppercase tracking-wider">Buffer pH</div>
          <div className="text-6xl font-extrabold text-slate-900 mt-1">{pH !== null ? pH.toFixed(2) : '—'}</div>
          <div className="text-sm text-slate-600 mt-2 font-mono">
            pH = {pKa.toFixed(2)} + log({salt.toFixed(2)}/{acid.toFixed(2)}) = {pKa.toFixed(2)} + {Math.log10(salt/acid).toFixed(2)}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🧪 Common buffer recipes (NEET favourites)</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-brand-700">
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-2">Buffer system</th>
                <th className="text-left py-2">pK<sub>a</sub></th>
                <th className="text-left py-2">Useful pH range</th>
                <th className="text-left py-2">Use</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2">HCOOH / HCOO<sup>–</sup></td><td>3.75</td><td>2.75 – 4.75</td><td>Chromatography</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>–</sup></td><td>4.74</td><td>3.74 – 5.74</td><td>Classic lab acidic buffer</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>–</sup></td><td>6.1</td><td>5.1 – 7.1</td><td>Blood plasma</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">H<sub>2</sub>PO<sub>4</sub><sup>–</sup> / HPO<sub>4</sub><sup>2–</sup></td><td>7.21</td><td>6.21 – 8.21</td><td>Intracellular / PBS</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2">NH<sub>4</sub><sup>+</sup> / NH<sub>3</sub></td><td>9.26</td><td>8.26 – 10.26</td><td>Basic lab buffer</td></tr>
              <tr><td className="py-2">HCO<sub>3</sub><sup>–</sup> / CO<sub>3</sub><sup>2–</sup></td><td>10.33</td><td>9.33 – 11.33</td><td>Ocean carbonate chemistry</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ---------- GAME TAB — Which Buffer? ---------- */
function Game() {
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [best, setBest] = useState(() => Number(localStorage.getItem('buffer-best') || 0))

  const shuffled = useMemo(() => [...gameCards].sort(() => Math.random() - 0.5), [])
  const total = 8
  const card = shuffled[round % shuffled.length]

  const choose = (i) => {
    if (picked !== null) return
    setPicked(i)
    if (i === card.answer) setScore(s => s + 1)
  }

  const next = () => {
    setPicked(null)
    if (round + 1 >= total) {
      if (score > best) { setBest(score); localStorage.setItem('buffer-best', score) }
    }
    setRound(r => r + 1)
  }

  const reset = () => { setRound(0); setScore(0); setPicked(null) }

  if (round >= total) {
    const stars = score >= 7 ? '⭐⭐⭐' : score >= 5 ? '⭐⭐' : score >= 3 ? '⭐' : ''
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
          <div className="text-lg font-extrabold text-slate-900">🛡️ Which Buffer?</div>
          <div className="text-sm text-slate-600">Pick the right buffer for the target pH.</div>
        </div>
        <div className="flex gap-3 text-sm">
          <div className="chip bg-brand-100 text-brand-700">Round {round+1}/{total}</div>
          <div className="chip bg-emerald-100 text-emerald-700">Score {score}</div>
          <div className="chip bg-pink-100 text-pink-700">Best {best}</div>
        </div>
      </div>

      <motion.div key={round} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card p-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-wider text-slate-500">Target</div>
          <div className="text-4xl font-extrabold text-slate-900 mt-1">pH = {card.targetPH}</div>
          <div className="text-sm text-slate-600 mt-2 italic">{card.description}</div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {card.choices.map((c, i) => {
            const isCorrect = i === card.answer
            const isPicked = picked === i
            let cls = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            if (picked !== null && isCorrect) cls = 'bg-emerald-50 border-emerald-300 text-emerald-900'
            else if (picked !== null && isPicked && !isCorrect) cls = 'bg-rose-50 border-rose-300 text-rose-900'
            return (
              <button
                key={i}
                disabled={picked !== null}
                onClick={() => choose(i)}
                className={`text-left px-4 py-3 rounded-xl border font-medium transition ${cls}`}
              >
                <span className="font-bold mr-2">{String.fromCharCode(65+i)}.</span>{c}
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
export default function BufferSolutions() {
  return (
    <TopicShell
      topicId="buffers"
      title="Buffer Solutions"
      subtitle="How blood stays at pH 7.4 and the Henderson–Hasselbalch equation that explains it."
      emoji="🛡️"
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
