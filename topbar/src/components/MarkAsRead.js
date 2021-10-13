import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import radioFilled from '../assets/images/radio-fill.svg'
import radioNotFilled from '../assets/images/radio-not-fill.svg'
import checkFill from '../assets/images/check-fill.svg'
import checkNotFill from '../assets/images/check-not-fill.svg'
import styles from '../styles/MarkAsRead.module.css'

const MarkAsRead = () => {
  const [channelView, setChannelView] = useState(null)
  const [prompt, setPrompt] = useState(false)
  const [updatingSettings, setUpdatingSettings] = useState(false)
  const sessionKey = "mark-as-read-settings"

  const handlePromptSelection = () => {
    // setUpdatingSettings(true)
    const selection = !prompt
    // axios.post('url', {
    //   prompt: selection
    // })
    // .then(() => {
    //   let settings = JSON.parse(sessionStorage.getItem(sessionKey))
    //   settings = {...settings, prompt: selection}
    //   sessionStorage.setItem(sessionKey, 
    //     JSON.strigify(settings)
    //   )
    //   // updates the state of prompt
    //   setPrompt()
    //   setUpdatingSettings(false)
    // })
    let settings = JSON.parse(sessionStorage.getItem(sessionKey))
    settings = {...settings, prompt: selection}
      sessionStorage.setItem(sessionKey, 
        JSON.stringify(settings)
      )
    setPrompt(selection)
  }
  const handleChannelViewSelection = (option) => {
        // logic for channel view selection goes here
        let settings = JSON.parse(sessionStorage.getItem(sessionKey))
        sessionStorage.setItem(sessionKey, JSON.stringify({...settings, channelView: option}))
        setChannelView(option)
  }

  // Checks if the settings is in session storage then it updates the settings
  // else it fetches it from the backend
  useEffect(()=> {
    if(sessionStorage.getItem(sessionKey)){
      let settings = JSON.parse(sessionStorage.getItem(sessionKey))
      setChannelView(settings.channelView)
      setPrompt(settings.prompt)
    } else {
      // axios.get('url')
      // .then(res => {
      //   let response = res.data
      //   let settings = {
      //     channelView: response.channelView,
      //     prompt: response.prompt
      //   }
      //   sessionStorage.setItem(sessionKey, JSON.stringify(settings))
      //   setChannelView()
      //   setPrompt()
      // })
      let settings = {
            channelView: 1,
            prompt: true
          }
      setPrompt(false)
      setChannelView(1)
      sessionStorage.setItem(sessionKey, JSON.stringify(settings))
    }
   
  }, [])
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h5 className={styles.subhead}>When i view a channel:</h5>
          <form>
            <div className={styles.section}>
              
              <label
                className={styles.option}
                htmlFor="view-channel-1"
              >
                <input
                hidden
                type="radio"
                id="view-channel-1"
                name="view-channel"
                disabled={updatingSettings}
                checked={channelView === 1}
                onClick={()=> handleChannelViewSelection(1)}
              />
                {channelView === 1 ?
                 <img src={radioFilled} alt=""/>: <img src={radioNotFilled} alt=""/>
                }
                <span>Start me where i left off and mark the channel read</span>
              </label>
            </div>
            <div className={styles.section}>
              
              <label
                className={styles.option}
                htmlFor="view-channel-2"
              >
                <input
                hidden
                type="radio"
                id="view-channel-2"
                name="view-channel"
                disabled={updatingSettings}
                checked={channelView === 2}
                onClick={()=> handleChannelViewSelection(2)}
              />
                {channelView === 2 ?
                  <img src={radioFilled} alt=""/>: <img src={radioNotFilled} alt=""/>
                }
                <span>Start me at the newest message and mark the channel read</span>
              </label>
            </div>
            <div className={styles.section}>
              
              <label
                className={styles.option}
                htmlFor="view-channel-3"
              >
                <input
                hidden
                type="radio"
                id="view-channel-3"
                name="view-channel"
                disabled={updatingSettings}
                checked={channelView === 3}
                onClick={()=> handleChannelViewSelection(3)}
              />
                {channelView === 3 ? 
                <img src={radioFilled} alt=""/>: <img src={radioNotFilled} alt=""/>
                }
                <span>Start me at the newest message but leave unseen messages unread</span>
              </label>
            </div>
          </form>
        </div>
        <div>
          <h5 className={styles.subhead}>When i mark everything as read:</h5>
          <form>
            <div className={styles.section}>
              <label className={styles.option} htmlFor="prompt-to-confirm">
                <span>
                  <input
                    hidden
                    className={styles.prompt}
                    id="prompt-to-confirm"
                    type="checkbox"
                    disabled={updatingSettings}
                    onClick={handlePromptSelection}
                  />
                </span>
                {prompt ?  <img src={checkFill} alt=""/>: <img src={checkNotFill} alt=""/>}
                Prompt to confirm
              </label>
            </div>
          </form>
        </div>
        <div>
          <h5 className={styles.subhead}>Keyboard shortcuts</h5>
          <div>
            <ul className={styles.subHeadUl} style={{padding: '0'}}>
              <li className={styles.shortcut}>
                Mark all messages in current channel as read
                <span className={styles.esc}>Esc</span>
              </li>
              <li className={styles.shortcut}>
                Mark all messages as read
                <span className={styles.esc}>Shift</span>{' '}
                <span className={styles.esc}>Esc</span>{' '}
              </li>
              <li className={styles.shortcut}>
                Mark a message as unread
                <span className={styles.esc}>Alt </span> and click message
              </li>
            </ul>
            <p className={styles.shortcutP}>
              And that’s just the beginning. To view the full list of keywords
              shortcuts, just press <br />
              <span className={styles.esc}> Ctrl </span> +
              <span className={styles.esc}> / </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarkAsRead
