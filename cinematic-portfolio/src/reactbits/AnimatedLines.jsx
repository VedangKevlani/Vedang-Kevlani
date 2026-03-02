import React from "react"
import "./AnimatedLines.css"

export default function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="line line1"></div>
      <div className="line line2"></div>
    </div>
  )
}
