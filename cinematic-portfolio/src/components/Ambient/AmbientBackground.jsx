import { motion } from 'framer-motion'
import './ambient.css'

export default function AmbientBackground() {
  return (
    <motion.div
      className="ambient-bg"
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 60,
        ease: 'linear',
        repeat: Infinity
      }}
    />
  )
}
