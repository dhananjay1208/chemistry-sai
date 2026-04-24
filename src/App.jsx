import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ChapterRedox from './pages/ChapterRedox.jsx'
import OxidationNumber from './pages/topics/OxidationNumber.jsx'
import StockNotation from './pages/topics/StockNotation.jsx'
import BalancingRedox from './pages/topics/BalancingRedox.jsx'
import EquivalentMass from './pages/topics/EquivalentMass.jsx'
import ChapterEquilibrium from './pages/ChapterEquilibrium.jsx'
import IonicEquilibrium from './pages/topics/IonicEquilibrium.jsx'
import PhDetermination from './pages/topics/PhDetermination.jsx'
import Hydrolysis from './pages/topics/Hydrolysis.jsx'
import CommonIonEffect from './pages/topics/CommonIonEffect.jsx'
import BufferSolutions from './pages/topics/BufferSolutions.jsx'
import Solubility from './pages/topics/Solubility.jsx'

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
        <Route path="/equilibrium" element={<ChapterEquilibrium />} />
        <Route path="/equilibrium/ionic" element={<IonicEquilibrium />} />
        <Route path="/equilibrium/ph" element={<PhDetermination />} />
        <Route path="/equilibrium/hydrolysis" element={<Hydrolysis />} />
        <Route path="/equilibrium/common-ion" element={<CommonIonEffect />} />
        <Route path="/equilibrium/buffers" element={<BufferSolutions />} />
        <Route path="/equilibrium/solubility" element={<Solubility />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}
