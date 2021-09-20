import styles from '../../styles/section2.module.css'

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <div className={styles.section2Wrapper}>
        <div className={styles.imageWrapper}>
          <img src={`/i4g_image.png`} alt="imageu" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={`/hng_image.png`} alt="imageo" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={`/nucle_image.png`} alt="imagei" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={`/zuri_internship_image.png`} alt="imageg" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={`/zuri_i4g_image.png`} alt="imagen" />
        </div>
      </div>
    </div>
  )
}

export default Section2
