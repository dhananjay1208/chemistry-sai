import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ChapterRedox from './pages/ChapterRedox.jsx'
import OxidationNumber from './pages/topics/OxidationNumber.jsx'
import StockNotation from './pages/topics/StockNotation.jsx'
import BalancingRedox from './pages/topics/BalancingRedox.jsx'
import EquivalentMass from './pages/topics/EquivalentMass.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redox" element={<ChapterRedox />} />
        <Route path="/redox/oxidation-number" element={<OxidationNumber />} />
        <Route path="/redox/stock-notation" element={<StockNotation />} />
        <Route path="/redox/balancing" element={<BalancingRedox />} />
        <Route path="/redox/equivalent-mass" element={<EquivalentMass />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}
