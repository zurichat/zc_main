import styles from '../../styles/section2.module.css'
import image6 from '../../assets/ing_image.svg'
import image1 from '../../assets/nucleio_image.svg'
import image3 from '../../assets/camp_image.svg'

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <p>Trusted by top companies worldwide</p>
      <div className={styles.section2Wrapper}>
        <div className={styles.imageWrapper}>
          <img src={image6} alt="imageh" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image1} alt="imageu" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image3} alt="imagei" />
        </div>
      </div>
    </div>
  )
}

export default Section2
