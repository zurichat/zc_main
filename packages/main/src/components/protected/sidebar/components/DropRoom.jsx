import React, { useState } from "react";
import styles from "../styles/Drop.module.css";
import ToggleSwitch from "./ToggleSwitch";
import { BsToggleOff } from "react-icons/bs";
import GrCircleAlert from "react-icons/gr";
import useChannel from "../../../../auth/useChannel";

const DropRoom = props => {
  const { updatePrivacy, createChannel } = useChannel(props.data?.roomId);
  const [state, setState] = useState({});

  const handleEvent = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value
    });
  };

  const handleSubmission = e => {
    e.preventDefault();
    createChannel(state);
  };

  return props.trigger ? (
    <div
      className={`w-100 h-100 d-flex align-items-center justify-content-center ${styles.droproom__overlay} `}
    >
      <div
        className={`d-flex flex-column align-items-center justify-content-center ${styles.droproom}`}
      >
        {props.children}
        <div
          className={`w-100 d-flex flex-row justify-content-between align-items-center`}
        >
          <h1 className={`dispay-1`}>Create a channel</h1>
          <h1 onClick={() => props.setTrigger(false)}>x</h1>
        </div>
        <p className={`w-100 d-flex flex-wrap align-items-start `}>
          Channels are where your team communcicates. They're best when
          organized around a topic -- #marketing, for example.
        </p>
        <form
          action=""
          onSubmit={handleSubmission}
          className={`w-100 mt-3 mb-3 d-flex flex-column justify-content-between align-items-start`}
        >
          <div className={`w-100 d-flex flex-column  `}>
            <span className={`w-100`}>
              <label>Name</label>
              <input
                name="name"
                className={`w-100`}
                type="text"
                placeholder="# e.g, plan-budget"
                required
                onChange={handleEvent}
                value={state["name"]}
              />
            </span>
            <span className={`w-100`}>
              <label>
                Description <span>(optional)</span>
              </label>
              <input
                name="description"
                className={`w-100`}
                type="text"
                onChange={handleEvent}
                value={state["description"]}
              />
              <label>
                <span>What's this channel about?</span>
              </label>
            </span>
          </div>
          <div
            className={`w-100 mt-10 d-flex flex-column justify-content-between align-items-start`}
          >
            <div className={`w-100 d-block ${styles.droproom__private}`}>
              <h4>Make Private</h4>
              <span className={`w-100 d-flex flex-row justify-content-between`}>
                <p className={`w-60`}>
                  When a channel is set to private, it can only be viewed or
                  joined by invitation
                </p>
                <ToggleSwitch
                  name="private"
                  onChange={handleEvent}
                  label="private"
                />
              </span>
            </div>
            <div
              className={`w-100 d-flex flex-row align-items-center ${styles.droproom__footer}`}
            >
              <span className={`w-100 d-flex align-items-center mr-10`}>
                <input className={`mr-10`} type="checkbox" />
                <label className={`${styles.label}`}>
                  Share outside your workspace
                </label>
              </span>
              {/* <GrCircleAlert /> */}
              <button type="submit"> Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default DropRoom;
