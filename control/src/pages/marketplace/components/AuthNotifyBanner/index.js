import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/AuthNotifyBanner.module.css';

const AuthNotifyBanner = ({ text, action }) => {
  return (
    <div className={styles.marketplace_authNotifyBanner}>
      <p className={styles.authNotifyBannerText}>{text} <Link className={styles.authNotifyBannerLink} to={action.link}>{action.name}</Link></p>
    </div>
  )
}

export default AuthNotifyBanner