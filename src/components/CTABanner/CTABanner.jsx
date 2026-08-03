import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function CTABanner({ onConsultClick }) {
  const content = useScrollAnimation({ y: 20 })

  return (
    <section className="relative py-12 lg:py-16 bg-white overflow-hidden border-t border-gray-100">

      {/* Giant watermark number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none hidden sm:flex"
        style={{ fontSize: 'clamp(10rem, 25vw, 32rem)', fontWeight: 900, lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px #f0f0f0', letterSpacing: '-0.05em' }}
      >
        10
      </div>

      <div ref={content} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — big typography */}
          <div>
            <p className="text-green-600 text-xs font-700 tracking-[0.3em] uppercase mb-6">
              A Decade of Excellence · Since 2015
            </p>
            <h2 className="font-black text-gray-900 leading-none mb-0"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}
            >
              BUILD<br />
              <span style={{ background: 'linear-gradient(135deg,#15803d,#16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                SMARTER.
              </span><br />
              LIVE BETTER.
            </h2>
          </div>

          {/* Right — description + CTA */}
          <div className="flex flex-col gap-8">
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Over 10 years of delivering homes, offices and factories that stand the test of time. Transparent process, certified engineers, zero compromise.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '200+', label: 'Projects' },
                { value: '150+', label: 'Families' },
                { value: '10+',  label: 'Years' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-900 text-gray-900 leading-none">{s.value}</div>
                  <div className="text-xs text-gray-400 font-600 tracking-widest uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 w-full" />

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button onClick={onConsultClick}
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 text-sm font-800 cursor-pointer"
              >
                <i className="fa-solid fa-helmet-safety" />
                Free Consultation
              </button>
              <a href="tel:+919606034259" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 group-hover:bg-green-600 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <i className="fa-solid fa-phone text-green-600 group-hover:text-white text-sm transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-700 tracking-widest uppercase">Call Us Now</p>
                  <p className="text-gray-900 group-hover:text-green-600 font-800 text-sm transition-colors duration-200">+91-9606034259</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
