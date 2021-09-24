import React from 'react'
import styles from '../styles/skeletonLoader.module.css'

export default function SkeletonLoader() {
  return (
    <div className={styles.skeleton_loader}>
      <div className={styles.skeleton_animation}></div>
    </div>
  )
}
