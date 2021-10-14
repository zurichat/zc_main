import React from 'react'
import styles from '../styles/skeletonLoader.module.css'

export default function SkeletonLoader() {
  const COUNTER = 8

  const SideBarSkeleton = () => (
    <div className={styles.skeletonLoaderWrapper}>
      <div className={styles.skeletonLoaderLeftDiv}></div>
      <div className={styles.skeletonLoaderRightDiv}></div>
    </div>
  )

  return Array(COUNTER).fill(<SideBarSkeleton />)
}
