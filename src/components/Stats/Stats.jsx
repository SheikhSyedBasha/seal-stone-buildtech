import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: 200, suffix: '+', label: 'Projects Completed',  icon: 'fa-building' },
  { value: 10,  suffix: '+', label: 'Years Experience',    icon: 'fa-calendar-check' },
  { value: 150, suffix: '+', label: 'Happy Clients',       icon: 'fa-face-smile' },
  { value: 15,  suffix: '+', label: 'Expert Engineers',    icon: 'fa-helmet-safety' },
]

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let cur = 0
        const step = Math.ceil(value / 55)
        const t = setInterval(() => { cur += step; if (cur >= value) { setN(value); clearInterval(t) } else setN(cur) }, 22)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])
  return <span ref={ref}>{n}{suffix}</span>
}

export default function Stats() {
  const wrap = useScrollAnimation({ y: 20 })
  return (
    <section className="py-10 lg:py-12 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={wrap} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-green-900/40">
          {stats.map((s, i) => {
            const r = useScrollAnimation({ y: 0, delay: i * 0.08 })
            return (
              <div key={s.label} ref={r}
                className="flex flex-col items-center justify-center py-10 px-6 text-center bg-green-950 hover:bg-green-900 transition-colors duration-300 group"
              >
                <i className={`fa-solid ${s.icon} text-green-500 text-lg mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-4xl md:text-5xl font-900 text-white mb-2 tracking-tight" style={{ letterSpacing: '-0.04em' }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-gray-500 text-xs font-500 tracking-widest uppercase">{s.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
