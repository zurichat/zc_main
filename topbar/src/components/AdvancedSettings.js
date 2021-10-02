import React from 'react'
import styles from '../styles/AdvancedSettings.module.css'
import { useTranslation } from 'react-i18next'
const AdvancedSettings = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <h5 className={styles.head}>{t('inptOptions')}</h5>
        <div className={styles.check}>
          <div className={styles.checktype}>
            <input type="checkbox" name="" id="" />
            <div className={styles.typing}>
              <span>{t('typingCode')}</span>
              <div className={styles.typingticket}>
                {t('withThis')}
                <button className={styles.btn}>Shift</button> {t('Tsend')}
              </div>
            </div>
          </div>
          <div className={styles.checkformat}>
            <input type="checkbox" name="" id="" />
            <div className={styles.format}>
              <span> {t('formatMsg')}</span>
              {t('txtFormat')}
            </div>
          </div>
        </div>
        <p className={styles.headpress}>{t('whenWriting')}</p>
        <div className={styles.radio}>
          <div className={styles.radiosend}>
            <input type="radio" name="" id="" />
            <div className={styles.send}>{t('sendMsg')}</div>
          </div>
          <div className={styles.radiostart}>
            <input type="radio" name="" id="" />
            <div className={styles.start}>
              {t('startNewLine')}
              <button className={styles.btn}>Ctrl</button>
              <button className={styles.btn}>{t('Enter')}</button> {t('toSend')}{' '}
              )
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.search}>
        <h5 className={styles.head}>{t('searchOpt')}</h5>
        <div className="check">
          <div className={styles.checktype}>
            <input type="checkbox" name="" id="" />
            <div className={styles.behaviour}>
              <span>
                <button className={styles.btn}>Ctrl</button>
                <button className={styles.btn}>F</button>
                {t('startZurichat')}
              </span>
              {t('overide')}
            </div>
          </div>
          <div className={styles.checkformat}>
            <input type="checkbox" name="" id="" />
            <div className={styles.browser}>
              <span>
                <button className={styles.btn}>Ctrl</button>
                <button className={styles.btn}>K</button>
                {t('startQuick')}
              </span>
              {t('overrideSome')}
            </div>
          </div>
        </div>
        <h5 className={styles.head}>{t('exclude')}</h5>
        <div className={styles.barcontainer}>
          <div className={styles.bar}>
            <input
              type="text"
              className={styles.bartype}
              placeholder="Type a channel name..."
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.options}>
        <h5 className={styles.head}>{t('other')}</h5>
        <div className={styles.check}>
          <div className={styles.checkkeys}>
            <input type="checkbox" name="" id="" />
            <div className={styles.keys}>
              <button className={styles.btn}>{t('pageup')}</button>,
              <button className={styles.btn}>{t('pagedown')}</button>,
              <button className={styles.btn}>{t('home')}</button> {t('and')}
              <button className={styles.btn}>{t('End')}</button>
              {t('scroll')}
            </div>
          </div>
          <div className={styles.ask}>
            <input type="checkbox" name="" id="" />
            <p>{t('ask')}</p>
          </div>
          <div className={styles.survey}>
            <input type="checkbox" name="" id="" />
            <p>
              <span>{t('occassional')}</span>
            </p>
          </div>
          <div className={styles.warn}>
            <input type="checkbox" name="" id="" />
            <p>{t('aboutM')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSettings
