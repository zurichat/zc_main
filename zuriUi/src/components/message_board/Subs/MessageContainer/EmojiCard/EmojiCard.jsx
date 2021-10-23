import styles from "./EmojiCard.module.css"
import newEmoji from "../HoverItems/assets/new_emoji.svg"

export default function EmojiCard({ emojiObject, emojiSvg, currentUserId }) {
  let indexOfCurrentUser = -1
  if (emojiObject != undefined) {
    indexOfCurrentUser = emojiObject.reactedUsersId?.indexOf(currentUserId)
  }
  const reacted = indexOfCurrentUser >= 0

  const display = !emojiSvg ? (
    <div
      style={{ backgroundColor: reacted ? "rgb(164, 255, 164)" : "#EFEFEF" }}
      className={styles.EmojiCard}
    >
      <div>{emojiObject.emoji}</div>
      {emojiObject.count > 1 ? <h4>{emojiObject.count}</h4> : null}
    </div>
  ) : (
    <div className={styles.EmojiCard}>
      <img src={newEmoji} alt="new emoji" />
    </div>
  )

  return display
}
