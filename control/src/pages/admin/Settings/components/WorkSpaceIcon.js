import React, { useState, useEffect } from "react"
import axios from "axios"
import LogoCrop from "./LogoCrop"
import LogoAlert from "./LogoAlert"
import {
  WorkSPaceLogoContainer,
  WorkSpaceDetailContainer,
  WorkSpaceDetail,
  WorkSpaceName,
  WorkSpaceDescription,
  GuidelinesContainer,
  Guidelines,
  Text,
  UploadSection,
  Button,
  UploadInput,
  ListItems,
  ListItem
} from "../styles/workSpaceIconChange.js"

const WorkSpaceIcon = () => {
  const [icon, setIcon] = useState(null)
  const [updateLogo, setUpdateLogo] = useState(null)
  const [toggle, setToggle] = useState(false)
  const organisation_id = localStorage.getItem("currentWorkspace")

  const handleSelectFile = () => {
    const reader = new FileReader()
    reader.addEventListener("load", () => setUpdateLogo(reader.result))
    reader.readAsDataURL(updateLogo)
  }

  const handleIconUpload = () => {
    const formData = new formData()
    formData.append("file", updateLogo)
    axios
      .patch(
        `https://api.zuri.chat/organisations/${organisation_id}/logo`,
        formData
      )
      .then(res => {
        console.log(res.message)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    axios
      .get(`https://api.zuri.chat/organizations/${organisation_id}`)
      .then(res => {
        setIcon(res.data.logo_url)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <WorkSPaceLogoContainer>
      {alert ? <LogoAlert /> : null}
      {alert ? <>
        <WorkSpaceDetailContainer>
          <img src={icon} alt="Workspace" />
          <WorkSpaceDetail>
            <WorkSpaceName>NerdsVille</WorkSpaceName>
            <WorkSpaceDescription>
              This icon will be used to identify your workspace in zuri chat
            </WorkSpaceDescription>
          </WorkSpaceDetail>
        </WorkSpaceDetailContainer>
        <GuidelinesContainer>
          <Guidelines>
            <WorkSpaceName>Workspace Icon Guidelines</WorkSpaceName>
            <Text>
              Your workspace icon is a way for you to visually identify the{" "}
              <strong>NerdsVille</strong> workspace. It is used in the desktop
              and mobile apps, and on your workspace admin site. It’s most
              helpful when you’re on multiple Slack workspaces.
            </Text>
            <Text>Some tips on choosing a good icon:</Text>
            <ListItems>
              <ListItem>Use a solid background color.</ListItem>
              <ListItem>
                Use a graphical logo or image rather than text.
              </ListItem>
              <ListItem>Leave some space around your icon.</ListItem>
              <ListItem>
                Upload an image that is 132px square or larger.
              </ListItem>
            </ListItems>
          </Guidelines>
        </GuidelinesContainer>
        <UploadSection>
          <WorkSpaceName>Upload a New Icon</WorkSpaceName>
          <UploadInput onChange={e => setUpdateLogo(e.target.files[0])} />
          <Button onClick={handleSelectFile}>Submit</Button>
        </UploadSection>
      </> : <LogoCrop logo={updateLogo} /> }
      
    </WorkSPaceLogoContainer>
  )
}

export default WorkSpaceIcon
