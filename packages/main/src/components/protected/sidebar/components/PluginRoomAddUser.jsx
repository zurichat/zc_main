import React, { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import { BASE_API_URL } from "@zuri/utilities";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import axios from "axios";
import styles from "../styles/PluginRoomAddUser.module.css";
// import { LOADING_SOURCE_CODE } from 'single-spa'

const PluginRoomAddUser = ({ isOpen, isClosed, room_id }) => {
  // const location = useLocation()
  // console.log(window.location.href)
  const url = window.location.href;
  // const channelName =url.split("https://zuri.chat/").pop())
  const channelName = url.split("http://localhost:9000/").pop();
  const baseUrl = "zuri.chat";

  // console.log("channelName" ,channelName.split("http://localhost:9000/").pop());
  // console.log("channelName" ,channelName.split("https://zuri.chat/").pop());

  const [openAddUser, setOpenAddUser] = useState(false);
  const [member, setMember] = useState([]);
  const [displayMember, setDisplayMember] = useState([]);
  // const [selectMember, setSelectMember] = useState([])
  const [input, setInput] = useState("");
  const OpenAddUserModal = () => setOpenAddUser(true);
  const closeAddUserModal = () => setOpenAddUser(false);

  let token = sessionStorage.getItem("token");

  let currentWorkspace = localStorage.getItem("currentWorkspace");
  //   console.log('currentWorkspace', currentWorkspace);

  const headers = {
    Authorization: `Bearer ${token}`
  };
  // console.log('currentWorkspace', currentWorkspace);
  const userNameHandler = e => {
    // e.tagret.value
    setInput(e.target.value);
    const regex = new RegExp(`${input}`, "i");
    setDisplayMember([
      ...member.filter(({ user_name }) => user_name.match(regex))
    ]);
    // console.log("displayMember.length", displayMember.length)
    // console.log(members)
  };

  const getOrgMembers = async () => {
    try {
      const res = await axios.get(
        `${BASE_API_URL}/organizations/${currentWorkspace}/members`,
        headers
      );

      const memberArr = res.data.data;
      setMember(memberArr);
    } catch (err) {
      console.error(err);
    }
  };
  // getOrgMembers()
  useEffect(() => {
    getOrgMembers();
  }, []);
  // console.log('member', member);

  /// To Add User to a Room
  const addUser = () => {
    let obj = member.find(o => o.user_name === input);
    // console.log(obj);

    // Fetch User Data and Store in an Object
    const userData = {
      user_name: obj.user_name,
      "-id": obj._id
    };
    // console.log('OBJuserData', {userData});
    // console.log('userData', userData);

    // Send UserData to the Backend
    axios
      .post(
        `https://companyfiles.zuri.chat/api/v1/rooms/add_to_room`,
        userData,
        { headers }
      )
      .then(res => (res.data = alert("User Added")))
      .catch(error => {
        // element.parentElement.innerHTML = `Error: ${error.message}`;
        console.error("There was an error!", error);
      });

    // const { user_name, _id } = input
    // // axios.post(`https://music.zuri.chat/music/api/v1/add_to_room`, {
    // axios
    //   .post(
    //     `http://${channelName}.${baseUrl}/v1/${workspace}/channels/${roomId}/members/`,
    //     {
    //       user_name,
    //       _id
    //     }
    //   )
    //   .then(response => {
    //     addUser(response.data)
    //   })
  };

  return (
    <div>
      {/* <div isOpen={openAddUser} onClick={OpenAddUserModal}>
			<button>Open</button>
		</div> */}
      {/* <Overlay isOpen={openAddUser}> */}
      <Overlay isOpen={isOpen}>
        <div
          className={`container-fluid bg-white rounded  ${styles.addUserModal}`}
        >
          {/* <div className={`row px-2 py-3`} onClick={closeAddUserModal}> */}
          <div
            className={`row px-2 py-3`}
            onClick={() => {
              isClosed(!isOpen);
            }}
          >
            <div
              className={`col-12 d-flex align-item-center justify-content-end`}
            >
              <span className={`text-danger`}>
                <AiOutlineClose />
              </span>
            </div>
          </div>
          <div className={`row p-2`}>
            <div className={`col-12 py-2`}>
              <h6 className={`text-bold`}>Add People</h6>
            </div>
            <div className={`col-12 py-2`}>
              <label className={`py-2`} htmlFor="AddUser">
                Add:
              </label>
              <input
                type="text"
                placeholder="Enter a User Name"
                onChange={userNameHandler}
                value={input}
                // onChange={e => setInput(e.target.value)}
                // onInput={e => setInput(e.target.value)}
                id="AddUser"
                name="AddUser"
                className={`form-control py-2`}
              />
              {input && (
                <div className={`bg-white ${styles.displayMember}`}>
                  {member.length < 1 && `Loading...`}

                  {displayMember.length > 0 &&
                    displayMember.map((item, index) => (
                      <p
                        onClick={() => {
                          setInput(item.user_name);
                        }}
                        key={item._id}
                        className={`px-3 ${styles.userDisplay}`}
                      >
                        {item.user_name}
                      </p>
                    ))}
                </div>
              )}
            </div>
            <div
              className={`col-12 my-3 d-flex align-items center justify-end`}
            >
              <button
                onClick={addUser}
                // onClick={() => setAddUser()}
                style={{ color: "white", backgroundColor: "#00B87C" }}
                type="button"
                disabled={input === "" ? true : false}
                className={`btn btn-green px-4 py-2 ms-auto `}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </Overlay>
    </div>
  );
};

//STYLED COMPONENTS
export const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  z-index: 999999;
  overflow-y: scroll;
`;

export default PluginRoomAddUser;
