import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import Reveal from '../Reveal/Reveal'
import { useState } from 'react'
import projects from './projectsData'
import ProjectModal from './ProjectModal'

export default function Projects({ id }) {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id={id}>
      <Reveal>
      <h2 className={`${styles.heading} cursor-target`}>Case Files</h2>
      </Reveal>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.1}>
            <ProjectCard
              project={project}
              onOpen={() => setActiveProject(project)}
            />
          </Reveal>
        ))}
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
