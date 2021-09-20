/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const [show, setShow] = useState(false);
  const Show = () => {
    show ? setShow(false) : setShow(true);
  };
  const [show2, setShow2] = useState(false);
  const Show2 = () => {
    show2 ? setShow2(false) : setShow2(true);
  };
  const [show3, setShow3] = useState(false);
  const Show3 = () => {
    show3 ? setShow3(false) : setShow3(true);
  };
  const [show4, setShow4] = useState(false);
  const Show4 = () => {
    show4 ? setShow4(false) : setShow4(true);
  };

  return (
    <div className={styles.m_footer}>
      {/* mobile view*/}
      <div className={styles.mobile}>
        <div className={styles.logo}>
        <a href="/landing">
          <img
            className={styles.logo_img}
            src="/zurichatlogo.svg"
            alt="Logo"
            width="40px"
            height="40px"
          />
          <p className={styles.logo_name}>Zuri Chat</p>
        </a>
        </div>

        <div className={styles.footer_menu}>
          <ul>
            <a onClick={Show}>
              <li className={styles.dropdown_list}>
                COMPANY
                <i
                  className={`fas ${show ? "fa-angle-up" : "fa-angle-down"}`}
                ></i>
              </li>
            </a>
            <a onClick={Show2}>
              <li className={styles.dropdown_list}>
                EXPLORE
                <i
                  className={`fas ${show2 ? "fa-angle-up" : "fa-angle-down"}`}
                ></i>
              </li>
            </a>
            <a onClick={Show3}>
              <li className={styles.dropdown_list}>
                RESOURCES
                <i
                  className={`fas ${show3 ? "fa-angle-up" : "fa-angle-down"}`}
                ></i>
              </li>
            </a>
            <a onClick={Show4}>
              <li className={styles.dropdown_list}>
                COMPARE
                <i
                  className={`fas ${show4 ? "fa-angle-up" : "fa-angle-down"}`}
                ></i>
              </li>
            </a>
          </ul>
        </div>
        
        <div className={styles.footer_menu}>
          <ul>
            <li className={styles.list}>
              <a href="/privacy">Privacy</a>{" "}
            </li>
            <li className={styles.list}>
              <a href="/terms">Terms</a>{" "}
            </li>
            <li className={styles.list}>
              <a href="/help">Help Center</a>{" "}
            </li>
            <li className={styles.list}>
              <a href="/contact-us">Contact Us</a>{" "}
            </li>
          </ul>
        </div>

        <div className={styles.mobile_social}>
          <ul>
            <li>
              <a href="/facebook">
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  title="Connect with us on Facebook"
                />
              </a>
            </li>
            <li>
              <a href="/instagram">
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  title="Connect with us on Instagram"
                />
              </a>
            </li>
            <li>
              <a href="/twitter">
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  title="Connect with us on Twitter"
                />
              </a>
            </li>
            <li>
              <a href="/linkedin">
                <img
                  src="/linkedin.svg"
                  alt="Linkedin"
                  title="Connect with us on Linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_menu}>
          <p>
            {" "}
            &copy; {getYear()} Zuri Chat, Homepage Workflow. All Rights Reserved
          </p>
        </div>
      </div>

      {/* laptop view*/}
      <div className={styles.footer}>
        <div className={styles.top_footer}>
          <div className={styles.logo}>
              <a href="/">
            <img
              className={styles.logo_img}
              src="/zurichatlogo.svg"
              alt="Logo"
              width="40px"
              height="40px"
            />
            <p className={styles.logo_name}>Zuri Chat</p>
          </a>
          </div>
          

          <div className={styles.menu}>
            <div className={styles.menu_list}>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="/finalist">Finalist</a>{" "}
              </li>
              <li>
                <a href="/events">Events</a>{" "}
              </li>
              <li>
                <a href="/blog">Blog posts</a>{" "}
              </li>
              <li>
                <a href="/news">News</a>{" "}
              </li>
            </ul>
          </div>

          <div className={styles.menu_list}>
            <h5>Explore</h5>
            <ul>
              <li>
                <a href="/features">Features</a>{" "}
              </li>
              <li>
                <a href="/plugins">Plugins</a>{" "}
              </li>
            </ul>
          </div>

          <div className={styles.menu_list}>
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="/designers">Designers</a>{" "}
              </li>
              <li>
                <a href="/developer">Developers</a>{" "}
              </li>
              <li>
                <a href="/mentors">Mentors</a>{" "}
              </li>
            </ul>
          </div>

          <div className={styles.menu_list}>
            <h5>Compare</h5>
            <ul>
              <li>
                <a href="https://slack.com">Slack</a>{" "}
              </li>
              <li>
                <a href="https://discord.com">Discord</a>{" "}
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
                    src="/facebook.svg"
                    alt="Facebook"
                    title="Connect with us on Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="/instagram">
                  <img
                    src="/instagram.svg"
                    alt="Instagram"
                    title="Connect with us on Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="/twitter">
                  <img
                    src="/twitter.svg"
                    alt="Twitter"
                    title="Connect with us on Twitter"
                  />
                </a>
              </li>
              <li>
                <a href="/linkedin">
                  <img
                    src="/linkedin.svg"
                    alt="Linkedin"
                    title="Connect with us on Linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom_footer}>
          <p>
            {" "}
            &copy; {getYear()} Zuri Chat, Homepage Workflow. All Rights Reserved
          </p>
          <div>
            <ul>
              <li>
                <a href="/privacy">Privacy</a>{" "}
              </li>
              <li>
                <a href="/terms">Terms</a>{" "}
              </li>
              <li>
                <a href="/help">Help Center</a>{" "}
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>{" "}
              </li>
            </ul>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
