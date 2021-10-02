import React, { useState } from 'react'
import styles from '../styles/ModalComponentStyles.module.css'

const ModalComponent = ({ isOpen, toggleOpenInvite }) => {
  return (
    <section className={`${isOpen ? styles.open : styles.topbarModal}`}>
      <div className={styles.sectionOne}>The BrandHub</div>

      <div className={styles.sectionOne} onClick={toggleOpenInvite}>
        Invite people to HNGi8
      </div>

      <div className={styles.sectionOne}>Create a new Workspace</div>

      <div className={styles.sectionOne}>
        Prefrence <br />
        Customize HNGi8
      </div>

      <div className={styles.sectionOne}>Tools</div>
      <div className={styles.sectionOne}>Sign Out</div>
      <div
        className={` d-flex flex-column align-items-start ${styles.sectionOne}`}
      >
        <span> Add workspace </span>
        <span>Switch workspace</span>
        <span>Open the Zuri Chat App </span>
      </div>
    </section>
  )
}

export default ModalComponent