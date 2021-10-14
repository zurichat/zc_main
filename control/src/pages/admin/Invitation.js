import React from "react"
import { Link } from "react-router-dom"
import AdminSettings from "."
// import AdminTab from "./components/AdminTab"
import { FiSearch } from "react-icons/fi"
import styles from "./styles/invitation.module.css"

const Invitation = () => {
  return (
    <AdminSettings>
      <div className={styles.inviteContainer}>
        {/* <div className={styles.contentWrapper}> */}
        {/* <h5 className={styles.contentHeading}>Invitations</h5> */}
        {/* <AdminTab /> */}
        <div className={styles.adminInvitesContent}>
          <div className={styles.invitesHeader}>
            <div className={styles.invitesHeaderContent}>
              <div className={styles.invitesHeaderTxt}>
                <div className={styles.invitesHeaderTitle}>Invitations</div>
                <p className={styles.invitesDescr}>
                  Invite others to join your workspace. You can also allow
                  members to sign up using your company's email domain.
                  <Link to={{ pathname: "/admin/settings" }}>
                    Setup your email domain
                  </Link>
                </p>
              </div>
              <button className={styles.invitesBtn}>Invite People</button>
            </div>
          </div>
          <div className={styles.invitesTab}>
            <div className={styles.tabMenu}>
              <button className={styles.btnTab}>Pending</button>
              <button className={styles.btnTab}>Accepted</button>
            </div>
            <div className={styles.tabPanel}>
              <div className={styles.invitesSearchCon}>
                <div className={styles.inputContainer}>
                  <FiSearch className={styles.icon} />
                  <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="Search invitations by email"
                  />
                </div>
              </div>
              <div className={styles.adminInvitesContainer}>
                <p className={styles.adminInviteRes}>
                  There are currently no pending invitation
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </AdminSettings>
  )
}

export default Invitation
