import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD:zc_frontend/src/components/externalPagesComponents/Footer/Footer.js
import styles from './Footer.module.css'
import Message from './Message'
=======
import styles from '../component-styles/Footer.module.css'
import Message from '../components/Message'
import facebook from '../component-assets/facebook.svg'
import instagram from '../component-assets/instagram.svg'
import linkedin from '../component-assets/linkedin.svg'
import twitter from '../component-assets/twitter.svg'
import zurichatlogo from '../component-assets/zurichatlogo.svg'
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/components/Footer.js

const Footer = ({ showMessage, type }) => (
  <footer className={styles.footer}>
    {showMessage && <Message type={type} />}
    <div
      style={showMessage ? { paddingTop: '48px' } : { paddingTop: '65px' }}
      className={styles.notShow}
    >
      <section className={styles.topSection}>
        <div className={styles.logowrapper}>
          <div className={styles.logo}>
            <img src={zurichatlogo} alt="" />
            <span className={styles.zuriText}>Zuri Chat</span>
          </div>
        </div>
        <nav className={styles.navContainer}>
          <ul className={styles.nav}>
            <li className={styles.mainList}>
              <span className={styles.title}>Company</span>
              <li className={styles.subList}>
                <a className={styles.link} href="/">
                  Finalists
                </a>
                <a className={styles.link} href="/">
                  Events
                </a>
                <Link to="/blogs" className={styles.link}>
                  Blog posts
                </Link>
                <a className={styles.link} href="/">
                  News
                </a>
                <Link to="/Careers" className={styles.link}>
                  Careers
                </Link>
              </li>
            </li>
            <li className={styles.mainList}>
              <span className={styles.title}>Explore</span>
              <li className={styles.subList}>
                <a className={styles.link} href="/features">
                  Features
                </a>
                <a className={styles.link} href="/">
                  Plugins
                </a>
                <a className={styles.link} href="/pricing">
                  Pricing
                </a>
              </li>
            </li>
            <li className={styles.mainList}>
              <span className={styles.title}>Resources</span>
              <li className={styles.subList}>
                <a className={styles.link} href="/">
                  Designers
                </a>
                <a className={styles.link} href="/">
                  Developers
                </a>
                <a className={styles.link} href="/">
                  Mentors
                </a>
              </li>
            </li>
            <li className={styles.mainList}>
              <span className={styles.title}>Compare</span>
              <li className={styles.subList}>
                <a className={styles.link} href="/">
                  Slack
                </a>
                <a className={styles.link} href="/">
                  Discord
                </a>
              </li>
            </li>
            <li className={styles.mainList}>
              <span className={styles.title}>Social Media</span>
              <div className={styles.socialMedia}>
                <a href="/">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="/">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="/">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="/">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.bottomSection}>
        <p className={styles.copyright}>
          &copy;2021 Zuri, Team Aristotle. All Rights Reserved.{' '}
        </p>
        <nav className={styles.bottomNav}>
          <ul className={styles.navItems}>
            <li>
              <a className={styles.bottomLink} href="/">
                Privacy
              </a>
            </li>
            <li>
              <a className={styles.bottomLink} href="/">
                Terms
              </a>
            </li>
            <li>
              <a className={styles.bottomLink} href="/">
                Help center
              </a>
            </li>
            <li>
              <a className={styles.bottomLink} href="/contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </footer>
)

export default Footer
