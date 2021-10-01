import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function Carousel() {
  return (
    <Carousel>
      <div className={`row`}>
        <div className={`col ${styles.working_remote_section}`}>
          <img src={channel} alt={'centralized space'} />
          <h6>Channel</h6>
          <p>
            Increase level of organization in your team focused with <br />
            centralized spaces
          </p>
        </div>
        <div className={`col ${styles.working_remote_section}`}>
          <img src={holiday} alt={'image of calender'} />
          <h6>Holiday Calender</h6>
          <p>
            Add holidays, set reminders <br />
            and see all in one view
          </p>
        </div>
        <div className={`col ${styles.working_remote_section}`}>
          <img src={deadline} alt={'image of alarm clock'} />
          <h6>Company Deadline</h6>
          <p>
            Meet up with deadlines with <br />
            the company deadline <br />
            feature.
          </p>
        </div>
        <div className={`col ${styles.working_remote_section}`}>
          <img src={quick} alt={'image of quick reply app'} />
          <h6>Quick Reply App</h6>
          <p>
            Get swift replies to Direct <br />
            Messages and across all <br />
            your channels.
          </p>
        </div>
        <div className={`col ${styles.working_remote_section}`}>
          <img src={todo} alt={'image to do list'} />
          <h6>To do List</h6>
          <p>
            Organize tasks with the to-do <br />
            list feature ensuring urgent <br />
            tasks are duly attended to.
          </p>
        </div>
      </div>
    </Carousel>
  )
}
