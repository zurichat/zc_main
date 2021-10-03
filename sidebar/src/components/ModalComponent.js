import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/ModalComponentStyles.module.css'
import CompanyImage from '../assets/images/CompanyIcon.svg'
import TotalMessages from '../assets/images/TotalMessages.svg'
import axios from 'axios'
import { RiArrowRightSLine as Arrow } from 'react-icons/ri'
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'
import Workspace from '../../../control/src/pages/workspace/components/Workspace'

<<<<<<< HEAD
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
=======
const ModalComponent = ({ workSpace, isOpen, toggleOpenInvite }) => {
  // const isOpen = true;

  const [hoverRef, isHovered] = useHover()
  const [hoverRef2, isHovered2] = useHover()
  const [hoverRef3, isHovered3] = useHover()

  function useHover() {
    const [value, setValue] = useState(false)

    const ref = useRef(null)

    const handleMouseOver = () => setValue(true)
>>>>>>> 6d696288f1f4e0c4c003f7a3bd75a47a1a931146

    const handleMouseOut = () => setValue(false)

<<<<<<< HEAD
    // return [ref, value]
  

=======
    useEffect(() => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)
      }
    }, [[ref.current]])
    return [ref, value]
  }
>>>>>>> 6d696288f1f4e0c4c003f7a3bd75a47a1a931146
  return (
    <section className={`${isOpen ? styles.open : styles.modalCon}`}>
      <div
        className={`d-flex align-items-center justify-content-between ${styles.TopmodalSection}`}
      >
        <div className={`col-2 d-flex px-0 align-items-center ${styles.logo}`}>
          <img src={CompanyImage} alt="logo" />
        </div>
        <div className={`col-10 px-0  ${styles.header}`}>
          <h5> {workSpace.name}</h5>
          <span>{workSpace.workspace_url}</span>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div
        className={`d-flex align-items-center justify-content-between ${styles.TopmodalSection}`}
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
        <div>
          <p onClick={toggleOpenInvite}>Invite people to {workSpace.name}</p>
        </div>
        <div>
          <p>
            <a href="/createworkspace">Create a new Workspace</a>
          </p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column ${styles.modalSection}`}>
        <div>
          <p>Prefrence </p>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.popover}`}
        >
          <p>Customize {workSpace.name}</p>
          <div>
            <Arrow className={`${styles.arrow}`} />
          </div>
        </div>
      </div>
      <hr className={styles.modalDivider} />
<<<<<<< HEAD
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
=======
      <div ref={hoverRef} className={` ${styles.modalSection}`}>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.modalSection}`}
        >
          <p>Tools</p>
          <div>
            <Arrow className={`${styles.arrow}`} />
>>>>>>> 6d696288f1f4e0c4c003f7a3bd75a47a1a931146
          </div>

          <section
            className={`${
              isHovered ? styles.openmodalSubCon : styles.modalSubCon
            }`}
          >
            <section
              ref={hoverRef}
              className={`d-flex flex-column ${styles.submodalSection}`}
            >
              <div>
                <p>Plugins</p>
              </div>
              <hr className={styles.modalDivider} />
              <div>
                <p>Analytics</p>
              </div>
            </section>
          </section>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={styles.modalSection}>
        <div>
          <p>
            {' '}
            <a href="/signout">Sign Out</a>
          </p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={` d-flex flex-column ${styles.modalSection}`}>
        <div
          ref={hoverRef3}
          className={`d-flex align-items-center justify-content-between ${styles.modalSubSection} `}
        >
          <p> Add workspace </p>
          <div>
            <Arrow className={`${styles.arrow}`} />
          </div>
          <section
            className={`${
              isHovered3 ? styles.openmodalSubCon : styles.modalSubCon
            }`}
          >
            <section
              ref={hoverRef3}
              className={`d-flex flex-column ${styles.submodalSection}`}
            >
              <div>
                <p>HNGi8</p>
              </div>
              <hr className={styles.modalDivider} />
              <div>
                <p>The BrandHub</p>
              </div>
            </section>
          </section>
        </div>
        <div
          // ref={hoverRef2}
          className={`d-flex align-items-center justify-content-between ${styles.modalSubSection}`}
        >
          <p>Switch workspace</p>
          <Arrow className={`${styles.arrow}`} />
<<<<<<< HEAD
          <div
            // className={`${
            //   isHovered2 ? styles.openmodalSubCon : styles.modalSubCon
            // }`}
          >
            <div
              // ref={hoverRef2}
              className={`d-flex flex-column ${styles.modalSection}`}
=======
          <section
            className={`${
              isHovered2 ? styles.openmodalSubCon : styles.modalSubCon
            }`}
          >
            <section
              ref={hoverRef2}
              className={`d-flex flex-column ${styles.submodalSection}`}
>>>>>>> 6d696288f1f4e0c4c003f7a3bd75a47a1a931146
            >
              <div>
                <p>HNGi8</p>
              </div>
              <hr className={styles.modalDivider} />
              <div>
                <p>The BrandHub</p>
              </div>
            </section>
          </section>
        </div>
        <div className={`${styles.modalSubSection}`}>
          <p>Open the Zuri Chat App </p>
        </div>
      </div>
    </section>
  )
}

export default ModalComponent
