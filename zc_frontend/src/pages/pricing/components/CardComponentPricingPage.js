import React from 'react'
import card from '../styles/CardComponentPricingPage.module.css'

function Card({ coverImageClass, logoImageClass, descriptionText }) {
  return (
    <div className={card.wrapper}>
      <div className={coverImageClass}></div>
      <div className={card.textlogo}>
        <div className={logoImageClass}></div>
        <h4 className={card.text}>{descriptionText}</h4>
      </div>
    </div>
  )
}

export default Card
