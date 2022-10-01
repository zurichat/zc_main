import React from "react";
import styles from "../styles/SkeletonLoader.module.css";

export default function SkeletonLoader({ COUNTER }) {
  const SideBarSkeleton = () => (
    <div className={styles.skeletonLoaderWrapper}>
      <div className={styles.skeletonLoaderLeftDiv}></div>
      <div className={styles.skeletonLoaderRightDiv}></div>
    </div>
  );

  let Skeletons = [];

  for (let i = 0; i < COUNTER; i++) {
    Skeletons = [...Skeletons, <SideBarSkeleton key={i} />];
  }

  return Skeletons;

  // return Array(COUNTER).fill(<SideBarSkeleton key={uuidv4()} />)
}
