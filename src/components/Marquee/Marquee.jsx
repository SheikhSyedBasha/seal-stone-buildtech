const commercial = [
  'Commercial & Residential Building',
  'Preparation of Arch. DWG.',
  'Preparing Questionnaire with Recommendation',
  'Preparation of DBR',
  'Concept Presentation',
  'Final DBR',
  'Preparation of Working Drawings',
  'Monitoring Work Execution at Site',
]
const industrial = [
  'Industrial Buildings',
  'Preparation of Arch. DWG.',
  'Preparing Questionnaire with Recommendation',
  'Preparation of DBR',
  'Concept Presentation',
  'Final DBR',
  'Preparation of Working Drawings',
  'Monitoring Work Execution at Site',
]
const brand = ['✦ VERTEX INFRA', 'ONE POINT. COMPLETE SOLUTION. ✦']
const doubled = [...commercial, ...brand, ...industrial, ...brand, ...commercial, ...brand, ...industrial, ...brand]

export default function Marquee() {
  return (
    <div className="bg-white border-y border-gray-200 overflow-hidden py-3">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => {
          const isBrand = item.startsWith('✦') || item.startsWith('ONE')
          return (
            <span key={i}
              className={`flex items-center gap-2.5 text-xs font-600 tracking-[0.13em] uppercase flex-shrink-0 ${
                isBrand ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              {!isBrand && <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />}
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}
