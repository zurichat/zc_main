import React, { useState } from "react"
import EmojiCategory from "../EmojiCategory/EmojiCategory"
import EmojiItem from "../EmojiItem/EmojiItem"
import EmojiSearch from "../EmojiSearch/EmojiSearch" //////new
import "./EmojiBox.css"
const EmojiBox = ({
  emojiList,
  category,
  handleCategory,
  changeValue,
  handleChangeValue
}) => {
  let emojis
  if (category === "Search result") {
    emojis = emojiList.filter(emoji => {
      const regex = new RegExp(`${changeValue}`, "gi")
      return emoji.unicodeName.match(regex)
    })
  } else {
    emojis = emojiList.filter(emoji => emoji.group === category)
  }

  return (
    <div className="zc-emb-emojibox">
      <EmojiCategory category={category} handleCategory={handleCategory} />
      <EmojiSearch
        category={category}
        emojiList={emojiList}
        handleCategory={handleCategory}
        newcategory={category}
        changeValue={changeValue}
        handleChangeValue={handleChangeValue}
      />
      <p className="zc-emb-emojiboxtext">{category}</p>
      <ul className="zc-emb-emojiboxlist">
        {emojis &&
          emojis.map(emoji => <EmojiItem key={emoji.slug} emoji={emoji} />)}
      </ul>
    </div>
  )
}

export default EmojiBox
