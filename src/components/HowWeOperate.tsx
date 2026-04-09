const steps = [
  { title: 'Discovery & Alignment', desc: 'Understanding your vision and aligning technology with business goals.' },
  { title: 'Sprint Execution', desc: 'Iterative development with regular feedback loops for maximum value.' },
  { title: 'Review & Adapt', desc: 'Continuous monitoring and adaptation to changing market needs.' },
]

export default function HowWeOperate() {
  return (
    <section id="how-we-operate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          <div>
            <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">How We Operate</p>
            <h2 className="text-4xl font-black text-gray-900 mb-5">Agile Delivery Excellence</h2>
            <p className="text-gray-500 mb-8">
              We transform your workflow with our Agile IT Services. Our approach ensures rapid delivery, continuous improvement, and measurable outcomes, keeping your business ahead of the curve.
            </p>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{step.title}</p>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}