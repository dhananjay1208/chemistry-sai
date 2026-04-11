import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import NumericalList from '../../components/Numerical.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs, numericals, gameCards } from '../../data/oxidationNumber.js'
import { Zap, Minus, Plus, Trophy, RefreshCw, CheckCircle2, XCircle } from 'lucide-react'

/* ---------- CONCEPT TAB ---------- */
function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">What is Oxidation Number?</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          The <strong>oxidation number</strong> (O.N.) is an <em>imaginary charge</em> we assign to an atom, assuming all its bonds
          to other atoms are 100% ionic. It tells us whether an atom has <strong>lost</strong> electrons (positive number)
          or <strong>gained</strong> electrons (negative number) compared to its neutral state.
        </p>

        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
            <div className="font-bold text-rose-700 flex items-center gap-1"><Minus size={16}/> Oxidation</div>
            <div className="text-sm text-rose-900 mt-1">Loss of electrons → O.N. <strong>increases</strong></div>
            <div className="text-xs text-rose-700 mt-1 italic">Fe⁰ → Fe²⁺ + 2e⁻</div>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="font-bold text-emerald-700 flex items-center gap-1"><Plus size={16}/> Reduction</div>
            <div className="text-sm text-emerald-900 mt-1">Gain of electrons → O.N. <strong>decreases</strong></div>
            <div className="text-xs text-emerald-700 mt-1 italic">Cl₂ + 2e⁻ → 2Cl⁻</div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">🦁 The LEO–GER Mnemonic</h3>
        <p className="text-slate-700 mt-1">
          <strong>LEO the lion says GER</strong> —
          <span className="text-rose-600 font-bold"> L</span>ose <span className="text-rose-600 font-bold">E</span>lectrons = <span className="text-rose-600 font-bold">O</span>xidation ·
          <span className="text-emerald-600 font-bold"> G</span>ain <span className="text-emerald-600 font-bold">E</span>lectrons = <span className="text-emerald-600 font-bold">R</span>eduction.
        </p>
        <p className="text-slate-700 mt-2">Or use <strong>OIL RIG</strong>: <em>Oxidation Is Loss, Reduction Is Gain</em> (of electrons).</p>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">The 8 Golden Rules to Assign Oxidation Numbers</h3>
        <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal list-inside">
          <li><strong>Free elements</strong> (Na, O₂, H₂, S₈, Cl₂…) ⇒ O.N. = <strong>0</strong>.</li>
          <li><strong>Monoatomic ions</strong> = their charge. Na⁺ ⇒ +1, S²⁻ ⇒ –2.</li>
          <li><strong>Group 1 metals</strong> (Na, K, Li…) ⇒ always +1. <strong>Group 2</strong> (Mg, Ca…) ⇒ +2.</li>
          <li><strong>Fluorine</strong> is always <strong>–1</strong> (most electronegative element).</li>
          <li><strong>Hydrogen</strong> = +1 (with non-metals) and –1 (with metals — ionic hydrides like NaH, CaH₂).</li>
          <li><strong>Oxygen</strong> = –2 normally.  Exceptions: –1 in peroxides (H₂O₂), –½ in superoxides (KO₂), and <em>+2 in OF₂</em>.</li>
          <li>In a <strong>neutral compound</strong>, sum of all O.N. = <strong>0</strong>.</li>
          <li>In a <strong>polyatomic ion</strong>, sum of O.N. = <strong>charge of the ion</strong>.</li>
        </ol>
      </div>

      <Callout type="trick" title="NEET Trick: Work from the outside in">
        Always write down what you <em>know</em> first (K = +1, O = –2, Cl = –1…) and leave the mystery element as
        <em> x</em>. Then sum to 0 (compound) or the ion's charge. Solve for x. 95% of NEET O.N. questions follow this pattern.
      </Callout>

      <Callout type="warn" title="Top traps NEET loves">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>H₂O₂ → O = –1</strong> (peroxide), not –2.</li>
          <li><strong>OF₂ → O = +2</strong> (F is more electronegative).</li>
          <li><strong>CrO₅ → Cr = +6</strong> (four peroxide O's, not +10!).</li>
          <li><strong>Fe₃O₄</strong> → average Fe = +8/3 (mixed oxide of FeO·Fe₂O₃).</li>
          <li><strong>NH₄NO₃</strong> → two different N environments; split into ions first.</li>
        </ul>
      </Callout>
    </div>
  )
}

