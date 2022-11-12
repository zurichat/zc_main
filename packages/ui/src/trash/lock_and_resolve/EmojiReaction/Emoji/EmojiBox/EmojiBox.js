import React, { useState } from "react";
import EmojiCategory from "../EmojiCategory/EmojiCategory";
import EmojiItem from "../EmojiItem/EmojiItem";
import "./EmojiBox.css";
const EmojiBox = ({ emojiList, category, handleCategory }) => {
  let emojis;
  if (category === "") {
    emojis = emojiList;
  } else if (category === "smileys-emotion") {
    emojis = emojiList.filter(
      emoji => emoji.group === "smileys-emotion" || "people-body"
    );
  } else {
    emojis = emojiList.filter(emoji => emoji.group === category);
  }

  return (
    <div className="emb-emojibox">
      <EmojiCategory category={category} handleCategory={handleCategory} />
      <ul className="emb-emojiboxlist">
        {emojis &&
          emojis.map(emoji => <EmojiItem key={emoji.slug} emoji={emoji} />)}
      </ul>
    </div>
  );
};

export default EmojiBox;
