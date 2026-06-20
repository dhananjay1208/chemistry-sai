import { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MCQList({ questions, title = 'Quick Check MCQs', accent = 'brand' }) {
  const [answers, setAnswers] = useState({}) // idx -> choice
  const [revealed, setRevealed] = useState({})

  const pick = (qi, ci) => {
    if (revealed[qi]) return
    setAnswers(a => ({ ...a, [qi]: ci }))
    setRevealed(r => ({ ...r, [qi]: true }))
  }

  const reset = () => { setAnswers({}); setRevealed({}) }

  const correctCount = Object.entries(revealed).filter(([qi]) => answers[qi] === questions[qi].answer).length
  const attempted = Object.keys(revealed).length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <div className="flex items-center gap-3">
          <span className="chip bg-emerald-100 text-emerald-700">✓ {correctCount} / {questions.length}</span>
          <button onClick={reset} className="btn-ghost text-xs"><RotateCcw size={14}/> Reset</button>
        </div>
      </div>

      {questions.map((q, qi) => {
        const picked = answers[qi]
        const shown = revealed[qi]
        const isPaper = /\[Paper/i.test(q.q)
        const displayQ = q.q.replace(/^\s*<b>\[Paper[^\]]*\]<\/b>\s*/i, '')
        return (
          <motion.div
            key={qi}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: qi * 0.03 }}
            className={`card p-5 ${isPaper ? 'ring-2 ring-amber-400 bg-amber-50/40' : ''}`}
          >
            {isPaper && (
              <div className="mb-2"><span className="chip bg-amber-200 text-amber-900">📄 From your question paper</span></div>
            )}
            <div className="flex items-start gap-3 mb-3">
              <span className="shrink-0 w-7 h-7 rounded-lg bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-sm">Q{qi+1}</span>
              <div className="font-semibold text-slate-900" dangerouslySetInnerHTML={{ __html: displayQ }} />
            </div>
            <div className="grid sm:grid-cols-2 gap-2 pl-10">
              {q.options.map((opt, ci) => {
                const isCorrect = ci === q.answer
                const isPicked = picked === ci
                let cls = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                if (shown && isCorrect) cls = 'bg-emerald-50 border-emerald-300 text-emerald-900'
                else if (shown && isPicked && !isCorrect) cls = 'bg-rose-50 border-rose-300 text-rose-900'
                return (
                  <button
                    key={ci}
                    onClick={() => pick(qi, ci)}
                    disabled={shown}
                    className={`text-left px-3 py-2 rounded-xl border text-sm font-medium transition ${cls}`}
                  >
                    <span className="font-bold mr-1">{String.fromCharCode(65+ci)}.</span>
                    <span dangerouslySetInnerHTML={{ __html: opt }} />
                    {shown && isCorrect && <CheckCircle2 className="inline ml-1 text-emerald-600" size={14}/>}
                    {shown && isPicked && !isCorrect && <XCircle className="inline ml-1 text-rose-600" size={14}/>}
                  </button>
                )
              })}
            </div>
            {shown && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 ml-10 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700"
              >
                <span className="font-bold text-slate-900">Explanation: </span>
                <span dangerouslySetInnerHTML={{ __html: q.explain }} />
              </motion.div>
            )}
          </motion.div>
        )
      })}
      <div className="text-xs text-slate-500 text-right">Attempted {attempted} / {questions.length}</div>
    </div>
  )
}
