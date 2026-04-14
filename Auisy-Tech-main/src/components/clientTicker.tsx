const clients = [
  { name: 'RPG', logo: '/images/clients/rpg copy.png' },
  { name: 'Cigna TTK', logo: '/images/clients/Cigna_TTK copy.png' },
  { name: 'Angel Broking', logo: '/images/clients/Angle_broking copy.png' },
  { name: 'Amaravati Municipal Corporation', logo: '/images/clients/amaravati.png' },
  { name: 'IndiaFirst Life Insurance', logo: '/images/clients/Indiafirst_Life_Insurance copy.png' },
  { name: 'Care Ratings', logo: '/images/clients/Care_ratings copy.png' },
  { name: 'Mira Bhaindar Municipal Corporation', logo: '/images/clients/Mira_Bhaindar_Muncipal_Corporation copy.png' },
]

// Duplicate for seamless infinite scroll
const allClients = [...clients, ...clients]

import { useState } from 'react';

export default function ClientTicker() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 20s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">Trusted By</p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="ticker-track">
          {allClients.map((client, i) => (
  <div
    key={i}
    onMouseEnter={() => { setHoveredIndex(i); }}
    onMouseLeave={() => { setHoveredIndex(null); }}
    className="relative flex items-center justify-center mx-4 cursor-pointer rounded-xl overflow-hidden"
    style={{ minWidth: '160px', height: '90px' }}
  >
    {/* Logo */}
    <img
      src={client.logo}
      alt={client.name}
      className="w-32 object-contain transition-all duration-300"
      style={{
        opacity: hoveredIndex === i ? 0.1 : 1,
        transform: hoveredIndex === i ? 'scale(0.9)' : 'scale(1)',
        height: '60px',
      }}
    />

    {/* Dark overlay + name on hover */}
    <div
      className="absolute inset-0 flex items-center justify-center px-3 rounded-xl transition-all duration-300"
      style={{
        background: hoveredIndex === i ? 'rgba(255, 119, 0, 0.5)' : 'transparent',
        opacity: hoveredIndex === i ? 1 : 0,
      }}
    >
      <span className="text-black font-semibold text-xs text-center leading-tight">
        {client.name}
      </span>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  )
}