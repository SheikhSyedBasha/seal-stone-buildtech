import { useState, useEffect, useRef } from 'react'
import { Phone, ArrowUp, X, MessageCircle } from 'lucide-react'


export default function FloatingCTA() {
  const [showTop, setShowTop]   = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatOpen && chatRef.current && !chatRef.current.contains(e.target)) {
        setChatOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [chatOpen])

  return (
    <>
      {/* Scroll to top — bottom left */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-11 h-11 bg-white/20 hover:bg-green-600 text-gray-800 hover:text-white rounded-xl shadow-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-gray-200"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <div ref={chatRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">

        {/* Chat options — revealed on toggle */}
        {chatOpen && (
          <div className="flex flex-col items-end gap-2.5">
            <a href="https://wa.me/919606034259?text=Hi%20Seal%20Stone%20Buildtech%2C%20I%20would%20like%20to%20request%20a%20free%20consultation.%20Please%20get%20in%20touch%20with%20me."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-5 py-3 rounded-xl shadow-lg text-sm font-600 transition-all whitespace-nowrap"
            >
              <i className="fa-brands fa-whatsapp text-base" /> WhatsApp Us
            </a>
            <a href="tel:+919606034259"
              className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-600 transition-all whitespace-nowrap"
            >
              <Phone size={15} /> Call Now
            </a>
          </div>
        )}

        {/* Chat toggle — round icon button */}
        <button
          onClick={() => setChatOpen(o => !o)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition-all cursor-pointer"
        >
          {chatOpen ? <X size={20} /> : <MessageCircle size={22} />}
        </button>

      </div>
    </>
  )
}
