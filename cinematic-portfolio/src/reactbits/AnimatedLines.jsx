// src/reactbits/AnimatedLines.jsx
export default function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="line line1"></div>
      <div className="line line2"></div>
      <style jsx>{`
        .line {
          position: absolute;
          width: 200%;
          height: 2px;
          background: var(--accent);
          opacity: 0.05;
          animation: slide 12s linear infinite;
        }
        .line1 { top: 30%; animation-duration: 14s; }
        .line2 { top: 70%; animation-duration: 18s; }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
