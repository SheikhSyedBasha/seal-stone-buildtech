import { useState } from 'react'
import Navbar        from './components/Navbar/Navbar'
import Hero          from './components/Hero/Hero'
import Stats         from './components/Stats/Stats'
import About         from './components/About/About'
import Services      from './components/Services/Services'
import WhyUs         from './components/WhyUs/WhyUs'
import Projects      from './components/Projects/Projects'
import Testimonials  from './components/Testimonials/Testimonials'
import Team          from './components/Team/Team'
import CTABanner     from './components/CTABanner/CTABanner'
import TrustedBrands from './components/TrustedBrands/TrustedBrands'
import Contact       from './components/Contact/Contact'
import FloatingCTA   from './components/FloatingCTA/FloatingCTA'
import LeadPopup     from './components/LeadPopup/LeadPopup'
import './index.css'

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false)
  const openPopup  = () => setPopupOpen(true)
  const closePopup = () => setPopupOpen(false)

  return (
    <div>
      <Navbar        onConsultClick={openPopup} />
      <Hero          onConsultClick={openPopup} />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Projects      onConsultClick={openPopup} />
      <Testimonials />
      <Team />
      <TrustedBrands />
      <CTABanner     onConsultClick={openPopup} />
      <Contact />
      <FloatingCTA   onConsultClick={openPopup} />
      <LeadPopup     forceOpen={popupOpen} onClose={closePopup} />
    </div>
  )
}
