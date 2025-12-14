import styles from './Dashboard.module.css'

export default function SkillBar({ skill, level }) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillHeader}>
        <span>{skill}</span>
        <span>{level}%</span>
      </div>

      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
