import { useEffect } from 'react'
import AmbientBackground from './components/Ambient/AmbientBackground'
import Hero from './components/Hero/Hero'
import Ambient from './components/Ambient/Ambient.jsx'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Awards from './components/Awards/Awards'
import Dashboard from './components/Dashboard/Dashboard'
import Contact from './components/Contact/Contact'
import ResumeSection from './components/Resume/ResumeSection'
import ThemeLock from './components/ThemeLock/ThemeLock'
import { logPageVisit } from './utils/analytics'
import AnimatedLines from './reactbits/AnimatedLines.jsx'
import GlitchText from './reactbits/GlitchText.jsx'
import SideMenu from './components/SideMenu/SideMenu.jsx'
import BackToTop from './components/BackToTop/BackToTop.jsx'
import TargetCursor from './reactbits/TargetCursor.jsx'
function App() {
  return (
   <div className="min-h-screen bg-black text-white">
  <Ambient />
  <ThemeLock />

<TargetCursor
  spinDuration={2}
  hideDefaultCursor={true}
  parallaxOn={true}
  sectionSelector="section"
  targetSelector=".cursor-target"
/>

  <div className="container mx-auto px-4">
    <SideMenu />
    <AmbientBackground />
    <AnimatedLines />
    <Hero id="hero" className="cursor-target" />
    <Projects id="projects" className="cursor-target" />
    <Experience id="experience" className="cursor-target" />
    <Awards id="awards" className="cursor-target" />
    <Dashboard id="dashboard" className="cursor-target" />
    <ResumeSection id="resume" className="cursor-target" />
    <Contact id="contact" className="cursor-target" />
  </div>

  <BackToTop />
</div>
  )
}
export default App
