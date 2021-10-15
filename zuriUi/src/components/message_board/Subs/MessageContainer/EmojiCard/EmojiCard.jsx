import styles from './EmojiCard.module.css'
import newEmoji from '../HoverItems/assets/new_emoji.svg'

export default function EmojiCard({emojiObject, emojiSvg}){

    const display = !emojiSvg ? 
      <div className={styles.EmojiCard} >
        <div>{emojiObject.emoji}</div>
        {emojiObject.count > 1 ? <h4>{emojiObject.count}</h4> : null}
      </div>
      :
      <div className={styles.EmojiCard} >
        <img src={newEmoji} alt="new emoji" />
      </div>

    return(display)
}