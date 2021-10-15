import React from "react"
import styles from "../../styles/ChannelPrefixes.module.css"

const AddPrefixModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.subModal}>
        <div className={styles.modalHeader}>
          <h2>Add a channel prefix</h2>
          <button className={styles.closeBtn}>&times;</button>
        </div>
        <form className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label htmlFor="prefix">
              <strong className={styles.prefixStrong}>Prefix</strong> <span className={styles.prefixText}>(max 10 characters)</span>
            </label>
            <br />
            <input className={styles.inputField} type="text" id="prefix" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">
              <strong className={styles.prefixStrong}>Description</strong> <span className={styles.prefixText}>(max 80 characters)</span>
            </label>
            <br />
            <input className={styles.inputField} type="text" id="description" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.saveBtn} disabled>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPrefixModal
