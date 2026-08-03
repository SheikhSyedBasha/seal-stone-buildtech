import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const points = [
  { icon: 'fa-helmet-safety',  title: 'Expert Engineers',  text: 'Experienced professionals delivering effective solutions for every project.' },
  { icon: 'fa-book-open',      title: 'NBC Standards',     text: 'Quality design strictly as per National Building Code.' },
  { icon: 'fa-ruler-combined', title: 'IS Code Practice',  text: 'Follow IS Standard Code of Practice for all design and execution.' },
  { icon: 'fa-gem',            title: 'Best Materials',    text: 'Best material and workmanship throughout the project lifecycle.' },
  { icon: 'fa-microchip',      title: 'New Technology',    text: 'Cost-effective modern technology in detailing and execution.' },
  { icon: 'fa-file-signature', title: 'On-Time Delivery',  text: 'Handover on schedule with all signed documents. No delays.' },
]

function PointCard({ p, index }) {
  const r = useScrollAnimation({ y: 16, delay: index * 0.05 })
  return (
    <div ref={r}
      className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-white transition-all duration-200 group"
    >
      <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-green-600 flex items-center justify-center flex-shrink-0 border border-gray-100 transition-colors duration-200">
        <i className={`fa-solid ${p.icon} text-green-600 group-hover:text-white text-xs transition-colors duration-200`} />
      </div>
      <div>
        <h4 className="font-700 text-gray-800 text-xs mb-0.5">{p.title}</h4>
        <p className="text-gray-400 text-[11px] leading-relaxed">{p.text}</p>
      </div>
    </div>
  )
}

export default function About() {
  const left  = useScrollAnimation({ x: -30, delay: 0.1 })
  const right = useScrollAnimation({ x:  30, delay: 0.15 })

  return (
    <section id="about" className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left — image + stats */}
          <div ref={left} className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85&auto=format&fit=crop"
                alt="Vertex Infra team at work"
                className="w-full h-56 lg:h-64 object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-house-chimney text-green-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-700 text-gray-900 text-xs">"We turn blueprints into homes families love"</p>
                    <p className="text-green-600 text-[11px] font-600">— Seal Stone Buildtech Promise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[['2015','Founded'],['200+','Projects'],['150+','Families'],['15+','Engineers']].map(([n,l]) => (
                <div key={l} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                  <div className="text-base font-900 text-green-600">{n}</div>
                  <div className="text-gray-400 text-[10px] font-600 tracking-wide uppercase">{l}</div>
                </div>
              ))}
            </div>

            {/* Founder quote */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl px-4 py-3">
              <p className="text-green-900 text-xs leading-relaxed italic">
                "Every family deserves a home built with honesty, quality and care — from the first drawing to the final handover."
              </p>
              <p className="text-green-700 text-[11px] font-700 mt-1.5">— Vinay Kumar S, Proprietor & Structural Engineer</p>
            </div>
          </div>

          {/* Right — heading + feature grid */}
          <div ref={right}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-heading mb-3">
              Your Dream Home, <span>Built with Heart</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Founded in 2015, Seal Stone Buildtech delivers <strong className="text-gray-700 font-700">transparent and efficient</strong> construction, development and infrastructure solutions through all phases — from concept to handover.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {points.map((p, i) => (
                <PointCard key={p.title} p={p} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
