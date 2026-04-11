import { Lightbulb, AlertTriangle, Info, Sparkles } from 'lucide-react'

const styles = {
  tip:     { icon: Lightbulb,      bg: 'bg-amber-50',  br: 'border-amber-200',  tx: 'text-amber-900',  it: 'text-amber-600',  label: 'Tip' },
  warn:    { icon: AlertTriangle,  bg: 'bg-rose-50',   br: 'border-rose-200',   tx: 'text-rose-900',   it: 'text-rose-600',   label: 'Common Mistake' },
  info:    { icon: Info,           bg: 'bg-sky-50',    br: 'border-sky-200',    tx: 'text-sky-900',    it: 'text-sky-600',    label: 'Note' },
  trick:   { icon: Sparkles,       bg: 'bg-violet-50', br: 'border-violet-200', tx: 'text-violet-900', it: 'text-violet-600', label: 'NEET Trick' },
}

export default function Callout({ type = 'tip', title, children }) {
  const s = styles[type] || styles.tip
  const Icon = s.icon
  return (
    <div className={`rounded-2xl border ${s.br} ${s.bg} p-4 sm:p-5 my-3`}>
      <div className="flex items-start gap-3">
        <Icon className={`${s.it} shrink-0 mt-0.5`} size={20} />
        <div className={`${s.tx} text-sm leading-relaxed`}>
          <div className="font-bold mb-1">{title || s.label}</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
