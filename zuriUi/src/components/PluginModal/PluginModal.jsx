import React, { useState } from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import "@reach/tabs/styles.css"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import styled from "styled-components"
import EditTopicModal from "../Edit_Leave_Modals/EditTopicModal"
import EditDescriptionModal from "../Edit_Leave_Modals/EditDescriptionModal"
import LeaveChannelModal from "../Edit_Leave_Modals/LeaveChannelModal"
import DeleteChannel from "../delete_archive_channel/DeleteChannel"
import ArchiveChannel from "../delete_archive_channel/ArchiveChannel"
import { RiDeleteBinLine, RiDeleteBin7Fill } from "react-icons/ri"
import {
  AiOutlineUserAdd,
  AiOutlineBell,
  AiOutlineClose,
  AiOutlineStar,
  AiOutlineLock
} from "react-icons/ai"

function PluginModal() {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const [showEditTopicModal, setShowEditTopicModal] = useState(false)
  const [showEditDescriptionModal, setEditDescriptionModal] = useState(false)
  const [showLeaveChannelModal, setShowLeaveChannelModal] = useState(false)
  const [showDeleteChannel, setShowDeleteChannel] = useState(false)
  const [showArchiveChannel, setShowArchiveChannel] = useState(false)

  const toggleEditTopicModal = () => setShowEditTopicModal(!showEditTopicModal)
  const toggleEditDescriptionModal = () => setEditDescriptionModal(!showEditDescriptionModal)
  const toggleDeleteChannel = () => setShowDeleteChannel(!showDeleteChannel)
  const toggleLeaveChannelModal = () => setShowLeaveChannelModal(!showLeaveChannelModal)
  const toggleArchiveChannel = () => setShowArchiveChannel(!showArchiveChannel)

  return (
    <div className="App">
      <button onClick={open}>Show Dialog</button>
      <DialogOverlays isOpen={showDialog} onDismiss={close}>
        <DialogContents>
          <Tabs>
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
              <Select name="languages" id="lang">
                <option>Get Notifications for @ mentions</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
              </Select>
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
                <MembersPanel />
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
      {showEditTopicModal && <EditTopicModal closeEdit={toggleEditTopicModal}  />}
      {showEditDescriptionModal && <EditDescriptionModal  closeEdit={toggleEditDescriptionModal}  />}
      {showLeaveChannelModal  && <LeaveChannelModal closeEdit={toggleLeaveChannelModal}   />}
      {showDeleteChannel && <DeleteChannel closeEdit={toggleDeleteChannel}   />}
      {showArchiveChannel && <ArchiveChannel closeEdit={toggleArchiveChannel}   />}
    </div>
  )
}

function AboutPanel({ closeModal, toggleEditTopicModal, toggleEditDescriptionModal, toggleLeaveChannelModal }) {
  return (
    <div style={{ margin: "0 5px" }}>
      <OverallWrapper>
        <EachSegment>
          <Label>Topic</Label>
          <Input type="text" placeholder="Add a topic" />
          <EditLabel
              onClick={() => {
                closeModal()
                toggleEditTopicModal()
              }}
            >
              Edit
            </EditLabel>
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
          <EditContent>
            This channel is for passing major announcements on tasks and
            important information. Stay updated by always checking here.
          </EditContent>
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
          >Leave Channel</Typography>
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
function MembersPanel() {
  return (
    <div>
      <Selection>
        <AiOutlineBell
          style={{
            position: "absolute",
            marginLeft: "10px",
            marginBottom: "10px"
          }}
        />
        <MembersInput type="text" placeholder="Find members" />
      </Selection>
      <AddPeopleIcons>
        <UserIcon>
          <AiOutlineUserAdd size="30px" />
        </UserIcon>
        Add People
      </AddPeopleIcons>
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
function SettingPanel({closeModal, toggleDeleteChannel, toggleArchiveChannel}) {
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
          <Typography   onClick={() => {
            closeModal()
            toggleArchiveChannel()
          }} >Archive this Channel</Typography>
        </Channels>
      </ChannelWrapper>
      <ChannelWrapper>
        <Channels>
          <RiDeleteBinLine color="red" />
          <Typography  onClick={() => {
            closeModal()
            toggleDeleteChannel()
          }} >Delete this Channel</Typography>
        </Channels>
      </ChannelWrapper>
    </div>
  )
}
const OverallWrapper = styled.div`
  border: 1px solid gray;
  border-bottom: none;
  border-radius: 5px;
`
const EachSegment = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
`
const Label = styled.label`
  margin-left: 20px;
  padding-top: 10px;
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
  border: 1px solid gray;
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
  margin-bottom: 10px;
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
  font-weight: 500;
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
  justify-content: space-around;
  align-items: flex-start;
`
// const BorderBottom=styled.div`
//   // padding:-1em;
//   margin:-0.7em;
//   border-bottom:1px solid gray;
// `;
const AddPeopleIcons = styled.div`
  margin-top: 10px;
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
    background-color: gray;
    height: 5px;
  }
`
const Description = styled.div`
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
  color: gray;
`
const Selection = styled.div`
  display: flex;
  align-items: center;
`
const ChannelWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
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
  border: 1px solid #575757;
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
  border: 1px solid gray;
  border-radius: 5px;
`
export default PluginModal