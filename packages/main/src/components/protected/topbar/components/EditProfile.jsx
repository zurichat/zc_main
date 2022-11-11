import { useRef, useState, useEffect, useContext } from "react";
import ProfileModal from "./ProfileModal";
import { authAxios } from "../utils/api";
import { AiFillCamera } from "react-icons/ai";
import defaultAvatar from "../assets/images/avatar_vct.svg";
import { ProfileContext } from "../context/profile-modal.context";
import Loader from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { data } from "../utils/country-code";
import { StyledProfileWrapper } from "../styles/StyledEditProfile.styled";
import styles from "../styles/EditProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'
//for timezones
import TimezoneSelect, { allTimezones } from "react-timezone-select";

const EditProfile = () => {
  // const imageRef = useRef(null)
  const avatarRef = useRef(null);
  const {
    user,
    orgId,
    userProfileImage,
    setUserProfileImage,
    toggleModalState
  } = useContext(ProfileContext);
  //setting timezone constant
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [deletePic, setDeletePic] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [value, setValue] = useState([]);
  const [links, setLinks] = useState([""]);
  const [state, setState] = useState({
    name: user.name,
    display_name: user.display_name,
    role: user.role,
    image_url: user.image_url,
    bio: "",
    phone: user.phone,
    prefix: "",
    timezone: "",
    twitter: "",
    facebook: "",
    loading: false,
    imageLoading: false
  });
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
      fileReader.onload = function (event) {
        avatarRef.current.src = event.target.result;
      };

      fileReader.readAsDataURL(file);
      const imageReader = file;

      const formData = new FormData();
      formData.append("image", imageReader);
      formData.append("height", 512);
      formData.append("width", 512);

      authAxios
        .patch(
          `/organizations/${orgId}/members/${user._id}/photo/upload`,
          formData
        )
        .then(res => {
          const newUploadedImage = res.data.data;
          setUserProfileImage(newUploadedImage);
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
  const handleFormSubmit = e => {
    e.preventDefault();
    setState({ ...state, loading: true });
    const data = {
      name: state.name,
      display_name: state.display_name,
      phone: state.phone,
      bio: state.bio,
      timeZone: state.timezone
      // socials: [
      //   {
      //     "title": "twitter",
      //     "url": state.twitter
      //   },
      //   {
      //     "title": "facebook",
      //     "url": state.facebook
      //   },
      // ],
    };
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/profile`, data)
      .then(res => {
        // console.log(res)
        setState({ loading: false });
        toast.success("User Profile Updated Successfully", {
          position: "top-center"
        });
      })
      .catch(err => {
        console.error(err);
        setState({ loading: false });
        toast.error(err?.message, {
          position: "top-center"
        });
      });
  };
  return (
    <ProfileModal>
      _
      <div className={styles.container}>
        <div className={styles.header_flex}>
          <h2 className={styles.edit}>Edit your profile</h2>
          <div
            className={styles.button}
            onClick={toggleModalState}
            style={{ width: "15px", color: "grey" }}
          >
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.fdiv}>
            <div className="name">
              <label htmlFor="name" className={styles.f_label}>
                Full Name
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                defaultValue={state.name}
                onChange={e => setState({ name: e.target.value })}
                name="name"
              />
            </div>
            <div className="dname">
              <label htmlFor="dname" className={styles.label}>
                Choose a Display Name
              </label>
              <input
                type="text"
                className={styles.input}
                id="dname"
                defaultValue={state.display_name}
                onChange={e => setState({ display_name: e.target.value })}
                name="dname"
              />
              <p className={styles.form_p}>
                Please use a unique and permanent display name. If someone uses
                your exact name, you should change it!
              </p>
            </div>
            <div className="what_to_do">
              <label htmlFor="what" className={styles.label}>
                What you do
              </label>
              <input
                type="text"
                onChange={e => setState({ what: e.target.value })}
                defaultValue={state.what}
                className={styles.input}
                id="what"
                name="what"
              />
              <p className={styles.form_p}>
                Let people know what you do at <b>ZURI</b>
              </p>
            </div>
            <div className="timezone">
              <label className={styles.label}>Time Zone</label>
              {/*Setting up Timezone*/}
              <div className="h-20">
                <TimezoneSelect
                  className={styles.input2}
                  value={timezone}
                  onChange={setTimezone}
                />
              </div>
              <label></label>
              <PhoneInput
                className={styles.input3}
                country={"us"}
                value={state.phone}
                onChange={phone => setState({ phone })}
              />
            </div>
          </div>
          {/*2nd contassiner */}
          <div className={styles.div2}>
            <div className="img-container">
              <div className="avatar">
                <div className="avatar_container">
                  {state.imageLoading ? (
                    <Loader
                      type="Oval"
                      color="#00B87C"
                      height={24}
                      width={24}
                    />
                  ) : (
                    <div className="profile__img-wrapper">
                      <span className={styles.p_label}>Profile photo</span>
                      <div className={styles.img_container}>
                        <img
                          ref={avatarRef}
                          className={styles.img}
                          src={
                            userProfileImage ? userProfileImage : defaultAvatar
                          }
                          alt="profile-pic"
                        />
                      </div>
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
                <label htmlFor="img" className={styles.img_pick}>
                  {/* {state.loading ? (
                    <Loader
                      type="ThreeDots"
                      color="#fff"
                      height={40}
                      width={40}
                    />
                  ) : ( */}
                  Upload an Image
                  {/* ) */}
                </label>
                <div
                  role="button"
                  className={styles.img_remove}
                  onClick={handleImageDelete}
                >
                  Remove photo
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.end_flex}>
          <div className={styles.mobile} onClick={handleFormSubmit}>
            {state.loading ? (
              <Loader type="ThreeDots" color="#00B87C" height={24} width={24} />
            ) : (
              "Save"
            )}
          </div>
          <div className="button-wrapper">
            <button className={styles.cancel} onClick={toggleModalState}>
              Cancel
            </button>
            <button onClick={handleFormSubmit} className={styles.big_screen}>
              {state.loading ? (
                <Loader type="ThreeDots" color="#fff" height={40} width={40} />
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
          <Toaster />
        </div>
      </div>
    </ProfileModal>
  );
};
export default EditProfile;
