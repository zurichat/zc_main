import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { BASE_API_URL } from "@zuri/utilities";
import "@reach/tabs/styles.css";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import styled from "styled-components";
import EditTopicModal from "./components/EditTopicModal";
import EditDescriptionModal from "./components/EditDescriptionModal";
import LeaveChannelModal from "./components/LeaveChannelModal";
import AddMemberModal from "./components/AddMemberModal";
import RemoveMemberModal from "./components/RemoveMemberModal";
import DeleteChannel from "./components/DeleteChannel";
import ArchiveChannel from "./components/ArchiveChannel";
import PrivateChannel from "./components/PrivateChannel";
import { RiDeleteBinLine, RiDeleteBin7Fill } from "react-icons/ri";
import {
  AiOutlineUserAdd,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineStar,
  AiOutlineLock
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { ListGroup } from "react-bootstrap";

import axios from "axios";
import { StyledTabs, ErrorModal } from "./MessageRoomDetailsDialog.styled";
import { getSampleMemberList } from "~/utils/samples";
import FileList from "./components/FileList";

// getting edited topic from local storage
const getEditedTopicFromLS = () => {
  let editedTopics = localStorage.getItem("editedTopic");
  return editedTopics ? JSON.parse(editedTopics) : "";
};

function MessageRoomDetailsDialog({
  close,
  showDialog,
  config,
  tabIndex,
  channelName
}) {
  const [showEditTopicModal, setShowEditTopicModal] = useState(false);
  const [addTopic, setAddTopic] = useState(getEditedTopicFromLS());
  const [activeIndex, setActiveIndex] = useState(0);
  const [showEditDescriptionModal, setEditDescriptionModal] = useState(false);
  const [showLeaveChannelModal, setShowLeaveChannelModal] = useState(false);
  const [showDeleteChannel, setShowDeleteChannel] = useState(false);
  const [showArchiveChannel, setShowArchiveChannel] = useState(false);
  const [showPrivateChannel, setShowPrivateChannel] = useState(false);
  const toggleEditTopicModal = () => {
    setShowEditTopicModal(!showEditTopicModal);
  };
  const toggleEditDescriptionModal = () =>
    setEditDescriptionModal(!showEditDescriptionModal);
  const toggleDeleteChannel = () => setShowDeleteChannel(!showDeleteChannel);
  const toggleLeaveChannelModal = () =>
    setShowLeaveChannelModal(!showLeaveChannelModal);
  const toggleArchiveChannel = () => setShowArchiveChannel(!showArchiveChannel);
  const togglePrivateChannel = () => setShowPrivateChannel(prev => !prev);

  const [description, setDescription] = useState("");
  const [roomData, setRoomData] = useState(null);
  const [errorModal, setErrorModal] = useState("");

  const handleDescriptionUpdate = update => {
    setDescription(update.description);
  };

  useEffect(() => {
    let isFetched = true;

    const org_id = localStorage.getItem("currentWorkspace");
    const room_id = sessionStorage.getItem("currentRoom");

    const fetchData = async () => {
      await axios
        .get(`https://chat.zuri.chat/api/v1/org/${org_id}/rooms/${room_id}`)
        .then(res => {
          setRoomData(res.data);
          setDescription(res.data.data.description);
        })
        .catch(e => {
          setErrorModal("Could not fetch description");
        });
    };

    if (isFetched) {
      fetchData();
    }

    const timer = setTimeout(() => {
      setErrorModal("");
    }, [4000]);

    return () => {
      isFetched = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      {errorModal && <ErrorModal>{errorModal}</ErrorModal>}
      <DialogOverlays isOpen={showDialog} onDismiss={close}>
        <DialogContents style={{ padding: "1rem 2rem" }}>
          <StyledTabs
            defaultIndex={tabIndex}
            onChange={activeIndex => setActiveIndex(activeIndex)}
          >
            <div>
              <ModalTopic>
                <ChannelName>
                  {channelName}
                  <AiOutlineStar
                    size="24px"
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
                </ChannelName>
                <Button onClick={close}>
                  <AiOutlineClose size="20px" />
                </Button>
              </ModalTopic>
            </div>
            <TabLists>
              <Tab>About</Tab>
              <Tab>Members</Tab>
              <Tab>Integrations</Tab>
              <Tab>Settings</Tab>
            </TabLists>
            {/* <BorderBottom/> */}
            <TabPanels>
              <TabPanel>
                <AboutPanel
                  addTopic={addTopic}
                  showEditModal={showEditTopicModal}
                  toggleEditTopicModal={() => {
                    setShowEditTopicModal(true);
                  }}
                  toggleEditDescriptionModal={toggleEditDescriptionModal}
                  toggleLeaveChannelModal={toggleLeaveChannelModal}
                  closeModal={close}
                  channelDescription={description}
                />
              </TabPanel>
              <TabPanel>
                <MembersPanel config={config} />
              </TabPanel>
              <TabPanel>
                <Integration />
              </TabPanel>
              <TabPanel>
                <SettingPanel
                  toggleDeleteChannel={toggleDeleteChannel}
                  toggleArchiveChannel={toggleArchiveChannel}
                  togglePrivateChannel={togglePrivateChannel}
                  closeModal={close}
                />
              </TabPanel>
            </TabPanels>
          </StyledTabs>
          {showEditDescriptionModal && (
            <EditDescriptionModal
              closeEdit={toggleEditDescriptionModal}
              roomData={roomData}
              handleDescriptionUpdate={handleDescriptionUpdate}
              description={description}
            />
          )}

          {showEditTopicModal && (
            <EditTopicModal
              addTopic={addTopic}
              setAddTopic={setAddTopic}
              closeEdit={toggleEditTopicModal}
            />
          )}
          {showLeaveChannelModal && (
            <LeaveChannelModal
              closeEdit={toggleLeaveChannelModal}
              closeAll={close}
            />
          )}
          {showDeleteChannel && (
            <DeleteChannel closeEdit={toggleDeleteChannel} />
          )}
          {showPrivateChannel && (
            <PrivateChannel closeEdit={togglePrivateChannel} />
          )}
          {showArchiveChannel && (
            <ArchiveChannel closeEdit={toggleArchiveChannel} />
          )}
        </DialogContents>
      </DialogOverlays>
    </div>
  );
}

function AboutPanel({
  closeModal,
  toggleEditTopicModal,
  toggleEditDescriptionModal,
  toggleLeaveChannelModal,
  channelDescription,
  addTopic
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ margin: "0 5px" }}>
      <OverallWrapper>
        <EachSegment>
          <Topic>
            <Label>Topic</Label>
            <EditLabel
              onClick={() => {
                toggleEditTopicModal();
                // closeModal()
              }}
            >
              Edit
            </EditLabel>
          </Topic>
          <EditContent>
            {addTopic !== "" ? addTopic : "Add a Topic"}
          </EditContent>
        </EachSegment>
        <EachSegment>
          <Description>
            <Label>Description</Label>

            <EditLabel
              onClick={() => {
                // closeModal()
                toggleEditDescriptionModal();
              }}
            >
              Edit
            </EditLabel>
          </Description>
          <EditContent>
            {channelDescription ? channelDescription : "Add description."}
          </EditContent>
        </EachSegment>
        <EachSegment>
          <Label>Created By</Label>
          <FileContent>Stella on August 12,2021</FileContent>
        </EachSegment>
        <EachSegment>
          <Typography
            onClick={() => {
              // closeModal()
              toggleLeaveChannelModal();
            }}
          >
            Leave Channel
          </Typography>
        </EachSegment>
      </OverallWrapper>
      <FileWrapper>
        <FileContent>Files</FileContent>
        <EditContent>
          <FileList showMore={showMore} setShowMore={setShowMore} />
          <button
            onClick={() => {
              setShowMore(true);
            }}
          >
            Show More
          </button>
        </EditContent>
      </FileWrapper>
      <h6 style={{ fontSize: "15px", fontWeight: "500" }}>
        ChannelID:CD1QT4B9PGW
      </h6>
    </div>
  );
}
// function useTabsContext():{
//   focusedIndex:number; id:string; selectedIndex:number
// }
//   function CustomTab({index,...props}){
//       const {selectedIndex,focusedIndex}=useTabsContext();
//       return(
//         <Tab style={{
//           borderBottom:`4px solid ${selectedIndex === index
//           ?"red" : focusedIndex === index ? "blue" : "black"}`,
//         }}
//         {...props}/>
//       )
//   }

export function MembersPanel({ config }) {
  const dummyHeaderConfig = {
    roomInfo: {
      membersList: getSampleMemberList(),

      addmembersevent: values => {
        console.warn("a plugin added ", values);
      },
      removememberevent: id => {
        console.warn("a plugin deleted ", id);
      }
    }
  };

  const roomData =
    "roomInfo" in config ? config.roomInfo : dummyHeaderConfig.roomInfo;

  const {
    membersList: roomMembers,
    addmembersevent,
    removememberevent
  } = roomData;

  const [addModalShow, setaddModalShow] = useState(false);
  const [removeModalShow, setremoveModalShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [memberData, setMemberData] = useState([]);
  const [membersList, setMembersList] = useState(roomMembers);
  const [isSearching, setIsSearching] = useState(false);

  const handleClose = () => {
    setaddModalShow(false);
    setremoveModalShow(false);
  };

  const handleaddModalShow = () => setaddModalShow(true);
  const handleremoveModalShow = () => setremoveModalShow(true);

  const addMembersEvent = values => {
    const channelNewMembers = values.map(item => {
      return { _id: item.value, email: item.label };
    });
    const newEntries = [...membersList, ...channelNewMembers];
    setMembersList(newEntries);
    addmembersevent(values);
  };

  const removeMemberEvent = id => {
    // const payload = Object.fromEntries(
    //   Object.entries(userList).filter((users) => users.value !== id)
    // );

    // console.log(payload)

    console.log(id);

    setUserList(
      userList.filter(users => {
        return users.value !== id;
      })
    );

    const theUserData = JSON.parse(localStorage.getItem("userData"));

    const theOrganizarionId = theUserData.user.org_id;

    const theAdminId = theUserData.user._id;

    //to get the current room , which we have in the session storage

    let ourCurrentRoom = sessionStorage.getItem("currentRoom");

    console.log(ourCurrentRoom);

    const token = sessionStorage.getItem("token");

    axios.patch(
      `https://chat.zuri.chat/api/v1/org/${theOrganizarionId}/rooms/${ourCurrentRoom}/members/${id}?admin_id=${theAdminId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
    removememberevent(id);
  };

  const removeMemberHandler = member => {
    setSelectedMember(member);
    handleremoveModalShow();
  };

  useEffect(() => {
    const currentWorkspace = localStorage.getItem("currentWorkspace");
    const token = sessionStorage.getItem("token");
    setisLoading(true);
    axios
      .get(`${BASE_API_URL}/organizations/${currentWorkspace}/members`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(r => {
        const users = r.data.data.map(item => {
          return { value: item._id, label: item.email };
        });
        const channelUserIds = membersList.map(member => member._id);
        setMemberData(r.data.data);
        setUserList(users);
        // check and ensuring that members of a channel don't show up in the searchList
        const memberSet = new Set(membersList);
        const newList = userList.filter(user => !memberSet.has(user));
        setSearchList(newList);
        setisLoading(false);
      })
      .catch(() => {
        setisLoading(false);
      });
  }, [membersList]);
  //
  // Search member filter
  function customFilter(objList, text) {
    if (undefined === text || text === "") return objList;
    return objList.filter(product => {
      let flag;
      for (let prop in product) {
        flag = false;
        flag = product[prop]?.toString()?.indexOf(text) > -1;
        if (flag) break;
      }
      return flag;
    });
  }
  //
  // Search Member Event Returning the value
  const onSearchMember = event => {
    setIsSearching(true);
    let query = event.target.value;
    let searchResult = customFilter(memberData, query);
    const users = searchResult.map(item => {
      return { value: item._id, label: item.email };
    });
    const channelUserIds = membersList.map(member => member._id);
    // check to see if the user is already in a channel
    const checkedUsers = users.map(user => {
      if (channelUserIds.includes(user.value)) {
        return {
          ...user,
          label: `${user.label} (Already in this channel)`,
          isDisabled: true
        };
      }
      return user;
    });
    setUserList(checkedUsers);
    setIsSearching(false);
  };

  //
  //
  return (
    <div>
      <AddMemberModal
        show={addModalShow}
        isLoading={isLoading}
        handleShow={handleaddModalShow}
        handleClose={handleClose}
        addMembersEvent={addMembersEvent}
        searchList={searchList}
      />

      {selectedMember && (
        <RemoveMemberModal
          show={removeModalShow}
          handleShow={handleremoveModalShow}
          handleClose={handleClose}
          removeMemberEvent={removeMemberEvent}
          member={selectedMember}
        />
      )}
      {/* <Card> */}
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Selection>
            <AiOutlineSearch
              style={{
                position: "absolute",
                marginLeft: "10px"
              }}
            />
            <MembersInput
              type="text"
              onChange={() => onSearchMember(event)}
              placeholder="Find members"
            />
          </Selection>
        </ListGroup.Item>
        <ListGroup.Item>
          <AddPeopleIcons onClick={handleaddModalShow}>
            <UserIcon className="me-3">
              <AiOutlineUserAdd size="30px" />
            </UserIcon>
            Add People
          </AddPeopleIcons>
        </ListGroup.Item>
        {isSearching ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {userList && userList.length > 0 ? (
              userList.map((member1, index) => (
                <ListGroup.Item
                  key={member1.value + index}
                  className="d-flex w-100"
                >
                  <div>{member1.label}</div>
                  <div className="ms-auto" onClick={handleremoveModalShow}>
                    <RemoveLink onClick={() => removeMemberHandler(member1)}>
                      Remove
                    </RemoveLink>
                  </div>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="d-flex w-100">
                <div>No Members</div>
              </ListGroup.Item>
            )}
          </>
        )}
      </ListGroup>
    </div>
  );
}
function Integration() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Options>
        <Heading>
          WorkFlows <Tag>PAID FEATURE</Tag>
        </Heading>
        <Subheader>
          Automate the tasks and processes unique to your team, no coding
          required.
        </Subheader>
        <Buttons>See Upgrade Options</Buttons>
      </Options>
      <Options>
        <Heading>Apps</Heading>
        <Subheader>
          Bring the tools you need into this channel to pull reports, start
          calls, file tickets and more.
        </Subheader>
        <Buttons>See Upgrade Options</Buttons>
      </Options>
      <Options>
        <Heading>Send emails to this channel</Heading> <Tag>PAID FEATURE</Tag>
        <Subheader>
          Get an email address that posts incoming emails in this channel.
        </Subheader>
        <Buttons>See Upgrade Options</Buttons>
      </Options>
    </div>
  );
}
function SettingPanel({
  closeModal,
  toggleDeleteChannel,
  toggleArchiveChannel,
  togglePrivateChannel,
  channelName
}) {
  return (
    <div>
      <FileWrapper>
        <FileContent>Channel name</FileContent>
        <EditContent>{channelName}</EditContent>
      </FileWrapper>
      <ChannelWrapper>
        <Channels>
          <AiOutlineLock />
          <ChannelContent
            onClick={() => {
              togglePrivateChannel();
            }}
          >
            Change to Private Channel
          </ChannelContent>
        </Channels>
      </ChannelWrapper>
      <ChannelWrapper>
        <Channels>
          <RiDeleteBin7Fill color="red" />
          <Typography
            onClick={() => {
              // closeModal()
              toggleArchiveChannel();
            }}
          >
            Archive this Channel
          </Typography>
        </Channels>
      </ChannelWrapper>
      <ChannelWrapper>
        <Channels>
          <RiDeleteBinLine color="red" />
          <Typography
            onClick={() => {
              // closeModal()
              toggleDeleteChannel();
            }}
          >
            Delete this Channel
          </Typography>
        </Channels>
      </ChannelWrapper>
    </div>
  );
}
const OverallWrapper = styled.div`
  color: #b0afb0;
`;
const EachSegment = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f6f6f6;
  margin-bottom: 1.11rem;
  padding: 10px 0;
`;
const Label = styled.label`
  margin-left: 20px;
  padding-top: 10px;
  color: #1d1d1d;
`;
const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px 0 20px 20px;
  // background-color:#F9F9F9;
`;
const Typography = styled.p`
  color: red;
  padding-left: 10px;
  font-weight: 500;
  font-size: 17px;
`;
const FileWrapper = styled.div`
  border: 2px solid #f6f6f6;
  margin-top: 20px;
  padding: 15px;
`;
const FileContent = styled.h4`
  font-weight: 500;
  padding-left: 20px;
`;
const MembersInput = styled.input`
  outline: none;
  width: 70%;
  padding: 10px;
  ${"" /* margin-bottom: 10px; */}
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
`;
const ModalTopic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  outline: transparent;
  border-radius: 4px;

  &:hover {
    border: 2px solid #1d1d1d;
  }
`;
const ChannelName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: black;
  font-weight: 700;
`;
// const Select = styled.select`
//   padding: 10px;
//   border-radius: 5px;
//   outline: none;
//   cursor: pointer;
// `
const TabLists = styled(TabList)`
  && {
    margin: 20px 0;
    // background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow-x: auto;
  }
`;
// const BorderBottom=styled.div`
//   // padding:-1em;
//   margin:-0.7em;
//   border-bottom:1px solid gray;
// `;
const AddPeopleIcons = styled.div`
  ${"" /* margin-top: 10px; */}
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const UserIcon = styled.button`
  border: none;
  background-color: #e1fdf4;
  cursor: pointer;
  color: #00b87c;
  border-radius: 10px;
  padding: 2px 4px;
`;
const DialogOverlays = styled(DialogOverlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 5;
`;
const DialogContents = styled(DialogContent)`
  // && - increased the specificity over "@reach/dialog/styles.css"
  && {
    width: clamp(350px, 90vw, 950px);
    height: 80%;
    overflow-y: auto;
    // background-color:#F9F9F9;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #f6f6f6;
      height: 5px;
    }
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Topic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EditLabel = styled.h5`
  color: blue;
  margin-right: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
`;
const EditContent = styled.h4`
  max-width: 70%;
  margin-top: 5px;
  color: #8b8b8b;
  padding-left: 20px;

  button {
    border: none;
    color: #00b87c;
    margin-top: 10px;
  }
`;
const Selection = styled.div`
  display: flex;
  align-items: center;
`;
const ChannelWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #f6f6f6;
  margin-top: 20px;
  padding: 10px 0;
`;
const ChannelContent = styled.h5`
  margin-left: 10px;
`;
const Channels = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
export const Options = styled.div`
  border: 1px solid #f6f6f6;
  padding: 15px;
  width: 90%;
  margin-top: 10px;
  @media (max-width: 350px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Heading = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: 700;
  color: #1d1d1d;
`;
const Tag = styled.button`
  color: #032b70;
  background-color: #e8f0ff;
  border: none;
  outline: none;
  margin-left: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 8px;
`;
const Subheader = styled.h4`
  font-weight: 400;
  color: #b0afb0;
`;
const Buttons = styled.button`
  padding: 5px;
  border: 2px solid #b0afb0;
  color: #b0afb0;
  border-radius: 5px;
`;
const RemoveLink = styled.p`
  color: blue;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export default MessageRoomDetailsDialog;
