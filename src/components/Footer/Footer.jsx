export default function Footer() {
  const year = new Date().getFullYear()
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-sm">VI</span>
              </div>
              <div>
                <div className="font-black text-base text-white tracking-tight">VERTEX INFRA</div>
                <div className="text-green-400 text-[10px] tracking-[0.18em] font-600">ONE POINT. COMPLETE SOLUTION.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A trusted civil engineering firm founded in 2015, delivering transparent and efficient solutions across Bangalore.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-700 tracking-[0.2em] uppercase text-gray-500 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[['home','Home'],['about','About'],['services','Services'],['projects','Projects'],['team','Team'],['contact','Contact']].map(([id,label]) => (
                <li key={id}>
                  <button onClick={() => go(id)} className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-700 tracking-[0.2em] uppercase text-gray-500 mb-5">Contact Info</h4>
            <div className="space-y-3">
              <a href="mailto:info@sealstonebuildtech.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 text-sm transition-colors">
                <i className="fa-solid fa-envelope text-green-500 w-4" /> info@sealstonebuildtech.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-location-dot text-green-500 w-4 mt-0.5 flex-shrink-0" />
                <span>#83, 4th Floor, Sri Vasavi Arcade, Siddanna Layout, 21st Main Road, BSK II Stage, Bangalore - 560070</span>
              </div>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">© {year} Vertex Infra. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Trusted by 150+ clients across Bangalore</p>
        </div>
      </div>
    </footer>
  )
}
