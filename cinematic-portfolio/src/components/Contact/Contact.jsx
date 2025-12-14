import styles from './Contact.module.css'
import Reveal from '../Reveal/Reveal'

export default function Contact({ id }) {
  return (
    <section id={id} className={styles.contact}>
      <div className={styles.grid}>
        {/* Text */}
        <Reveal>
          <div className={styles.text}>
            <h2>Case Closed</h2>

            <p>
              If you’re looking for someone who approaches
              problems methodically — from data to deployment —
              we should talk.
            </p>

            <ul className={styles.links}>
              <li>
                <a href="mailto:kevlanivedang28@gmail.com">
                  kevlanivedang28@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vedang-kevlani/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn - Vedang Kevlani
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/VedangKevlani"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub - Vedang Kevlani
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Photo */}
        <Reveal delay={0.2}>
          <div className={styles.photoWrapper}>
            <img
              src="/profile.jpg"
              alt="Vedang – Professional portrait"
            />
          </div>
        </Reveal>
        </div>
      </section>
    )
  }
