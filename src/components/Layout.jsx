import Navbar from './Navbar.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {children}
      </main>
      <footer className="py-6 text-center text-xs text-slate-500">
        Made with <span className="text-pink-500">♥</span> for Sai · NEET Chemistry
      </footer>
    </div>
  )
}
