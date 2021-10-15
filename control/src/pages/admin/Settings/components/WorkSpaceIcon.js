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
} from "./workSpaceIconChange.js"

const WorkSpaceIcon = () => {
  const [orgData, setOrgData] = useState({})
  const [updateLogo, setUpdateLogo] = useState(null)
  const [toggle, setToggle] = useState(false)

  const organisation_id = localStorage.getItem("currentWorkspace")
  let token = sessionStorage.getItem("token")

  const handleIconUpload = () => {
    const formData = new FormData()
    formData.append("url", updateLogo)
    console.log(updateLogo)
    axios.patch(
        `https://api.zuri.chat/organisations/${organisation_id}/logo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        console.log(res.message)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.zuri.chat/organizations/${organisation_id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res.data)
        setOrgData(res.data.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <WorkSPaceLogoContainer>
      {toggle ? <LogoAlert /> : null}
      {alert ? (
        <>
          <WorkSpaceDetailContainer>
            <img src={orgData.logo_url} alt="NV" />
            <WorkSpaceDetail>
              <WorkSpaceName>{orgData.name}</WorkSpaceName>
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
                <strong>{orgData.name}</strong> workspace. It is used in the desktop
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
            <UploadSection>
              <WorkSpaceName>Upload a New Icon</WorkSpaceName>
              <UploadInput onChange={e => setUpdateLogo(e.target.files[0])} />
              <Button onClick={handleIconUpload}>Upload Icon</Button>
            </UploadSection>
          </GuidelinesContainer>
        </>
      ) : (
        <LogoCrop logo={updateLogo} setToggle={setToggle} />
      )}
    </WorkSPaceLogoContainer>
  )
}

export default WorkSpaceIcon
