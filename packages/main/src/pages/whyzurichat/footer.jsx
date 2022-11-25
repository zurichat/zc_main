import React from 'react'
import styles from './why.module.css'
import footerlogo from './images/footerlogo.svg'
export default function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.fFooter}>
        <img className={styles.footer_logo} src={footerlogo} alt="zuri chat logo" />
        <div>
          <h5>Company</h5>
          <p>Careers</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Why Zuri Chat?</p>

        </div>
        <div>
          <h5>Information</h5>
          <p>Privacy & Terms</p>
          <p>Blogs</p>
          <p>Plugins</p>

        </div>
        <div>
          <h5>Legal</h5>
          <p>Security</p>
          <p>Cookies</p>
          <p>Privacy</p>

        </div>
        <div>
          <h5>Know us</h5>
          <p>About</p>
          <p>Contact</p>
          <p>Downloads</p>

        </div>

      </div>
      <div className={styles.sFooter}>
        <p>&copy; 2022 Zuri Chat. All Rights Reserved</p>
        <p>Version - 1.0.0</p>
      </div>
      
      
      
    </footer>
  )
}
