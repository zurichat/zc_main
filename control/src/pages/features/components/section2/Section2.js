import styles from '../../styles/section2.module.css'
import image1 from '../../assets/ing_image.png'
import image3 from '../../assets/nucleio_image.png'
import image5 from '../../assets/train_image.png'
import image6 from '../../assets/hotels_image.png'
import image7 from '../../assets/camp_image.png'

const Section2 = () => {
  return (
   
    <div className={styles.section2}>
      <p>
      Trusted by top companies worldwide
      </p>
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
        <div className={styles.imageWrapper}>
          <img src={image7} alt="imagec" />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image5} alt="imagen" />
        </div>
      </div>
    </div>
  )
}

export default Section2
