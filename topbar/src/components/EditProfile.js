import { useRef, useState, useEffect, useContext } from 'react'
import styles from '../styles/EditProfile.module.css'
// import AddLink from './AddLink'
import ProfileModal from './ProfileModal'

import { authAxios } from '../utils/Api'

import { AiFillCamera } from 'react-icons/ai'
import avatar from '../assets/images/user.svg'
import { ProfileContext } from '../context/ProfileModal'
import Loader from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TimezoneSelect from 'react-timezone-select'
import { StyledProfileWrapper } from '../styles/StyledEditProfile'

const EditProfile = () => {
  // const imageRef = useRef(null)
  const avatarRef = useRef(null)
  const { user, orgId, userProfileImage, setUserProfileImage } =
    useContext(ProfileContext)
  const [otherLinks, setotherLinks] = useState([])
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const [links, setLinks] = useState([''])
  const [phone, setPhone] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [state, setState] = useState({
    name: user.first_name,
    display_name: user.display_name,
    pronouns: user.pronouns,
    role: user.role,
    image_url: user.image_url,
    bio: '',
    phone: user.phone,
    prefix: '',
    timezone: '',
    twitter: '',
    facebook: '',
    loading: false
  })

  const onImageUpload = () => {
    console.log(imageUrl)
    setUserProfileImage(imageUrl)
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/photo`, {
        image_url: imageUrl
      })
      .then(res => {
        console.log(res)
        toast.success('User Profile Picture Updated Successful', {
          position: 'bottom-center'
        })
        setImageUrl('')
      })
      .catch(err => {
        toast.error(err?.message, {
          position: 'bottom-center'
        })
      })
  }

  const handleUploadWithEnter = e => {
    if (e.keyCode === 13) {
      onImageUpload()
    }
  }

  let validateImageUrl = true

  if (imageUrl.length === 0) {
    validateImageUrl = true
  } else {
    validateImageUrl = false
  }

  // const handleImageChange = event => {
  //   if (imageRef.current.files[0]) {
  //     let fileReader = new FileReader()

  //     fileReader.onload = function (event) {
  //       avatarRef.current.src = event.target.result
  //       setUserProfileImage(event.target.result)
  //     }

  //     const imgUrl = fileReader.readAsDataURL(imageRef.current.files[0])

  //   }
  // }

  // useEffect(() => {

  // onImageUpload()
  // },[imageUrl])

  // This will handle the profile form submission

  //const handleFormSubmit = e => {
  //  e.preventDefault()
  //  setState({ loading: true })
  //
//
  //  const data = {
  //    name: state.name,
  //    display_name: state.display_name,
  //    email: state.email,
  //    pronouns: state.pronouns,
  //    phone: state.phone,
  //    bio: state.bio,
  //    timeZone: state.timezone
  //  }
  //}
      // socials: [state.twitter, state.facebook, ...otherLinks],
  console.log('users', user)

  const addList = () => {
    setLinks([...links, ''])
  }

  const handleLinks = (e, index) => {
    links[index] = e.target.value

    setLinks(links[index])
  }

  const handleImageChange = event => {
    setState({ loading: true })
    if (imageRef.current.files[0]) {
      let fileReader = new FileReader()

      fileReader.onload = function (event) {
        avatarRef.current.src = event.target.result
        setUserProfileImage(event.target.result)
        console.log(event.target.result)
      }

      fileReader.readAsDataURL(imageRef.current.files[0])

      const imageReader = event.target.files[0]

      const formData = new FormData()
      formData.append('image', imageReader)

      authAxios
        .patch(`/organizations/${orgId}/members/${user._id}/photo`, formData)
        .then(res => {
          console.log(res)
          setState({ loading: false })
          setUserProfileImage(res.data.data.image_url)
          toast.success('User Image Updated Successfully', {
            position: 'bottom-center'
          })
        })
        .then(res => {
          return authAxios.get(`/organizations/${orgId}/members/${user._id}/`)
        })
        .catch(err => {
          console.log(err)
          setState({ loading: false })
          toast.error(err?.message, {
            position: 'bottom-center'
          })
        })
    }
  }

  useEffect(() => {
    // handleImageChange()
  }, [userProfileImage])

  // const handleImageChange = event => {
  //   setState({ loading: true })

  //   const file = event.target.files[0]

  //   // encode the file using the FileReader API
  //   const reader = new FileReader()
  //   reader.onloadend = () => {
  //     // log to console
  //     // logs data:<type>;base64,wL2dvYWwgbW9yZ...
  //     avatarRef.current.src = reader.result
  //     setUserProfileImage(reader.result)
  //     console.log(reader.result)
  //   }
  //   reader.readAsDataURL(file)

  // let fileReader = new FileReader();

  // fileReader.onload = function (event) {
  //   avatarRef.current.src = event.target.result;
  //   console.log(event.target.result);
  // };

  // let reader = fileReader.readAsDataURL(event.target.files[0]);
  // console.log(reader)

  useEffect(() => {
    setUserProfileImage(user.image_url)
  })

  // This will handle the profile form submission

  const handleFormSubmit = e => {
    e.preventDefault()
    setState({ loading: true })

    const data = {
      first_name: state.name,
      display_name: state.display_name,
      pronouns: state.pronouns,
      phone: phone,
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
        console.log(res)
        setState({ loading: false })
        toast.success('User Profile Updated Successfully', {
          position: 'bottom-center'
        })
      })
      .catch(err => {
        console.log(err)
        setState({ loading: false })
        toast.error(err?.message, {
          position: 'bottom-center'
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
                    src={user.image_url ? user.image_url : avatar}
                    alt="profile-pic"
                    className="avatar"
                  />

                  <label htmlFor="img" className="icon-container">
                    <AiFillCamera className="icon" />
                  </label>
                </div>
                <div className="input-group ml-4 md:ml-0">
                  <label htmlFor="name" className="inputLabel">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="name"
                    defaultValue={state.name}
                    onChange={e => setState({ name: e.target.value })}
                    name="name"
                  />
                </div>
              </div>

              <div className="double-input">
                <div className="input-group">
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
                <div className="input-group">
                  <label htmlFor="pronouns" className="inputLabel">
                    Pronouns
                  </label>
                  <select
                    name="pronouns"
                    defaultValue={state.pronouns}
                    onClick={e => setState({ pronouns: e.target.value })}
                    className="select"
                    id="pronouns"
                  >
                    <option value="He/him">He/him</option>
                    <option value="She/her">She/her</option>
                  </select>
                </div>
              </div>*/

            <button onClick={handleFormSubmit} className={styles.bottomButton}>
              {state.loading ? (
                <Loader type="ThreeDots" color="#FFF" height={32} width={32} />
              ) : (
                'Save'
              )}
            </button>

            <div className={styles.px9}>
              {/* <AddLink setotherLinks={setotherLinks} /> */}
              <div className={styles.formFooter}>
                <div style={{ display: 'flex' }}>
                  <button className={styles.cancel}>Cancel</button>
                  <button onClick={handleFormSubmit} className={styles.save}>
                    {state.loading ? (
                      <Loader
                        type="ThreeDots"
                        color="#FFF"
                        height={40}
                        width={40}
                      />
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Toaster />
              <div className="input-group">
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

              <div className="input-group">
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
              </div>
              <div className="input-group">
                <label className="inputLabel">Phone Number</label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                />
              </div>
              <div className="input-group">
                <label className="inputLabel">Time Zone</label>
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                />
              </div>

              <div className="input-group">
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
              </div>
              <div className="input-group">
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
              </div>

              <div className="input-group">
                <label className="inputLabel">
                  Additional Links <span>(5 max)</span>
                </label>
                {links?.map((list, index) => (
                  <input type="text" className="input mb-3" key={index} />
                ))}

                <p className="warning" onClick={addList}>
                  Add new link
                </p>
              </div>
            </div>
            <div className="img-container">
              <div className="avatar">
                <img
                  ref={avatarRef}
                  className="img"
                  src={userProfileImage ? userProfileImage : avatar}
                  alt="profile-pic"
                />

                <input
                  ref={imageRef}
                  onChange={handleImageChange}
                  type="file"
                  hidden
                  id="img"
                />
                <label htmlFor="img" className="btns chgBtn">
                  {state.loading ? (
                    <Loader
                      type="ThreeDots"
                      color="#00B87C"
                      height={40}
                      width={40}
                    />
                  ) : (
                    'Upload Image'
                  )}
                </label>
                <button className="btns rmvBtn">Delete image</button>
              </div>
            </div>
          </div>

          <div onClick={handleFormSubmit} className="mobileButton">
            {state.loading ? (
              <Loader type="ThreeDots" color="#00B87C" height={24} width={24} />
            ) : (
              'Save'
            )}
          </div>
          <div className="button-wrapper">
            <button className="btns rmvBtn">Cancel</button>
            <button onClick={handleFormSubmit} className="btns chgBtn">
              {state.loading ? (
                <Loader
                  type="ThreeDots"
                  color="#00B87C"
                  height={40}
                  width={40}
                />
              ) : (
                'Save Changes'
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
