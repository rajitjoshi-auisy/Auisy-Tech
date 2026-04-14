import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/pages/home'
import DomainPage from '@/pages/domain'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains/:slug" element={<DomainPage />} />
      </Routes>
    </>
  )
}

export default App
