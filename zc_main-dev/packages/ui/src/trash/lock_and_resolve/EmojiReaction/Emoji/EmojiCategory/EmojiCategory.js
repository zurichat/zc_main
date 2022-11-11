import React from "react";
import {
  FaSmile,
  FaLeaf,
  FaHamburger,
  FaPlaneDeparture,
  FaFootballBall,
  FaLightbulb,
  FaFlag,
  FaClock
} from "react-icons/fa";
// import { BsSmile, BsLeaf, BsHamburger, BsPlaneDeparture, BsFootballBall, BsLightbulb, BsFlag, BsClock } from 'react-icons/bs';

import "./EmojiCategory.css";
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
    <div className="emc-emojicat">
      <FaSmile
        className={`emc-emojicatitems ${
          category === "smileys-emotion" ? "emc-active" : ""
        }`}
        onClick={() => handleCategory("smileys-emotion")}
      />
      <FaLeaf
        className={`emc-emojicatitems ${
          category === "animals-nature" ? "emc-active" : ""
        }`}
        onClick={() => handleCategory("animals-nature")}
      />
      <FaHamburger
        className={`emc-emojicatitems ${
          category === "food-drink" ? "emc-active" : ""
        }`}
        onClick={() => handleCategory("food-drink")}
      />
      <FaPlaneDeparture
        className={`emc-emojicatitems ${
          category === "travel-places" ? "emc-active" : ""
        }`}
        onClick={() => handleCategory("travel-places")}
      />
      <FaFootballBall
        className={`emc-emojicatitems ${
          category === "activities" ? "emc-active" : ""
        }`}
        onClick={() => handleCategory("activities")}
      />
      <FaLightbulb
        className={`emc-emojicatitems ${
          category === "objects" ? "emc-active" : ""
        }`}
        onClick={() => handleCategory("objects")}
      />
      <FaFlag
        className={`emc-emojicatitems ${
          category === "flags" ? "emc-active" : ""
        }`}
        onClick={() => handleCategory("flags")}
      />
      <FaClock
        className={`emc-emojicatitems ${category === "" ? "emc-active" : ""}`}
        onClick={() => handleCategory("")}
      />
    </div>
  );
};

export default EmojiCategory;
