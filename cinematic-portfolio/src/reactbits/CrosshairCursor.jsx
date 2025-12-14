import React, { useEffect, useState } from 'react'

export default function CrosshairCursor({ color = 'var(--accent)', size = 20 }) {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y - size / 2,
        left: position.x - size / 2,
        width: size,
        height: size,
        border: `2px solid ${color}`,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.05s ease-out',
      }}
    />
  )
}
