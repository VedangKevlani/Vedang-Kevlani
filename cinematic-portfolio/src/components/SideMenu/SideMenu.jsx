import React, { useState, useEffect } from 'react'
import './SideMenu.css'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Evidence' },
  { id: 'experience', label: 'Timeline' },
  { id: 'awards', label: 'Intel' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

export default function SideMenu() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      sections.forEach(section => {
        const el = document.getElementById(section.id)
        if (!el) return
        const offsetTop = el.offsetTop
        const offsetBottom = offsetTop + el.offsetHeight
        if (scrollPos >= offsetTop - 120 && scrollPos < offsetBottom - 120) {
          setActive(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hamburger (mobile only) */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>

      <nav className={`side-menu ${open ? 'open' : ''}`}>
        <span
          className="side-menu-indicator"
          style={{
            transform: `translateY(${sections.findIndex(s => s.id === active) * 2.8}rem)`
          }}
        />

        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNav(section.id)
            }}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </>
  )
}
