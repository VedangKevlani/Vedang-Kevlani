import styles from './Dashboard.module.css'
import React from "react"

export default function MetricCard({ label, value }) {
  return (
    <div className={styles.metric}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
