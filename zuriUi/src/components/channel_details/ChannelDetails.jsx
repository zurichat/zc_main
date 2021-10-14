import React, { useEffect, useState } from "react"
import { Tabs, Tab, TabPanels, TabPanel } from "@reach/tabs"
import "@reach/tabs/styles.css"
import "@reach/dialog/styles.css"

import { RiDeleteBinLine, RiDeleteBin7Fill } from "react-icons/ri"
import {
  AiOutlineUserAdd,
  AiOutlineBell,
  AiOutlineClose,
  AiOutlineStar,
  AiOutlineLock
} from "react-icons/ai"
import {
  AddPeopleIcons,
  Button,
  Buttons,
  ChannelContent,
  ChannelName,
  Channels,
  ChannelWrapper,
  Description,
  DialogContents,
  DialogOverlays,
  EachSegment,
  EditContent,
  EditLabel,
  FileContent,
  FileWrapper,
  Heading,
  Input,
  Label,
  MembersInput,
  ModalTopic,
  Options,
  OverallWrapper,
  Select,
  Selection,
  Subheader,
  TabLists,
  Tag,
  Typography,
  UserIcon
} from "./ChannelDetails.styled"

function ChannelDetails({ channelDetailsConfig, handleCloseChannelDetails }) {
  const { showChannelDetails = false } = channelDetailsConfig
  const [showDialog, setShowDialog] = useState(showChannelDetails)
  const close = () => {
    handleCloseChannelDetails && handleCloseChannelDetails()
  }
  useEffect(() => {
    setShowDialog(showChannelDetails)
  }, [showChannelDetails])
  return (
    <div className="App">
      <DialogOverlays isOpen={showDialog} onDismiss={close}>
        <DialogContents>
          <Tabs>
            <div>
              <ModalTopic>
                <ChannelName>
                  # Announcements{" "}
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
                <AboutPanel />
              </TabPanel>
              <TabPanel>
                <MembersPanel />
              </TabPanel>
              <TabPanel>
                <Integration />
              </TabPanel>
              <TabPanel>
                <SettingPanel />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DialogContents>
      </DialogOverlays>
    </div>
  )
}

function AboutPanel() {
  return (
    <div style={{ margin: "0 5px" }}>
      <OverallWrapper>
        <EachSegment>
          <Label>Topic</Label>
          <Input type="text" placeholder="Add a topic" />
        </EachSegment>
        <EachSegment>
          <Description>
            <Label>Description</Label>
            <EditLabel>Edit</EditLabel>
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
          <Typography>Leave Channel</Typography>
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
function SettingPanel() {
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
          <Typography>Archive this Channel</Typography>
        </Channels>
      </ChannelWrapper>
      <ChannelWrapper>
        <Channels>
          <RiDeleteBinLine color="red" />
          <Typography>Change to Private Channel</Typography>
        </Channels>
      </ChannelWrapper>
    </div>
  )
}

export default ChannelDetails
