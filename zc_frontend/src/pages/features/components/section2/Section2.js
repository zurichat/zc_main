<<<<<<< HEAD:zc_frontend/src/pages/features/components/Section2.js
import React from 'react';
import styles from '../../features/styles/Features.module.css';
import image1 from '../../../assets/image1.png';
import image2 from '../../../assets/image2.png';
import image3 from '../../../assets/image3.png';
import image4 from '../../../assets/image4.png';
import image5 from '../../../assets/image5.png';
=======
import React from 'react'
import styles from '../../styles/section2.module.css'
import image1 from '../../../../assets/image 4.png'
import image2 from '../../../../assets/image 3.png'
import image3 from '../../../../assets/image 8.png'
import image4 from '../../../../assets/image 6.png'
import image5 from '../../../../assets/image 5.png'
>>>>>>> 68c0b8959286eaa37c2e5f11ceaf9c8a76d24bd6:zc_frontend/src/pages/features/components/section2/Section2.js


const Section2 = () => {

    return(
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

export default Section2;