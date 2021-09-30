/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styles from '../component-styles/FooterStyle.module.css'
import logo from '../component-assets/zurichatlogo.svg'
import facebook from '../component-assets/facebook.svg'
import twitter from '../component-assets/twitter.svg'
import linkedin from '../component-assets/linkedin.svg'
import instagram from '../component-assets/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  const [show, setShow] = useState(false)
  const Show = () => {
    show ? setShow(false) : setShow(true)
  }
  const [show2, setShow2] = useState(false)
  const Show2 = () => {
    show2 ? setShow2(false) : setShow2(true)
  }
  const [show3, setShow3] = useState(false)
  const Show3 = () => {
    show3 ? setShow3(false) : setShow3(true)
  }
  const [show4, setShow4] = useState(false)
  const Show4 = () => {
    show4 ? setShow4(false) : setShow4(true)
  }

  return (
    /* laptop view*/
    <div className={styles.footer}>
      <div className={styles.top_footer}>
        <div className={styles.logo}>
          <a href="/">
            <img
              className={styles.logo_img}
              src={logo}
              alt="Logo"
              width="30px"
              height="30px"
            />
            <span className={styles.logo_name}>Zuri Chat</span>
          </a>
        </div>

        <div className={styles.menu}>
          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="/careers">Careers</a>{' '}
              </li>
              <li>
                <a href="/about">About Zurichat</a>{' '}
              </li>
            </ul>
          </div>

          <div>
            <h5>Info</h5>
            <ul>
              <li>
                <a href="/privacy">Privacy & Terms</a>{' '}
              </li>
              <li>
                <a href="/marketplace">Market Place</a>{' '}
              </li>
            </ul>
          </div>

          <div>
            <h5>Know us</h5>
            <ul>
              <li>
                <a href="/downloads">Downloads</a>{' '}
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>{' '}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.social}>
          <h5>Social Media</h5>
          <ul>
            <li>
              <a href="/facebook">
                <img
                  src={facebook}
                  alt="Facebook"
                  title="Connect with us on Facebook"
                />
              </a>
            </li>
            <li>
              <a href="/instagram">
                <img
                  src={instagram}
                  alt="Instagram"
                  title="Connect with us on Instagram"
                />
              </a>
            </li>
            <li>
              <a href="/twitter">
                <img
                  src={twitter}
                  alt="Twitter"
                  title="Connect with us on Twitter"
                />
              </a>
            </li>
            <li>
              <a href="/linkedin">
                <img
                  src={linkedin}
                  alt="Linkedin"
                  title="Connect with us on Linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom_footer}>
        <p> &copy; {getYear()} Zuri Chat. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
