import React from 'react'
import { motion } from 'framer-motion'
const awards = [
  {
    title: 'Intellibus AI Hackathon Top 12',
    issuer: 'Intellibus',
    year: '2025'
  },
  {
    title: 'First Class Honors in BSc Computer Science and Economics',
    issuer: 'University of the West Indies',
    year: '2025'
  },
  {
    title: 'Computing Honors Society Inductee',
    issuer: 'University of the West Indies',
    year: '2025'
  },
  {
    title: '1st Place - JAIA Christmas Hackathon',
    issuer: 'JAIA',
    year: '2024'
  },
  {
    title: 'Venture Finalist - Vincent Hosang Business Model Competition',
    issuer: 'MSBM, University of the West Indies',
    year: '2024-2025'
  }
]

export default function Awards({ id }) {
  return (
    <section id={id} className="my-16">
      <h2 className="text-3xl font-bold mb-12 text-accent text-center">Awards</h2>
      <div className="pt-48 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-panel rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 text-center"
          >
            <h3 className="text-xl font-semibold text-text-main">{award.title}</h3>
            <p className="text-text-muted">{award.issuer}</p>
            <p className="mt-1">{award.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}