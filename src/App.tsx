import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { BrandStrip } from './components/BrandStrip'
import { Footer } from './components/Footer'
import { FeasibilityPage } from './pages/Feasibility'
import { HomePage } from './pages/Home'
import ImpactPage, { ImpactPage as NamedImpactPage } from './pages/Impact'
import TeamPage, { TeamPage  as NamedTeamPage} from './pages/Team'
import { ModelPage } from './pages/Model'
import { NotFoundPage } from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function AppShell() {
  const location = useLocation()
  return (
    <div className="appShell">
      <BrandStrip />
      <main className="main">
        <div className="pageTransition" key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/model" element={<ModelPage />} />
            <Route path="/feasibility" element={<FeasibilityPage />} />
            <Route path="/impact" element={<NamedImpactPage />} />
            <Route path="/team" element={<NamedTeamPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  )
}
