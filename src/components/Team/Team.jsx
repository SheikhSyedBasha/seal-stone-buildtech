import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const team = [
  { name: 'Vinay Kumar S', role: 'Director & Structural Engineer', initial: 'VK', bio: 'Completed M.Tech in Industrial Structures from SJCE Mysore in 2004. Worked at organisations like ISRO and Potential Service Consultants Pvt. Ltd. for more than a decade as a Structural Designer.', skills: ['Structural Design', 'M.Tech', 'ISRO', '15+ Yrs'] },
  { name: 'Bharath Kumar', role: 'Civil Engineer',                   initial: 'BK', bio: 'Completed B.E in Civil Engineering in 2018. Works with innovative thinking to deliver quality structural solutions.', skills: ['B.E Civil', 'Structural', 'Site Work', 'Innovative'] },
  { name: 'Abinay B S',   role: 'CADD & BIM Specialist',            initial: 'AB', bio: 'Completed Diploma in Civil in 2006. Worked at organisations like Potential and Design Tree Service Consultants. Professional experience of more than 10 years in CADD and Revit software.', skills: ['CADD', 'Revit', 'AutoCAD', '10+ Yrs'] },
]

function TeamCard({ m, index }) {
  const r = useScrollAnimation({ y: 28, delay: index * 0.08 })
  return (
    <div ref={r}
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:border-green-200 card-hover group"
    >
      {/* Header */}
      <div className="bg-gray-900 p-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        />
        <div className="relative flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-900 text-green-300">{m.initial}</span>
          </div>
          <div>
            <h3 className="font-800 text-white text-sm leading-tight">{m.name}</h3>
            <p className="text-gray-400 text-xs mt-0.5">{m.role}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{m.bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {m.skills.map(sk => (
            <span key={sk} className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-600 rounded-full border border-green-100">{sk}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const head = useScrollAnimation({ y: 24 })
  return (
    <section id="team" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={head} className="text-center mb-8">
          <span className="section-label">The People Behind</span>
          <h2 className="section-heading">
            Meet Our <span>Expert Team</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering quality civil engineering solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <TeamCard key={m.name} m={m} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
