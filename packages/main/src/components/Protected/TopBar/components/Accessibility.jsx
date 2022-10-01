import React, { useState, useEffect } from "react";
import styles from "../../styles/Accessibility.module.css";
import image1 from "../assets/images/up_icon.jpeg";
import { getUserInfo } from "@zuri/utilities";
import checkFill from "../assets/images/check-fill.svg";
import checkNotFill from "../assets/images/check-not-fill.svg";
import radioFilled from "../assets/images/radio-fill.svg";
import radioNotFilled from "../assets/images/radio-not-fill.svg";

function Accessibility() {
  // initialstate is the accessibilty settings from GetUserInfo
  const [errorAccessibility, setErrorAccessibility] = useState();
  const [accessbilitySettings, setAccessibilitySettings] = useState({
    animation: true,
    receivedSound: false,
    sentSound: false,
    readOutLoud: true,
    messageControl: {
      bool: true,
      message: "focus_on_last_message"
    }
  });

  useEffect(() => {
    (async () => {
      try {
        const userInfo = await getUserInfo();
        if (userInfo === {}) throw new Error("No user info");
        const orgId = userInfo.user.org_id;
        const memId = userInfo.user._id;
        const userAccessibiltySettings = {
          links: true,
          animation: accessbilitySettings.animation,
          direct_message_announcement: {
            receive_sound: accessbilitySettings.receivedSound,
            send_sound: accessbilitySettings.sentSound,
            read_message: accessbilitySettings.readOutLoud
          },
          press_empty_message_field: accessbilitySettings.messageControl.message
        };
        const userHeader = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        };
        // dispatch(
        //   setUserAccessibilitySettings(
        //     `https://api.zuri.chat/organizations/${orgId}/members/${memId}/settings/accessibility`,
        //     userAccessibiltySettings,
        //     userHeader
        //   )
        // )
        // dispatch(getUserInfo())
      } catch (err) {
        setErrorAccessibility(err);
      }
    })();
    return () => {};
  }, [accessbilitySettings]);

  return (
    <div>
      <div className={styles.containerAccessibility}>
        <div>
          <h3 className={styles.animationH3}>Animation</h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              {/* <span className={styles.customCheckbox}></span> */}
              <label htmlFor="animation" className={styles.accessibilityLabel}>
                <input
                  id="animation"
                  className={styles.accessibilityCheckbox}
                  type="checkbox"
                  checked={accessbilitySettings.animation}
                  name="animation"
                  onChange={() =>
                    setAccessibilitySettings({
                      ...accessbilitySettings,
                      animation: !accessbilitySettings.animation
                    })
                  }
                  value="Allow animated images and emojis"
                />
                {accessbilitySettings.animation ? (
                  <img
                    src={checkFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                ) : (
                  <img
                    src={checkNotFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                )}
                Allow animated images and emojis
              </label>
            </div>
          </form>
        </div>
        <hr className={styles.hrLine} style={{ height: "0.5px" }} />

        <div>
          <h3 className={styles.directH3}>Direct message announcement</h3>
          <p className={styles.accessibilityP}>
            Choose which sounds and announcements you'd like to receive while
            using a screen reader inside a direct message.
          </p>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <label
                htmlFor="receivedSound"
                className={styles.accessibilityLabel}
              >
                <input
                  className={styles.accessibilityCheckbox}
                  id="receivedSound"
                  type="checkbox"
                  checked={accessbilitySettings.receivedSound}
                  onChange={() =>
                    setAccessibilitySettings({
                      ...accessbilitySettings,
                      receivedSound: !accessbilitySettings.receivedSound
                    })
                  }
                  name="receivedSound"
                  value="Play a sound when a message is received"
                />
                {accessbilitySettings.receivedSound ? (
                  <img
                    src={checkFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                ) : (
                  <img
                    src={checkNotFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                )}
                Play a sound when a message is received
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <label htmlFor="sentSound" className={styles.accessibilityLabel}>
                <input
                  className={styles.accessibilityCheckbox}
                  id="sentSound"
                  type="checkbox"
                  name="sentSound"
                  checked={accessbilitySettings.sentSound}
                  onChange={() =>
                    setAccessibilitySettings({
                      ...accessbilitySettings,
                      sentSound: !accessbilitySettings.sentSound
                    })
                  }
                  value="Play a sound when a message is sent"
                />
                {accessbilitySettings.sentSound ? (
                  <img
                    src={checkFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                ) : (
                  <img
                    src={checkNotFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                )}
                Play a sound when a message is sent
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <label
                htmlFor="readOutLoud"
                className={styles.accessibilityLabel}
              >
                <input
                  className={styles.accessibilityCheckbox}
                  id="readOutLoud"
                  type="checkbox"
                  checked={accessbilitySettings.readOutLoud}
                  onChange={() =>
                    setAccessibilitySettings({
                      ...accessbilitySettings,
                      readOutLoud: !accessbilitySettings.readOutLoud
                    })
                  }
                  name="readOutLoud"
                  value="Read incoming message out loud"
                />
                {accessbilitySettings.readOutLoud ? (
                  <img
                    src={checkFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                ) : (
                  <img
                    src={checkNotFill}
                    alt="checkbox"
                    className={styles.imageStyle}
                  />
                )}
                Read incoming message out loud
              </label>
            </div>
          </form>
        </div>
        <hr className={styles.hrLine} style={{ height: "0.5px" }} />

        <div>
          <h3 className={styles.keyboardH3}>Keyboard</h3>
          <p className={styles.accessibilityP}>
            You can improve the way you use Zurichat by learning our{" "}
            <span id={styles.handyKeyboard}>handy keyboard shortcuts.</span>
          </p>

          <hr className={styles.hrLine} style={{ height: "0.5px" }} />

          <h3 className={styles.pressH3}>
            Press <img src={image1} alt="upicon" className={styles.image1} /> in
            the empty message field to:
          </h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <label
                htmlFor="messageList"
                className={styles.accessibilityRadioLabel}
              >
                <input
                  className={styles.accessibilityRadio}
                  id="messageList"
                  type="radio"
                  checked={
                    accessbilitySettings.messageControl.message ===
                    "focus_on_last_message"
                  }
                  onChange={() => {
                    setAccessibilitySettings({
                      ...accessbilitySettings,
                      messageControl: {
                        bool: true,
                        message: "focus_on_last_message"
                      }
                    });
                  }}
                  name="accessradio"
                  value="focus_on_last_message"
                />
                {accessbilitySettings.messageControl.message ===
                "focus_on_last_message" ? (
                  <img
                    src={radioFilled}
                    alt="focusMessageRadioButton"
                    className={styles.imageStyle}
                    style={{ paddingBottom: "15px" }}
                  />
                ) : (
                  <img
                    src={radioNotFilled}
                    alt="focusMessageRadioButton"
                    className={styles.imageStyle}
                    style={{ paddingBottom: "15px" }}
                  />
                )}
                <div>
                  <span>Move focus to the message list</span>
                  <br />
                  <span className={styles.accessbilityText}>
                    The last visible message in the list will be selected
                  </span>
                </div>
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <label
                htmlFor="editMessage"
                className={styles.accessibilityRadioLabel}
              >
                <input
                  className={styles.accessibilityRadio}
                  id="editMessage"
                  type="radio"
                  checked={
                    accessbilitySettings.messageControl.message ===
                    "edit_last_message"
                  }
                  onChange={() => {
                    setAccessibilitySettings({
                      ...accessbilitySettings,
                      messageControl: {
                        bool: true,
                        message: "edit_last_message"
                      }
                    });
                  }}
                  name="accessradio"
                  value="edit_last_message"
                />
                {accessbilitySettings.messageControl.message ===
                "edit_last_message" ? (
                  <img
                    src={radioFilled}
                    alt="editMessageRadioButton"
                    className={styles.imageStyle}
                    style={{ paddingBottom: "15px" }}
                  />
                ) : (
                  <img
                    src={radioNotFilled}
                    alt="editMessageRadioButton"
                    className={styles.imageStyle}
                    style={{ paddingBottom: "15px" }}
                  />
                )}
                <div>
                  <span>Edit your last message</span>
                  <br />
                  <span className={styles.accessbilityText}>
                    The last visible message you sent will be selected and in
                    the editing mode
                  </span>
                </div>
              </label>
            </div>
          </form>

          <p
            className={styles.accessibilityQ}
            id={styles.noteP}
            style={{ marginTop: "10px" }}
          >
            Note: press <span className={styles.accessibilityEsc}> Ctrl </span>
            <span
              className={styles.accessibilityEsc}
              id={styles.exclamation}
              style={{ marginRight: "5px" }}
            >
              {" "}
              !{" "}
            </span>{" "}
            to edit your last message, with either option.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
