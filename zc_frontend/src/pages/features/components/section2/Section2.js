import styles from '../../styles/section2.module.css'
// import image1 from '../../../../assets/i4g_image.png'
// import image2 from '../../../../assets/hng_image.png'
// import image3 from '../../../../assets/nucle_image.png'
// import image4 from '../../../../assets/zuri_internship_image.png'
// import image5 from '../../../../assets/zuri_i4g_image.png'


const Section2 = () => {

    return(
        <div className={styles.real}>
          <div className={styles.container}>
           <div className={styles.image1}>
             <img src={`/i4g_image.png`} alt="imageu" />
           </div>
           <div className={styles.image2}>
             <img src={`/hng_image.png`} alt="imageo" />
           </div>
           <div className={styles.image3}>
             <img src={`/nucle_image.png`} alt="imagei" />
           </div>
           <div className={styles.image4}>
             <img src={`/zuri_internship_image.png`} alt="imageg" />
           </div>
           <div className={styles.image5}>
             <img src={`/zuri_i4g_image.png`} alt="imagen" />
           </div>
          </div>
        </div>
    )
}

export default Section2;