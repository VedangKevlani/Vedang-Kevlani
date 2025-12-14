import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Investment Client Services Intern',
    company: 'Sagicor Group Jamaica Limited',
    year: '2025',
  },
  {
    role: 'Web Developer Intern',
    company: 'Zion Care International',
    year: '2025',
  },
  {
    role: 'Research Assistant',
    company: 'University of the West Indies Mona',
    year: '2024-2025',
  },
  {
    role: 'Adjunct Lab Assistant',
    company: 'University of the West Indies Mona',
    year: '2023-2025',
  },
  {
    role: 'Data Science Trainee',
    company: 'StarApple AI',
    year: '2023',
  }
]

export default function Experience({ id }) {
  return (
    <section id={id} className="my-16">
      <h2 className="text-3xl font-bold mb-12 text-accent text-center">Experience</h2>
      <div className="pt-48 space-y-8 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-panel rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-xl font-semibold text-text-main">{exp.role} @ {exp.company}</h3>
            <p className="text-text-muted">{exp.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}