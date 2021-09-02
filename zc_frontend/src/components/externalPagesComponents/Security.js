import styles from '../../styles/Security.module.css'
import padlock from '../../assets/padlock.png'

function Security() {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <h5>SECURITY AT ZURI</h5>
        <h1 className={styles.h1}>Enterprise-grade data Protection</h1>
        <h4>
          Trust Zuri to keep your data secure and meet your compliance
          requirement
        </h4>
        <button className={styles.button}> View Data Sheet</button>
      </div>
      <div>
        <img
          className={styles.padlock_img}
          src={padlock}
          height={250}
          width={280}
          alt="padlock"
        />
      </div>
    </div>
  )
}

export default Security
