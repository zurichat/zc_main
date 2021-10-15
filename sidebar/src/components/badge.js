import React from "react"
import styles from "../styles/badge.module.css"

const badge = ({ number }) => {
  return (
    <span className={`badge bg-danger rounded-pill ${styles.badge}`}>
      {number}
    </span>
  )
}

export default badge
