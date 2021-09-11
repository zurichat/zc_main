import React from 'react'

import styles from './InviteDialogue.module.css'
import linkIcon from '../../../assets/link.svg'
import hyphen from '../../../assets/hyphen.png'

function InviteDialogue() {
  return (
    <div className={styles.InviteDialogue}>
      <div className={styles.Title}>Invite people to the team</div>

      <div className={styles.inviteForm}>
        <label>To:</label>
        <br />
        <textarea placeholder="dedi@teamvolitaire"></textarea>

        <div className={styles.DialogueFooter}>
          <span className={styles.copyLink}>
            <img src={linkIcon} alt="link" />
            <span>Copy invite link</span>
            <img id={styles.hyphen} src={hyphen} alt="" />
            <span>Edit link settings</span>
          </span>
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  )
}

export default InviteDialogue
