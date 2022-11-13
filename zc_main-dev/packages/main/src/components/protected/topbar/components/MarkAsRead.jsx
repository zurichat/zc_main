import React, { useState, useEffect, useContext } from "react";
import radioFilled from "../assets/images/radio-fill.svg";
import radioNotFilled from "../assets/images/radio-not-fill.svg";
import checkFill from "../assets/images/check-fill.svg";
import checkNotFill from "../assets/images/check-not-fill.svg";
import styles from "../../styles/MarkAsRead.module.css";
import { ProfileContext } from "../context/ProfileModal";
import { authAxios } from "../utils/api";
const MarkAsRead = () => {
  const [channelView, setChannelView] = useState(
    "start me where i left off and mark the channel read"
  );
  const [prompt, setPrompt] = useState(false);

  const { user, orgId } = useContext(ProfileContext);
  const userId = user._id;
  const userEmail = JSON.parse(sessionStorage.getItem("user")).email;
  const sessionKey = "mark-as-read-settings";
  const handlePromptSelection = () => {
    const selection = !prompt;
    setPrompt(selection);
    // update the DB
    authAxios
      .patch(
        `/organizations/${orgId}/members/${userId}/settings/mark-as-read`,
        {
          when_i_view_a_channel: channelView,
          when_i_mark_everything_as_read: selection
        }
      )
      .then(() => {
        let settings = {
          when_i_view_a_channel: channelView,
          when_i_mark_everything_as_read: selection
        };
        // update the sessionStorage
        sessionStorage.setItem(sessionKey, JSON.stringify(settings));

        // allow other selections
      })
      .catch(e => {
        // catch error
      });
  };
  const handleChannelViewSelection = option => {
    setChannelView(option);
    // update the DB
    authAxios
      .patch(
        `/organizations/${orgId}/members/${userId}/settings/mark-as-read`,
        {
          when_i_view_a_channel: option,
          when_i_mark_everything_as_read: prompt
        }
      )
      .then(() => {
        let settings = {
          when_i_view_a_channel: option,
          when_i_mark_everything_as_read: prompt
        };
        // update the sessionStorage
        sessionStorage.setItem(sessionKey, JSON.stringify(settings));
      })
      .catch(e => {
        // catch error
      });
  };

  // Checks if the settings is in session storage then it updates the user saved settings
  // else it fetches the saved settings from the DB
  useEffect(() => {
    if (sessionStorage.getItem(sessionKey)) {
      let settings = JSON.parse(sessionStorage.getItem(sessionKey));
      setChannelView(settings.when_i_view_a_channel);
      setPrompt(settings.when_i_mark_everything_as_read);
    } else {
      // get saved settings from database
      authAxios
        .get(`/organizations/${orgId}/members?query=${userEmail}`)
        .then(res => {
          const settings = res.data.data[0].settings.mark_as_read;
          setChannelView(settings.when_i_view_a_channel);
          setPrompt(settings.when_i_mark_everything_as_read);
          sessionStorage.setItem(
            sessionKey,
            JSON.stringify({
              when_i_view_a_channel: settings.when_i_view_a_channel,
              when_i_mark_everything_as_read:
                settings.when_i_mark_everything_as_read
            })
          );
        })
        .catch(e => {
          //error
        });
    }
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h5 className={styles.subhead}>When i view a channel:</h5>
          <form>
            <div className={styles.section}>
              <label className={styles.option} htmlFor="view-channel-1">
                <input
                  hidden
                  type="radio"
                  id="view-channel-1"
                  name="view-channel"
                  checked={
                    channelView ===
                    "start me where i left off and mark the channel read"
                  }
                  onClick={() =>
                    handleChannelViewSelection(
                      "start me where i left off and mark the channel read"
                    )
                  }
                />
                {channelView ===
                "start me where i left off and mark the channel read" ? (
                  <img src={radioFilled} alt="" />
                ) : (
                  <img src={radioNotFilled} alt="" />
                )}
                <span>Start me where i left off and mark the channel read</span>
              </label>
            </div>
            <div className={styles.section}>
              <label className={styles.option} htmlFor="view-channel-2">
                <input
                  hidden
                  type="radio"
                  id="view-channel-2"
                  name="view-channel"
                  checked={
                    channelView ===
                    "start me at the newest message and mark the channel read"
                  }
                  onClick={() =>
                    handleChannelViewSelection(
                      "start me at the newest message and mark the channel read"
                    )
                  }
                />
                {channelView ===
                "start me at the newest message and mark the channel read" ? (
                  <img src={radioFilled} alt="" />
                ) : (
                  <img src={radioNotFilled} alt="" />
                )}
                <span>
                  Start me at the newest message and mark the channel read
                </span>
              </label>
            </div>
            <div className={styles.section}>
              <label className={styles.option} htmlFor="view-channel-3">
                <input
                  hidden
                  type="radio"
                  id="view-channel-3"
                  name="view-channel"
                  checked={
                    channelView ===
                    "start me at the newest message but leave unseen messages unread"
                  }
                  onClick={() =>
                    handleChannelViewSelection(
                      "start me at the newest message but leave unseen messages unread"
                    )
                  }
                />
                {channelView ===
                "start me at the newest message but leave unseen messages unread" ? (
                  <img src={radioFilled} alt="" />
                ) : (
                  <img src={radioNotFilled} alt="" />
                )}
                <span>
                  Start me at the newest message but leave unseen messages
                  unread
                </span>
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
                    onClick={handlePromptSelection}
                  />
                </span>
                {prompt ? (
                  <img src={checkFill} alt="" />
                ) : (
                  <img src={checkNotFill} alt="" />
                )}
                Prompt to confirm
              </label>
            </div>
          </form>
        </div>
        <div>
          <h5 className={styles.subhead}>Keyboard shortcuts</h5>
          <div>
            <ul className={styles.subHeadUl} style={{ padding: "0" }}>
              <li className={styles.shortcut}>
                Mark all messages in current channel as read
                <span className={styles.esc}>Esc</span>
              </li>
              <li className={styles.shortcut}>
                Mark all messages as read
                <span className={styles.esc}>Shift</span>{" "}
                <span className={styles.esc}>Esc</span>{" "}
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
  );
};

export default MarkAsRead;
