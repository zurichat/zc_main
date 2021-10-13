import React, { useState } from "react"
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react"

import "./EmojiReaction.css"
const EmojiReaction = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null)

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }

  const resetEmoji = () => {
    setChosenEmoji(null)
  }
  return (
    <>
      <div style={{ textAlign: "center", marginLeft: "810px" }}>
        <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK} />
        {chosenEmoji && (
          <div
            onClick={() => {
              resetEmoji()
            }}
          >
            <RenderEmoji chosenEmoji={chosenEmoji} />
          </div>
        )}
      </div>
    </>
  )
}

const RenderEmoji = ({ chosenEmoji }) => (
  <div style={{ textAlign: "center", marginRight: "810px" }}>
    {chosenEmoji.emoji}
  </div>
)
export default EmojiReaction
