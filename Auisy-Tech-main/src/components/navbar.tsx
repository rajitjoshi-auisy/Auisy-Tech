import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', target: 'home' },
  { label: 'Expertise', target: 'expertise' },
  { label: 'How We Operate', target: 'how-we-operate' },
  { label: 'Success Stories', target: 'success-stories' },
]

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  const handleScroll = (label: string, target: string) => {
    setActive(label)

    if (!isHome) {
      // Navigate to home first, then scroll after render
      navigate('/', { state: { scrollTo: target } })
      return
    }

    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(target)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Handle scroll-to after navigating from another page
  useEffect(() => {
    if (isHome && location.state && (location.state as { scrollTo?: string }).scrollTo) {
      const target = (location.state as { scrollTo: string }).scrollTo
      setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const el = document.getElementById(target)
          if (el) {
            const offset = 80
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }
      }, 100)
    }
  }, [isHome, location.state])

  // highlight active link on scroll (only on home page)
  useEffect(() => {
    if (!isHome) return
    const onScroll = () => {
      const sections = navLinks.map(l => ({
        label: l.label,
        el: document.getElementById(l.target),
      }))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el
        if (!el) continue
        if (window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i].label)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer" onClick={() => handleScroll('Home', 'home')}>
          <span className="text-gray-900">Auisy</span>
          <span className="text-orange-500">Tech</span>
        </div>

        {/* Nav links pushed to right */}
        <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.label, link.target)}
              className={`text-base font-medium transition-colors ${
                active === link.label && isHome
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors">
          Schedule Consultation
        </button>
      </div>
    </nav>
  )
}
