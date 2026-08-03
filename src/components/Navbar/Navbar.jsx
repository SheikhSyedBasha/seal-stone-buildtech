import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const bannerImg = `${import.meta.env.BASE_URL}seal_stone_banner.png`
const logoImg = `${import.meta.env.BASE_URL}seal_stone_logo.png`

const links = [
  { label: 'About',        id: 'about' },
  { label: 'Services',     id: 'services' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Team',         id: 'team' },
  { label: 'Contact',      id: 'contact' },
]

export default function Navbar({ onConsultClick }) {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(l.id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 cursor-pointer"
          >
            {/* Mobile: banner image */}
            <img src={bannerImg} alt="Seal Stone Buildtech" className="md:hidden h-10 w-auto" />

            {/* Desktop: logo + text */}
            <img src={logoImg} alt="Seal Stone Buildtech" className="hidden md:block h-14 w-auto" />
            <div className="hidden md:block text-left">
              <div className="leading-none">
                <span className="font-black text-base text-gray-900 tracking-tight">SEAL STONE</span>
                <span className="font-700 text-base text-green-600 tracking-tight"> BUILDTECH</span>
              </div>
              <div className="text-[10px] text-gray-400 font-500 tracking-[0.1em] uppercase mt-1">Construction · Development · Infrastructure</div>
            </div>
          </button>

          {/* Desktop nav — right aligned */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto mr-6">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className={`text-sm font-600 transition-colors duration-200 cursor-pointer relative pb-0.5 ${
                  active === l.id ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Free Consultation — desktop */}
          <button onClick={onConsultClick}
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-600 cursor-pointer transition-all animate-bounce whitespace-nowrap"
          >
            <i className="fa-solid fa-helmet-safety" /> Free Consultation
          </button>

          {/* Mobile right — CTA + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={onConsultClick}
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-xs font-700 cursor-pointer transition-all animate-bounce"
            >
              <i className="fa-solid fa-helmet-safety text-[10px]" /> Consult
            </button>
            <button onClick={() => setOpen(!open)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${open ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            {/* Quick contact strip */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-100">
              <a href="tel:+919606034259" className="flex items-center gap-1.5 text-xs font-600 text-gray-600">
                <i className="fa-solid fa-phone text-green-600 text-[10px]" /> +91-9606034259
              </a>
              <a href="mailto:info@sealstonebuildtech.com" className="flex items-center gap-1.5 text-xs font-600 text-gray-600">
                <i className="fa-solid fa-envelope text-blue-500 text-[10px]" /> info@sealstonebuildtech.com
              </a>
            </div>
            <div className="px-4 py-3 space-y-1">
              {links.map(l => (
                <button key={l.id} onClick={() => go(l.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-600 transition-all cursor-pointer ${
                    active === l.id
                      ? 'text-green-600 bg-green-50 border-l-4 border-green-600'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
