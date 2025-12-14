import { useEffect, useState } from 'react'

export default function ThemeLock() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    // Only allow one switch
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 100 }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.4rem 0.8rem',
          fontSize: '0.8rem',
          cursor: 'pointer',
          border: '1px solid var(--accent)',
          background: 'transparent',
          color: 'var(--text-main)'
        }}
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}
