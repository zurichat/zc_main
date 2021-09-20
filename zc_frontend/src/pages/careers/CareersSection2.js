import React from 'react'
import style from '../../styles/CareersSection2.module.css'

function CareersSection2() {
  return (
    <div className={style.wrap}>
      <div className={`${style.one}`}>
        <h2>Working and thriving</h2>
        <p>We offer benefits that help you feel your best and do your best</p>
      </div>
      <div className={`${style.two}`}>
        <div className={`${style.tile}`}>
          <h3>Digital-first office</h3>
          <p>
            With remote roles, office free onboarding and flexible working
            practices, we are set up for ever-changing realities, schedules and
            responsibilities.
          </p>
        </div>
        <div className={`${style.tile}`}>
          <h3>Just for you</h3>
          <p>
            Recieve an annual allowance for professional development, plus a
            monthly stipend you can use toward anything. A new work look, a pet.
            Whatever matters most to you.
          </p>
        </div>
        <div className={`${style.tile}`}>
          <h3>Health and Wellness</h3>
          <p>
            Zuri pays 100% of your premiums. We also offer access to a range of
            free mental health and well-being resources.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareersSection2
