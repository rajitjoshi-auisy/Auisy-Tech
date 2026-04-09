export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
          Innovating the Future of<br />
          <span className="text-orange-500">Enterprise Technology</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
          Empowering businesses with lightning-fast, scalable, and secure IT solutions. We deliver full-stack engineering excellence tailored to your industry's unique challenges.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-md flex items-center gap-2 transition-colors">
            Schedule a Consultation <span>→</span>
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-8 py-4 rounded-md transition-colors bg-white">
            Explore Our Domains
          </button>
        </div>
      </div>
    </section>
  )
}