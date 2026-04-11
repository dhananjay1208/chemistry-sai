export default function ProgressBar({ value = 0, label }) {
  return (
    <div>
      {label && <div className="flex justify-between text-xs text-slate-500 mb-1"><span>{label}</span><span>{value}%</span></div>}
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-pink-500 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
