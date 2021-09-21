import styles from '../../styles/section2.module.css'
import image1 from '../../assets/i4g_image.png'
import image2 from '../../assets/hng_image.png'
import image3 from '../../assets/nucle_image.png'
import image4 from '../../assets/zuri_internship_image.png'
import image5 from '../../assets/zuri_i4g_image.png'

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <div className={styles.section2Wrapper}>
        <div className={styles.imageWrapper}>
          <img src={image1} alt="imageu" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image2} alt="imageo" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image3} alt="imagei" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image4} alt="imageg" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image5} alt="imagen" />
        </div>
      </div>
    </div>
  )
}

export default Section2
