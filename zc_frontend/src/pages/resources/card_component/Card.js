import React from 'react'
import '../card_component/Card.css'

const Card = ({ image, highlighted_text, text }) => {
  return (
    <div className="cards">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="highlighted_text">
        <p>{highlighted_text}</p>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
