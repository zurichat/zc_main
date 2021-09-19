import styles from '../styles/contactMain.module.css'
import ContactForm from './form'
import { useState } from 'react'
const ContactTitle = () => {

      const [show, setShow] = useState(false)
      const handleHide = () => setShow(false)
      const handleShow = () => setShow(true)
      
      let contactForm = <ContactForm display={show} handleHide={handleHide}/>
      
    return (
          <div className={styles.contact_container}>
            <div className={styles.header}>
            <div className={styles.header_caption}>Contact Us</div>
            <div className={styles.header_body}>We are dedicated to making your online communication experience with us a pleasure.</div>
            </div>
            {show ? contactForm : (
              <div className={styles.notification_body}>
              <div className={styles.select_topic}>select a topic:</div>
              <div className={styles.notification_buttons}>
              <button onClick={handleShow}>Adding or removing users</button>
              <button>Billing and plans</button>
              <button>Connection trouble</button>
              <button>Notifications</button>
              <button>Managing channels</button>
              <button>Signing In</button>
              <button>New design feedback</button>
              <button>Trial of paid plan</button>
            </div>
            <div className={styles.enter_topic}>Or tell us what you need help with:</div>
            
            <div className={styles.text_area}><input type="text" placeholder="Enter a topic" /></div>
            <div className={styles.get_help_button}><button className={styles.get_help}>GET HELP</button></div>
            <div className={styles.link}><a href=".">Privacy policy</a></div>
            </div>
            )}
          </div>
    )
  }
  
  export default ContactTitle