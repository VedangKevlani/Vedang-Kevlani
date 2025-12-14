import styles from './ResumeSection.module.css'
import Reveal from '../Reveal/Reveal'

export default function ResumeSection({ id }) {
  return (
    <section id={id} className={styles.resumeSection}>
      <Reveal>
        <h2>Résumé</h2>
        <p>Download a detailed professional file.</p>
        <a
          href="/Vedang_Kevlani_Resume.pdf"
          download
          className={styles.downloadButton}
        >
          Download Resume
        </a>
      </Reveal>
    </section>
  )
}
