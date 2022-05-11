import React, { useState, useEffect, useCallback, useRef } from "react";
import { authAxios } from "../../Utils/Api";
import Loader from "react-loader-spinner";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import LogoCrop from "./LogoCrop";
import LogoAlert from "./LogoAlert";
import defaultAvatar from "../../assets/HNG-icon.svg";
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
  ListItem,
  CropButtons,
  CancelButton,
  Logo
} from "./workSpaceIconChange.js";

const WorkSpaceIconTab = () => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 2 / 3 });
  const [orgData, setOrgData] = useState({});
  const [updateLogo, setUpdateLogo] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState("");
  const [loader, setLoader] = useState({
    uploadLoader: false,
    removeLoader: false
  });
  const [toggle, setToggle] = useState(false);
  const organisation_id = localStorage.getItem("currentWorkspace");

  const handleIconUpload = () => {
    authAxios
      .patch(`/organisations/${organisation_id}/logo`, updateLogo)
      .then(res => {
        setLoader({ ...loader, uploadLoader: true });
        setAlertToggle(true);
      })
      .catch(error => {
        setLoader({ ...loader, uploadLoader: false });
      });
    setLoader({ ...loader, uploadLoader: true });
  };

  const handleImageSelect = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setUpdateLogo(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    authAxios
      .get(`/organizations/${organisation_id}`)
      .then(res => {
        setOrgData(res.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleLogoDelete = () => {
    setLoader({ ...loader, removeLoader: true });
    authAxios
      .patch(`/organizations/${organisation_id}/logo/delete`)
      .then(res => {})
      .catch(err => {
        console.error(err);
      });
  };

  const handleCrop = () => {
    setToggle(true);
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  }, [completedCrop]);

  return (
    <WorkSPaceLogoContainer>
      {alertToggle ? <LogoAlert /> : null}
      {!toggle ? (
        <>
          <WorkSpaceDetailContainer>
            <Logo
              src={orgData.logo_url ? orgData.logo_url : defaultAvatar}
              alt="NV"
            />
            <WorkSpaceDetail>
              <WorkSpaceName>
                {orgData.name ? orgData.name : "Loading....."}
              </WorkSpaceName>
              <WorkSpaceDescription>
                This icon will be used to identify your workspace in Zuri Chat.
              </WorkSpaceDescription>
              {/* <Button onClick={handleLogoDelete}>
                {loader.removeLoader ? (
                  <Loader type="Oval" color="#fff" height={24} width={80} />
                ) : (
                  "Remove"
                )}
              </Button> */}
            </WorkSpaceDetail>
          </WorkSpaceDetailContainer>
          <GuidelinesContainer>
            <Guidelines>
              <WorkSpaceName>Workspace Icon Guidelines</WorkSpaceName>
              <Text>
                Your workspace icon is a way for you to visually identify the{" "}
                <strong>{orgData.name ? orgData.name : "Loading...."}</strong>{" "}
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
        <>
          <WorkSpaceName>Crop Workspace Icon</WorkSpaceName>
          <ReactCrop
            crop={crop}
            Locked
            disabled={false}
            src={updateLogo}
            ref={imgRef}
            onImageLoaded={onLoad}
            onChange={c => setCrop(c)}
            onComplete={c => setCompletedCrop(c)}
          />
          <CropButtons>
            <Button>Crop Icon</Button>
            <CancelButton>Cancel</CancelButton>
          </CropButtons>
        </>
      )}
    </WorkSPaceLogoContainer>
  );
};

export default WorkSpaceIconTab;
