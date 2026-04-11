import { useState } from 'react'
import { ChevronDown, ChevronUp, Calculator } from 'lucide-react'

export default function NumericalList({ problems, title = 'Worked Numericals' }) {
  const [open, setOpen] = useState({})
  const toggle = (i) => setOpen(o => ({ ...o, [i]: !o[i] }))
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Calculator size={20} className="text-brand-600"/> {title}</h2>
      {problems.map((p, i) => (
        <div key={i} className="card p-5">
          <button onClick={() => toggle(i)} className="w-full flex items-start justify-between gap-3 text-left">
            <div className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-lg bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-sm">#{i+1}</span>
              <div>
                <div className="font-semibold text-slate-900" dangerouslySetInnerHTML={{ __html: p.q }} />
                {p.tag && <span className="chip bg-violet-100 text-violet-700 mt-2">{p.tag}</span>}
              </div>
            </div>
            {open[i] ? <ChevronUp className="text-slate-500 shrink-0" size={20}/> : <ChevronDown className="text-slate-500 shrink-0" size={20}/>}
          </button>
          {open[i] && (
            <div className="mt-4 pl-10 space-y-2 text-sm">
              {p.steps.map((s, si) => (
                <div key={si} className="flex gap-2">
                  <span className="text-brand-600 font-bold">{si+1}.</span>
                  <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: s }} />
                </div>
              ))}
              <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
                ✅ Answer: <span dangerouslySetInnerHTML={{ __html: p.answer }} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