/* ---------- VISUALIZE TAB ---------- */
function Visualize() {
  const [step, setStep] = useState(0)
  const steps = [
    { k: 'H₂SO₄', expr: '2(+1) + x + 4(–2) = 0', sol: 'x = +6', note: 'K = +1 rule + O = –2 rule' },
    { k: 'KMnO₄', expr: '(+1) + x + 4(–2) = 0', sol: 'x = +7', note: 'Highest O.N. of Mn' },
    { k: 'K₂Cr₂O₇', expr: '2(+1) + 2x + 7(–2) = 0', sol: '2x = 12 ⇒ x = +6', note: 'Remember the 2 in front of Cr!' },
    { k: 'H₂O₂', expr: '2(+1) + 2(x) = 0', sol: 'x = –1', note: 'Peroxide exception' },
    { k: 'CrO₅', expr: 'x + 4(–1) + (–2) = 0', sol: 'x = +6', note: 'Four peroxide O\'s — the classic trap' },
  ]
  const curr = steps[step]
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2"><Zap className="text-brand-600" size={22}/>Oxidation-Number Calculator — Walkthrough</h2>
        <p className="text-slate-600 mt-1 text-sm">Click <em>Next</em> to see each example solved step by step.</p>

        <div className="mt-5 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 p-6 border border-brand-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs font-bold text-brand-700 uppercase tracking-wider">Example {step+1} of {steps.length}</div>
              <div className="mt-1 text-4xl font-extrabold text-slate-900">{curr.k}</div>
              <div className="mt-4 text-slate-700">Step 1 — Set up the equation:</div>
              <div className="mt-1 text-2xl font-mono text-brand-700">{curr.expr}</div>
              <div className="mt-4 text-slate-700">Step 2 — Solve:</div>
              <div className="mt-1 text-2xl font-mono text-emerald-700 font-bold">{curr.sol}</div>
              <div className="mt-4 text-sm italic text-slate-600">💡 {curr.note}</div>
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
        <h3 className="font-extrabold text-slate-900">📊 Oxidation-State Ladder for key elements</h3>
        <p className="text-sm text-slate-600 mt-1">A visual map of common oxidation numbers you'll meet in NEET.</p>
        <div className="mt-4 space-y-3">
          {[
            { el: 'Mn', vals: [-3, 2, 3, 4, 6, 7], hi: [2, 4, 7] },
            { el: 'Cr', vals: [2, 3, 6], hi: [3, 6] },
            { el: 'N',  vals: [-3, -2, -1, 0, 1, 2, 3, 4, 5], hi: [-3, 3, 5] },
            { el: 'S',  vals: [-2, 0, 2, 4, 6], hi: [-2, 4, 6] },
            { el: 'Cl', vals: [-1, 0, 1, 3, 5, 7], hi: [-1, 5, 7] },
          ].map(row => (
            <div key={row.el} className="flex items-center gap-3">
              <div className="w-10 font-bold text-slate-900">{row.el}</div>
              <div className="flex-1 grid grid-cols-11 gap-1">
                {Array.from({length: 11}, (_, i) => i - 3).map(v => {
                  const present = row.vals.includes(v)
                  const important = row.hi.includes(v)
                  return (
                    <div
                      key={v}
                      className={`h-7 rounded text-[11px] flex items-center justify-center font-bold ${
                        !present ? 'bg-slate-100 text-slate-300' :
                        important ? 'bg-gradient-to-b from-brand-500 to-pink-500 text-white' :
                        'bg-brand-100 text-brand-700'
                      }`}
                      title={`${row.el} = ${v >= 0 ? '+' + v : v}`}
                    >
                      {v >= 0 ? '+'+v : v}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs text-slate-500 mt-3">Bold coloured cells = most common / exam-important states.</div>
      </div>
    </div>
  )
}

/* ---------- GAME TAB — Oxidation Number Detective ---------- */
function Game() {
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(null) // 'correct' | 'wrong' | null
  const [streak, setStreak] = useState(0)
  const [best, setBest] = useState(() => Number(localStorage.getItem('oxnum-best') || 0))

  const shuffled = useMemo(() => [...gameCards].sort(() => Math.random() - 0.5), [])
  const total = 10
  const card = shuffled[round % shuffled.length]

  const submit = () => {
    const val = Number(input)
    if (Number.isNaN(val)) return
    if (val === card.answer) {
      setFeedback('correct')
      setScore(s => s + 1)
      setStreak(s => s + 1)
    } else {
      setFeedback('wrong')
      setStreak(0)
    }
  }

  const next = () => {
    setFeedback(null)
    setInput('')
    if (round + 1 >= total) {
      const final = score + (feedback === 'correct' ? 0 : 0)
      if (final > best) {
        setBest(final)
        localStorage.setItem('oxnum-best', final)
      }
    }
    setRound(r => r + 1)
  }

  const reset = () => {
    setRound(0); setScore(0); setStreak(0); setInput(''); setFeedback(null)
  }

  if (round >= total) {
    const final = score
    const stars = final >= 9 ? '⭐⭐⭐' : final >= 7 ? '⭐⭐' : final >= 5 ? '⭐' : ''
    return (
      <div className="card p-8 text-center">
        <Trophy className="mx-auto text-amber-500 mb-2" size={48}/>
        <div className="text-2xl font-extrabold text-slate-900">Game over!</div>
        <div className="text-6xl font-extrabold text-brand-600 mt-3">{final} / {total}</div>
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
          <div className="text-lg font-extrabold text-slate-900">🔎 Oxidation Number Detective</div>
          <div className="text-sm text-slate-600">Find the oxidation number of the highlighted element. 10 rounds.</div>
        </div>
        <div className="flex gap-3 text-sm">
          <div className="chip bg-brand-100 text-brand-700">Round {round+1}/{total}</div>
          <div className="chip bg-emerald-100 text-emerald-700">Score {score}</div>
          <div className="chip bg-amber-100 text-amber-700">🔥 {streak}</div>
          <div className="chip bg-pink-100 text-pink-700">Best {best}</div>
        </div>
      </div>

      <motion.div
        key={round}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-10 text-center"
      >
        <div className="text-sm text-slate-500 mb-2">What is the oxidation number of <span className="font-bold text-brand-700">{card.element}</span> in</div>
        <div className="text-6xl font-extrabold text-slate-900 tracking-tight">{card.formula}</div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <input
            type="number"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !feedback) submit(); else if (e.key === 'Enter' && feedback) next() }}
            disabled={!!feedback}
            placeholder="e.g. 6 or -2"
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
                <div className="flex items-center justify-center gap-2"><CheckCircle2/> Correct! {card.element} = {card.answer >= 0 ? '+' + card.answer : card.answer}</div>
              ) : (
                <div className="flex items-center justify-center gap-2"><XCircle/> Not quite. Correct answer: {card.element} = {card.answer >= 0 ? '+' + card.answer : card.answer}</div>
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
export default function OxidationNumber() {
  return (
    <TopicShell
      topicId="oxidation-number"
      title="Oxidation Number"
      subtitle="The hypothetical charge that tells who lost and who gained electrons."
      emoji="🔢"
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
