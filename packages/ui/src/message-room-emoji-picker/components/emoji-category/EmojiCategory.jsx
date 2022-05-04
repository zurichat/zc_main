import React from "react";
import {
  FaSmile,
  FaPrayingHands,
  FaLeaf,
  FaHamburger,
  FaPlaneDeparture,
  FaFootballBall,
  FaLightbulb,
  FaFlag,
  FaClock,
  FaPeace
} from "react-icons/fa";

import styles from "./emoji-category.module.css";
const EmojiCategory = ({ category, handleCategory }) => {
  const allCategories = [
    "smileys-emotion",
    "people-body",
    "animals-nature",
    "food-drink",
    "travel-places",
    "activities",
    "objects",
    "symbols",
    "flags"
  ];
  return (
    <div className={styles.zcemcemojicat}>
      <FaSmile
        className={`${styles.zcemcemojicatitems} ${
          category === "smileys-emotion" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("smileys-emotion")}
      />
      <FaPrayingHands
        className={`${styles.zcemcemojicatitems} ${
          category === "people-body" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("people-body")}
      />
      <FaLeaf
        className={`${styles.zcemcemojicatitems} ${
          category === "animals-nature" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("animals-nature")}
      />
      <FaHamburger
        className={`${styles.zcemcemojicatitems} ${
          category === "food-drink" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("food-drink")}
      />
      <FaPlaneDeparture
        className={`${styles.zcemcemojicatitems} ${
          category === "travel-places" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("travel-places")}
      />
      <FaFootballBall
        className={`${styles.zcemcemojicatitems} ${
          category === "activities" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("activities")}
      />
      <FaLightbulb
        className={`${styles.zcemcemojicatitems} ${
          category === "objects" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("objects")}
      />
      <FaPeace
        className={`${styles.zcemcemojicatitems} ${
          category === "symbols" ? styles.zcemcactive : ""
        }`}
        onClick={() => handleCategory("symbols")}
      />
    </div>
  );
};

export default EmojiCategory;
