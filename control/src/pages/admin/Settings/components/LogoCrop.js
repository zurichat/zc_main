import React, { useState } from "react"
import axios from "axios"
import ReactCrop from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import {
  WorkSPaceLogoContainer,
  WorkSpaceName,
  CropButtons,
  Button
} from "./workSpaceIconChange"

const LogoCrop = ({ logo, setToggle, setAlertToggle }) => {
  const [crop, setCrop] = useState({ unit: "%", width: 100, aspect: 16 / 9 })

  const organisation_id = localStorage.getItem("currentWorkspace")
  let token = sessionStorage.getItem("token")

  const handleIconUpload = () => {
    // axios
    //   .patch(
    //     `https://api.zuri.chat/organisations/${organisation_id}/logo`,
    //     crop,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "content-type": "multipart/form-data"
    //       }
    //     }
    //   )
    //   .then(res => {
    //     // eslint-disable-next-line no-console
    //     console.log(res.message)
    //     setAlertToggle(true)
    //   })
    //   .catch(error => {
    //     // eslint-disable-next-line no-console
    //     console.log(error.message)
    //   })
      setAlertToggle(true)
      setToggle(false)
  }

  const cancelUpload = () => {
    setToggle(false)
  }
  return (
    <WorkSPaceLogoContainer>
      <WorkSpaceName>Crop Workspace Icon</WorkSpaceName>
      <ReactCrop src={logo} crop={crop} onChange={newCrop => setCrop(newCrop)} />
      <CropButtons>
        <Button onClick={handleIconUpload}>Crop Icon</Button>
        <Button onClick={cancelUpload}>Cancel</Button>
      </CropButtons>
    </WorkSPaceLogoContainer>
  )
}

export default LogoCrop
