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

export default function ClientTicker() {
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
              className="flex items-center justify-center mx-8"
              style={{ minWidth: '140px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-25 w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}