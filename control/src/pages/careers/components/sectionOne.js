import React from 'react'

import { Link } from 'react-router-dom'
import styles from '../styles/sectionOne.module.css'
// import image from '../assets/section_one_image.svg'
import groupImage from '../assets/group_image_sectionOne.svg'

const SectionOne = () => (
  <div className={`${styles.Section1}`}>
    <div className={`${styles.section1Left}`}>
      <h1>Careers at Zuri Chat</h1>
      <p>
        Passionate about making work life simpler, and more productive? Join our
        remote-friendly and flexible team.
      </p>
      <Link to="/signup">
        <a className={styles.JoinBtn}>Join us</a>
      </Link>
    </div>
    <img src={groupImage} alt="people" />
  </div>
)

export default SectionOne
