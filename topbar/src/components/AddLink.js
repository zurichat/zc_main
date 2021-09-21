import React, { useState } from 'react'
import styles from '../styles/AddLink.module.css'

const AddLink = () => {
  const [link, setLinks] = useState(1)
  return (
    <div className={styles.linked}>
      <div className={styles.linksWrapper}>
        <label>
          <span className={styles.fontMed}>
            {' '}
            <label>Additional Links</label>{' '}
          </span>
          <span className={styles.fontRed}> (5max) </span>
        </label>
      </div>
      {Array(link)
        .fill()
        .map((_, i) => (
          <input type="text" name={`link${i}}`} className={styles.formInput} />
        ))}
      {link < 5 && (
        <div className={styles.addLink} onClick={() => setLinks(link + 1)}>
          <span>+</span>
          <div className={styles.conte}>Add New Link</div>
        </div>
      )}
    </div>
  )
}

export default AddLink
