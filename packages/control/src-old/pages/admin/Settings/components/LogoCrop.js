import React, { useState, useRef, useCallback } from "react";
import { authAxios } from "../../Utils/Api";
import ReactCrop from "react-image-crop";
import ImageCrop from "react-image-crop-component";
import "react-image-crop-component/style.css";
import "cropperjs/dist/cropper.css";
import "react-image-crop/dist/ReactCrop.css";
import {
  WorkSPaceLogoContainer,
  WorkSpaceName,
  CropButtons,
  Button,
  CancelButton
} from "./workSpaceIconChange";

const LogoCrop = ({ logo, setToggle, setAlertToggle }) => {
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState("");

  const organisation_id = localStorage.getItem("currentWorkspace");

  const cancelUpload = () => {
    setToggle(false);
  };

  const cropperRef = useRef(null);
  const onCrop = () => {
    const imageCrop = cropperRef?.current;
    const cropRef = imageCrop?.cropper;
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {},
  []);

  // const getCropData = () => {
  //   if (typeof cropper !== "undefined") {
  //     setCropData(cropper.getCroppedCanvas().toDataURL());
  //   }
  // };
  return (
    <WorkSPaceLogoContainer>
      <WorkSpaceName>Crop Workspace Icon</WorkSpaceName>
      {/* <ReactCrop src={logo} crop={crop} onChange={newCrop => setCrop(newCrop)} /> */}
      {/* <Cropper
          style={{ height: 200, width: "100%", objectFit: "contain", margin: "0 auto" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          src={logo}
          viewMode={-2}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        /> */}
      {/* <div className="crop-container">
        <Cropper
          image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
        />
      </div> */}
      <ImageCrop
        src={logo}
        setWidth={300}
        setHeight={300}
        square={false}
        resize={true}
        border={"dashed #ffffff 2px"}
        //onCrop={this.onCropped}
      />
      <CropButtons>
        <Button>Crop Icon</Button>
        <CancelButton onClick={cancelUpload}>Cancel</CancelButton>
      </CropButtons>
    </WorkSPaceLogoContainer>
  );
};

export default LogoCrop;
