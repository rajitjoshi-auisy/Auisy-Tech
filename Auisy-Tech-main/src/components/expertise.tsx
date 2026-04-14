import { useState } from 'react'
import { Link } from 'react-router-dom'
import { domains } from '@/data/domains'

const clients = [
  { name: 'RPG', logo: '/images/clients/rpg copy.png' },
  { name: 'Cigna TTK', logo: '/images/clients/Cigna_TTK copy.png' },
  { name: 'Angel Broking', logo: '/images/clients/Angle_broking copy.png' },
  { name: 'Amaravati Municipal Corporation', logo: '/images/clients/amaravati.png' },
  { name: 'IndiaFirst Life Insurance', logo: '/images/clients/Indiafirst_Life_Insurance copy.png' },
  { name: 'Care Ratings', logo: '/images/clients/Care_ratings copy.png' },
  { name: 'Mira Bhaindar Municipal Corporation', logo: '/images/clients/Mira_Bhaindar_Muncipal_Corporation copy.png' },
]
const tickerClients = [...clients, ...clients]

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const featured = domains[0]
  const rest = domains.slice(1)

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Our Expertise</p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Industry Trust & Key Domains</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We have successfully delivered solutions for leading institutions and large enterprises,
            reflecting strong trust in our delivery, security, and governance standards.
          </p>
        </div>

        {/* Featured card — large landscape */}
        <Link
          to={`/domains/${featured.slug}`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`block rounded-lg overflow-hidden border transition-all duration-200 mb-6 bg-white ${
            hoveredIndex === 0 ? 'border-orange-400 shadow-md' : 'border-gray-100 shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Text aligned to top */}
            <div className="p-8 flex flex-col justify-start">
              <h3 className={`font-bold text-3xl md:text-[34px] leading-tight mb-4 transition-colors duration-200 ${
                hoveredIndex === 0 ? 'text-orange-500' : 'text-gray-900'
              }`}>
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">{featured.tagline}</p>

              {/* Bigger stat cards */}
              <div className="flex flex-wrap gap-3 mb-6">
                {featured.stats.map(s => (
                  <div key={s.label} className="px-5 py-3 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Consistent orange button CTA */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors">
                  View More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* Mini client ticker */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Trusted By</p>
                <div className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, white, transparent)' }} />
                  <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, white, transparent)' }} />
                  <style>{`
                    @keyframes miniTicker {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .mini-ticker-track {
                      display: flex;
                      width: max-content;
                      animation: miniTicker 15s linear infinite;
                    }
                    .mini-ticker-track:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                  <div className="mini-ticker-track">
                    {tickerClients.map((client, i) => (
                      <div key={i} className="flex items-center justify-center mx-4" style={{ minWidth: '80px' }}>
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Explore CTA label */}
        <div className="text-center my-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Explore All Domains</p>
        </div>

        {/* 3x3 grid of remaining 9 domains */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {rest.map((domain, i) => {
            const idx = i + 1
            const isHovered = hoveredIndex === idx
            return (
              <Link
                key={domain.slug}
                to={`/domains/${domain.slug}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group rounded-lg overflow-hidden border transition-all duration-200 bg-white block ${
                  isHovered ? 'border-orange-400 shadow-md' : 'border-gray-100 shadow-sm'
                }`}
              >
                <div className="relative">
                  <img src={domain.image} alt={domain.title} className="w-full h-44 object-cover" />
                </div>
                <div className="p-5">
                  <h3 className={`font-bold text-lg mb-2 transition-colors duration-200 ${
                    isHovered ? 'text-orange-500' : 'text-gray-900'
                  }`}>
                    {domain.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{domain.tagline}</p>
                  <span className="text-orange-500 text-sm font-semibold group-hover:underline inline-flex items-center gap-1">
                    View Projects & Impact
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
