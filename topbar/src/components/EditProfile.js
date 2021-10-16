import { useRef, useState, useEffect, useContext } from "react"
import ProfileModal from "./ProfileModal"
import { authAxios } from "../utils/Api"
import { AiFillCamera } from "react-icons/ai"
import defaultAvatar from "../assets/images/avatar_vct.svg"
import { ProfileContext } from "../context/ProfileModal"
import Loader from "react-loader-spinner"
import toast, { Toaster } from "react-hot-toast"
import { data } from "../utils/Countrycode"
import TimezoneSelect from "react-timezone-select"
import { StyledProfileWrapper } from "../styles/StyledEditProfile"
const EditProfile = () => {
  // const imageRef = useRef(null)
  const avatarRef = useRef(null)
  const {
    user,
    orgId,
    userProfileImage,
    setUserProfileImage,
    toggleModalState
  } = useContext(ProfileContext)
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const [links, setLinks] = useState([""])
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
  })
  const addList = () => {
    if (links.length < 5) {
      setLinks([...links, ""])
    }
  }
  const handleLinks = (e, index) => {
    links[index] = e.target.value
    setLinks(links[index])
  }

  //Function handling Image Upload
  const handleImageChange = event => {
    setState({ ...state, imageLoading: true })
    const [file] = event.target.files

    if (file) {
      let fileReader = new FileReader()
      fileReader.onload = function (event) {
        avatarRef.current.src = event.target.result
      }

      fileReader.readAsDataURL(file)
      const imageReader = file

      const formData = new FormData()
      formData.append("image", imageReader)
      authAxios
        .patch(
          `/organizations/${orgId}/members/${user._id}/photo/upload`,
          formData
        )
        .then(res => {
          const newUploadedImage = res.data.data
          setUserProfileImage(newUploadedImage)
          setState({ ...state, imageLoading: false })
          toast.success("User Image Updated Successfully", {
            position: "top-center"
          })
        })
        .catch(err => {
          console.error(err)
          setState({ ...state, imageLoading: false })
          toast.error(err?.message, {
            position: "top-center"
          })
        })
    }
  }
  const handleImageDelete = () => {
    setState({ ...state, imageLoading: true })
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/photo/delete`)
      .then(res => {
        setUserProfileImage(defaultAvatar)
        setState({ ...state, imageLoading: false })
        toast.success("User Image Removed Successfully", {
          position: "top-center"
        })
      })
      .catch(err => {
        console.error(err)
        setState({ ...state, imageLoading: false })
        toast.error(err?.message, {
          position: "top-center"
        })
      })
  }
  useEffect(() => {
    setUserProfileImage(user.image_url)
  }, [user])
  // This will handle the profile form submission
  const handleFormSubmit = e => {
    e.preventDefault()
    setState({ ...state, loading: true })
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
    }
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/profile`, data)
      .then(res => {
        // console.log(res)
        setState({ loading: false })
        toast.success("User Profile Updated Successfully", {
          position: "top-center"
        })
      })
      .catch(err => {
        console.error(err)
        setState({ loading: false })
        toast.error(err?.message, {
          position: "top-center"
        })
      })
  }
  return (
    <ProfileModal full title="Edit profile">
      <>
        <StyledProfileWrapper>
          <div className="grid-container">
            <div className="input-cage">
              <div className="mobileCon">
                <div className="mobileAvataeCon">
                  <img
                    ref={avatarRef}
                    src={userProfileImage ? userProfileImage : defaultAvatar}
                    alt="profile-pic"
                    className="avatar"
                  />
                  <label htmlFor="img" className="icon-container">
                    <AiFillCamera className="icon" />
                  </label>
                </div>
                <div className="input-group mal-4">
                  <label htmlFor="name" className="inputLabel">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input my-0"
                    id="name"
                    defaultValue={state.name}
                    onChange={e => setState({ name: e.target.value })}
                    name="name"
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="input-group mb-0">
                  <label htmlFor="dname" className="inputLabel">
                    Choose a Display Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="dname"
                    defaultValue={state.display_name}
                    onClick={e => setState({ display_name: e.target.value })}
                    name="dname"
                  />
                  <p className="para">
                    Please use a unique and permanent display name. If someone
                    uses your exact name, you should change it!
                  </p>
                </div>
              </div>
              <div className="input-group mb-0">
                <label htmlFor="what" className="inputLabel">
                  What you do
                </label>
                <input
                  type="text"
                  onClick={e => setState({ what: e.target.value })}
                  defaultValue={state.what}
                  className="input"
                  id="what"
                  name="what"
                />
                <p className="para">
                  Let people know what you do at <b>ZURI</b>
                </p>
              </div>
              {/* <div className="input-group">
                <label htmlFor="bio" className="inputLabel">
                  Bio
                </label>
                <textarea
                  onClick={e => setState({ bio: e.target.value })}
                  defaultValue={state.bio}
                  className="textarea"
                  name="bio"
                  id="bio"
                ></textarea>
              </div> */}
              <div className="input-group phone">
                <label className="inputLabel">Phone Number</label>
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
                          {item.dial_code}
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
                  />
                </div>
              </div>
              <div className="input-group">
                <label className="inputLabel col-12">Time Zone</label>
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                  className="col-12"
                />
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
                    <img
                      ref={avatarRef}
                      className="img"
                      src={userProfileImage ? userProfileImage : defaultAvatar}
                      alt="profile-pic"
                    />
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
                  Upload Image
                  {/* ) */}
                </label>
                <div
                  role="button"
                  className="rmvBtn mt-2"
                  onClick={handleImageDelete}
                >
                  Remove Image
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
              Cancel
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
  )
}
export default EditProfile
