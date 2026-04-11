import { Link, useLocation } from 'react-router-dom'
import { FlaskConical, Home } from 'lucide-react'

export default function Navbar() {
  const loc = useLocation()
  return (
    <header className="sticky top-0 z-30 glass border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center shadow-soft group-hover:scale-105 transition">
            <FlaskConical className="text-white" size={22} />
          </div>
          <div>
            <div className="font-display font-extrabold text-slate-900 leading-tight">Chemistry with Sai</div>
            <div className="text-[11px] text-slate-500 -mt-0.5">NEET 2026 · Interactive Prep</div>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/" className={`btn-ghost text-sm ${loc.pathname==='/' ? 'ring-2 ring-brand-300' : ''}`}>
            <Home size={16} /> Home
          </Link>
        </nav>
      </div>
    </header>
  )
}
