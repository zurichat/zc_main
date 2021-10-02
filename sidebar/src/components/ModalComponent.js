import React, { useState } from 'react'
import styles from '../styles/ModalComponentStyles.module.css'
import { useTranslation } from 'react-i18next'

const ModalComponent = ({ isOpen }) => {
  const { t } = useTranslation()
  return (
    <section className={`${isOpen ? styles.open : styles.topbarModal}`}>
      <div className={styles.sectionOne}>{t('hub')}</div>

      <div className={styles.sectionOne}>
        {t('invitePeople')}
        <br />
        {t('CreateSpace')}
      </div>

      <div className={styles.sectionOne}>
        {t('preference')}
        <br />
        {t('customize')}
      </div>

      <div className={styles.sectionOne}>{t('tools')}</div>
      <div className={styles.sectionOne}>{t('signout')}</div>
      <div
        className={` d-flex flex-column align-items-start ${styles.sectionOne}`}
      >
        <span> {t('addWorkspace')} </span>
        <span>{t('SwitchWorkspace')}</span>
        <span>{t('OpenZuri')}</span>
      </div>
    </section>
  )
}

export default ModalComponent
