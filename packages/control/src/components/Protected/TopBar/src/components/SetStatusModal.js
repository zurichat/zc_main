import React, { useState, useContext } from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TimePicker from "react-time-picker";
import styles from "../styles/SetStatusModal.module.css";
import "../timepicker.css";
import { authAxios } from "../utils/Api";
import blackx from "../assets/images/blackx.svg";
import whitex from "../assets/images/whitex.svg";
import down from "../assets/images/down.svg";
import { ProfileContext } from "../context/ProfileModal";
import { TopbarContext } from "../context/Topbar";

const SetDateAndTime = ({ dateTime, setDateTime }) => {
  const [value, onChange] = useState(new Date());
  const [timevalue, timeChange] = useState("10:00");
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
  );
};

const SetStatusModal = ({ statusModal, setStatusModal }) => {
  const [dropdown, setDropdown] = useState(false);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [dateTime, setDateTime] = useState(false);
  const [choosePeriod, setChoosePeriod] = useState(`Don't clear`);
  const { user, orgId, setUser } = useContext(ProfileContext);
  const { emoji } = useContext(TopbarContext);
  const [chosenEmoji, setChosenEmoji] = emoji;
  const [emojiItem, setEmoji] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState([]);
  // const [timeOut, setTimeOut] = useState('')
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmoji(chosenEmoji.emoji);
    setUser({ ...user, status: { text, emojiItem } });
    const data = { emojiItem, text, choosePeriod };
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/status`, {
        expiry_time: choosePeriod,
        tag: emojiItem,
        text: text
      })
      .then(res => {
        // console.log(res)
      })
      .catch(err => console.error(err));

    setStatus(status => {
      return [...status, data];
    });
    setStatusModal(!statusModal);
  };

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
                  placeholder="What is your status?"
                  value={text}
                  onChange={e => setText(e.target.value)}
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

              <div>
                {dropdown && (
                  <ul className={styles.dropdown}>
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
                    {/* <li
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
                    ) : null} */}
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
  );
};

export default SetStatusModal;
