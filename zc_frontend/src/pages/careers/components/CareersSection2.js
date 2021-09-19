import React from 'react'

import styles from '../styles/CareersSection2.module.css'

function CareersSection2() {
  return (
    <div className={`${styles.Section2}`}>
      <h2>Working and thriving</h2>
      <p>We offer benefits that help you feel your best and do your best</p>
      <div className={`${styles.subSection2}`}>
        <div>
          <h3>Digital-first office</h3>
          <p>
            With remote roles, office free onboarding and flexible working
            practices, we are set up for ever-changing realities, schedules and
            responsibilities.
          </p>
        </div>
        <div>
          <h3>Digital-first office</h3>
          <p>
            With remote roles, office free onboarding and flexible working
            practices, we are set up for ever-changing realities, schedules and
            responsibilities.
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
