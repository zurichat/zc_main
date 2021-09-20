import React from 'react'
import styles from '../styles/MessagesMedia.module.css'
import theme11 from '../../images/theme7.png'
import theme12 from '../../images/theme8.png'
import theme13 from '../../images/theme9.png'
import theme14 from '../../images/theme10.png'
import theme15 from '../../images/theme11.png'
import theme16 from '../../images/theme12.png'
import theme17 from '../../images/theme13.png'
import theme18 from '../../images/theme14.png'
import theme19 from '../../images/theme15.png'
import { useState, useContext, useEffect } from 'react'
import { authAxios } from '../../../util/Api'
import { ProfileContext } from '../../../context/ProfileModal'

const MessagesMedia = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [active1, setActive1] = useState(0)

  const { user, orgId } = useContext(ProfileContext)

  const [msgMed, setMsgMed] = useState({
    // channel_hurdle_notification: channel_hurdle,
    additional_options: null,
    bring_emails_into_zuri_bson: '',
    convert_emoticons_to_emoji: false,
    custom: false,
    emoji: '',
    emoji_as_text: false,
    frequently_used_emoji: false,
    inline_media_and_links: null,
    messages_one_click_reaction: null,
    names: '',
    show_jumbomoji: false,
    theme: ''
  })

  // handleSubmit function on the form
  const handleSubmit = e => {
    e.preventDefault()
    console.log(isChecked)
    // console.log(user)
  }

  React.useEffect(() => {
    console.log(user)
  }, [user])

  // const setData = () => {
  //   authAxios
  //     .patch(`/organizations/${orgId}/members/${user._id}/settings`, {
  //       settings: {
  //         notifications: dataState
  //       }
  //     })
  //     .then(res => {
  //       console.log(res)

  //     })
  //     .catch(err => {
  //       console.log(err?.response?.data)

  //     })
  // }

  return (
    <div className={styles.msgCon}>
      <div className={styles.title}>Theme</div>
      <div className={styles.clean}>
        <div className={styles.radio}>
          <input
            type="radio"
            value="cln"
            checked={active1 === 0}
            onClick={() => {
              setActive1(0)
            }}
          />
        </div>
        <div className={styles.cln}>Clean</div>
      </div>
      <div className={styles.compact}>
        <div className={styles.radio2}>
          <input
            type="radio"
            value="com"
            checked={active1 === 1}
            onClick={() => {
              setActive1(1)
            }}
          />
        </div>
        <div className={styles.compt}>Compact</div>
      </div>
      <div className={styles.text}>Here is an example</div>
      <div className={styles.img11}>
        <img src={theme11} alt="theme11" className={styles.theme11} />
      </div>
      <div className={styles.bottom}></div>
      <div className={styles.name}>Name</div>
      <div className={styles.full}>
        <div className={styles.radio3}>
          <input
            type="radio"
            value="ful"
            checked={active1 === 2}
            onClick={() => {
              setActive1(2)
            }}
          />
        </div>
        <div className={styles.display}>Full & display names</div>
      </div>
      <div className={styles.just}>
        <div className={styles.radio4}>
          <input
            type="radio"
            value="jst"
            checked={active1 === 3}
            onClick={() => {
              setActive1(3)
            }}
          />
        </div>
        <div className={styles.jst}>Just display names</div>
      </div>
      <div className={styles.img12}>
        <img src={theme12} alt="theme12" className={styles.theme12} />
      </div>
      <div className={styles.change}>
        To change your full or display name, head to{' '}
        <p style={{ color: '#00B87C' }}>your profile.</p>
      </div>
      <div className={styles.bottom2}></div>
      <div className={styles.add}>Additional options</div>
      <div className={styles.info}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="add"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.current}>
          Display information about who is currently typing a message
        </div>
      </div>
      <div className={styles.time}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox2}>
            <input
              type="checkbox"
              name="time"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.hour}>Show times with 24-hour clock</div>
      </div>
      <div className={styles.hexa}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox3}>
            <input
              type="checkbox"
              name="hex"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.color}>
          Display color swatches next to hexadecimal values
        </div>
      </div>
      <div className={styles.bottom3}></div>
      <div className={styles.emoji}>Emoji</div>
      <div className={styles.tone}>Default Skin Tone</div>
      <div className={styles.choose}>
        Choose the default skin tone that will be used whenever you use certain
        emojis in <br /> reactions and messages.
      </div>
      <div className={styles.hands}>
        <img src={theme13} alt="theme13" className={styles.theme13} />
        <img src={theme14} alt="theme14" className={styles.theme14} />
        <img src={theme15} alt="theme15" className={styles.theme15} />
        <img src={theme16} alt="theme16" className={styles.theme16} />
        <img src={theme17} alt="theme17" className={styles.theme17} />
        <img src={theme18} alt="theme18" className={styles.theme18} />
      </div>
      <div className={styles.plntxt}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox4}>
            <input
              type="checkbox"
              name="pln"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.plain}>Display emoji in plain text</div>
      </div>
      <div className={styles.jumb}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox5}>
            <input
              type="checkbox"
              name="jum"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.jumbomoji}>Show JUMBOMOJI</div>
      </div>
      <div className={styles.versions}>
        Display the jumbo versions of emoji (up to 23 at a time!) in messages{' '}
        <br /> without text.
      </div>
      <div className={styles.example}>Here is an example</div>
      <img src={theme19} alt="theme19" className={styles.theme19} />
      <div className={styles.bottom4}></div>
      <div className={styles.media}>In-line media and links</div>
      <div className={styles.images}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox6}>
            <input
              type="checkbox"
              name="img"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.files}>
          Show images and files uploaded to Zurichat
        </div>
      </div>
      <div className={styles.websites}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox7}>
            <input
              type="checkbox"
              name="web"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.linked}>
          Show images and files from linked websites
        </div>
      </div>
      <div className={styles.larger}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox8}>
            <input
              type="checkbox"
              name="lrg"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.than}>Even if they're larger than 2 MB</div>
      </div>
      <div className={styles.previews}>
        <form onsubmit={handleSubmit}>
          <div className={styles.checkbox9}>
            <input
              type="checkbox"
              name="pre"
              onChange={e => setIsChecked(e.target.checked)}
            />
          </div>
        </form>
        <div className={styles.of}>Show text previews of linked websites</div>
      </div>
      <div className={styles.bottom5}></div>
      <div className={styles.emails}>Bring emails into Zurichat</div>
      <div className={styles.upload}>
        You can upload any important email to Slack by forwarding it to a <br />{' '}
        unique email address. Slackbot will deliver the email and you can <br />{' '}
        keep it private or share it with your team.
      </div>
      <button className={styles.button}>
        <div className={styles.forward}>Get a forwarding address</div>
      </button>
    </div>
  )
}

export default MessagesMedia
