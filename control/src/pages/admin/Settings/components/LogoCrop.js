import React from "react"
import ReactCrop from "react-crop-image"
import "react-image-crop/dist/ReactCrop.css"
import { WorkSPaceLogoContainer, WorkSpaceName, CropButtons, Button } from "../styles/workSpaceIconChange.js"

const LogoCrop = ({ logo }) => {
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
      <Button>Cancel</Button>
    </CropButtons>
  </WorkSPaceLogoContainer>
}

export default LogoCrop
