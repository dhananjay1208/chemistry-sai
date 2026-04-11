import { useState } from 'react'
import { motion } from 'framer-motion'
import TopicShell from '../../components/TopicShell.jsx'
import MCQList from '../../components/MCQList.jsx'
import Callout from '../../components/Callout.jsx'
import { mcqs, pyqs } from '../../data/stockNotation.js'
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react'

const ROMAN = ['0','I','II','III','IV','V','VI','VII','VIII']
const toRoman = n => n >= 0 && n < ROMAN.length ? ROMAN[n] : String(n)

function Concept() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">What is Stock Notation?</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          <strong>Stock notation</strong> (proposed by Alfred Stock, 1919) is the modern IUPAC way to show the
          <strong> oxidation state</strong> of an element inside a compound's name using a <strong>Roman numeral in parentheses</strong> right after the element symbol.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-brand-50 border border-brand-100">
          <div className="text-xs font-bold text-brand-700 uppercase">Format</div>
          <div className="text-2xl font-mono mt-1">Element(<span className="text-brand-700">Roman numeral</span>)</div>
          <div className="text-sm text-slate-600 mt-2">Examples: Fe(II), Fe(III), Mn(VII), Cr(VI), Cu(I), Cu(II), Sn(IV), Au(III)…</div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">Why do we need it?</h3>
        <p className="text-slate-700 mt-1">
          Many transition metals (and p-block elements) show <strong>multiple oxidation states</strong>. Without Stock notation
          we can't tell them apart. <br/>
          Compare: <strong>FeCl<sub>2</sub></strong> vs <strong>FeCl<sub>3</sub></strong> — both are "iron chloride", but the first has Fe(II) and the second Fe(III).
        </p>
      </div>

      <div className="card p-6 overflow-x-auto">
        <h3 className="font-extrabold text-slate-900 mb-3">Common examples</h3>
        <table className="w-full text-sm">
          <thead className="text-slate-500 border-b">
            <tr><th className="text-left p-2">Formula</th><th className="text-left p-2">O.N.</th><th className="text-left p-2">Stock Name</th><th className="text-left p-2">Old name</th></tr>
          </thead>
          <tbody className="divide-y">
            {[
              ['FeCl₂', '+2', 'Iron(II) chloride', 'Ferrous chloride'],
              ['FeCl₃', '+3', 'Iron(III) chloride', 'Ferric chloride'],
              ['CuO',   '+2', 'Copper(II) oxide', 'Cupric oxide'],
              ['Cu₂O',  '+1', 'Copper(I) oxide', 'Cuprous oxide'],
              ['SnCl₂', '+2', 'Tin(II) chloride', 'Stannous chloride'],
              ['SnCl₄', '+4', 'Tin(IV) chloride', 'Stannic chloride'],
              ['KMnO₄', '+7', 'Potassium manganate(VII)', 'Potassium permanganate'],
              ['K₂Cr₂O₇','+6', 'Potassium dichromate(VI)', 'Potassium dichromate'],
              ['HgCl₂', '+2', 'Mercury(II) chloride', 'Mercuric chloride'],
              ['Hg₂Cl₂','+1', 'Mercury(I) chloride', 'Mercurous (calomel)'],
            ].map(r => (
              <tr key={r[0]}><td className="p-2 font-mono">{r[0]}</td><td className="p-2 font-bold text-brand-700">{r[1]}</td><td className="p-2">{r[2]}</td><td className="p-2 text-slate-500 italic">{r[3]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="tip" title="Quick rules">
        <ul className="list-disc list-inside space-y-1">
          <li>Roman numerals: I=1, II=2, III=3, IV=4, V=5, VI=6, VII=7, VIII=8.</li>
          <li>Put the numeral <strong>right after</strong> the symbol, no space, in parentheses.</li>
          <li>If an element has only <strong>one common O.N.</strong> (Na, K, Ca, Al…), you can skip the Roman numeral.</li>
          <li>Use Stock notation mainly for transition metals and p-block elements with variable O.N.</li>
        </ul>
      </Callout>
    </div>
  )
}

function Visualize() {
  const pairs = [
    { a: ['FeCl₂', 'Fe(II)Cl₂', '+2', 'Ferrous'], b: ['FeCl₃', 'Fe(III)Cl₃', '+3', 'Ferric'] },
    { a: ['CuCl',  'Cu(I)Cl',   '+1', 'Cuprous'], b: ['CuCl₂', 'Cu(II)Cl₂', '+2', 'Cupric'] },
    { a: ['SnO',   'Sn(II)O',   '+2', 'Stannous'], b: ['SnO₂', 'Sn(IV)O₂', '+4', 'Stannic'] },
    { a: ['HgCl',  'Hg(I)Cl (actually Hg₂Cl₂)', '+1', 'Mercurous'], b: ['HgCl₂', 'Hg(II)Cl₂', '+2', 'Mercuric'] },
  ]
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <h2 className="text-xl font-extrabold text-slate-900">Two oxidation states, side by side</h2>
        <p className="text-slate-600 mt-1 text-sm">Stock notation shines when an element has more than one common O.N.</p>
        <div className="mt-4 grid gap-3">
          {pairs.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i*0.06 }} className="grid sm:grid-cols-2 gap-3">
              {[p.a, p.b].map((v, j) => (
                <div key={j} className={`rounded-2xl p-4 border ${j===0 ? 'bg-sky-50 border-sky-200' : 'bg-violet-50 border-violet-200'}`}>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">{v[0]}</div>
                  <div className={`text-xs font-bold uppercase mt-1 ${j===0 ? 'text-sky-700' : 'text-violet-700'}`}>O.N. = {v[2]}</div>
                  <div className="mt-2 text-sm">Stock: <strong>{v[1]}</strong></div>
                  <div className="text-xs italic text-slate-500 mt-1">Old name: {v[3]}</div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-extrabold text-slate-900">Roman numeral cheat strip</h3>
        <div className="mt-3 grid grid-cols-4 sm:grid-cols-8 gap-2">
          {['I','II','III','IV','V','VI','VII','VIII'].map((r, i) => (
            <div key={r} className="rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 text-white p-3 text-center">
              <div className="text-2xl font-extrabold">{r}</div>
              <div className="text-xs opacity-90">= {i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Game() {
  // Match formula -> Stock notation roman numeral
  const pool = [
    { f: 'FeCl₃',   on: 3 },
    { f: 'CuO',     on: 2 },
    { f: 'SnCl₂',   on: 2 },
    { f: 'KMnO₄',   on: 7 },
    { f: 'K₂Cr₂O₇', on: 6 },
    { f: 'HgCl₂',   on: 2 },
    { f: 'PbO₂',    on: 4 },
    { f: 'Au₂O₃',   on: 3 },
    { f: 'MnO',     on: 2 },
    { f: 'Fe₂O₃',   on: 3 },
  ]
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)

  const curr = pool[idx]
  const choices = [2,3,4,6,7]
  const submit = (c) => {
    if (picked !== null) return
    setPicked(c)
    if (c === curr.on) setScore(s => s + 1)
  }
  const next = () => { setPicked(null); setIdx(i => i + 1) }
  const reset = () => { setIdx(0); setPicked(null); setScore(0) }

  if (idx >= pool.length) {
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl">🏆</div>
        <div className="text-2xl font-extrabold text-slate-900 mt-2">You scored {score} / {pool.length}</div>
        <button onClick={reset} className="btn-primary mt-4"><RefreshCw size={16}/> Play again</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="card p-5 flex items-center justify-between">
        <div className="font-bold text-slate-900">🏷️ Name the Stock Notation</div>
        <div className="flex gap-3 text-sm">
          <span className="chip bg-brand-100 text-brand-700">{idx+1}/{pool.length}</span>
          <span className="chip bg-emerald-100 text-emerald-700">Score {score}</span>
        </div>
      </div>
      <div className="card p-8 text-center">
        <div className="text-sm text-slate-500">Pick the correct Roman numeral</div>
        <div className="text-5xl font-extrabold mt-2 font-mono">{curr.f}</div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {choices.map(c => {
            const isCorrect = picked !== null && c === curr.on
            const isWrong   = picked === c && c !== curr.on
            return (
              <button
                key={c}
                onClick={() => submit(c)}
                disabled={picked !== null}
                className={`px-5 py-3 rounded-xl text-xl font-extrabold border-2 transition ${
                  isCorrect ? 'bg-emerald-100 border-emerald-400 text-emerald-800' :
                  isWrong   ? 'bg-rose-100 border-rose-400 text-rose-800' :
                  'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                }`}
              >
                ({toRoman(c)})
              </button>
            )
          })}
        </div>
        {picked !== null && (
          <div className="mt-5">
            {picked === curr.on
              ? <div className="text-emerald-700 font-semibold flex items-center justify-center gap-2"><CheckCircle2/> Correct! {curr.f} → {curr.f.split('').slice(0,curr.f.indexOf(curr.f.match(/[A-Z]/)?.[0]||'')).join('')}({toRoman(curr.on)})</div>
              : <div className="text-rose-700 font-semibold flex items-center justify-center gap-2"><XCircle/> Answer: ({toRoman(curr.on)})</div>}
            <button onClick={next} className="btn-primary mt-3">Next →</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function StockNotation() {
  return (
    <TopicShell
      topicId="stock-notation"
      title="Stock Notation"
      subtitle="Roman numerals to show oxidation states in IUPAC names."
      emoji="🏷️"
      tabs={{
        concept:   Concept,
        visualize: Visualize,
        game:      Game,
        mcq:       () => <MCQList questions={mcqs} title="Concept-check MCQs" />,
        pyq:       () => <MCQList questions={pyqs} title="NEET-style Questions" />,
        numerical: () => <div className="card p-6 text-slate-600">Stock notation is a naming convention — see the <strong>Oxidation Number</strong> topic for numerical practice.</div>,
      }}
    />
  )
}
