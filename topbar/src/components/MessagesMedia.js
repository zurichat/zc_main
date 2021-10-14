// import React, { useState } from "react"
// import styles from "../styles/MessagesMedia.module.css"
// import theme11 from "../assets/images/theme7.png"
// import theme12 from "../assets/images/theme8.png"
// import theme13 from "../assets/images/theme9.png"
// import theme14 from "../assets/images/theme10.png"
// import theme15 from "../assets/images/theme11.png"
// import theme16 from "../assets/images/theme12.png"
// import theme17 from "../assets/images/theme13.png"
// import theme18 from "../assets/images/theme14.png"
// import theme19 from "../assets/images/theme15.png"

// const MessagesMedia = () => {
//   const [isChecked, setIsChecked] = useState(false)
//   const [active1, setActive1] = useState(0)

//   // handleSubmit function on the form
//   const handleSubmit = e => {
//     e.preventDefault()
//     // console.log(isChecked)
//   }

//   React.useEffect(() => {
//     fetch("https://api.zuri.chat/", {
//       method: "POST",
//       headers: {
//         // authorization if any
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(isChecked)
//     })
//       .then(res => {
//         // console.log(res)
//       })
//       .catch(error => console.error(error))
//   })

//   return (
//     <div className={styles.msgCon}>
//       <div className={styles.title}>Theme</div>
//       <div className={styles.clean}>
//         <div className={styles.radio}>
//           <input
//             type="radio"
//             value="cln"
//             checked={active1 === 0}
//             onClick={() => {
//               setActive1(0)
//             }}
//           />
//         </div>
//         <div className={styles.cln}>Clean</div>
//       </div>
//       <div className={styles.compact}>
//         <div className={styles.radio2}>
//           <input
//             type="radio"
//             value="com"
//             checked={active1 === 1}
//             onClick={() => {
//               setActive1(1)
//             }}
//           />
//         </div>
//         <div className={styles.compt}>Compact</div>
//       </div>
//       <div className={styles.text}>Here is an example</div>
//       <div className={styles.img11}>
//         <img src={theme11} alt="theme11" className={styles.theme11} />
//       </div>
//       <div className={styles.bottom}></div>
//       <div className={styles.name}>Name</div>
//       <div className={styles.full}>
//         <div className={styles.radio3}>
//           <input
//             type="radio"
//             value="ful"
//             checked={active1 === 2}
//             onClick={() => {
//               setActive1(2)
//             }}
//           />
//         </div>
//         <div className={styles.display}>Full & display names</div>
//       </div>
//       <div className={styles.just}>
//         <div className={styles.radio4}>
//           <input
//             type="radio"
//             value="jst"
//             checked={active1 === 3}
//             onClick={() => {
//               setActive1(3)
//             }}
//           />
//         </div>
//         <div className={styles.jst}>Just display names</div>
//       </div>
//       <div className={styles.img12}>
//         <img src={theme12} alt="theme12" className={styles.theme12} />
//       </div>
//       <div className={styles.change}>
//         <p> To change your full or display name, head to{" "}
//         <span style={{ color: "#00B87C" }}>your profile.</span></p>
//       </div>
//       <div className={styles.bottom2}></div>
//       <div className={styles.add}>Additional options</div>
//       <div className={styles.info}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox}>
//             <input
//               type="checkbox"
//               name="add"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.current}>
//           Display information about who is currently typing a message
//         </div>
//       </div>
//       <div className={styles.time}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox2}>
//             <input
//               type="checkbox"
//               name="time"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.hour}>Show times with 24-hour clock</div>
//       </div>
//       <div className={styles.hexa}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox3}>
//             <input
//               type="checkbox"
//               name="hex"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.color}>
//           Display color swatches next to hexadecimal values
//         </div>
//       </div>
//       <div className={styles.bottom3}></div>
//       <div className={styles.emoji}>Emoji</div>
//       <div className={styles.tone}>Default Skin Tone</div>
//       <p className={styles.choose}>
//         Choose the default skin tone that will be used whenever you use certain
//         emojis in
//       </p>
//       <p className={styles.choose2}>reactions and messages.</p>
//       <div className={styles.hands}>
//         <img src={theme13} alt="theme13" className={styles.theme13} />
//         <img src={theme14} alt="theme14" className={styles.theme14} />
//         <img src={theme15} alt="theme15" className={styles.theme15} />
//         <img src={theme16} alt="theme16" className={styles.theme16} />
//         <img src={theme17} alt="theme17" className={styles.theme17} />
//         <img src={theme18} alt="theme18" className={styles.theme18} />
//       </div>
//       <div className={styles.plntxt}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox4}>
//             <input
//               type="checkbox"
//               name="pln"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.plain}>Display emoji in plain text</div>
//       </div>
//       <div className={styles.jumb}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox5}>
//             <input
//               type="checkbox"
//               name="jum"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.jumbomoji}>Show JUMBOMOJI</div>
//       </div>
//       <p className={styles.versions}>
//         Display the jumbo versions of emoji (up to 23 at a time!) in messages
//         without text.
//       </p>
//       <p className={styles.example}>Here is an example</p>
//       <img src={theme19} alt="theme19" className={styles.theme19} />
//       <div className={styles.bottom4}></div>
//       <div className={styles.media}>In-line media and links</div>
//       <div className={styles.images}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox6}>
//             <input
//               type="checkbox"
//               name="img"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.files}>
//           Show images and files uploaded to Zurichat
//         </div>
//       </div>
//       <div className={styles.websites}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox7}>
//             <input
//               type="checkbox"
//               name="web"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.linked}>
//           Show images and files from linked websites
//         </div>
//       </div>
//       <div className={styles.larger}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox8}>
//             <input
//               type="checkbox"
//               name="lrg"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.than}>Even if they're larger than 2 MB</div>
//       </div>
//       <div className={styles.previews}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.checkbox9}>
//             <input
//               type="checkbox"
//               name="pre"
//               onChange={e => setIsChecked(e.target.checked)}
//             />
//           </div>
//         </form>
//         <div className={styles.of}>Show text previews of linked websites</div>
//       </div>
//       <div className={styles.bottom5}></div>
//       <div className={styles.emails}>Bring emails into Zurichat</div>
//       <p className={styles.upload}>
//         You can upload any important email to Slack by forwarding it to a
//       </p>
//       <p className={styles.upload2}>
//         unique email address. Slackbot will deliver the email and you can
//       </p>
//       <p className={styles.upload3}>
//         keep it private or share it with your team.
//       </p>
//       <button className={styles.button}>
//         <div className={styles.forward}>Get a forwarding address</div>
//       </button>
//     </div>
//   )
// }

