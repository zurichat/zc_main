import React from 'react'
import styles from '../styles/AdvancedSettings.module.css'

const AdvancedSettings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <h5 className={styles.head}>Input options</h5>
        <div className={styles.check}>
          <div className={styles.checktype}>
            <input type="checkbox" name="" id="" />
            <div className={styles.typing}>
              <h3>When typing code with "", should send the message </h3>
              <div className={styles.typingticket}>
                With this ticket, use
                <button className={styles.btn1}>Shift</button> to send
              </div>
            </div>
          </div>
          <div className={styles.checkformat}>
            <input type="checkbox" name="" id="" />
            <div className={styles.format}>
              <h3>Format messages with markup</h3>
              <div className={styles.format2}><h3>The text formatting toolbar won't show in the composer</h3></div>
            </div>
          </div>
        </div>
        <p className={styles.headpress}>When writing a message, press </p>
        <div className={styles.radio}>
          <div className={styles.radiosend}>
            <input type="radio" name="" id="" />
            <div className={styles.send}>Send the message</div>
          </div>
          <div className={styles.radiostart}>
            <input type="radio" name="" id="" />
            <div className={styles.start}>
              Start a new line (use
              <button className={styles.btn2}>Ctrl</button>
              <button className={styles.btn3}>Enter</button> to send )
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.search}>
        <h5 className={styles.head}>Search Options</h5>
        <div className={styles.check}>
          <div className={styles.checktype}>
            <input type="checkbox" name="" id="" />
            <div className={styles.behaviour}>
              <div className={styles.up}>
                <button className={styles.btn4}>Ctrl</button>
                <button className={styles.btn5}>F</button>
                Starts a Zurichat chat
              </div>
              <div className={styles.over}>Overrides normal behaviour in search behaviour</div>
            </div>
          </div>
          <div className={styles.checkformat}>
            <input type="checkbox" name="" id="" />
            <div className={styles.browser}>
              <div className={styles.quick}>
                <button className={styles.btn6}>Ctrl</button>
                <button className={styles.btn7}>K</button>
                Starts the quick switcher
              </div>
              <div className={styles.ride}>Overrides normal behaviour in some browsers</div>
            </div>
          </div>
        </div>
        <div className={styles.exclude}>
        <h5>Exclude these channels from search results:</h5>
        </div>
        <div className={styles.barcontainer}>
          <div className={styles.bar}>
            <input
              type="text"
              className={styles.bartype}
              placeholder="Type a channel name..."
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.options}>
        <h5 className={styles.head}>Other Options</h5>
        <div className={styles.check}>
          <div className={styles.checkkeys}>
            <input type="checkbox" name="" id="" />
            <div className={styles.keys}>
              <button className={styles.btn8}>Page up</button>,
              <button className={styles.btn9}>Page Down</button>,
              <button className={styles.btn10}>Home</button> &nbsp;
              <button className={styles.btn11}>End</button>&nbsp;
              keys always scroll messages
            </div>
          </div>
          <div className={styles.ask}>
            <input type="checkbox" name="" id="" />
            <p>
              Ask if I want to toggle my away status when I log in after having
              set myself away
            </p>
          </div>
          <div className={styles.survey}>
            <input type="checkbox" name="" id="" />
            <div className={styles.surveyin}>
              <div className={styles.sendme}>Send me occasional survey via Zurichat bot</div> 
              <div className={styles.working}>We're working to make Zurichat better. We'd always love to hear your thoughts</div>
            </div>
          </div>
          <div className={styles.warn}>
            <input type="checkbox" name="" id="" />
            <p>Warn me about potential malicious links</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSettings
