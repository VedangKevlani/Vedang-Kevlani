import React from 'react'
import './GlitchText.css'

export default function GlitchText({ text, className }) {
  return (
    <h1 className={`glitch ${className}`}>
      {text}
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true">{text}</span>
    </h1>
  )
}
