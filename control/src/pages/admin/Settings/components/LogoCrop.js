import React, { useState } from "react"
import ReactCrop from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import { WorkSPaceLogoContainer, WorkSpaceName, CropButtons, Button } from "./workSpaceIconChange"

const LogoCrop = ({ logo, setToggle }) => {
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 })

  const organisation_id = localStorage.getItem("currentWorkspace")

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

  const cancelUpload = () => {
    setToggle(false)
  }

  <WorkSPaceLogoContainer>
    <WorkSpaceName>Crop Workspace Icon</WorkSpaceName>
    <ReactCrop
      src={logo}
      onImageLoaded={onLoad}
      crop={crop}
      onChange={c => setCrop(c)}
      onComplete={c => setCompletedCrop(c)}
    />
    <CropButtons>
      <Button onClick={handleIconUpload}>Crop Icon</Button>
      <Button onClick={cancelUpload}>Cancel</Button>
    </CropButtons>
  </WorkSPaceLogoContainer>
}

export default LogoCrop
