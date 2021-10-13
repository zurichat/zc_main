import React, { useState, useContext } from "react"
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react"
import DatePicker from "react-datepicker"
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TimePicker from "react-time-picker"
import styles from "../styles/SetStatusModal.module.css"
import "../timepicker.css"
import { authAxios } from "../utils/Api"
import blackx from "../assets/images/blackx.svg"
import whitex from "../assets/images/whitex.svg"
import down from "../assets/images/down.svg"
import { ProfileContext } from "../context/ProfileModal"
import { TopbarContext } from "../context/Topbar"

const SetDateAndTime = ({ dateTime, setDateTime }) => {
  const [value, onChange] = useState(new Date())
  const [timevalue, timeChange] = useState("10:00")

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
            <div className={styles.dateSection}>
              <label className={styles.dateLabel}>Date</label>
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

const SetStatusModal = ({
  statusModal,
  setStatusModal,
  emojiItem,
  text,
  setText,
  setEmoji
}) => {
  const [dropdown, setDropdown] = useState(false)
  const [openEmoji, setOpenEmoji] = useState(false)
  const [dateTime, setDateTime] = useState(false)
  const [choosePeriod, setChoosePeriod] = useState(`Don't clear`)
  const { user, orgId, setUser } = useContext(ProfileContext)
  const { emoji } = useContext(TopbarContext)
  const [chosenEmoji, setChosenEmoji] = emoji
  // const [emojiItem, setEmoji] = useState("")
  // const [text, setText] = useState("")
  const [status, setStatus] = useState([])
  // const [timeOut, setTimeOut] = useState('')
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }
  //
  const getTime = () => {
    let d = new Date()
    let h = d.getHours(),
      m = d.getMinutes()
    if (h > 12) {
      h = h - 12
    }
    if (h < 10) {
      h = "0" + h
    }
    if (m < 10) {
      m = "0" + m
    }

    return h + ":" + m
  }
  const currentTime = getTime()
  //
  const handleSubmit = e => {
    e.preventDefault()
    setEmoji(chosenEmoji.emoji)
    setUser({ ...user, status: { text, emojiItem } })
    const result = { emojiItem, text, choosePeriod }

    try {
      const res = authAxios.patch(
        `/organizations/${orgId}/members/${user._id}/status`,
        {
          expiry_time: "" || choosePeriod,
          tag: emojiItem,
          text: text
        }
      )
      res.status == 200 && alert(res?.data?.message)
    } catch (error) {
      alert(error)
    }

    setStatus(status => {
      return [...status, result]
    })
    setStatusModal(!statusModal)
  }
  const handleClearStatus = async () => {
    setEmoji("")
    setText("")
    try {
      const res = await authAxios.patch(
        `/organizations/${orgId}/members/${user._id}/status`,
        {
          expiry_time: "one_hour",
          tag: emojiItem,
          text: text
        }
      )
      res.status == 200 && alert(res?.data?.message)
    } catch (error) {
      alert(error)
    }
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
          <form action="" method="post">
            <div className={styles.addstatus}>
              <div className={styles.addstatusleft}>
                <p
                  className={styles.emojino}
                  onClick={() => setOpenEmoji(!openEmoji)}
                  value={emojiItem}
                  // onChange={e => setEmoji(e.target.value)}
                >
                  {chosenEmoji ? chosenEmoji.emoji : 5}
                </p>
                <div className={styles.emoji}>
                  <div>
                    {openEmoji ? (
                      <Picker
                        onEmojiClick={onEmojiClick}
                        skinTone={SKIN_TONE_MEDIUM_DARK}
                        value={emojiItem}
                        onChange={e => setEmoji(e.target.value)}
                      />
                    ) : null}
                  </div>
                  <div>
                    {openEmoji ? (
                      <img
                        src={blackx}
                        alt=""
                        onClick={() => setOpenEmoji(!openEmoji)}
                        className={styles.blackx}
                      />
                    ) : null}
                  </div>
                </div>
                <input
                  type="text"
                  className={styles.input}
                  placeholder={"What is your status?"}
                  value={text}
                  // value={user?.status?.text || text}
                  onChange={e => {
                    setText(e.target.value)
                  }}
                />
              </div>
              <img
                src={blackx}
                onClick={() => setText("")}
                alt="clear status"
                role="button"
                className={styles.blackx}
              />
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
                    value={choosePeriod}
                    onChange={e => setChoosePeriod(e.target.value)}
                  >
                    {choosePeriod}
                  </span>
                </label>
                <img src={down} alt="" />
              </div>
              {dateTime ? (
                // <SetDateAndTime
                //   setDateTime={setDateTime}
                //   dateTime={dateTime}
                // />
                <div className={styles.datetime}>
                  <input
                    type="date"
                    className={styles.date}
                    defaultValue={new Date().toISOString().slice(0, -14)}
                    min={new Date().toISOString().slice(0, -14)}
                  />
                  <input
                    type="time"
                    className={styles.time}
                    defaultValue={currentTime}
                    min={currentTime}
                  />
                </div>
              ) : null}
              <div>
                {dropdown && (
                  <ul
                    className={styles.dropdown}
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod(`dont_clear`)}
                    >
                      Don't clear
                    </li>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod("one_hour")}
                    >
                      1 hour
                    </li>

                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod("four_hours")}
                    >
                      4 hours
                    </li>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod("today")}
                    >
                      Today
                    </li>
                    <li
                      className={styles.dropdownoption}
                      onClick={() => setChoosePeriod("this_week")}
                    >
                      This week
                    </li>
                    <li
                      className={styles.dropdownoption2}
                      onClick={() => setDateTime(!dateTime)}
                    >
                      Set date and time
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <button
              className={styles.statuscta}
              type="submit"
              onClick={handleSubmit}
            >
              {text.length > 0 && emojiItem.length > 0 ? (
                <span onClick={handleClearStatus}>Clear Status</span>
              ) : (
                "Save Changes"
              )}
            </button>
          </form>
          {/* {status.map((data)=>{
                      const {text, emoji} = data;
                      return(
                          <div>
                          <p>{text}</p>
                          <p>{emoji}</p>
                          </div>
                      )
                  })} */}
        </div>
      </div>
    </div>
  )
}

export default SetStatusModal