// export default MessagesMedia

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
  const [active1, setActive1] = useState(0)
  const [active2, setActive2] = useState(1)
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
      {/* <div className={styles.clean}> */}
      {/* <div className={styles.radio}>
          <input
            className={styles.radioInput}
            type="radio"
            value="cln"
            checked={(message.theme === "clean", active1 === 0)}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  theme: "clean"
                }
                setActive1(0)
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div> */}
      {/* <div className={styles.cln}>Clean</div> */}
      {/* </div> */}
      {/* <div className={styles.compact}>
        <div className={styles.radio1}>
          <input
            className={styles.radioInput}
            type="radio"
            value="com"
            checked={(message.theme === "compact", active1 === 1)}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  theme: "compact"
                }
                setActive1(1)
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div>
        <div className={styles.compt}>Compact</div>
      </div> */}
      {/* <div className={styles.text}>Here is an example</div> */}
      {/* <div className={styles.img11}>
        {active1 == 0 && (
          <div className={styles.previewCard}>
            <img src={zuriBot} alt="bot" />
            <div className={styles.previewInfo}>
              <div className={styles.previewName}>
                <p className={styles.name}>ZuriBot</p>
                <p className={styles.time}>9:25pm</p>
              </div>
              <p className={styles.message}>Feeling great</p>
            </div>
          </div>
        )}
        {active1 == 1 && (
          <div className={styles.previewCard1}>
            <p className={styles.time}>9:25pm</p>
            <p className={styles.name}>ZuriBot</p>
            <p className={styles.message}>Feeling great</p>
          </div>
        )}
      </div> */}
      {/* <div className={styles.bottom}></div> */}
      <div className={styles.name}>Name</div>
      <div className={styles.full}>
        <div className={styles.radio2}>
          <input
            className={styles.radioInput}
            type="radio"
            value="ful"
            checked={(message.names === "Zuri Ananda", active2 === 0)}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  names: "Zuri Ananda"
                }
                setActive2(0)
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
            checked={(message.names === "Zuri", active2 === 1)}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  names: "Zuri"
                }
                setActive2(1)
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div>
        <div className={styles.jst}>Just display names</div>
      </div>
      {/* <div className={styles.img12}>
        {active1 == 0 && (
          <div className={styles.previewCard}>
            <img src={zuriPerson} alt="bot" />
            <div className={styles.previewInfo}>
              <div className={styles.previewName}>
                {active2 == 0 && <p className={styles.name}>Zuri Ananda</p>}
                {active2 == 1 && <p className={styles.name}>Zuri</p>}
                <p className={styles.time}>9:25pm</p>
              </div>
              <p className={styles.message}>👋 Hi I'm Zuri</p>
            </div>
          </div>
        )}
        {active1 == 1 && (
          <div className={styles.previewCard1}>
            <p className={styles.time}>9:25pm</p>
            {active2 == 0 && <p className={styles.name}>Zuri Ananda</p>}
            {active2 == 1 && <p className={styles.name}>Zuri</p>}
            <p className={styles.message}>👋 Hi I'm Zuri</p>
          </div>
        )}
      </div> */}
      <div className={styles.change}>
        To change your full or display name, head to
        <span style={{ color: "#00B87C" }}> your profile.</span>
      </div>
      <div className={styles.bottom2}></div>
      {/* <div className={styles.add}>Additional options</div> */}
      {/* <div className={styles.info}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="add"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.additional_options.currently_typing}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    additional_options: {
                      ...message.additional_options,
                      currently_typing: !currently_typing
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.current}>
          Display information about who is currently typing a message
        </div>
      </div> */}
      {/* <div className={styles.timed}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox2}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="time"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.additional_options.clock}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    additional_options: {
                      ...message.additional_options,
                      clock: !clock
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.hour}>Show times with 24-hour clock</div>
      </div> */}
      {/* <div className={styles.hexa}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox3}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="hex"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.additional_options.color_swatches}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    additional_options: {
                      ...message.additional_options,
                      color_swatches: !color_swatches
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.color}>
          Display color swatches next to hexadecimal values
        </div>
      </div> */}
      {/* <div className={styles.bottom3}></div> */}
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
      {/* <div className={styles.plntxt}>
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
      </div> */}
      {/* <div className={styles.jumb}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox5}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              checked={message.show_jumbomoji}
              name="jum"
              onChange={e => setIsChecked(e.target.checked)}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    show_jumbomoji: !show_jumbomoji
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.jumbomoji}>Show JUMBOMOJI</div>
      </div> */}
      {/* <p className={styles.versions}>
        Display the jumbo versions of emoji (up to 23 at a time!) in messages
        without text.
      </p> */}
      {/* <p className={styles.example}>Here is an example</p> */}
      {/* <img src={theme19} alt="theme19" className={styles.theme19} />
      <div className={styles.bottom4}></div> */}
      {/* <div className={styles.media}>In-line media and links</div> */}
      {/* <div className={styles.images}> */}
        {/* <form onSubmit={handleSubmit}>
          <div className={styles.checkbox6}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              checked={
                message.inline_media_and_links
                  .show_images_and_files_uploaded_to_zurichat
              }
              name="img"
              onChange={e => setIsChecked(e.target.checked)}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      show_images_and_files_uploaded_to_zurichat:
                        !show_images_and_files_uploaded_to_zurichat
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form> */}
        {/* <div className={styles.files}>
          Show images and files uploaded to Zurichat
        </div> */}
      {/* </div> */}
      {/* <div className={styles.websites}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox7}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="web"
              onChange={e => setIsChecked(e.target.checked)}
              checked={
                message.inline_media_and_links
                  .show_images_and_files_from_linked_websites
              }
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      show_images_and_files_from_linked_websites:
                        !show_images_and_files_from_linked_websites
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.linked}>
          Show images and files from linked websites
        </div>
      </div> */}
      {/* <div className={styles.larger}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox8}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="lrg"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.inline_media_and_links.larger_than_2_mb}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      larger_than_2_mb: !larger_than_2_mb
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.than}>Even if they're larger than 2 MB</div>
      </div> */}
      {/* <div className={styles.previews}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox9}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="pre"
              onChange={e => setIsChecked(e.target.checked)}
              checked={
                message.inline_media_and_links
                  .show_text_previews_of_linked_websites
              }
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      show_text_previews_of_linked_websites:
                        !show_text_previews_of_linked_websites
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.of}>Show text previews of linked websites</div>
      </div> */}
    </div>
  )
}
export default MessagesMedia
