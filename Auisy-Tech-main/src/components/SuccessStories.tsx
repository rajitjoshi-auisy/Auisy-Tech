const stories = [
  {
    tag: 'Financial Services',
    title: 'High-Frequency Trading Platform',
    desc: 'Developed a robust trading platform for Angel One Limited, capable of handling millions of transactions with sub-millisecond latency, ensuring seamless execution during peak market hours.',
    stats: [{ label: 'Concurrent Users', value: '1M+' }, { label: 'Latency', value: '<1ms' }],
  },
  {
    tag: 'Insurance',
    title: 'Automated Claims Processing',
    desc: 'Implemented an AI-driven claims processing system for ManipalCigna, automating data extraction and validation, significantly reducing manual effort and accelerating settlement times.',
    stats: [{ label: 'Manual Effort Reduced', value: '75%' }, { label: 'Faster Settlements', value: '3x' }],
  },
]

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Success Stories</p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Driving Real Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how we've helped industry leaders transform their operations and achieve unprecedented growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <div
              key={story.title}
              className="rounded-2xl p-7 border border-gray-200 bg-white hover:border-orange-500 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="mb-5">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {story.tag}
                </span>
              </div>
              <h3 className="text-gray-900 text-xl font-black mb-3">{story.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{story.desc}</p>
              <div className="flex gap-8">
                {story.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-orange-500 text-2xl font-black">{stat.value}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}