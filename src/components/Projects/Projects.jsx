import { useScrollAnimation } from '../../hooks/useScrollAnimation'


const projects = [
  { type: 'Commercial', title: 'Commercial Building',    location: 'Kanakapura road, Bangalore',        floors: 'B+G+4',    area: '18,000 sqft',  image: './nagaraja_commercial_building.jpeg' },
  { type: 'Commercial',  title: 'Commercial Building', location: 'Andhrahalli, Bangalore',   floors: 'B+G+4',    area: '22,000 sqft', image: './srinivas_commercial_building.jpeg' },
  { type: 'Industrial',  title: 'Warehouse & Factory',       location: 'Peenya, Bangalore',      floors: 'Single', area: '25,000 sqft', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80&auto=format&fit=crop' },
  { type: 'Residential', title: 'Villa Development',         location: 'Whitefield, Bangalore',  floors: 'G+1',    area: '3,600 sqft',  image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&q=80&auto=format&fit=crop' },
  { type: 'Commercial',  title: 'Retail Shopping Complex',   location: 'Mysore Road, Bangalore', floors: 'G+2',    area: '8,500 sqft',  image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=500&q=80&auto=format&fit=crop' },
  { type: 'Industrial',  title: 'Steel Structure Shed',      location: 'Tumkur Road, Bangalore', floors: 'Single', area: '18,000 sqft', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80&auto=format&fit=crop' },
]

const chip = {
  Residential: 'bg-green-50 text-green-700 border-green-200',
  Commercial:  'bg-blue-50  text-blue-700  border-blue-200',
  Industrial:  'bg-amber-50 text-amber-700 border-amber-200',
}

function ProjectCard({ p, index, onConsultClick }) {
  const r = useScrollAnimation({ y: 20, delay: (index % 3) * 0.07 })
  return (
    <div ref={r}
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:border-green-200 card-hover group cursor-pointer"
      onClick={onConsultClick}
    >
      <div className="relative h-32 overflow-hidden">
        <img src={p.image} alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`absolute top-2 left-2 text-[10px] font-700 px-2 py-0.5 rounded-full border ${chip[p.type]}`}>
          {p.type}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="font-800 text-gray-900 text-sm mb-1.5 group-hover:text-green-600 transition-colors duration-200 leading-tight">{p.title}</h3>
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <i className="fa-solid fa-location-dot text-green-500 text-[10px]" />{p.location}
          </span>
          <span>{p.floors}</span>
        </div>
        <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-[11px]">
          <span className="text-gray-400 flex items-center gap-1">
            <i className="fa-solid fa-ruler-combined text-green-400 text-[10px]" />{p.area}
          </span>
          <span className="text-green-600 font-600 flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
            View <i className="fa-solid fa-arrow-right text-[9px]" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ onConsultClick }) {
  const head = useScrollAnimation({ y: 20 })
  return (
    <section id="projects" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div ref={head} className="text-center mb-6">
          <span className="section-label">Our Work</span>
          <h2 className="section-heading mb-2">
            Projects That <span>Speak for Themselves</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Completed & Running Projects across Bangalore — residential, commercial and industrial
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} onConsultClick={onConsultClick} />
          ))}
        </div>

      </div>
    </section>
  )
}
