import React from 'react'
import styles from './Message.module.css'
const Message = ({ type }) => {
  if (type === 'contact') {
    return (
      <div className={styles.message_box}>
        <p className={styles.p}>Discover More.</p>
        <span className={styles.span}>
          From channels to chat,learn how zuri chat works from top to bottom
        </span>
        <div className={styles.buttonSection}>
          <button className={`${styles.button} ${styles.buttonOutline}`}>
            <a className={styles.a} href="/help-center">
              Visit Help Center
            </a>
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.message_box}>
      <div className={styles.message}>
        <p className={styles.p}>
          Whatever work you do,you can do it in Zuri Chat
        </p>
        <div className={styles.buttonSection}>
          <button className={styles.buttonFilled}>
            <a className={styles.a} href="/contact-us">
              Talk to Sales
            </a>
          </button>
          <button className={styles.buttonOutline}>
            <a className={styles.a} href="/login">
              TRY IT FREE
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Message
