import styles from "./HoverItems.module.css"

import emoji from "../../../../../assets/new_emoji.svg"
import bookmark from "../../../../../assets/bookmark.svg"
import more from "../../../../../assets/more.svg"
import reply from "../../../../../assets/reply.svg"
import share from "../../../../../assets/share.svg"

import MoreMenu from "../MoreMenu/MoreMenu"

export default function HoverItems(props) {
  const { id, handleShowMoreOptions, handleShowEmoji } = props

  return (
    <>
      <div className={styles.HoverItems}>
        <div onClick={event => handleShowEmoji(id, event)}>
          <img src={emoji} alt="emoji imag" />
        </div>
        <div>
          <img src={reply} alt="reply image" />
        </div>
        <div>
          <img src={share} alt="share image" />
        </div>
        <div>
          <img src={bookmark} alt="bookmark image" />
        </div>
        <div onClick={event => handleShowMoreOptions(id, event)}>
          <img src={more} alt="more image" />
        </div>
      </div>
    </>
  )
}
