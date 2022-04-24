import React from "react";

import styles from "../emoji-box/emoji-box.module.css";
const EmojiItem = ({ emoji, handleEmojiClicked }) => {
  return (
    <li
      className={styles.zcembemojiboxItem}
      onClick={e => handleEmojiClicked(e, emoji)}
    >
      {emoji.character}
    </li>
  );
};

export default EmojiItem;
