import React from 'react'
import './ambient.css'

export default function Ambient() {
  // Generate 50 particles
  const particles = Array.from({ length: 50 })

  return (
    <div className="ambient-bg">
      {particles.map((_, i) => (
        <span
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            animationDuration: `${10 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}
