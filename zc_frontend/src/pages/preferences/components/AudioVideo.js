import React from 'react'
import styles from '../styles/AudioVideo.module.css'

const AudioVideo = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.camera}>
          <h5 className={styles.head}>Camera</h5>
          <div className={styles.rectangle}></div>
          <div className={styles.select}>
            <select name="" id="" className={styles.selectfirst}>
              <option selected disabled>
                Integrated Webcam (Oc45:64d2)
              </option>
              <option value="">Youcam</option>
              <option value="">Manycam</option>
            </select>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.microphone}>
          <h6 className={styles.head}>Microphone</h6>
          <div className={styles.select}>
            <select name="" id="">
              <option selected disabled>
                Default - Microphone Array [Realtek...
              </option>
              <option value="">Laser Microphone</option>
              <option value="">Crystal Microphone</option>
            </select>
          </div>
          <div className={styles.inputlevel}>
            Input level:
            <div className={styles.barfirst}></div>
            <div className={styles.barsecond}></div>
            <div className={styles.barthird}></div>
            <div className={styles.barfourth}></div>
            <div className={styles.barfifth}></div>
            <div className={styles.barsixth}></div>
            <div className={styles.barseventh}></div>
            <div className={styles.bareight}></div>
            <div className={styles.barninth}></div>
            <div className={styles.bartenth}></div>
            <div className={styles.bareleventh}></div>
            <div className={styles.bartwelfth}></div>
            <div className={styles.barthirtenth}></div>
            <div className={styles.barfourtenth}></div>
            <div className={styles.barfiftenth}></div>
          </div>
          <div className={styles.check}>
            <div className={styles.checkenable}>
              <input type="checkbox" name="" id="" />
              <div className={styles.enable}>Enable automatic gain control</div>
            </div>
          </div>
          <h6 className={styles.headspeaker}>Speaker</h6>
          <div className={styles.speaker}>
            <div className={styles.selecttwo}>
              <select name="" id="">
                <option selected disabled>
                  Default - Speakers/Headphones (Re...
                </option>
                <option value="">Speaker</option>
                <option value="">Headphone</option>
              </select>
            </div>
            <button className={styles.button}>Test speaker</button>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.join}>
          <h6 className={styles.head}>When joining a ZuriChat call...</h6>
          <div className={styles.check}>
            <div className={styles.checkset}>
              <input type="checkbox" name="" id="" />
              <div className={styles.set}>
                <span className={styles.statuscall}>
                  {' '}
                  Set my status to "On a call..."
                </span>{' '}
                <br />
                If you already have a status set, ZuriChat won't change it.
              </div>
            </div>
            <div className={styles.checkmute}>
              <input type="checkbox" name="" id="" />
              <div className={styles.mute}>Mute my microphone</div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.huddle}>
          <h6 className={styles.head}>When joining a huddle...</h6>
          <div className={styles.check}>
            <div className={styles.checkstatus}>
              <input type="checkbox" name="" id="" />
              <div className={styles.status}>
                <span className={styles.statushuddle}>
                  {' '}
                  Set my status to "In a huddle..."
                </span>{' '}
                <br />
                If you already have a status set, ZuriChat won't change it.
              </div>
            </div>
            <div className={styles.checkmutemic}>
              <input type="checkbox" name="" id="" />
              <div className={styles.mutemic}>Mute my microphone</div>
            </div>
            <div className={styles.checkautomatic}>
              <input type="checkbox" name="" id="" />
              <div className={styles.automatic}>
                Automatically turn on captions when you're in a huddle
              </div>
            </div>
            <div className={styles.checkwarning}>
              <input type="checkbox" name="" id="" />
              <div className={styles.warning}>
                Send a warning if you're starting a huddle in a channel with
                more than 150 members
              </div>
            </div>
            <div className={styles.checkmusic}>
              <input type="checkbox" name="" id="" />
              <div className={styles.music}>
                Play music to let you know when you're the last one in the
                huddle
              </div>
            </div>
          </div>
          <div className={styles.head}>When Slack is in the background:</div>
          <div className={styles.check}>
            <div className={styles.checkallow}>
              <input type="checkbox" name="" id="" />
              <div className={styles.allow}>
                <span className={styles.mute}>
                  {' '}
                  Allow keyboard shortcut to Mute
                </span>{' '}
                <br />
                Use "Ctrl" "Shift" "Space" to mute or unmute your mic
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.screen}>
          <div className={styles.screensaver}>
            When your screen saver starts or your computer locks...
          </div>
          <div className={styles.check}>
            <div className={styles.checkcall}>
              <input type="checkbox" name="" id="" />
              <div className={styles.call}>Automatically leave calls</div>
            </div>
            <div className={styles.checkleavehuddle}>
              <input type="checkbox" name="" id="" />
              <div className={styles.leavehudle}>
                Automatically leave huddles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioVideo
