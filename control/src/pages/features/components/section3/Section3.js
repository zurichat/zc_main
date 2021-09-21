import styles from '../../styles/section3.module.css'
import channels from '../../assets/channels_icon.png'
import todo from '../../assets/to_do_interface_image.png'
import holiday from '../../assets/holiday_calender_icon.png'
import company from '../../assets/company_deadline_icon.png'
import quick from '../../assets/quick_reply_app_icon.png'
import list from '../../assets/to_do_list_icon.png'

const Section3 = () => {
  return (
    <div className={styles.section3}>
      <div className={styles.section3TopTextsWrapper}>
        <h3 className={styles.remote}>
          Working remotely, more intriguing than ever
        </h3>
        <p className={styles.work}>
          Zuri Chat is where work meets fun. Activate body and mind, maintain
          high productivity levels, connect and interact with your team
          comfortably and efficiently.
        </p>
      </div>
      <div className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <img src={channels} alt="hashtag" className={styles.hashtag} />
          </div>
          <h3>Channels</h3>
          <p>
            Increase level of organisation in your team focused with cetralized
            spaces.
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <img src={holiday} alt="holiday" className={styles.holiday} />
          </div>
          <h3 className={styles.com}>Holiday Calendar</h3>
          <p>Add holidays, set reminders and see all in one view</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <img src={company} alt="deadline" className={styles.deadline} />
          </div>
          <h3>Company Deadline</h3>
          <p>Meet up with deadlines with the company deadline feature.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <img src={quick} alt="chat" className={styles.chat} />
          </div>
          <h3>Quick Reply App</h3>
          <p>
            Get swift replies to Direct Messages and across all your channels.
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <img src={list} alt="To do list" className={styles.todolist} />
          </div>
          <h3>To do list</h3>
          <p>
            Organize tasks with the to-do list feature ensuring urgent tasks are
            duly attended to.
          </p>
        </div>
      </div>
      <div className={styles.zuriInterfaceViewWrapper}>
        <img src={todo} alt="Zuri Interface" />
      </div>
    </div>
  )
}

export default Section3
