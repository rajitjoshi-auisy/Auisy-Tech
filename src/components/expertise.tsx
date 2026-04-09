import { useState } from 'react'

const domains = [
  {
    title: 'Regulators',
    description: 'Empowering regulatory bodies with robust, secure, and transparent...',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=250&fit=crop',
  },
  {
    title: 'Financial Services',
    description: 'Driving digital transformation in financial services with scalable and innovative...',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
  },
  {
    title: 'Insurance',
    description: 'Modernizing insurance operations with intelligent automation and customer-...',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
  },
  {
    title: 'Healthcare',
    description: 'Enhancing patient care and operational efficiency through cutting-edge...',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=250&fit=crop',
  },
  {
    title: 'Industrial Conglomerate',
    description: 'Optimizing industrial processes and supply chains with robust enterprise...',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
  },
  {
    title: 'Telecommunications',
    description: 'Enabling seamless connectivity and superior customer experiences in the...',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
  },
  {
    title: 'Government Bodies',
    description: 'Delivering secure, scalable, and citizen-centric digital solutions for government...',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=250&fit=crop',
  },
]

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain, i) => {
            const isHovered = hoveredIndex === i
            return (
              <div
                key={domain.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`rounded-2xl overflow-hidden border transition-all duration-200 cursor-pointer bg-white ${
                  isHovered
                    ? 'border-orange-400 shadow-md'
                    : 'border-gray-100 shadow-sm'
                }`}
              >
                <div className="relative">
                  {domain.image ? (
                    <img src={domain.image} alt={domain.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gray-100" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className={`font-bold text-lg mb-2 transition-colors duration-200 ${
                    isHovered ? 'text-orange-500' : 'text-gray-900'
                  }`}>
                    {domain.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{domain.description}</p>
                  <button className="text-orange-500 text-sm font-semibold hover:underline">
                    View Projects & Impact &gt;
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}