import React, { useState, useEffect } from "react"
import { authAxios } from "../../Utils/Api"
import Loader from "react-loader-spinner"
import LogoCrop from "./LogoCrop"
import LogoAlert from "./LogoAlert"
import defaultAvatar from "../../assets/HNG-icon.svg"
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

const WorkSpaceIconTab = () => {
  const [orgData, setOrgData] = useState({})
  const [updateLogo, setUpdateLogo] = useState("")
  const [alertToggle, setAlertToggle] = useState(false)
  const [loader, setLoader] = useState({
    uploadLoader: false,
    removeLoader: false
  })
  const [toggle, setToggle] = useState(false)
  const organisation_id = localStorage.getItem("currentWorkspace")

  const handleIconUpload = () => {
    authAxios
      .patch(
        `https://api.zuri.chat/organisations/${organisation_id}/logo`,
        updateLogo
      )
      .then(res => {
        setLoader({ ...loader, uploadLoader: true })
        setAlertToggle(true)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.message)
        setLoader({ ...loader, uploadLoader: false })
      })
    setLoader({ ...loader, uploadLoader: true })
  }

  const handleImageSelect = e => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState == 2) {
        setUpdateLogo(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  useEffect(() => {
    authAxios
      .get(`https://api.zuri.chat/organizations/${organisation_id}`)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res.data)
        setOrgData(res.data.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const handleLogoDelete = () => {
    // eslint-disable-next-line no-console
    console.log(updateLogo)
    setLoader({ ...loader, removeLoader: true })
    authAxios
      .patch(`/organizations/${organisation_id}/logo/delete`)
      .then(res => {})
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <WorkSPaceLogoContainer>
      {alertToggle ? <LogoAlert /> : null}
      {!toggle ? (
        <>
          <WorkSpaceDetailContainer>
            <img
              src={orgData.logo_url ? orgData.logo_url : defaultAvatar}
              alt="NV"
            />
            <WorkSpaceDetail>
              <WorkSpaceName>
                {orgData.name ? orgData.name : "HNGi9 x I4G"}
              </WorkSpaceName>
              <WorkSpaceDescription>
                This icon will be used to identify your workspace in Zuri Chat.
              </WorkSpaceDescription>
              <Button onClick={handleLogoDelete}>
                {loader.removeLoader ? (
                  <Loader type="Oval" color="#fff" height={24} width={80} />
                ) : (
                  "Remove"
                )}
              </Button>
            </WorkSpaceDetail>
          </WorkSpaceDetailContainer>
          <GuidelinesContainer>
            <Guidelines>
              <WorkSpaceName>Workspace Icon Guidelines</WorkSpaceName>
              <Text>
                Your workspace icon is a way for you to visually identify the{" "}
                <strong>{orgData.name ? orgData.name : "HNGi9 x I4G"}</strong>{" "}
                workspace. It is used in the desktop and mobile apps, and on
                your workspace admin site. It’s most helpful when you’re on
                multiple Slack workspaces.
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
              <UploadInput onChange={handleImageSelect} />
              <Button onClick={handleIconUpload}>
                {loader.uploadLoader ? (
                  <Loader type="Oval" color="#fff" height={24} width={100} />
                ) : (
                  "Upload Icon"
                )}
              </Button>
            </UploadSection>
          </GuidelinesContainer>
        </>
      ) : (
        <LogoCrop
          logo={updateLogo}
          setAlertToggle={setAlertToggle}
          setToggle={setToggle}
        />
      )}
    </WorkSPaceLogoContainer>
  )
}

export default WorkSpaceIconTab
