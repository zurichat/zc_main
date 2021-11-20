import React from "react";
import styles from "../card_component/Card.module.css";

const Card = ({ image, highlighted_text, text }) => {
  return (
    <div className={`${styles.card}`}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={`${styles.highlighted_text}`}>
        <p>{highlighted_text}</p>
      </div>
      <div className={`${styles.text}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
