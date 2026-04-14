import { Link, useLocation, useNavigate } from 'react-router-dom'
import { domains } from '@/data/domains'

const quickLinks = [
  { label: 'Home', target: 'home' },
  { label: 'Our Expertise', target: 'expertise' },
  { label: 'Agile Operations', target: 'how-we-operate' },
  { label: 'Success Stories', target: 'success-stories' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleScrollLink = (target: string) => {
    if (!isHome) {
      navigate('/', { state: { scrollTo: target } })
      return
    }
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(target)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-white">Auisy</span>
              <span className="text-orange-500">Tech</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Empowering businesses with lightning-fast, scalable, and secure technology solutions. We build the future of enterprise software.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/auisytech/" target="_blank" rel="noopener noreferrer"
  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
</a>
<a href="https://www.twitter.com/auisytechnologies" target="_blank" rel="noopener noreferrer"
  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
</a>
<a href="https://www.facebook.com/auisytechnologies" target="_blank" rel="noopener noreferrer"
  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <button
                    onClick={() => handleScrollLink(l.target)}
                    className="text-sm hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Domains</h4>
            <ul className="space-y-3">
              {domains.map(d => (
                <li key={d.slug}>
                  <Link
                    to={`/domains/${d.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-orange-500 mt-0.5">📍</span>
                <span>123 Tech Boulevard, Innovation District<br />Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✉️</span>
                <span>contact@auisy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Auisy Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}