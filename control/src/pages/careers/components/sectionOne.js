import React from 'react'

import { Link } from 'react-router-dom'
import styles from '../styles/sectionOne.module.css'
import image from '../assets/section_one_image.svg'

const SectionOne = () => (
  <div className={`${styles.Section1}`}>
    <div className={`${styles.section1Left}`}>
      <h1>Work with us</h1>
      <p>
        Explore flexible and remote-friendly opportunities, join our mission to
        make work life easier, more convenient, and more productive.
      </p>
      <Link to="/signup">
        <button>Join us</button>
      </Link>
    </div>
    <img src={image} alt="people" />
  </div>
)

export default SectionOne
