import React, { useState } from "react";
import EmojiCategory from "../EmojiCategory/EmojiCategory";
import EmojiItem from "../EmojiItem/EmojiItem";
import EmojiSearch from "../EmojiSearch/EmojiSearch"; //////new
import styles from "./EmojiBox.module.css";
const EmojiBox = ({
  emojiList,
  category,
  handleCategory,
  changeValue,
  handleChangeValue,
  handleEmojiClicked,
  top,
  right
}) => {
  let emojis;
  if (category === "Search result") {
    emojis = emojiList.filter(emoji => {
      const regex = new RegExp(`${changeValue}`, "gi");
      return emoji.unicodeName.match(regex);
    });
  } else {
    emojis = emojiList.filter(emoji => emoji.group === category);
  }

  return (
    <div className={styles.zcembemojibox}>
      <div className={styles.zcembemojibox2} style={{ top, right }}>
        <EmojiCategory category={category} handleCategory={handleCategory} />
        <EmojiSearch
          category={category}
          emojiList={emojiList}
          handleCategory={handleCategory}
          newcategory={category}
          changeValue={changeValue}
          handleChangeValue={handleChangeValue}
        />
        <p className={styles.zcembemojiboxtext}>{category}</p>
        <ul className={styles.zcembemojiboxlist}>
          {emojis &&
            emojis.map(emoji => (
              <EmojiItem
                key={emoji.slug}
                emoji={emoji}
                handleEmojiClicked={handleEmojiClicked}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EmojiBox;
