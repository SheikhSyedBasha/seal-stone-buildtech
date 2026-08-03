import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const reasons = [
  { icon: 'fa-shield-halved',       title: 'IS & NBC Compliant',   desc: 'All designs strictly follow IS Standard Code of Practice and National Building Code.' },
  { icon: 'fa-clock',               title: 'On-Time Delivery',     desc: 'We commit to deadlines and hand over with all signed documents on schedule.' },
  { icon: 'fa-indian-rupee-sign',   title: 'Cost Effective',       desc: 'New and cost-effective technology keeps your project within budget without compromise.' },
  { icon: 'fa-eye',                 title: 'Full Transparency',    desc: 'Complete transparency at every phase — from concept to execution. No hidden surprises.' },
  { icon: 'fa-award',               title: 'Quality Assured',      desc: 'Best materials and workmanship throughout, monitored by senior engineers.' },
  { icon: 'fa-headset',             title: 'Dedicated Support',    desc: 'Our team is always available to answer queries and provide updates.' },
]

export default function WhyUs() {
  const badge = useScrollAnimation({ y: 20 })
  const head  = useScrollAnimation({ y: 30, delay: 0.1 })
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={badge} className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-green-500" />
          <span className="text-green-600 text-xs font-700 tracking-[0.2em] uppercase">Why Choose Us</span>
        </div>
        <h2 ref={head} className="text-gray-900 mb-8"
          style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.035em' }}
        >
          Reasons Clients<br />
          <span style={{ background: 'linear-gradient(135deg,#15803d,#16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Trust Us.
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const ref = useScrollAnimation({ y: 25, delay: (i % 3) * 0.08 })
            return (
              <div key={r.title} ref={ref}
                className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-white hover:shadow-lg hover:shadow-green-500/5 group transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-green-600 flex items-center justify-center flex-shrink-0 border border-gray-100 transition-colors duration-200 shadow-sm">
                  <i className={`fa-solid ${r.icon} text-green-600 group-hover:text-white text-sm transition-colors duration-200`} />
                </div>
                <div>
                  <h4 className="font-700 text-gray-900 mb-1.5 text-sm">{r.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
