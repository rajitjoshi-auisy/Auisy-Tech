import { useState } from 'react'

const partners = [
  { name: 'AWS', logo: '/images/partners/aws1.png' },
  { name: 'Google', logo: '/images/partners/google2.png' },
  { name: 'Oracle', logo: '/images/partners/oracle1.png' },
  { name: 'Intel Software Partner', logo: '/images/partners/intel1.png' },
  { name: 'Google Cloud', logo: '/images/partners/cloud.jpeg' },
]

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Our Partners</p>
          <h2 className="text-4xl font-black text-gray-900">Collaborating with Industry Leaders</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex flex-col items-center justify-center p-5 rounded-xl border text-center gap-3 cursor-pointer transition-all duration-200 ${
                hoveredIndex === i
                  ? 'border-orange-400 shadow-md bg-white'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              {partner.logo ? (
                <img
  src={partner.logo}
  alt={partner.name}
  className="h-20 w-auto object-contain"
/>
              ) : (
                <div className="w-30 h-30 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-400 font-bold">
                  ST
                </div>
              )}
              <span className="text-xs font-semibold text-gray-600">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}