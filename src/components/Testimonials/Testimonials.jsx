import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  { name: 'Rajesh Sharma',        role: 'Residential Client',  rating: 5, text: 'Vertex Infra delivered our dream home exactly as planned. Structural design was top-notch and the team was always available.' },
  { name: 'Priya Nair',           role: 'Commercial Owner',    rating: 5, text: 'Professional team with deep expertise. Completed our commercial complex on time and within budget. Quality exceeded expectations.' },
  { name: 'Suresh Reddy',         role: 'Industrial Client',   rating: 5, text: 'Outstanding structural design for our warehouse. IS code compliance gave us complete confidence in the project.' },
  { name: 'Anitha Krishnamurthy', role: 'Apartment Developer', rating: 5, text: 'Worked with Vertex Infra on 3 projects. Their transparent approach and on-time delivery make them our go-to consultants.' },
  { name: 'Kiran Patil',          role: 'Villa Owner',         rating: 5, text: 'From foundation to finishing, every detail was handled with care. Truly a one-point complete solution!' },
  { name: 'Deepa Menon',          role: 'Office Developer',    rating: 5, text: 'Highly professional and responsive. The team ensured quality at every stage and delivered ahead of schedule.' },
]

function getVisible() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function Testimonials() {
  const head = useScrollAnimation({ y: 20 })
  const [visible, setVisible] = useState(getVisible)
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const handler = () => {
      const v = getVisible()
      setVisible(v)
      setIdx(i => Math.min(i, Math.max(0, testimonials.length - v)))
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const max = testimonials.length - visible

  const go = (next) => {
    const clamped = Math.max(0, Math.min(next, max))
    setDir(next > idx ? 1 : -1)
    setIdx(clamped)
  }

  const variants = {
    enter: d => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center:    { x: 0, opacity: 1 },
    exit:  d => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  const gridCols = visible === 1 ? 'grid-cols-1' : visible === 2 ? 'grid-cols-2' : 'grid-cols-3'

  return (
    <section id="testimonials" className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={head} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="section-label">Client Stories</span>
            <h2 className="section-heading mb-0">
              What Clients <span>Say About Us</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => go(idx - 1)}
              disabled={idx === 0}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(idx + 1)}
              disabled={idx >= max}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Sliding cards */}
        <div className="overflow-hidden pb-4">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`grid ${gridCols} gap-5`}
            >
              {testimonials.slice(idx, idx + visible).map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-300" />
                  <div className="flex mb-3">
                    {Array(t.rating).fill(0).map((_, j) => (
                      <span key={j} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 italic flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-700 font-800 text-xs">
                        {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-700 text-gray-900 text-sm">{t.name}</p>
                      <p className="text-green-600 text-xs font-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array(max + 1).fill(0).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === i ? 'w-6 bg-green-500' : 'w-1.5 bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
