import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { X, Send, CheckCircle, Phone, Clock, Shield } from 'lucide-react'

const EMAILJS_SERVICE_ID      = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_OWNER  = 'YOUR_OWNER_TEMPLATE_ID'
const EMAILJS_TEMPLATE_CLIENT = 'YOUR_CLIENT_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY      = 'YOUR_PUBLIC_KEY'

const perks = [
  { icon: Phone,  text: 'Call back within 2 hours' },
  { icon: Shield, text: 'IS & NBC certified engineers' },
  { icon: Clock,  text: 'On-time delivery guaranteed' },
]

export default function LeadPopup({ forceOpen, onClose }) {
  const [visible, setVisible] = useState(false)
  const [form, setForm]       = useState({ name: '', email: '', phone: '' })
  const [status, setStatus]   = useState(null)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('popup_dismissed')
    if (!dismissed) {
      const t = setTimeout(() => setVisible(true), 7000)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => { if (forceOpen) setVisible(true) }, [forceOpen])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('popup_dismissed', '1')
    setStatus(null)
    onClose?.()
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === 'phone' ? value.replace(/\D/g, '') : value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    const params = { from_name: form.name, from_email: form.email, phone: form.phone, message: 'Free Consultation Request', to_email: 'info@sealstonebuildtech.com' }
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_OWNER, params, EMAILJS_PUBLIC_KEY)
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CLIENT, { ...params, to_email: form.email }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setTimeout(dismiss, 3000)
    } catch { setStatus('error') }
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col sm:flex-row max-h-[90vh] overflow-y-auto">

              {/* Left panel */}
              <div className="hidden sm:flex flex-col justify-between w-full sm:w-[45%] flex-shrink-0 relative overflow-hidden"
                style={{ background: 'linear-gradient(145deg, #14532d, #166534, #15803d)' }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.08]"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}
                />

                {/* Banner image */}
                <div className="relative w-full flex items-center justify-center px-4 pt-6 pb-3">
                  <div className="bg-white rounded-2xl px-4 py-4 w-full flex items-center justify-center">
                    <img src={`${import.meta.env.BASE_URL}seal_stone_banner.png`} alt="Seal Stone Buildtech" className="w-full h-auto object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col p-8 pt-4 gap-5">
                  <div>
                    <h3 className="text-white font-900 text-2xl leading-tight mb-2">
                      Build Your<br />Dream Space
                    </h3>
                    <p className="text-green-200 text-sm leading-relaxed">
                      Trusted by 150+ families across Bangalore since 2015.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {perks.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-white" />
                        </div>
                        <p className="text-green-100 text-xs font-500">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel — form */}
              <div className="flex-1 p-5 sm:p-8 relative">
                <button onClick={dismiss}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>

                {status === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="text-green-500" size={32} />
                    </motion.div>
                    <p className="font-900 text-gray-900 text-xl mb-1">You're all set!</p>
                    <p className="text-gray-400 text-sm">We'll call you within 2 hours.</p>
                  </div>
                ) : (
                  <>
                    <span className="inline-block bg-green-50 text-green-700 text-[10px] font-700 tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-5">
                      Free · No Obligation
                    </span>
                    <h3 className="text-gray-900 font-900 text-xl leading-tight mb-1">
                      Get a Free Consultation
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Fill in your details and our engineers will reach out.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      {[
                        { name: 'name',  placeholder: 'Full Name',     type: 'text',  icon: 'fa-user' },
                        { name: 'phone', placeholder: 'Phone Number',  type: 'tel',   icon: 'fa-phone' },
                        { name: 'email', placeholder: 'Email Address', type: 'email', icon: 'fa-envelope' },
                      ].map(f => (
                        <div key={f.name} className="relative">
                          <i className={`fa-solid ${f.icon} absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-xs`} />
                          <input type={f.type} name={f.name} value={form[f.name]}
                            onChange={handleChange} placeholder={f.placeholder} required
                            className="w-full pl-9 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-green-400 focus:bg-white outline-none text-gray-800 text-sm transition-all placeholder:text-gray-400"
                          />
                        </div>
                      ))}

                      <button type="submit" disabled={status === 'loading'}
                        className="w-full py-3 rounded-xl font-700 text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60 text-white mt-1"
                        style={{ background: 'linear-gradient(135deg, #15803d, #16a34a)' }}
                      >
                        {status === 'loading'
                          ? <><i className="fa-solid fa-spinner fa-spin" /> Sending...</>
                          : <><Send size={14} /> Request Free Consultation</>
                        }
                      </button>

                      {status === 'error' && (
                        <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
                      )}
                    </form>

                    <p className="text-center text-gray-400 text-xs mt-4">🔒 Your info is safe with us. No spam.</p>
                  </>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
