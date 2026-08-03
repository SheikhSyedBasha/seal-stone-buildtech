export default function Contact() {
  const year = new Date().getFullYear()
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ── Footer slide ── */}
      <footer id="contact" className="flex items-center bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-white rounded-2xl px-4 py-3 w-full sm:w-5/6">
                  <img src={`${import.meta.env.BASE_URL}seal_stone_banner.png`} alt="Seal Stone Buildtech" className="w-full h-auto object-contain" />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A trusted civil engineering firm founded in 2015, delivering transparent and efficient construction, development and infrastructure solutions across Bangalore.
              </p>
              <a href="tel:+919606034259" className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs font-600 transition-colors">
                <i className="fa-solid fa-phone text-xs" /> +91-9606034259
              </a>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xs font-700 tracking-[0.2em] uppercase text-gray-500 mb-5">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {[['home','Home'],['about','About'],['services','Services'],['projects','Projects'],['team','Team'],['contact','Contact']].map(([id,label]) => (
                  <li key={id}>
                    <button onClick={() => go(id)} className="text-gray-400 hover:text-green-400 text-sm transition-colors cursor-pointer flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-xs font-700 tracking-[0.2em] uppercase text-gray-500 mb-5">Contact Info</h4>
              <div className="space-y-4">
                <a href="tel:+919606034259" className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors">
                  <i className="fa-solid fa-phone text-green-500 w-4" /> +91-9606034259
                </a>
                <a href="mailto:info@sealstonebuildtech.com" className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors">
                  <i className="fa-solid fa-envelope text-green-500 w-4" /> info@sealstonebuildtech.com
                </a>
                <a href="https://maps.app.goo.gl/ZPdQRRPWHoDgH1887" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors">
                  <i className="fa-solid fa-location-dot text-green-500 w-4 mt-0.5 flex-shrink-0" />
                  <span>#83, 4th Floor, Sri Vasavi Arcade, Siddanna Layout, 21st Main Road, BSK II Stage, Bangalore - 560070</span>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">© {year} Seal Stone Buildtech. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p className="text-gray-600 text-xs">Trusted by 150+ clients across Bangalore</p>
              <div className="flex items-center gap-3">
                <a href="https://wa.me/919606034259?text=Hi%20Seal%20Stone%20Buildtech%2C%20I%20would%20like%20to%20request%20a%20free%20consultation.%20Please%20get%20in%20touch%20with%20me." target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                  <i className="fa-brands fa-whatsapp text-gray-400 hover:text-white text-sm" />
                </a>
                <a href="tel:+919606034259" className="w-7 h-7 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                  <i className="fa-solid fa-phone text-gray-400 hover:text-white text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
