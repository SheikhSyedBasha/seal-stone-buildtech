const brands = [
  { name: 'UltraTech Cement', logo: 'https://img.logo.dev/ultratechcement.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'ACC Cement',       logo: 'https://img.logo.dev/acclimited.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'JSW Steel',        logo: 'https://img.logo.dev/jsw.in?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'Tata Steel',       logo: 'https://img.logo.dev/tatasteel.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'Asian Paints',     logo: 'https://img.logo.dev/asianpaints.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'Ambuja Cement',    logo: 'https://img.logo.dev/ambujacement.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'Kajaria',          logo: 'https://img.logo.dev/kajariaceramics.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'Havells',          logo: 'https://img.logo.dev/havells.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'Pidilite',         logo: 'https://img.logo.dev/pidilite.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
  { name: 'Berger Paints',    logo: 'https://img.logo.dev/bergerpaints.com?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80' },
]

const doubled = [...brands, ...brands]

export default function TrustedBrands() {
  return (
    <div className="bg-white border-y border-gray-100 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <span className="section-label justify-center">Trusted Brands We Work With</span>
      </div>
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((b, i) => (
          <div key={i} className="flex-shrink-0 flex items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <img
              src={b.logo}
              alt={b.name}
              className="h-10 w-auto object-contain"
              onError={e => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            <span
              style={{ display: 'none' }}
              className="items-center text-xs font-800 text-gray-500 tracking-wide border border-gray-200 rounded-lg px-3 py-1.5 bg-white"
            >
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
