import styles from './Projects.module.css'

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className={styles.card} onClick={onOpen}>
      <div className={styles.meta}>
        <span>{project.year}</span>
        <span>{project.role}</span>
      </div>

      <h3>{project.title}</h3>

      <p className={styles.tech}>
        {project.tech.join(', ')}
      </p>
    </div>
  )
}
