import React, { useState, useContext } from 'react'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import styles from '../styles/SetStatusModal.module.css'
import { authAxios } from '../utils/Api'
import blackx from '../assets/images/blackx.svg'
import whitex from '../assets/images/whitex.svg'
import down from '../assets/images/down.svg'
import { ProfileContext } from '../context/ProfileModal'

const SetStatusModal = ({ statusModal, setStatusModal }) => {
  const [dropdown, setDropdown] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [dateTime, setDateTime] = useState(false)
  const [choosePeriod, setChoosePeriod] = useState(`Don't clear`)
  const { user, orgId, setUser } = useContext(ProfileContext)
  const [emoji, setEmoji] = useState('')
  const [text, setText] = useState('')
  const [tag, setTag] = useState('')
  const [expiry_time, setExpiry_time] = useState('')
  const [status, setStatus] = useState([])
  const [state, setState] = useState('')
  // const [timeOut, setTimeOut] = useState('')
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = { tag, text, expiry_time }

    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/status`, data)
      .then(res => {
        console.log(res)
        setState({ loading: false })
        toast.success('User Profile Updated Successfully', {
          position: 'bottom-center'
        })
      })
      .then(
        setTimeout(() => {
          authAxios
            .get(`/organizations/${orgId}/members/${user._id}`)
            .then(res => {
              console.log(res, 'get status')
              const newStatus = res.data.data
              setUser(newStatus)
            })
        }, 500)
      )
      .catch(err => {
        console.log(err)
        setState({ loading: false })
        toast.error(err?.message, {
          position: 'bottom-center'
        })
      })
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalcontainer}>
        <div className={styles.statustop}>
          <p>Set a status</p>
          <img
            src={whitex}
            alt=""
            onClick={() => setStatusModal(!statusModal)}
            className={styles.whitex}
          />
        </div>
        <div className={styles.modalcontent}>
          <form>
            <div className={styles.addstatus}>
              <div className={styles.addstatusleft}>
                <p
                  onClick={() => setChosenEmoji(!chosenEmoji)}
                  value={tag}
                  onChange={e => setTag(e.target.value)}
                >
                  {chosenEmoji ? chosenEmoji.setTag : 5}
                </p>
                <div className={styles.emoji}>
                  <div>
                    {chosenEmoji ? (
                      <Picker
                        onEmojiClick={onEmojiClick}
                        skinTone={SKIN_TONE_MEDIUM_DARK}
                        value={emoji}
                        onChange={e => setEmoji(e.target.value)}
                      />
                    ) : null}
                  </div>
                  <div>
                    {chosenEmoji ? (
                      <img
                        src={blackx}
                        alt=""
                        onClick={() => setChosenEmoji(!chosenEmoji)}
                        className={styles.blackx}
                      />
                    ) : null}
                  </div>
                </div>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="What is your status?"
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
              </div>
              <img src={blackx} alt="" className={styles.blackx} />
            </div>
            <div className={styles.clearafter}>
              <div
                className={styles.clearaftertop}
                onClick={() => setDropdown(!dropdown)}
              >
                <label htmlFor="" className={styles.dropdowntop}>
                  Clear after:
                  <span
                    className={styles.dropdowntopspan}
                    value={expiry_time}
                    onChange={e => setExpiry_time(e.target.value)}
                  >
                    {choosePeriod}
                  </span>
                </label>
                <img src={down} alt="" />
              </div>

              <div>
                {dropdown && (
                  <ul className={styles.dropdown}>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod(`Don't clear`)}
                    >
                      Don't clear
                    </li>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod('1 hour')}
                    >
                      1 hour
                    </li>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod('2 hour')}
                    >
                      2 hours
                    </li>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod('4 hour')}
                    >
                      4 hours
                    </li>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod('Today')}
                    >
                      Today
                    </li>
                    <li
                      className={styles.dropdownoption2}
                      onClick={() => setDateTime(!dateTime)}
                    >
                      Set date and time
                    </li>
                    {dateTime ? (
                      <SetDateAndTime
                        setDateTime={setDateTime}
                        dateTime={dateTime}
                      />
                    ) : null}
                  </ul>
                )}
              </div>
            </div>
            <button
              className={styles.statuscta}
              type="submit"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
const SetDateAndTime = ({ dateTime, setDateTime }) => {
  const [value, onChange] = useState(new Date())
  const [timevalue, timeChange] = useState('10:00')
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalcontainer}>
          <div className={styles.statustop}>
            <p>Clear after</p>
            <img
              src={whitex}
              alt=""
              onClick={() => setDateTime(!dateTime)}
              className={styles.whitex}
            />
          </div>
          <form>
            <div>
              <label>Date</label>
              <DatePicker onChange={onChange} value={value} />
            </div>
            <div>
              <label>Time</label>
              <TimePicker onChange={timeChange} value={timevalue} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SetStatusModal
