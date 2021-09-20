import { useRef, useState, useEffect, useContext } from 'react'
import styles from '../styles/EditProfile.module.css'
import AddLink from './AddLink'
import ProfileModal from './ProfileModal'
// import axios from 'axios'

import { AiFillCamera } from 'react-icons/ai'
import userAvatar from '../assets/user.svg'
import { ProfileContext } from '../context/ProfileModal'
import { authAxios } from '../util/Api'
import Loader from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast'

const EditProfile = () => {
  // const imageRef = useRef(null)
  const avatarRef = useRef(null)
  const { user, orgId, userProfileImage, setUserProfileImage } =
    useContext(ProfileContext)
  const [otherLinks, setotherLinks] = useState([])
  const [imageUrl, setImageUrl] = useState('')
  const [state, setState] = useState({
    name: user.name,
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
      })
      .catch(err => {
        toast.error(err?.message, {
          position: 'bottom-center'
        })
      })
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

  const handleFormSubmit = e => {
    e.preventDefault()
    setState({ loading: true })

    const data = {
      name: state.name,
      display_name: state.display_name,
      email: state.email,
      pronouns: state.pronouns,
      phone: state.phone,
      bio: state.bio,
      timeZone: state.timezone
      // socials: [state.twitter, state.facebook, ...otherLinks],
    }

    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/profile`, data)
      .then(res => {
        console.log(res)
        setState({ loading: false })
        toast.success('User Profile Updated Successful', {
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
        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <div className={styles.profileMain}>
              <div className={styles.sectionA}>
                <form>
                  <div className={styles.displayNameDesktop}>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                      onChange={e =>
                        setState({ ...state, name: e.target.value })
                      }
                      value={state.name}
                      defaultValue={state.name}
                    />
                  </div>
                  <div
                    style={{ display: 'flex' }}
                    className={styles.formWrapper}
                  >
                    <div className={styles.formMargin}>
                      <label>Choose a Display Name</label>
                      <input
                        type="text"
                        name="displayName"
                        className={styles.formInput}
                        onChange={e =>
                          setState({ ...state, display_name: e.target.value })
                        }
                        value={state.display_name}
                      />
                      <div className={styles.subText}>
                        Please use a unique and permanent display name. If
                        someone uses your exact name, you should change it!
                      </div>
                    </div>

                    <div className={styles.sectionB}>
                      <label className="label">Pronouns</label>
                      <select
                        name="pronouns"
                        className={styles.formInput}
                        onChange={e =>
                          setState({ ...state, pronouns: e.target.value })
                        }
                        value={state.pronouns}
                      >
                        <option value="he/him">He/him</option>
                        <option value="she/her">She/her</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label">What you do</label>
                    <input
                      type="text"
                      name="todo"
                      className={styles.formInput}
                      onChange={e =>
                        setState({ ...state, role: e.target.value })
                      }
                      value={state.role}
                    />
                  </div>
                  <div className={styles.subText}>
                    Let people know what you do at{' '}
                    <span className={styles.fontBold}>ZURI</span>
                  </div>
                  <div className={styles.mt}>
                    <label className="label">Bio</label>
                    <textarea
                      rows="3"
                      className={styles.formInput2}
                      name="bio"
                      onChange={e =>
                        setState({ ...state, bio: e.target.value })
                      }
                      value={state.bio}
                      defaultValue={user.bio}
                    />
                  </div>

                  <div className="my-3">
                    <label className="my-2">Phone Number</label>
                    <div className={styles.phoneNumber}>
                      <span>
                        <select
                          name="pre"
                          onChange={e =>
                            setState({ ...state, prefix: e.target.value })
                          }
                          value={state.prefix}
                        >
                          <option value="number">+234</option>
                        </select>
                      </span>
                      <span>
                        <input
                          type="text"
                          name="number"
                          className="focus:outline-none"
                          onChange={e =>
                            setState({ ...state, phone: e.target.value })
                          }
                          value={state.phone}
                        />
                      </span>
                    </div>
                  </div>
                  <label className="label my-2">Timezones</label>
                  <div>
                    <select
                      className={styles.timeZone}
                      onChange={e =>
                        setState({ ...state, timezone: e.target.value })
                      }
                      value={state.timezone}
                    >
                      <option value="timezone">
                        (UTC+01:00) West Central Africa
                      </option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <label>Twitter</label>
                    <input
                      type="text"
                      name="twitter"
                      onChange={e =>
                        setState({ ...state, twitter: e.target.value })
                      }
                      value={state.twitter}
                      className={styles.formInput}
                    />
                  </div>
                  <div className="mt-3">
                    <label>Facebook</label>
                    <input
                      type="text"
                      name="facebook"
                      onChange={e =>
                        setState({ ...state, facebook: e.target.value })
                      }
                      value={state.facebook}
                      className={styles.formInput}
                    />
                  </div>
                </form>
              </div>
              <div className={styles.sectionB}>
                <div className={styles.subContainer}>
                  <div className={styles.profilePic}>
                    <label htmlFor="img" className={styles.camera}>
                      <AiFillCamera className={styles.cameraIcon} />
                    </label>

                    <div className={styles.avatar}>
                      <img
                        ref={avatarRef}
                        src={userProfileImage ? userProfileImage : userAvatar}
                        alt="profile-pic"
                      />
                    </div>
                    <div className={styles.username}>
                      <div style={{ width: '100%' }}>
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          className={styles.formInput}
                          onChange={e =>
                            setState({ ...state, name: e.target.value })
                          }
                          value={state.name}
                          defaultValue={user.name}
                        />
                      </div>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Image Url"
                    className={styles.imageUpload}
                    value={imageUrl}
                    onChange={e => {
                      setImageUrl(e.target.value)
                    }}
                  />

                  <div className={styles.profileFunc}>
                    <div className={styles.subContainer}>
                      <div className={styles.mxAuto}>
                        <button
                          type="button"
                          onClick={onImageUpload}
                          disabled={validateImageUrl}
                          className={styles.save}
                          style={{
                            cursor: validateImageUrl ? 'not-allowed' : 'pointer'
                          }}
                        >
                          Upload an Image
                        </button>
                        {/* <input
                          ref={imageRef}
                          onChange={handleImageChange}
                          type="file"
                          hidden
                          id="img"
                        /> */}
                      </div>
                      <button className={styles.deleteImage}>
                        Delete image
                      </button>
                    </div>
                    <div className={styles.tagContainer}>
                      <p className={styles.setTag}>Set yourself as</p>
                      <button className={styles.away}>Away</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={handleFormSubmit} className={styles.bottomButton}>
              {state.loading ? (
                <Loader type="ThreeDots" color="#FFF" height={32} width={32} />
              ) : (
                'Save'
              )}
            </button>

            <div className={styles.px9}>
              <AddLink setotherLinks={setotherLinks} />
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
          </div>
        </div>
      </>
    </ProfileModal>
  )
}

export default EditProfile
