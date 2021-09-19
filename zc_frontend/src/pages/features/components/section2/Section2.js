import React from 'react'
import styles from '../../styles/section2.module.css'
import image1 from '../../../../assets/image 4.png'
import image2 from '../../../../assets/image 3.png'
import image3 from '../../../../assets/image 8.png'
import image4 from '../../../../assets/image 6.png'
import image5 from '../../../../assets/image 5.png'

const Section2 = () => {
  return (
    <div className={styles.real}>
      <div className={styles.container}>
        <div className={styles.image1}>
          <img src={image1} alt="imageu" />
        </div>
        <div className={styles.image2}>
          <img src={image2} alt="imageo" />
        </div>
        <div className={styles.image3}>
          <img src={image3} alt="imagei" />
        </div>
        <div className={styles.image4}>
          <img src={image4} alt="imageg" />
        </div>
        <div className={styles.image5}>
          <img src={image5} alt="imagen" />
        </div>
      </div>
    </div>
  )
}

export default Section2
