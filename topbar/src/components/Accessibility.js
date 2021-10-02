import React, { useState } from 'react'
import styles from '../styles/Accessibility.module.css'
import { useTranslation } from 'react-i18next'
function Accessibility() {
  const { t } = useTranslation()
  return (
    <div>
      <div className={styles.containerAccessibility}>
        <div>
          <h3 className={styles.animationH3}>{t('animation')}</h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                checked="checked"
                name=""
                value="Allow animated images and emojis"
              />
              <label className={styles.accessibilityLabel}>
                {t('allowAnimate')}
              </label>
            </div>
          </form>
        </div>
        <hr className={styles.hrLine} />

        <div>
          <h3 className={styles.directH3}>{t('DMAnnounce')}</h3>
          <p className={styles.accessibilityP}>
            {t('chooseSound')}
            <br />
            {t('screenReader')}
          </p>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                name=""
                value="Play a sound when a message is received"
              />
              <label className={styles.accessibilityLabel}>
                {t('playSound')}
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                name=""
                value="Play a sound when a message is sent"
              />
              <label className={styles.accessibilityLabel}>
                {t('playSoundSent')}
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                checked="checked"
                name=""
                value="Read incoming message out loud"
              />
              <label className={styles.accessibilityLabel}>
                {t('readInComing')}
              </label>
            </div>
          </form>
        </div>
        <hr className={styles.hrLine} />

        <div>
          <h3 className={styles.keyboardH3}> {t('keyboard')}</h3>
          <p className={styles.accessibilityP}>
            {t('improveZuri')}
            <span id={styles.handyKeyboard}> {t('handyKeyBoard')}</span>
          </p>

          <hr className={styles.hrLine} />

          <h3 className={styles.pressH3}>{t('pressEmpty')}</h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityRadio}
                type="radio"
                checked="checked"
                name="accessradio"
                value="Move focus to the message list"
              />
              <label className={styles.accessibilityRadioLabel}>
                {t('moveFocus')}
              </label>
              <p className={styles.accessibilityP} id={styles.accessibilityPId}>
                {t('lastVisible')}
              </p>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityRadio}
                type="radio"
                name="accessradio"
                value="Edit your last message"
              />
              <label className={styles.accessibilityRadioLabel}>
                {t('editMsg')}
              </label>
              <p
                className={styles.accessibilityP}
                id={styles.accessibilityPId2}
              >
                {t('lastVisibleMsg')}
              </p>
            </div>
          </form>

          <p className={styles.accessibilityP} id={styles.noteP}>
            {t('note')}
            <span className={styles.accessibilityEsc}> {t('ctrl')} </span>
            <span className={styles.accessibilityEsc} id={styles.exclamation}>
              {' '}
              !{' '}
            </span>{' '}
            {t('editWithOpt')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accessibility
