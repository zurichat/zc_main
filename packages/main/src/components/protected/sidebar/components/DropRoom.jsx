import React, { useState, useEffect } from "react";
import styles from "../styles/Drop.module.css";
import ToggleSwitch from "./ToggleSwitch";
import { BsToggleOff } from "react-icons/bs";
import GrCircleAlert, { GrOrganization } from "react-icons/gr";
import axios from "axios";
const DropRoom = props => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const id = user.id;
  const dateCreated = user.created_at;
  // const org = JSON.parse(sessionStorage.getItem("organisations"));
  // const organisations = [...org];
  const [currentWorkspace, setCurrentWorkspace] = useState(
    localStorage.getItem("currentWorkspace")
  );
  const token = id.token;
  const [roomMembers, setRoomMembers] = useState({});
  const [reciever, setReciever] = useState("");
  const [orgMembers, setOrgMembers] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [getCurrentworkspace, setGetCurrentWorkspace] = useState(
    () => JSON.parse(sessionStorage.getItem("organisations"))[0]
  );

  const org_id = getCurrentworkspace.id;

  const room_id = sessionStorage.getItem("currentRoom");

  const fetchOrgUsers = async () => {
    try {
      const response = await axios.get(
        `https://api.zuri.chat//organizations/${org_id}/members/`
      );
      setOrgMembers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createRoom = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    // // const r2 = await axios.get("https://chat.zuri.chat/api/v1/ping");
    // console.log(r2.data);
    const postData = {
      room_name: "string",
      room_type: "DM",
      room_members: {
        [id]: {
          role: "admin",
          starred: false,
          closed: false
        },
        [reciever]: {
          role: "member",
          starred: false,
          closed: false
        }
      },
      created_at: Date(),
      is_private: false,
      is_archived: false
    };

    const response = await axios.post(
      `https://chat.zuri.chat/api/v1/org/${org_id}/members/${id}/rooms`,
      postData
    );
  };

  const [formState, setFromState] = useState({
    description: "",
    name: "",
    makeChannelPrivate: false,
    share: false,
    type: "CHANNEL"
  });

  const { description, name, makeChannelPrivate, share } = formState;

  const handleOnChange = (e, type) => {
    setFromState({
      ...formState,
      [type]: e.target.value
    });
    // console.log(e.target.value);
  };

  useEffect(() => {
    async function handleFetchAwait() {
      let response = await fetch(
        `https://chat.zuri.chat/api/v1/org/${org_id}/rooms/${room_id}/members`
      );
      let data = await response.json();
      return data;
    }

    handleFetchAwait().then(data => {
      setRoomMembers(data.data);
    });
  }, []);

  useEffect(async () => {
    await fetchOrgUsers();
  }, []);

  const createChannel = e => {
    setIsCreating(true);
    e.preventDefault();
    const member_id = getCurrentworkspace.member_id;

    formState.is_private = formState.makeChannelPrivate;
    formState.room_type = formState.type;
    formState.room_name = formState.name;
    formState.room_members = roomMembers;

    delete formState.makeChannelPrivate;
    delete formState.share;
    delete formState.type;
    delete formState.name;

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState),
      mode: "cors"
    };

    fetch(
      `https://chat.zuri.chat/api/v1/org/${org_id}/members/${member_id}/rooms`,
      requestOptions
    )
      .then(() => {
        props.setTrigger(false);
      })
      .catch(e => console.log(e))
      .finally(() => {
        setIsCreating(false);
      });
  };
  return props.data.inEffect ? (
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
          <h1 className={`dispay-1`}>Create a {props.data.caller}</h1>
          <h1
            onClick={() =>
              props.setData({
                inEffect: false,
                caller: ""
              })
            }
          >
            x
          </h1>
        </div>
        {props.data.caller === "channels" ? (
          <>
            <p className={`w-100 d-flex flex-wrap align-items-start `}>
              Channels are where your team communcicates. They're best when
              organized around a topic -- #marketing, for example.
            </p>
            <form
              action=""
              className={`w-100 mt-3 mb-3 d-flex flex-column justify-content-between align-items-start`}
            >
              <div className={`w-100 d-flex flex-column  `}>
                <span className={`w-100`}>
                  <label>Name</label>
                  <input
                    className={`w-100`}
                    text="text"
                    placeholder="# e.g, plan-budget"
                    value={name}
                    onChange={e => handleOnChange(e, "name")}
                    required
                  />
                </span>
                <span className={`w-100`}>
                  <label>
                    Description <span>(optional)</span>
                  </label>
                  <input
                    className={`w-100`}
                    type="text"
                    value={description}
                    onChange={e => handleOnChange(e, "description")}
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
                  <span
                    className={`w-100 d-flex flex-row justify-content-between`}
                  >
                    <p className={`w-60`}>
                      When a channel is set to private, it can only be viewed or
                      joined by invitation
                    </p>
                    <ToggleSwitch
                      label="Accept"
                      value={makeChannelPrivate}
                      onChange={() => {
                        setFromState({
                          ...formState,
                          makeChannelPrivate: !makeChannelPrivate
                        });
                      }}
                    />
                  </span>
                </div>
                <div
                  className={`w-100 d-flex flex-row align-items-center ${styles.droproom__footer}`}
                >
                  <span className={`w-100 d-flex align-items-center mr-10`}>
                    <input
                      className={`mr-10`}
                      type="checkbox"
                      value={share}
                      onChange={() => {
                        setFromState({
                          ...formState,
                          share: !share
                        });
                      }}
                    />
                    <label className={`${styles.label}`}>
                      Share outside your workspace
                    </label>
                  </span>
                  {/* <GrCircleAlert /> */}
                  {isCreating === true ? (
                    <div className="text-center">
                      <div
                        className="spinner-border"
                        style={{
                          width: "3rem",
                          height: "3rem",
                          color: "#7ed5af"
                        }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={e => {
                        createChannel(e);
                      }}
                    >
                      {" "}
                      Create
                    </button>
                  )}
                </div>
              </div>
            </form>
          </>
        ) : props.data.caller === "direct_messages" ? (
          <>
            <form
              action=""
              className={`w-100 mt-3 mb-3 d-flex flex-column justify-content-between align-items-start`}
            >
              <div className={`w-100 d-flex flex-column  `}>
                <span className={`w-100`}>
                  <label>Reciever email</label>
                  <input
                    className={`w-100`}
                    text="text"
                    placeholder="# e.g, plan-budget"
                    value={reciever}
                    onChange={e => {
                      setReciever(e.target.value);
                    }}
                    required
                  />
                </span>
                <div className={styles.selectList}>
                  {orgMembers.map(item => (
                    <div
                      key={item._id}
                      className={styles.selectItem}
                      onClick={() => {
                        setReciever(item._id);
                        console.log(reciever);
                      }}
                    >
                      {item.user_name}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={async e => {
                  e.preventDefault();
                  await createRoom();
                }}
              >
                {" "}
                Create
              </button>
            </form>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default DropRoom;
