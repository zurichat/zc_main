import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/ModalComponentStyles.module.css'
import CompanyImage from '../assets/images/CompanyIcon.svg'
import TotalMessages from '../assets/images/TotalMessages.svg'
import { RiArrowRightSLine as Arrow } from 'react-icons/ri'
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'

const ModalComponent = ({ isOpen, toggleOpenInvite }) => {
//   return (
//     <section className={`${isOpen ? styles.open : styles.topbarModal}`}>
//       <div className={styles.sectionOne}>The BrandHub</div>

//       <div className={styles.sectionOne} onClick={toggleOpenInvite}>
//         Invite people to HNGi8
//       </div>

//       <div className={styles.sectionOne}>Create a new Workspace</div>

//       <div className={styles.sectionOne}>
//         Prefrence <br />
//         Customize HNGi8
//       </div>

    const handleMouseOut = () => setValue(false)
    const ref = useRef()
    useEffect(
      () => {
        const node = ref.current
        if (node) {
          node.addEventListener('mouseover', handleMouseOver)
          node.addEventListener('mouseout', handleMouseOut)

          return () => {
            node.removeEventListener('mouseover', handleMouseOver)
            node.removeEventListener('mouseout', handleMouseOut)
          }
        }
      },
      [ref.current] // Recall only if ref changes
    )

    // return [ref, value]
  

  return (
    <section className={`${isOpen ? styles.open : styles.modalCon}`}>
      <div
        className={`d-flex align-items-center justify-content-between ${styles.modalSection}`}
      >
        <div className={`col-2 d-flex px-0 align-items-center ${styles.logo}`}>
          <img src={CompanyImage} alt="logo" />
        </div>
        <div className={`col-10 px-0  ${styles.header}`}>
          <h5> The Brand hub</h5>
          <span>thebrandhub.zurichat.com</span>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div
        className={`d-flex align-items-center justify-content-between ${styles.modalSection}`}
      >
        <div className={`${styles.info}`}>
          <p className={`${styles.infoHeader}`}>Total Messages </p> <br />
          <p className={`${styles.infoP}`}>
            The workspace is currently on the free version of Zuri Chat.
          </p>
          <span> see plans</span>
        </div>
        <div className={`${styles.infoChart}`}>
          <img src={TotalMessages} alt="chart" />
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={` d-flex flex-column ${styles.modalSection}`}>
        <p>Invite people to The Brand Hub</p>
        <p>Create a new Workspace</p>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column ${styles.modalSection}`}>
        <div>
          <p>Prefrence </p>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.popover}`}
        >
          <p>Customize HNGi8</p>
          <div>
            <Arrow className={`${styles.arrow}`} />
          </div>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div
        // ref={hoverRef}
        className={`d-flex align-items-center justify-content-between ${styles.modalSection}`}
      >
        <p>Tools</p>
        <div>
          <Arrow className={`${styles.arrow}`} />
        </div>
        <div
          // className={`${
          //   isHovered ? styles.openmodalSubCon : styles.modalSubCon
          // }`}
        >
          <div
            // ref={hoverRef}
            className={`d-flex flex-column ${styles.modalSection}`}
          >
            <p>Plugins</p>
            <hr className={styles.modalDivider} />
            <p>Analytics</p>
          </div>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={styles.modalSection}>
        <p>Sign Out</p>
      </div>
      <hr className={styles.modalDivider} />
      <div className={` d-flex flex-column ${styles.modalSection}`}>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.modalSubSection} `}
        >
          <p> Add workspace </p>
          <div>
            <Arrow className={`${styles.arrow}`} />
          </div>
        </div>
        <div
          // ref={hoverRef2}
          className={`d-flex align-items-center justify-content-between ${styles.modalSubSection}`}
        >
          <p>Switch workspace</p>
          <Arrow className={`${styles.arrow}`} />
          <div
            // className={`${
            //   isHovered2 ? styles.openmodalSubCon : styles.modalSubCon
            // }`}
          >
            <div
              // ref={hoverRef2}
              className={`d-flex flex-column ${styles.modalSection}`}
            >
              <p>HNGi8</p>
              <hr className={styles.modalDivider} />
              <p>The BrandHub</p>
            </div>
          </div>
        </div>
        <div className={`${styles.modalSubSection}`}>
          <p>Open the Zuri Chat App </p>
        </div>
      </div>
    </section>
  )
}

export default ModalComponent
