import { useState } from 'react'

const partners = [
  { name: 'AWS', logo: '/images/partners/aws1.png' },
  { name: 'Google', logo: '/images/partners/google2.png' },
  { name: 'Oracle', logo: '/images/partners/oracle1.png' },
  { name: 'Google Cloud', logo: '/images/partners/cloud.jpeg' },
  { name: 'Adobe', logo: '/images/partners/adobe.png' },
  { name: 'Figma', logo: '/images/partners/figma.png' },
  { name: 'Atlassian', logo: '/images/partners/atlassian.png' },
  { name: 'Apple', logo: '/images/partners/apple.png' },
]

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Our Partners</p>
          <h2 className="text-4xl font-black text-gray-900">Collaborating with Industry Leaders</h2>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all duration-200 ${
                hoveredIndex === i
                  ? 'border-orange-400 shadow-md bg-white'
                  : 'border-gray-100 bg-gray-50'
              }`}
              style={{ height: '120px' }}
            >
              <div className="flex items-center justify-center" style={{ height: '60px', width: '100px' }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ maxHeight: '50px', maxWidth: '90px', objectFit: 'contain' }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-600 mt-2">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}