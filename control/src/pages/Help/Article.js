import React from "react"
import AdminHeader from "../../components/Header"
import styles from "./styles/article.module.css"
import { RiNumber1 } from "react-icons/ri"
import { MdKeyboardArrowRight } from "react-icons/md"
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram
} from "react-icons/ti"

const Article = () => {
  return (
    <div className={styles.parentContainer}>
      <AdminHeader />
      <div className={styles.generalContainer}>
        <div className={styles.leftContainer}>
          <div>
            <a href="" className={styles.home}>
              <h4 className={styles.topLink}>HOME</h4>
            </a>{" "}
            /
            <a href="" className={styles.profile}>
              <h4 className={styles.topLink}>PROFILE & ACCOUNT</h4>
            </a>{" "}
            /
            <h4 className={styles.topLink}>
              CHANGE YOUR PROFILE NAME AND POSITION
            </h4>
          </div>

          <h2 className={styles.mainHeader}>
            Change Your Profile Name and Position
          </h2>
          <h3 className={styles.normalText}>
            Name and position matters. Accurate Profile information lets you and
            your team find people who own tasks, processes or departments and
            improve collaboration in a remote team.
          </h3>
          <br />
          <h3 className={styles.normalText}>
            You can easily change your information in the Profile & account menu
            on Chanty.
          </h3>
          <div className={styles.steps}>
            <div>
              <MdKeyboardArrowRight className={styles.icon} />
              <h3 className={styles.normalText}>
                Click on the Profile photo icon in the bottom left corner of the
                app
              </h3>
            </div>
          </div>
          <img src="" alt="" className={styles.imageSteps} />
          <div className={styles.tips}>
            <RiNumber1 className={styles.stepIcon} />
            <h3 className={styles.normalText}>
              kjdfn dcgsjdgcjsdc sdhcsdjfhc dcsdgicsmd csdcsm dcsdcsn cshs kkhs
            </h3>
          </div>
          <hr />
          <div className={styles.helpful}>
            <h3 className={styles.boldText}>
              kjdfn dcgsjdgcjsdc sdhcsdjfhc dcsdgicsmd csdcsm dcsdcsn cshs kkhs
            </h3>
            <div className={styles.buttonContainer}>
              <button className={styles.positive}>Yes, thanks!</button>
              <button className={styles.negative}>Not really</button>
            </div>
          </div>

          <div className={styles.relatedArticles}>
            <h3 className={styles.boldText}>
              kjdfn dcgsjdgcjsdc sdhcsdjfhc dcsdgicsmd csdcsm dcsdcsn cshs kkhs
            </h3>
            <span>
              <MdKeyboardArrowRight className={styles.icon} />
              <h3 className={styles.boldText}>
                kjdfn dcgsjdgcjsdc sdhcsdjfhc dcsdgicsmd csdcsm dcsdcsn cshs
                kkhs
              </h3>
            </span>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.recentArticlesTop}>
            <h3 className={styles.boldText}>
              kjdfn dcgsjdgcjsdc sdhcsdjfhc dcsdgicsmd csdcsm dcsdcsn cshs kkhs
            </h3>
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
          </div>
          <div className={styles.recentArticlesTop}>
            <h3 className={styles.boldText}>
              kjdfn dcgsjdgcjsdc sdhcsdjfhc dcsdgicsmd csdcsm dcsdcsn cshs kkhs
            </h3>
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
            <hr />
            <h4 className={styles.sideText}>Permissions and Roles</h4>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
          <a href="" className={styles.footerText}>
            Features
          </a>
          <a href="" className={styles.footerText}>
            Features
          </a>
          <a href="" className={styles.footerText}>
            Features
          </a>
          <a href="" className={styles.footerText}>
            Features
          </a>
          <a href="" className={styles.footerText}>
            Features
          </a>
          <a href="" className={styles.footerText}>
            Features
          </a>
          <a href="" className={styles.footerText}>
            Features
          </a>
          <a href="" className={styles.footerText}>
            Features
          </a>
        </div>
        <div className={styles.rightFooter}>
          <div className={styles.logoContainer}>
            <TiSocialFacebook />
            <TiSocialTwitter />
            <TiSocialLinkedin />
            <TiSocialInstagram />
          </div>
          &copy; <em id="date"></em>
          <h4 className={styles.footerText}>
            Copyright 2019. All Rights Reserved
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Article
