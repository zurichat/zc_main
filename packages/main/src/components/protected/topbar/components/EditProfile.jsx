import { useRef, useState, useEffect, useContext } from "react";
import ProfileModal from "./ProfileModal";
import TimeZones from "../constants/time-zone";
import { authAxios } from "../utils/api";
import { AiFillCamera } from "react-icons/ai";
import defaultAvatar from "../assets/images/avatar_vct.svg";
import { ProfileContext } from "../context/profile-modal.context";
import Loader from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { data } from "../utils/country-code";
import { StyledProfileWrapper } from "../styles/StyledEditProfile.styled";
import { useTranslation } from "react-i18next";
import { deleteAllUtilitiesCache } from "../../../../../../utilities/src/helpers";

const EditProfile = () => {
  // const imageRef = useRef(null)
  const { t } = useTranslation();
  const avatarRef = useRef(null);
  const {
    user,
    setUser,
    orgId,
    userProfileImage,
    setUserProfileImage,
    toggleModalState
  } = useContext(ProfileContext);
  const [deletePic, setDeletePic] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [links, setLinks] = useState([""]);
  const [state, setState] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    display_name: user.display_name,
    role: user.role,
    image_url: user.image_url,
    bio: user.bio,
    phone: user.phone,
    prefix: "",
    timezone: user.time_zone,
    twitter: "",
    facebook: "",
    loading: false,
    imageLoading: false
  });
  const [image, setimage] = useState(defaultAvatar);
  const addList = () => {
    if (links.length < 5) {
      setLinks([...links, ""]);
    }
  };
  const handleLinks = (e, index) => {
    links[index] = e.target.value;
    setLinks(links[index]);
  };

  //Function handling Image Upload
  const handleImageChange = event => {
    setState({ ...state, imageLoading: true });
    const [file] = event.target.files;

    if (file) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        if (avatarRef.current) {
          avatarRef.current.src = fileReader.result;
        }

        setUserProfileImage(fileReader.result);
        setimage(fileReader.result);
      };

      fileReader.readAsDataURL(file);
      const imageReader = file;

      let formData = new FormData();
      formData.append("image", imageReader);
      formData.append("height", 512);
      formData.append("width", 512);

      authAxios
        .patch(
          `/organizations/${orgId}/members/${user._id}/photo/upload`,
          formData
        )
        .then(res => {
          deleteAllUtilitiesCache();
          const newUploadedImage = res.data.data;
          setUserProfileImage(newUploadedImage);

          const newUserDetails = { ...user, image_url: newUploadedImage };
          setUser(newUserDetails);
          setState({ ...state, imageLoading: false });
          toast.success("User Image Updated Successfully", {
            position: "top-center"
          });
        })
        .catch(err => {
          console.error(err);
          setState({ ...state, imageLoading: false });
          toast.error(err?.message, {
            position: "top-center"
          });
        });
    }
  };
  const handleImageDelete = () => {
    setState({ ...state, imageLoading: true });
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/photo/delete`)
      .then(res => {
        setUserProfileImage(defaultAvatar);
        setState({ ...state, imageLoading: false });
        toast.success("User Image Removed Successfully", {
          position: "top-center"
        });
        setDeletePic(true);
      })
      .catch(err => {
        console.error(err);
        setState({ ...state, imageLoading: false });
        toast.error(err?.message, {
          position: "top-center"
        });
        setDeletePic(false);
      });
  };

  useEffect(() => {
    setUserProfileImage(user.image_url);
  }, [user]);
  // This will handle the profile form submission
  const handleFormSubmit = async e => {
    e.preventDefault();
    setState(prev => ({ ...prev, loading: true }));
    const data = {
      first_name: state.first_name,
      last_name: state.last_name,
      display_name: state.display_name,
      phone: state.phone,
      bio: state.bio,
      time_zone: state.timezone
    };

    try {
      const res = await authAxios.patch(
        `/organizations/${orgId}/members/${user._id}/profile`,
        data
      );
      //updating local storage
      const newUserDetails = {
        ...user,
        first_name: data.first_name,
        last_name: data.last_name,
        display_name: data.display_name,
        phone: data.phone,
        bio: data.bio,
        time_zone: data.time_zone
      };
      deleteAllUtilitiesCache();
      setUser({ ...user, newUserDetails });
      // setState({ loading: false });
      setState(prev => ({ ...prev, loading: false }));
      toast.success("User Profile Updated Successfully", {
        position: "top-center"
      });
    } catch (err) {
      // setState({ loading: false });
      setState(prev => ({ ...prev, loading: false }));
      toast.error(err?.message, {
        position: "top-center"
      });
    }
  };
  return (
    <ProfileModal scroll full title="Edit profile">
      <>
        <StyledProfileWrapper style={{ backgroundColor: "var(--bg-color)" }}>
          <div className="grid-container">
            <div className="input-cage">
              <div className="mobileCon">
                <div className="mobileAvataeCon">
                  <img
                    ref={avatarRef}
                    src={userProfileImage}
                    alt="profile-pic"
                    className="avatar"
                  />
                  <label htmlFor="img" className="icon-container">
                    <AiFillCamera className="icon" />
                  </label>
                </div>
                <div className="input-group mal-4">
                  <label
                    htmlFor="first_name"
                    className="inputLabel"
                    style={{ color: "var(--text-color-bold)" }}
                  >
                    {t("Edit_profile_firstName")}
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="first_name"
                    defaultValue={state.first_name}
                    onChange={e =>
                      setState({ ...state, first_name: e.target.value })
                    }
                    name="first_name"
                  />
                </div>
                <div className="input-group mal-4">
                  <label
                    htmlFor="last_name"
                    className="inputLabel"
                    style={{ color: "var(--text-color-bold)" }}
                  >
                    {t("Edit_profile_lastName")}
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="last_name"
                    defaultValue={state.last_name}
                    onChange={e =>
                      setState({ ...state, last_name: e.target.value })
                    }
                    name="last_name"
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="input-group mb-0">
                  <label
                    htmlFor="dname"
                    className="inputLabel"
                    style={{ color: "var(--text-color-bold)" }}
                  >
                    {t("Edit_profile_chooseDisplayName")}
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="dname"
                    defaultValue={state.display_name}
                    onChange={e =>
                      setState({ ...state, display_name: e.target.value })
                    }
                    name="dname"
                  />
                  <p
                    className="para"
                    style={{ color: "var(--text-color-gray)" }}
                  >
                    {t("Edit_profile_uniqueNameWarning")}
                  </p>
                </div>
              </div>
              <div className="input-group mb-0">
                <label
                  htmlFor="bio"
                  className="inputLabel"
                  style={{ color: "var(--text-color-bold)" }}
                >
                  {t("Edit_profile_profession")}
                </label>
                <input
                  type="text"
                  onChange={e => setState({ ...state, bio: e.target.value })}
                  defaultValue={state.bio}
                  className="input"
                  id="bio"
                  name="bio"
                />
                <p className="para" style={{ color: "var(--text-color-gray)" }}>
                  {t("Edit_profile_professionExplain")} <b>ZURI</b>
                </p>
              </div>

              <div className="input-group phone">
                <label
                  className="inputLabel"
                  style={{ color: "var(--text-color-bold)" }}
                >
                  {t("Edit_profile_phoneNumber")}
                </label>
                <div className="phone-container">
                  <select
                    onChange={e =>
                      setState({ ...state, prefix: e.target.value })
                    }
                    className="pref"
                  >
                    {
                      // country code
                      data.map((item, index) => (
                        <option key={index} value={item.dial_code}>
                          {item.code} {item.emoji}
                        </option>
                      ))
                    }
                  </select>
                  <input
                    onChange={e =>
                      setState({ ...state, phone: e.target.value })
                    }
                    className="phoneInput"
                    type="number"
                    defaultValue={state.phone}
                  />
                </div>
              </div>
              <div className="input-group timezone">
                <label
                  className="inputLabel"
                  style={{ color: "var(--text-color-bold)" }}
                >
                  {t("Edit_profile_timeZone")}
                </label>
                <div className="time-container">
                  <select
                    className="time-select"
                    defaultValue={state.timezone}
                    onChange={e =>
                      setState({ ...state, timezone: e.target.value })
                    }
                  >
                    {TimeZones.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* <div className="input-group">
                <label htmlFor="twitter" className="inputLabel">
                  Twitter
                </label>
                <input
                  type="text"
                  className="input"
                  defaultValue={state.twitter}
                  onClick={e => setState({ twitter: e.target.value })}
                  id="twitter"
                  name="twitter"
                />
              </div> */}
              {/* <div className="input-group">
                <label htmlFor="facebook" className="inputLabel">
                  Facebook
                </label>
                <input
                  defaultValue={state.facebook}
                  onClick={e => setState({ facebook: e.target.value })}
                  type="text"
                  className="input"
                  id="facebook"
                  name="facebook"
                />
              </div> */}
              <div className="input-group">
                {/* <label className="inputLabel">
                  Additional Links <span>(5 max)</span>
                </label>
                {links?.map((list, index) => (
                  <input type="text" className="input mb-3" key={index} />
                ))}

18:51
{links.length !== 5 && (
                  <p className="warning" onClick={addList}>
                    Add new link
                  </p>
                )} */}
              </div>
              {/* <button onClick={handleFormSubmit} className="btns saveBtn">
                {state.loading ? (
                  <Loader
                    type="ThreeDots"
                    color="#fff"
                    height={40}
                    width={40}
                  />
                ) : (
                  "Save Changes"
                )}
              </button> */}
            </div>
            <div className="img-container">
              <div className="avatar">
                <div className="avatar-container">
                  {state.imageLoading ? (
                    <Loader
                      type="Oval"
                      color="#00B87C"
                      height={24}
                      width={24}
                    />
                  ) : (
                    <div className="profile__img-wrapper">
                      <span className="pictureHeading">
                        {t("Edit_profile_profilePhoto")}
                      </span>
                      <img className="img" src={image} alt="profile-pic" />
                    </div>
                  )}
                </div>
                <input
                  // ref={imageRef}
                  onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                  multiple={false}
                  hidden
                  id="img"
                />
                <label htmlFor="img" className="btns chgBtn">
                  {/* {state.loading ? (
                    <Loader
                      type="ThreeDots"
                      color="#fff"
                      height={40}
                      width={40}
                    />
                  ) : ( */}
                  {t("Edit_profile_uploadImage")}
                  {/* ) */}
                </label>
                <div
                  role="button"
                  className="rmvBtn"
                  onClick={handleImageDelete}
                >
                  {t("Edit_profile_removeImage")}
                </div>
              </div>
            </div>
          </div>
          <div onClick={handleFormSubmit} className="mobileButton">
            {state.loading ? (
              <Loader type="ThreeDots" color="#00B87C" height={24} width={24} />
            ) : (
              "Save"
            )}
          </div>
          <div className="button-wrapper">
            <button className="btns cncBtn" onClick={toggleModalState}>
              {t("Edit_profile_cancel")}
            </button>
            <button onClick={handleFormSubmit} className="btns saveBtn">
              {state.loading ? (
                <Loader type="ThreeDots" color="#fff" height={40} width={40} />
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
          <Toaster />
        </StyledProfileWrapper>
      </>
    </ProfileModal>
  );
};
export default EditProfile;
