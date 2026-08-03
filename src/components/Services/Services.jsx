import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const services = [
  {
    num: '01', icon: 'fa-building',
    title: 'Commercial & Residential',
    desc: 'Complete architectural and structural solutions for commercial and residential projects.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80&auto=format&fit=crop',
    steps: ['Arch. Drawings', 'Questionnaire & DBR', 'Concept Presentation', 'Final DBR', 'Working Drawings', 'Site Monitoring'],
  },
  {
    num: '02', icon: 'fa-industry',
    title: 'Industrial Buildings',
    desc: 'Specialized industrial structure design with focus on safety and cost-effectiveness.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80&auto=format&fit=crop',
    steps: ['Site Survey', 'Structural Design', 'Load Calculations', 'Steel Design', 'Foundation Design', 'Site Supervision'],
  },
  {
    num: '03', icon: 'fa-drafting-compass',
    title: 'Structural Design',
    desc: 'Advanced structural analysis and design as per NBC and IS Standard Code.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80&auto=format&fit=crop',
    steps: ['Structural Analysis', 'Load Calculations', 'Foundation Design', 'RCC Design', 'Steel Design', 'Seismic Analysis'],
  },
  {
    num: '04', icon: 'fa-hard-hat',
    title: 'Project Management',
    desc: 'End-to-end project management ensuring on-time delivery with full documentation.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80&auto=format&fit=crop',
    steps: ['Project Planning', 'Resource Management', 'Quality Control', 'Site Supervision', 'Progress Reporting', 'Final Handover'],
  },
]

function ServiceCard({ s, i }) {
  const r = useScrollAnimation({ y: 20, delay: i * 0.07 })
  return (
    <div ref={r} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:border-green-200 card-hover flex flex-col">
      <div className="relative h-32 overflow-hidden flex-shrink-0">
        <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-2 right-2 bg-white/95 rounded-md px-2 py-0.5 shadow">
          <span className="text-green-600 font-700 text-xs">{s.num}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
            <i className={`fa-solid ${s.icon} text-green-600 text-xs`} />
          </div>
          <h3 className="text-sm font-800 text-gray-900 leading-tight">{s.title}</h3>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed flex-1">{s.desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const head = useScrollAnimation({ y: 20 })
  return (
    <section id="services" className="bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div ref={head} className="text-center mb-6">
          <span className="section-label">What We Offer</span>
          <h2 className="section-heading mb-2">
            Services Built on <span>Expertise & Trust</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Comprehensive civil engineering solutions for every type of construction project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {services.map((s, i) => <ServiceCard key={s.num} s={s} i={i} />)}
        </div>

        {/* How we work */}
        <div className="bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Consultation', desc: 'Understanding your needs and budget' },
              { step: '2', title: 'Design',        desc: 'Detailed drawings and DBR preparation' },
              { step: '3', title: 'Execution',     desc: 'Site monitoring and quality control' },
              { step: '4', title: 'Handover',      desc: 'Final delivery with all documents' },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-green-600/20">
                  <span className="text-white font-800 text-sm">{item.step}</span>
                </div>
                <div className="text-left">
                  <h4 className="font-700 text-gray-900 text-xs">{item.title}</h4>
                  <p className="text-gray-400 text-[11px] leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
