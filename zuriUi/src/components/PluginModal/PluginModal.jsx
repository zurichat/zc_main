import React, { useState, useEffect } from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import "@reach/tabs/styles.css"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import styled from "styled-components"
import EditTopicModal from "../Edit_Leave_Modals/EditTopicModal"
import EditDescriptionModal from "../Edit_Leave_Modals/EditDescriptionModal"
import LeaveChannelModal from "../Edit_Leave_Modals/LeaveChannelModal"
import AddMemberModal from "./AddMemberModal"
import RemoveMemberModal from "./RemoveMemberModal"
import DeleteChannel from "../delete_archive_channel/DeleteChannel"
import ArchiveChannel from "../delete_archive_channel/ArchiveChannel"
import { RiDeleteBinLine, RiDeleteBin7Fill } from "react-icons/ri"
import {
  AiOutlineUserAdd,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineStar,
  AiOutlineLock
} from "react-icons/ai"
import { ListGroup } from "react-bootstrap"
import axios from "axios"

function PluginModal({ close, showDialog, tabIndex, config }) {
  const [showEditTopicModal, setShowEditTopicModal] = useState(false)
  const [showEditDescriptionModal, setEditDescriptionModal] = useState(false)
  const [showLeaveChannelModal, setShowLeaveChannelModal] = useState(false)
  const [showDeleteChannel, setShowDeleteChannel] = useState(false)
  const [showArchiveChannel, setShowArchiveChannel] = useState(false)

  const toggleEditTopicModal = () => setShowEditTopicModal(!showEditTopicModal)
  const toggleEditDescriptionModal = () =>
    setEditDescriptionModal(!showEditDescriptionModal)
  const toggleDeleteChannel = () => setShowDeleteChannel(!showDeleteChannel)
  const toggleLeaveChannelModal = () =>
    setShowLeaveChannelModal(!showLeaveChannelModal)
  const toggleArchiveChannel = () => setShowArchiveChannel(!showArchiveChannel)

  return (
    <div className="App">
      <DialogOverlays isOpen={showDialog} onDismiss={close}>
        <DialogContents>
          <Tabs defaultIndex={tabIndex}>
            <div>
              <ModalTopic>
                <ChannelName>
                  # Announcements
                  <AiOutlineStar
                    size="24px"
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
                </ChannelName>
                <Button onClick={close}>
                  <AiOutlineClose size="20px" color="gray" />
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
                  showEditModal={showEditTopicModal}
                  toggleEditTopicModal={toggleEditTopicModal}
                  toggleEditDescriptionModal={toggleEditDescriptionModal}
                  toggleLeaveChannelModal={toggleLeaveChannelModal}
                  closeModal={close}
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
                  closeModal={close}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DialogContents>
      </DialogOverlays>
      {showEditTopicModal && (
        <EditTopicModal closeEdit={toggleEditTopicModal} />
      )}
      {showEditDescriptionModal && (
        <EditDescriptionModal closeEdit={toggleEditDescriptionModal} />
      )}
      {showLeaveChannelModal && (
        <LeaveChannelModal closeEdit={toggleLeaveChannelModal} />
      )}
      {showDeleteChannel && <DeleteChannel closeEdit={toggleDeleteChannel} />}
      {showArchiveChannel && (
        <ArchiveChannel closeEdit={toggleArchiveChannel} />
      )}
    </div>
  )
}

