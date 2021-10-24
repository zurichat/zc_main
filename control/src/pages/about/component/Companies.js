import React from 'react'
import style from '../../LandingPage/styles/LandingPage.module.css'
// images
// images
import hotels from '../../../assets/hotels.svg'
import ingress from '../../../assets/ingress.svg'
import camphouse from '../../../assets/camphouse.svg'
import logo_zuri from '../../../assets/logo_zuri.svg'

export const Companies = () => {
  return (
    <div>
      <div className={`${style.company_banner_wrap}`}>
        <div className={`${style.company_banner}`}>
          <p className={`${style.cbp}`}>Trusted by top companies worldwide</p>
          <div className={`${style.logos}`}>
            <img src={hotels} alt="" className={`${style.logo}`} />
            <img src={ingress} alt="" className={`${style.logo}`} />
            <img src={camphouse} alt="" className={`${style.logo}`} />
            <img src={logo_zuri} alt="" className={`${style.logo}`} />
          </div>
        </div>
      </div>
    </div>
  )
}
