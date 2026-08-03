import { motion } from 'framer-motion'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
}

const ticker = [
  'Commercial & Residential Building','Preparation of Arch. DWG.','Preparing Questionnaire with Recommendation',
  'Preparation of DBR','Concept Presentation','Final DBR','Preparation of Working Drawings',
  'Monitoring Work Execution at Site','✦ SEAL STONE BUILDTECH','Construction · Development · Infrastructure ✦',
  'Industrial Buildings','Preparation of Arch. DWG.','Preparing Questionnaire with Recommendation',
  'Preparation of DBR','Concept Presentation','Final DBR','Preparation of Working Drawings',
  'Monitoring Work Execution at Site','✦ SEAL STONE BUILDTECH','Construction · Development · Infrastructure ✦',
]
const doubled = [...ticker, ...ticker]

export default function Hero({ onConsultClick }) {
  return (
    <section id="home" className="h-screen bg-white flex flex-col">
      {/* Navbar spacer */}
      <div className="h-16 md:h-20 flex-shrink-0" />

      {/* Main content */}
      <div className="flex-1 flex items-center min-h-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

            {/* Left */}
            <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left order-2 lg:order-1">

              <motion.div variants={item} className="mb-3">
                <span className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-[11px] font-700 tracking-[0.15em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Civil Engineering · Bangalore · Est. 2015
                </span>
              </motion.div>

              <motion.h1 variants={item} className="text-gray-900 font-black leading-none mb-4 tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.035em' }}
              >
                We Build Homes<br />
                <span style={{ background: 'linear-gradient(135deg,#15803d,#16a34a,#22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Families Love.
                </span>
              </motion.h1>

              <motion.p variants={item} className="hidden sm:block text-gray-400 text-sm leading-relaxed mb-4 max-w-md mx-auto lg:mx-0" style={{ letterSpacing: '-0.01em' }}>
                From foundation to finishing — transparent, quality-assured civil engineering for your dream home, office or factory. Trusted by 150+ families across Bangalore since 2015.
              </motion.p>

              <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-0 justify-center lg:justify-start">
                <button onClick={onConsultClick} className="btn-primary cursor-pointer text-sm px-7 py-3.5">
                  Get Free Consultation
                </button>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary cursor-pointer text-sm px-7 py-3.5"
                >
                  See Our Work ↓
                </button>
              </motion.div>

              {/* Stats row — removed from here, moved below */}
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-1 lg:order-2"
            >
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&auto=format&fit=crop"
                  alt="Beautiful house"
                  className="w-full h-48 sm:h-64 lg:h-[55vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Bottom overlay — mobile badges */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="glass px-3 py-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-house-chimney text-green-600 text-sm" />
                      <div>
                        <div className="font-700 text-gray-900 text-[11px]">IS & NBC Certified</div>
                        <div className="text-[10px] text-gray-500">Quality Assured</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass px-3 py-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] text-right">
                    <div className="flex gap-0.5 mb-0.5 justify-end">
                      {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-amber-400 text-[10px]" />)}
                    </div>
                    <p className="text-gray-900 text-[10px] font-700">150+ Happy Families</p>
                  </div>
                </div>
              </div>

              {/* Desktop floating review card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block absolute -bottom-5 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex gap-0.5 mb-1.5">
                  {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-amber-400 text-xs" />)}
                </div>
                <p className="text-gray-800 text-xs font-700 mb-0.5">"Best decision we made!"</p>
                <p className="text-gray-400 text-[10px]">— Rajesh S., BSK Bangalore</p>
              </motion.div>

              {/* Desktop floating cert card */}
              <motion.div
                initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex absolute -top-5 -right-5 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-shield-halved text-green-600" />
                </div>
                <div>
                  <div className="font-700 text-gray-900 text-xs">IS & NBC Certified</div>
                  <div className="text-[11px] text-gray-400">Quality Assured</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar — always visible */}
      <div className="flex-shrink-0 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10 py-4">
            {[
              { value: '200+', label: 'Projects' },
              { value: '10+',  label: 'Years' },
              { value: '150+', label: 'Families' },
            ].map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-lg font-black text-gray-900" style={{ letterSpacing: '-0.03em' }}>{s.value}</div>
                <div className="text-[11px] text-gray-400 font-500 tracking-wide">{s.label}</div>
              </div>
            ))}
            <div className="h-7 w-px bg-gray-200" />
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-amber-400 text-xs" />)}
              <span className="text-[11px] text-gray-400 font-500 ml-1">5-star rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="border-t border-gray-100 bg-white overflow-hidden py-3 flex-shrink-0">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {doubled.map((t, i) => {
            const isBrand = t.startsWith('✦') || t.startsWith('ONE')
            return (
              <span key={i} className={`flex items-center gap-2 text-[11px] font-600 tracking-[0.13em] uppercase flex-shrink-0 ${isBrand ? 'text-green-600' : 'text-gray-400'}`}>
                {!isBrand && <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />}
                {t}
              </span>
            )
          })}
        </div>
      </div>

    </section>
  )
}
