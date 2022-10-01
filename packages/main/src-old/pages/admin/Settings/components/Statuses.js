import React, { useState, useEffect } from "react";
import styles from "../styles/Statuses.module.css";
import ClearTime from "./ClearTIme";
import Picker from "emoji-picker-react";

//

const Statuses = () => {
  // const [emoji, setEmoji] = useState(...defaultStatus.emoji);

  // const [defaultStatus, setDefaultStatus] = useState([
  //   {
  //     id: 1,
  //     emoji: " ",
  //     status: " ",
  //     clearStatusTime: "30 minutes "
  //   },
  //   {
  //     id: 2,
  //     emoji: " ",
  //     status: " ",
  //     clearStatusTime: " "
  //   },
  //   {
  //     id: 3,
  //     emoji: " ",
  //     status: " ",
  //     clearStatusTime: " "
  //   },
  //   {
  //     id: 4,
  //     emoji: " ",
  //     status: " ",
  //     clearStatusTime: " "
  //   },
  //   {
  //     id: 5,
  //     emoji: " ",
  //     status: " ",
  //     clearStatusTime: " "
  //   },
  // ]);

  const [isOpen, setIsOpen] = useState(false);
  const [emojiMode, setEmojiMode] = useState(null);
  const [emojiOne, setEmojiOne] = useState("\u{1f4c6}");
  const [emojiTwo, setEmojiTwo] = useState("\u{1f68c}");
  const [emojiThree, setEmojiThree] = useState("\u{1f912}");
  const [emojiFour, setEmojiFour] = useState("\u{1f334}");
  const [emojiFive, setEmojiFive] = useState("\u{1f3e1}");

  // const findButtonStatus = showButton || checkSaveButtton();

  const [renderButton, setRenderButton] = useState(
    <button className={styles.btn_save_status}>Save</button>
  );

  const handleChange = () => {
    setRenderButton(
      <button className={styles.btn_save_status_change}>Save</button>
    );
  };
  const onEmojiClick = (event, emojiObject) => {
    switch (emojiMode) {
      case "1":
        setEmojiOne(emojiObject.emoji);
        setIsOpen(!open);
        setRenderButton(
          <button className={styles.btn_save_status_change}>Save</button>
        );
        break;

      case "2":
        setEmojiTwo(emojiObject.emoji);
        setIsOpen(!open);
        setRenderButton(
          <button className={styles.btn_save_status_change}>Save</button>
        );
        break;

      case "3":
        setEmojiThree(emojiObject.emoji);
        setIsOpen(!open);
        setRenderButton(
          <button className={styles.btn_save_status_change}>Save</button>
        );
        break;

      case "4":
        setEmojiFour(emojiObject.emoji);
        setIsOpen(!open);
        setRenderButton(
          <button className={styles.btn_save_status_change}>Save</button>
        );
        break;

      case "5":
        setEmojiFive(emojiObject.emoji);
        setIsOpen(!open);
        setRenderButton(
          <button className={styles.btn_save_status_change}>Save</button>
        );
    }
  };

  return (
    <>
      {isOpen ? (
        <Picker
          onEmojiClick={onEmojiClick}
          pickerStyle={{
            position: "absolute",
            top: "59%",
            zIndex: "2",
            right: "30%"
          }}
        />
      ) : null}
      <div className={styles.container}>
        <div className={styles.status__container}>
          <h2 className="mb-0">Suggested statuses</h2>
          <p>
            Anyone can write their own status, and Zurichat offers a few
            suggestions to get you started. If you’d like, you can customize
            these suggestions for your workspace.
          </p>
          <div className={styles.status_settings}>
            <div className={styles.set_status}>
              <p>Status</p>
              <div className={styles.set_status_text}>
                <button
                  onClick={() => {
                    setEmojiMode("1"), setIsOpen(!isOpen);
                  }}
                >
                  {emojiOne}
                </button>
                <input
                  type="text"
                  defaultValue="In a meeting"
                  placeholder="What's your status?"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.set_status_text}>
                <button
                  onClick={() => {
                    setEmojiMode("2"), setIsOpen(!isOpen);
                  }}
                >
                  {emojiTwo}
                </button>
                <input
                  type="text"
                  defaultValue="Commuting"
                  placeholder="What's your status?"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.set_status_text}>
                <button
                  onClick={() => {
                    setEmojiMode("3"), setIsOpen(!isOpen);
                  }}
                >
                  {emojiThree}
                </button>
                <input
                  type="text"
                  defaultValue="Out sick"
                  placeholder="What's your status?"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.set_status_text}>
                <button
                  onClick={() => {
                    setEmojiMode("4"), setIsOpen(!isOpen);
                  }}
                >
                  {emojiFour}
                </button>
                <input
                  type="text"
                  defaultValue="Vacationing"
                  placeholder="What's your status?"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.set_status_text}>
                <button
                  onClick={() => {
                    setEmojiMode("5"), setIsOpen(!isOpen);
                  }}
                >
                  {emojiFive}
                </button>
                <input
                  type="text"
                  defaultValue="Working remotely"
                  placeholder="What's your status?"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.status_clear_time}>
              <p>By default, clear after:</p>
              <ClearTime defaultOptionValue={"30 minutes"} />
              <ClearTime defaultOptionValue={"Today"} />
              <ClearTime defaultOptionValue={"4 hours"} />
              <ClearTime defaultOptionValue={"Don't clear"} />
              <ClearTime defaultOptionValue={"This week"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            {renderButton}
          </div>
          <div className={styles.status_tips}>
            <h2 className="mb-0">Tips for statuses:</h2>
            <ul>
              <li>Keep it short</li>
              <li>Avoid use of acroynms</li>
              <li>Pick the perfect emoji: this is the key.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statuses;
