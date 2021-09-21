import React from 'react'

import styles from '../styles/CareersSection2.module.css'

function CareersSection2() {
  return (
    <div className={`${styles.Section2}`}>
      <h2>Working and thriving</h2>
      <p>
        We provide benefits which give you the best work experience and push you
        to do your best.
      </p>
      <div className={`${styles.subSection2}`}>
        <div>
          <h3>Digital-First Office</h3>
          <p>
            With remote roles, office-free onboarding and flexible working
            practices, we are set up for ever-changing realities, schedules and
            responsibilities.
          </p>
        </div>
        <div>
          <h3>Just For You</h3>
          <p>
            Receive an annual allowance for professional development, plus a
            monthly stipend to cover your needs; A new work look, a pet,
            whatever matters most to you.
          </p>
        </div>
        <div>
          <h3>Health and Wellness</h3>
          <p>
            Zuri Pays 100% of your premiums. We also offer access to a range of
            free mental health and well-being resources.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareersSection2
