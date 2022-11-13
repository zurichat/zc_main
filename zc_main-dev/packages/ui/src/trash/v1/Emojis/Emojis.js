import React, { useState, useEffect } from "react";
import EmojiData from "./EmojiPicker.json";
import EmojiBox from "./EmojiBox/EmojiBox";
const EmojiPicker = ({ handleEmojiClicked, top, right }) => {
  const [emojiList, setEmojiList] = useState(EmojiData);
  const [category, setCategory] = useState("smileys-emotion");
  const [changeValue, setchangeValue] = useState("");

  const handleChangeValue = newValue => {
    setchangeValue(newValue);
  };
  const handleCategory = newCat => {
    setCategory(newCat);
  };
  return (
    <EmojiBox
      top={top}
      right={right}
      emojiList={emojiList}
      category={category}
      handleCategory={handleCategory}
      changeValue={changeValue}
      handleChangeValue={handleChangeValue}
      handleEmojiClicked={handleEmojiClicked}
    />
  );
};

export default EmojiPicker;