function AboutPanel({
  closeModal,
  toggleEditTopicModal,
  toggleEditDescriptionModal,
  toggleLeaveChannelModal
}) {
  return (
    <div style={{ margin: "0 5px" }}>
      <OverallWrapper>
        <EachSegment>
          <Topic>
            <Label>Topic</Label>
            <EditLabel
              onClick={() => {
                closeModal()
                toggleEditTopicModal()
              }}
            >
              Edit
            </EditLabel>
          </Topic>
          <Input type="text" placeholder="Add a topic" />
        </EachSegment>
        <EachSegment>
          <Description>
            <Label>Description</Label>

            <EditLabel
              onClick={() => {
                closeModal()
                toggleEditDescriptionModal()
              }}
            >
              Edit
            </EditLabel>
          </Description>
          <EditContent>Add description.</EditContent>
        </EachSegment>
        <EachSegment>
          <Label>Created By</Label>
          <FileContent>Stella on August 12,2021</FileContent>
        </EachSegment>
        <EachSegment>
          <Typography
            onClick={() => {
              closeModal()
              toggleLeaveChannelModal()
            }}
          >
            Leave Channel
          </Typography>
        </EachSegment>
      </OverallWrapper>
      <FileWrapper>
        <FileContent>Files</FileContent>
        <EditContent>
          There aren't any files to be see here right now. But there could be -
          drag and drop any file into the message pane to add it to this
          conversation.
        </EditContent>
      </FileWrapper>
      <h6>ChannelID:CD1QT4B9PGW</h6>
    </div>
  )
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
function MembersPanel({ config }) {
  const { membersList, addmembersevent, removememberevent } = config.roomInfo
  const [addModalShow, setaddModalShow] = useState(false)
  const [removeModalShow, setremoveModalShow] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [userList, setUserList] = useState([])

  const handleClose = () => {
    setaddModalShow(false)
    setremoveModalShow(false)
  }

  const handleaddModalShow = () => setaddModalShow(true)
  const handleremoveModalShow = () => setremoveModalShow(true)

  const addMembersEvent = values => {
    addmembersevent(values)
  }

  const removeMemberEvent = id => {
    removememberevent(id)
  }

  const removeMemberHandler = member => {
    setSelectedMember(member)
    handleremoveModalShow()
  }

  useEffect(() => {
    const currentWorkspace = localStorage.getItem("currentWorkspace")
    const token = sessionStorage.getItem("token")
    axios.get(`https://api.zuri.chat/organizations/${currentWorkspace}/members`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => {
        const users = r.data.data.map(item => {
          return { value: item._id, label: item.email }
        })
        setUserList(users)
      })
      .catch(e => console.log("Organization not returning members", e))
    setisLoading(true)
  }, [])

  return (
    <div>
      <AddMemberModal
        show={addModalShow}
        isLoading={isLoading}
        handleShow={handleaddModalShow}
        handleClose={handleClose}
        addMembersEvent={addMembersEvent}
        userList={userList}
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
            <MembersInput type="text" placeholder="Find members" />
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
        {membersList.map(member => (
          <ListGroup.Item key={member._id} className="d-flex w-100">
            <div>{member.email}</div>
            <div className="ms-auto" onClick={handleaddModalShow}>
              <RemoveLink onClick={() => removeMemberHandler(member)}>
                Remove
              </RemoveLink>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}
function Integration() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
    </div>
  )
}
function SettingPanel({
  closeModal,
  toggleDeleteChannel,
  toggleArchiveChannel
}) {
  return (
    <div>
      <FileWrapper>
        <FileContent>Channel name</FileContent>
        <EditContent>#Announcement</EditContent>
      </FileWrapper>
      <ChannelWrapper>
        <Channels>
          <AiOutlineLock />
          <ChannelContent>Change to Private Channel</ChannelContent>
        </Channels>
      </ChannelWrapper>
      <ChannelWrapper>
        <Channels>
          <RiDeleteBin7Fill color="red" />
          <Typography
            onClick={() => {
              closeModal()
              toggleArchiveChannel()
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
              closeModal()
              toggleDeleteChannel()
            }}
          >
            Delete this Channel
          </Typography>
        </Channels>
      </ChannelWrapper>
    </div>
  )
}
const OverallWrapper = styled.div`
  color: #b0afb0;
`
const EachSegment = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f6f6f6;
  margin-bottom: 1.11rem;
`
const Label = styled.label`
  margin-left: 20px;
  padding-top: 10px;
  color: #1d1d1d;
`
const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px 0 20px 20px;
  // background-color:#F9F9F9;
`
const Typography = styled.p`
  color: red;
  padding-left: 10px;
  font-weight: 500;
`
const FileWrapper = styled.div`
  border: 2px solid #f6f6f6;
  margin-top: 20px;
`
const FileContent = styled.h4`
  font-weight: 500;
  margin-left: 15px;
`
const MembersInput = styled.input`
  outline: none;
  width: 70%;
  padding: 10px;
  ${"" /* margin-bottom: 10px; */}
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
`
const ModalTopic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
const ChannelName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: black;
  font-weight: 700;
`
const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
const TabLists = styled(TabList)`
  margin: 20px 0;
  background-color: white;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
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
`
const UserIcon = styled.button`
  border: none;
  background-color: #e1fdf4;
  cursor: pointer;
  color: #00b87c;
  border-radius: 10px;
  padding: 2px 4px;
`
const DialogOverlays = styled(DialogOverlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const DialogContents = styled(DialogContent)`
  width: 60%;
  height: 80%;
  overflow-y: auto;
  // background-color:#F9F9F9;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f6f6f6;
    height: 5px;
  }
`
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Topic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const EditLabel = styled.h5`
  color: blue;
  margin-right: 10px;
  cursor: pointer;
`
const EditContent = styled.h4`
  max-width: 70%;
  margin-top: -5px;
  margin-left: 20px;
  color: #8b8b8b;
`
const Selection = styled.div`
  display: flex;
  align-items: center;
`
const ChannelWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #f6f6f6;
  margin-top: 20px;
`
const ChannelContent = styled.h5`
  margin-left: 10px;
`
const Channels = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`
const Options = styled.div`
  border: 2px solid #575757;
  padding: 10px;
  width: 80%;
`
const Heading = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: 500;
`
const Tag = styled.button`
  color: blue;
  background-color: #00b87c7a;
  border: none;
  outline: none;
  margin-left: 20px;
  border-radius: 5px;
`
const Subheader = styled.h4`
  font-weight: 400;
`
const Buttons = styled.button`
  padding: 5px;
  border: 2px solid #f6f6f6;
  border-radius: 5px;
`
const RemoveLink = styled.p`
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`
export default PluginModal
