import React, { useState, useEffect } from "react";
import EmojiData from "./EmojiPicker.json";
import EmojiBox from "./EmojiBox/EmojiBox";
const EmojiPicker = () => {
  const [emojiList, setEmojiList] = useState(EmojiData);
  const [category, setCategory] = useState("smileys-emotion");
  const handleCategory = newCat => {
    setCategory(newCat);
  };
  return (
    <EmojiBox
      emojiList={emojiList}
      category={category}
      handleCategory={handleCategory}
    />
  );
};

export default EmojiPicker;
