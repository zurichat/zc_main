/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styles from '../component-styles/HeaderStyle.module.css'
import logo from '../component-assets/zurichatlogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleUp,
  faAngleDown,
  faTimes,
  faBars
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringD, setIsHoveringD] = useState(false)
  const [toggleMenu, toggledMenu] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }
  const handleMouseEnterD = () => {
    setIsHoveringD(true)
  }
  const handleMouseLeaveD = () => {
    setIsHoveringD(false)
  }

  const Menu = () => {
    toggleMenu ? toggledMenu(false) : toggledMenu(true)
  }
  const Show = () => {
    show ? setShow(false) : setShow(true)
  }
  const Show2 = () => {
    show2 ? setShow2(false) : setShow2(true)
  }

  return (
    <nav>
      {/* mobile view */}
      <div className={styles.mobile_nav}>
        <div className={styles.m_logo}>
          <a href="/">
            <img src={logo} alt="Logo" />
            <p className={styles.m_logo_name}>Zuri Chat</p>
          </a>
        </div>
        <div>
          <ul class={styles.mobile_menu}>
            <div>
              <li className={styles.icon}>
                <a>
                  <FontAwesomeIcon
                    onClick={Menu}
                    className={styles.mobile_fa}
                    icon={toggleMenu ? faTimes : faBars}
                  />
                </a>
                <ul
                  className={
                    toggleMenu ? styles.dropdown : styles.dropdown_hide
                  }
                >
                  <div>
                    <a href="/features">
                      <li className={styles.dropdown_list}>Features</li>
                    </a>

                    <a onClick={Show}>
                      <li className={styles.dropdown_list}>
                        Product
                        <i
                          className={`fas ${
                            show ? 'fa-angle-up' : 'fa-angle-down'
                          }`}
                        ></i>
                      </li>
                    </a>
                    <a href="/community">
                      <li className={styles.dropdown_list}>Community</li>
                    </a>
                    <a onClick={Show2}>
                      <li className={styles.dropdown_list}>
                        Downloads
                        <i
                          className={`fas ${
                            show2 ? 'fa-angle-up' : 'fa-angle-down'
                          }`}
                        ></i>
                        <ul className={styles.dropdown2}>
                          <a href="/andriod-download">
                            <li className={styles.dropdown_items}>Andriod</li>
                          </a>
                          <a href="/iOS-download">
                            <li className={styles.dropdown_items}>iOS</li>
                          </a>
                          <a href="/windows-download">
                            <li className={styles.dropdown_items}>Windows</li>
                          </a>
                          <a href="/mac-download">
                            <li className={styles.dropdown_items}>Mac</li>
                          </a>
                          <a href="/linus-download">
                            <li className={styles.dropdown_items}>Linux</li>
                          </a>
                        </ul>
                      </li>
                    </a>
                    <div className={styles.mobile_signs}>
                      <li>
                        <a className={styles.header_signup} href="/signup">
                          Signup
                        </a>{' '}
                      </li>
                      <li>
                        <a className={styles.header_signin} href="/login">
                          Sign In
                        </a>{' '}
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* laptop view */}
      <div className={styles.large}>
        <div className={styles.logo}>
          <a href="/">
            <img
              className={styles.logo_img}
              src={logo}
              alt="Logo"
              width="30px"
              height="30px"
            />
            <p className={styles.logo_name}>Zuri Chat</p>
          </a>
        </div>

        <div className={styles.menu}>
          <ul>
            <li>
              <a
                href="/features"
                id={styles.menu}
                className={styles.header_list}
              >
                Features
              </a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a className={styles.header_list}>
                Products
                <FontAwesomeIcon
                  className={styles.fa}
                  icon={isHovering ? faAngleUp : faAngleDown}
                />
              </a>
              <ul className={styles.dropdown1}>
                <a href="/channels">
                  <li className={styles.dropdown_items}>Channels</li>
                </a>
                <a href="/security">
                  <li className={styles.dropdown_items}>Security</li>
                </a>
                <a href="/integration">
                  <li className={styles.dropdown_items}>Integration</li>
                </a>
                <a href="/customers">
                  <li className={styles.dropdown_items}>Customers</li>
                </a>
                <a href="/solutions">
                  <li className={styles.dropdown_items}>Solutions</li>
                </a>
              </ul>
            </li>
            <li id={styles.menu}>
              <a href="/community" className={styles.header_list}>
                Community
              </a>
            </li>
            <li
              onMouseEnter={handleMouseEnterD}
              onMouseLeave={handleMouseLeaveD}
            >
              <a className={styles.header_list}>
                Downloads
                <FontAwesomeIcon
                  className={styles.fa}
                  icon={isHoveringD ? faAngleUp : faAngleDown}
                />
              </a>
              <ul className={styles.dropdown2}>
                <a href="/andriod-download">
                  <li className={styles.dropdown_items}>Andriod</li>
                </a>
                <a href="/iOS-download">
                  <li className={styles.dropdown_items}>iOS</li>
                </a>
                <a href="/windows-download">
                  <li className={styles.dropdown_items}>Windows</li>
                </a>
                <a href="/mac-download">
                  <li className={styles.dropdown_items}>Mac</li>
                </a>
                <a href="/linus-download">
                  <li className={styles.dropdown_items}>Linux</li>
                </a>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.header_signs}>
          <ul>
            <li className={styles.header_list}>
              <a className={styles.header_signup} href="/signup">
                Signup
              </a>{' '}
            </li>
            <li>
              <a className={styles.header_signin} href="/login">
                Sign In
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
