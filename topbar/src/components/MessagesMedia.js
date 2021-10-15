/* eslint-disable no-undef */
import React, { useState, useContext } from "react"
import { ProfileContext } from "../context/ProfileModal"
import { authAxios } from "../utils/Api"
import styles from "../styles/MessagesMedia.module.css"
import zuriBot from "../assets/images/zuribot.png"
import zuriPerson from "../assets/images/zuriperson.png"
import theme13 from "../assets/images/theme9.png"
import theme14 from "../assets/images/theme10.png"
import theme15 from "../assets/images/theme11.png"
import theme16 from "../assets/images/theme12.png"
import theme17 from "../assets/images/theme13.png"
import theme18 from "../assets/images/theme14.png"
import theme19 from "../assets/images/theme15.png"

const MessagesMedia = () => {
  const [isChecked, setIsChecked] = useState(false)

  const { user } = useContext(ProfileContext)
  // console.log("user", user.settings.messages_and_media)
  const [message, setMessage] = useState(user.settings.messages_and_media)
  // console.log(message.theme)

  // handleSubmit function on the form
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(isChecked)
  }

  const updateMessageSettings = message => {
    authAxios
      .patch(
        `/organizations/${user.org_id}/members/${user._id}/settings/message-media`,
        message
      )
      .then(res => {
        //console.log(res)
      })
      .catch(err => {
        // console.log(err)
      })
  }

  React.useEffect(() => {
    fetch("https://api.zuri.chat/", {
      method: "POST",
      headers: {
        // authorization if any
        "Content-Type": "application/json"
      },
      body: JSON.stringify(isChecked)
    })
      .then(res => {
        // console.log(res)
      })
      .catch(error => console.error(error))
  })

  return (
    <div className={styles.msgCon}>
      <div className={styles.title}>Messages</div>
      <div className={styles.clean}>
        <div className={styles.radio}>
          <input
            className={styles.radioInput}
            type="radio"
            value="cln"
            checked={message.theme === "clean"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  theme: "clean"
                }
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div>
        <div className={styles.cln}>Clean</div>
      </div>
      <div className={styles.compact}>
        <div className={styles.radio1}>
          <input
            className={styles.radioInput}
            type="radio"
            value="com"
            checked={message.theme === "compact"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  theme: "compact"
                }
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div>
        <div className={styles.compt}>Compact</div>
      </div>
      <div className={styles.bottom}></div>
      <div className={styles.name}>Name</div>
      <div className={styles.full}>
        <div className={styles.radio2}>
          <input
            className={styles.radioInput}
            type="radio"
            value="ful"
            checked={message.names === "Zuri Ananda"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  names: "Zuri Ananda"
                }
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div>
        <div className={styles.display}>Full & display names</div>
      </div>
      <div className={styles.just}>
        <div className={styles.radio3}>
          <input
            className={styles.radioInput}
            type="radio"
            value="jst"
            checked={message.names === "Zuri"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  names: "Zuri"
                }
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div>
        <div className={styles.jst}>Just display names</div>
      </div>
      <div className={styles.change}>
        To change your full or display name, head to
        <span style={{ color: "#00B87C" }}> your profile.</span>
      </div>
      {/* <div className={styles.bottom2}></div> */}
      <div className={styles.bottom3}></div>
      <div className={styles.emoji}>Emoji</div>
      <div className={styles.tone}>Default Skin Tone</div>
      <p className={styles.choose}>
        Choose the default skin tone that will be used whenever you use certain
        emojis in
      </p>
      <p className={styles.choose2}>reactions and messages.</p>
      <div className={styles.hands}>
        <div autoFocus tabIndex="-1" className={styles.emojiBox}>
          <img src={theme13} alt="theme13" className={styles.theme13} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme14} alt="theme14" className={styles.theme14} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme15} alt="theme15" className={styles.theme15} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme16} alt="theme16" className={styles.theme16} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme17} alt="theme17" className={styles.theme17} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme18} alt="theme18" className={styles.theme18} />
        </div>
      </div>
      <div className={styles.plntxt}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox4}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="pln"
              checked={message.emoji_as_text}
              onChange={e => setIsChecked(e.target.checked)}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    emoji_as_text: !emoji_as_text
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.plain}>Display emoji in plain text</div>
      </div>
    </div>
  )
}

export default MessagesMedia
