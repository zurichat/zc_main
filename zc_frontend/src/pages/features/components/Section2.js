import React from 'react'
import styles from '../../features/styles/section2.module.css'
import image1 from '../../../assets/image 4.png'
import image2 from '../../../assets/image 3.png'
import image3 from '../../../assets/image 8.png'
import image4 from '../../../assets/image 6.png'
import image5 from '../../../assets/image 5.png'

const ChatFeatureSection2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className="row justify-content-center">
          <div className="col-lg-2 col-sm-4 text-center">
            <img src={image1} alt="image1" />
          </div>
          <div className="col-lg-2 col-sm-4 text-center">
            <img src={image2} alt="image2" />
          </div>
          <div className="col-lg-2 col-sm-4 text-center">
            <img src={image3} alt="image3" />
          </div>
          <div className="col-lg-2 col-sm-4 text-center">
            <img src={image4} alt="image4" />
          </div>
          <div className="col-lg-2 col-sm-4 text-center">
            <img src={image5} alt="image5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatFeatureSection2
