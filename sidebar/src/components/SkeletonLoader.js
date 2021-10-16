import React from "react"
import styles from "../styles/skeletonLoader.module.css"
import { v4 as uuidv4 } from "uuid"

export default function SkeletonLoader({ COUNTER }) {
  const SideBarSkeleton = () => (
    <div className={styles.skeletonLoaderWrapper}>
      <div className={styles.skeletonLoaderLeftDiv}></div>
      <div className={styles.skeletonLoaderRightDiv}></div>
    </div>
  )

  return Array(COUNTER).fill(<SideBarSkeleton />)
}
