import React from 'react'
import styles from '../../styles/Features.module.css'
import hashtag from '../../assets/hashtag.png'
import holiday from '../../assets/holiday.png'
import deadline from '../../assets/deadline.png'
import chat from '../../assets/chat.png'
import todolist from '../../assets/todolist.png'

const Section3 = () => {
  return (
    <div className={styles.real}>
      <div id="featuresSection">
        <h3 className={styles.remote}>
          Working remotely, more intriguing than ever
        </h3>
        <p className={styles.work}>
          Zuri chat is where work meets fun. Activate body and mind, maintain
          high productivity levels, connect and interact
          <br />
          with your team comfortable and efficiently, making quick decisions and
          getting great outcomes.
        </p>
      </div>
      <div className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <div className={styles.imagea}>
            <img src={hashtag} alt="hashtag" className={styles.hashtag} />
          </div>
          <h3>Channels </h3>
          <p>
            Increase level of <br />
            organization in your <br />
            team focused with <br />
            centralized spaces for <br />
            conversions
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.imageh}>
            <img src={holiday} alt="holiday" className={styles.holiday} />
          </div>
          <h3 className={styles.com}>
            Company Holiday
            <br /> Calendar
          </h3>
          <p>
            Add holidays and set
            <br /> reminders. See all <br />
            holidays in one view
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.imaged}>
            <img src={deadline} alt="deadline" className={styles.deadline} />
          </div>
          <h3>Company deadline</h3>
          <p>
            Meet up with deadlines
            <br />
            with the company
            <br />
            deadline feature
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.imagec}>
            <img src={chat} alt="chat" className={styles.chat} />
          </div>
          <h3>Quick Reply App</h3>
          <p>
            Swift replies to your <br />
            messages in your DMs
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.imaget}>
            <img src={todolist} alt="To do list" className={styles.todolist} />
          </div>
          <h3>To Do List</h3>
          <p>
            Get your task organized
            <br />
            with the to do list
            <br />
            feature ensuring your
            <br />
            most urgent tasks are
            <br />
            duly attended to.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section3