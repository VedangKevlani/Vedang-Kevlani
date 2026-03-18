import styles from './Projects.module.css'
import React from 'react'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  // Ensure outcomes is always an array to prevent crashes
  const outcomes = project.outcomes || []

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <br></br><h3>{project.title}</h3>

        <p className={styles.modalMeta}>
          {project.year} • {project.role}
        </p>

        <p className={styles.description}>
          {project.description}
        </p>

        {project.videoLink && typeof project.videoLink === 'string' && (
          <div className={styles.videoWrapper}>
            <iframe
              src={`${project.videoLink}${project.videoLink.includes('?') ? '&autoplay=1' : '?autoplay=1'}`}
              title={project.title}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {project.projectLink && (
          <div className={styles.linkedinWrapper} style={{ marginTop: '1rem' }}>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewLinkedIn}
            >
              Visit Project
            </a>
          </div>
        )}

        <ul className={styles.outcomes}>
          {outcomes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <button onClick={onClose} className={styles.close}>
          Close File
        </button>
      </div>
    </div>
  )
}
