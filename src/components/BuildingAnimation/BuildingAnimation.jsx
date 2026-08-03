import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const stages = [
  { pct: 0,   label: 'The Plot',      sub: 'Every great structure begins with the right foundation. We survey, test and prepare your land.', color: '#16a34a' },
  { pct: 0.18, label: 'Foundation',   sub: 'Deep footings, reinforced concrete base — engineered to IS standards for decades of strength.', color: '#1d4ed8' },
  { pct: 0.35, label: 'Ground Floor', sub: 'Columns rise, beams span, slabs are cast. Your vision starts taking physical form.', color: '#1d4ed8' },
  { pct: 0.52, label: 'First Floor',  sub: 'Floor by floor, your building grows. Every pour is monitored by our senior engineers.', color: '#1d4ed8' },
  { pct: 0.68, label: 'Second Floor', sub: 'Structural integrity verified at every level. No shortcuts, no compromises.', color: '#1d4ed8' },
  { pct: 0.82, label: 'Roof & Finish',sub: 'Waterproofing, plastering, painting — the finishing touches that make a house a home.', color: '#16a34a' },
  { pct: 0.93, label: 'Complete! 🏠', sub: 'Your dream home stands complete. On time, within budget, with all signed documents.', color: '#16a34a' },
]

function BuildingSVG({ progress: p }) {
  const op = (start, end = start + 0.1) => Math.max(0, Math.min(1, (p - start) / (end - start)))
  const sc = (start, end = start + 0.12) => Math.max(0, Math.min(1, (p - start) / (end - start)))

  return (
    <svg viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Ground */}
      <line x1="10" y1="370" x2="350" y2="370" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" opacity={op(0.01, 0.05)} />

      {/* Foundation */}
      <g style={{ opacity: op(0.04, 0.14), transformOrigin: '180px 370px', transform: `scaleY(${sc(0.04, 0.14)})` }}>
        <rect x="55" y="352" width="250" height="18" rx="2" fill="#1e40af" />
        {[75,100,125,150,175,200,225,250,275].map(x => (
          <line key={x} x1={x} y1="352" x2={x-8} y2="370" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
        ))}
        <text x="180" y="365" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Montserrat" opacity="0.9">FOUNDATION</text>
      </g>

      {/* Ground floor */}
      <g style={{ opacity: op(0.2, 0.3), transformOrigin: '180px 352px', transform: `scaleY(${sc(0.2, 0.3)})` }}>
        <rect x="55" y="280" width="20" height="72" rx="1" fill="#1d4ed8" />
        <rect x="285" y="280" width="20" height="72" rx="1" fill="#1d4ed8" />
        <rect x="55" y="275" width="250" height="9" rx="1" fill="#2563eb" />
        {/* Windows */}
        <rect x="90"  y="295" width="48" height="38" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="114" y1="295" x2="114" y2="333" stroke="#3b82f6" strokeWidth="1" />
        <line x1="90"  y1="314" x2="138" y2="314" stroke="#3b82f6" strokeWidth="1" />
        <rect x="222" y="295" width="48" height="38" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="246" y1="295" x2="246" y2="333" stroke="#3b82f6" strokeWidth="1" />
        <line x1="222" y1="314" x2="270" y2="314" stroke="#3b82f6" strokeWidth="1" />
        {/* Door */}
        <rect x="156" y="310" width="48" height="42" rx="2" fill="#93c5fd" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="197" cy="332" r="3" fill="#1d4ed8" />
        <line x1="180" y1="310" x2="180" y2="352" stroke="#3b82f6" strokeWidth="1" />
      </g>

      {/* First floor */}
      <g style={{ opacity: op(0.37, 0.47), transformOrigin: '180px 275px', transform: `scaleY(${sc(0.37, 0.47)})` }}>
        <rect x="60"  y="210" width="16" height="65" rx="1" fill="#1d4ed8" />
        <rect x="284" y="210" width="16" height="65" rx="1" fill="#1d4ed8" />
        <rect x="58"  y="205" width="244" height="9" rx="1" fill="#2563eb" />
        <rect x="88"  y="222" width="44" height="34" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="110" y1="222" x2="110" y2="256" stroke="#3b82f6" strokeWidth="1" />
        <rect x="158" y="222" width="44" height="34" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="180" y1="222" x2="180" y2="256" stroke="#3b82f6" strokeWidth="1" />
        <rect x="228" y="222" width="44" height="34" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="250" y1="222" x2="250" y2="256" stroke="#3b82f6" strokeWidth="1" />
      </g>

      {/* Second floor */}
      <g style={{ opacity: op(0.54, 0.64), transformOrigin: '180px 205px', transform: `scaleY(${sc(0.54, 0.64)})` }}>
        <rect x="65"  y="148" width="14" height="57" rx="1" fill="#1d4ed8" />
        <rect x="281" y="148" width="14" height="57" rx="1" fill="#1d4ed8" />
        <rect x="62"  y="143" width="236" height="9" rx="1" fill="#2563eb" />
        <rect x="90"  y="158" width="42" height="32" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="111" y1="158" x2="111" y2="190" stroke="#3b82f6" strokeWidth="1" />
        <rect x="159" y="158" width="42" height="32" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="180" y1="158" x2="180" y2="190" stroke="#3b82f6" strokeWidth="1" />
        <rect x="228" y="158" width="42" height="32" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="249" y1="158" x2="249" y2="190" stroke="#3b82f6" strokeWidth="1" />
      </g>

      {/* Roof */}
      <g style={{ opacity: op(0.7, 0.8), transformOrigin: '180px 143px', transform: `scaleY(${sc(0.7, 0.8)})` }}>
        <polygon points="42,143 180,58 318,143" fill="#1e40af" stroke="#22c55e" strokeWidth="2" />
        <line x1="180" y1="58" x2="180" y2="143" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
        <line x1="111" y1="100" x2="249" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
        {/* Chimney */}
        <rect x="248" y="72" width="18" height="38" rx="1" fill="#1d4ed8" />
        <rect x="244" y="68" width="26" height="8" rx="1" fill="#2563eb" />
        {/* Smoke puffs */}
        {[0,1,2].map(i => (
          <circle key={i} cx={257 + i*3} cy={58 - i*12} r={4 + i*3}
            fill="white" opacity={op(0.78) * (0.15 - i*0.04)}
          />
        ))}
      </g>

      {/* Finishing — garden, glow windows */}
      <g style={{ opacity: op(0.84, 0.92) }}>
        <rect x="10" y="366" width="340" height="8" rx="4" fill="#16a34a" opacity="0.5" />
        {/* Trees */}
        <ellipse cx="32" cy="358" rx="14" ry="16" fill="#16a34a" opacity="0.85" />
        <rect x="29" y="366" width="6" height="10" fill="#15803d" />
        <ellipse cx="328" cy="358" rx="14" ry="16" fill="#16a34a" opacity="0.85" />
        <rect x="325" y="366" width="6" height="10" fill="#15803d" />
        {/* Window glow */}
        <rect x="90"  y="295" width="48" height="38" rx="2" fill="#dbeafe" opacity="0.9" />
        <rect x="222" y="295" width="48" height="38" rx="2" fill="#dbeafe" opacity="0.9" />
      </g>

      {/* Complete checkmark */}
      <g style={{ opacity: op(0.93, 1) }}>
        <circle cx="180" cy="28" r="20" fill="#16a34a" />
        <path d="M170 28 L177 35 L192 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default function BuildingAnimation({ onConsultClick }) {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const stageIndex = stages.findLastIndex(s => progress >= s.pct)
  const stage = stages[Math.max(0, stageIndex)]
  const isComplete = progress >= 0.93

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: self => setProgress(self.progress),
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="building" style={{ height: '700vh' }} className="relative">
      <div className="sticky top-0 h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Ambient glow that shifts color */}
        <div className="absolute inset-0 pointer-events-none transition-all duration-1000"
          style={{
            background: isComplete
              ? 'radial-gradient(ellipse at 50% 60%, rgba(22,163,74,0.12) 0%, transparent 65%)'
              : 'radial-gradient(ellipse at 50% 60%, rgba(29,78,216,0.08) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: Building SVG ── */}
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <div className="w-full max-w-[340px] mx-auto" style={{ height: '400px' }}>
                <BuildingSVG progress={progress} />
              </div>
            </div>

            {/* ── RIGHT: Story text ── */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">

              {/* Progress bar */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/30 text-xs font-600 tracking-widest uppercase">Construction Progress</span>
                  <span className="text-green-400 text-sm font-800">{Math.round(progress * 100)}%</span>
                </div>
                <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${progress * 100}%`,
                      background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                    }}
                  />
                </div>
                {/* Stage dots */}
                <div className="flex justify-between mt-4">
                  {stages.map((s, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      progress >= s.pct ? 'bg-green-500 scale-125' : 'bg-white/15'
                    }`} />
                  ))}
                </div>
              </div>

              {/* Stage content */}
              <AnimatePresence mode="wait">
                <motion.div key={stageIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="pill mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Stage {stageIndex + 1} of {stages.length}
                  </div>
                  <h2 className="display-md text-white mb-4">{stage.label}</h2>
                  <p className="text-white/45 text-lg leading-relaxed mb-8">{stage.sub}</p>
                </motion.div>
              </AnimatePresence>

              {/* Checklist */}
              <div className="space-y-3 mb-8">
                {stages.map((s, i) => (
                  <div key={i} className={`flex items-center gap-3 transition-all duration-500 ${
                    progress >= s.pct ? 'opacity-100' : 'opacity-20'
                  }`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      progress >= (stages[i + 1]?.pct ?? 1.1) ? 'bg-green-500' :
                      progress >= s.pct ? 'border-2 border-green-500' : 'border border-white/20'
                    }`}>
                      {progress >= (stages[i + 1]?.pct ?? 1.1) && (
                        <i className="fa-solid fa-check text-white text-[8px]" />
                      )}
                    </div>
                    <span className={`text-sm font-500 transition-colors duration-300 ${
                      progress >= (stages[i + 1]?.pct ?? 1.1) ? 'text-white/40 line-through' :
                      progress >= s.pct ? 'text-white font-700' : 'text-white/25'
                    }`}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <AnimatePresence>
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                    className="relative overflow-hidden rounded-2xl p-6 border border-green-500/30"
                    style={{ background: 'linear-gradient(135deg, rgba(22,163,74,0.15), rgba(22,163,74,0.05))' }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-green-500/10 blur-2xl" />
                    <p className="text-green-400 text-xs font-700 tracking-widest uppercase mb-2">Ready to Build Yours?</p>
                    <h3 className="text-white text-2xl font-900 mb-1">Your Dream Home Awaits</h3>
                    <p className="text-white/40 text-sm mb-5">Talk to our engineers today. Free consultation, no obligation.</p>
                    <button onClick={onConsultClick}
                      className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-700 text-sm tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-helmet-safety" />
                      Contact Us for Your House
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        {progress < 0.04 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-green-500 animate-pulse" />
            <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll to build</span>
          </div>
        )}
      </div>
    </section>
  )
}
