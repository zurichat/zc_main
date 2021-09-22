import { useRef, useState, useContext } from 'react'
import ProfileModal from './ProfileModal'
// import axios from 'axios'

import { AiFillCamera } from 'react-icons/ai'
import avatar from "../assets/images/avatar.jpg";
import { ProfileContext } from '../context/ProfileModal'
import { authAxios } from '../utils/Api'
import Loader from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TimezoneSelect from 'react-timezone-select';
import { StyledProfileWrapper } from '../styles/StyledEditProfile';


const EditProfile = () => {
  const imageRef = useRef(null)
  const avatarRef = useRef(null)
  const { user, orgId } = useContext(ProfileContext)
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const [links, setLinks] = useState([""]);
  const [phone, setPhone] = useState('');
  const [state, setState] = useState({
    name: user.first_name,
    display_name: user.display_name,
    pronouns: user.pronouns,
    role: user.role,
    image_url: user.image_url,
    bio: "",
    prefix: "",
    timezone: "",
    twitter: "",
    facebook: "",
    loading: false,
  })

  console.log("users", user);

  const addList = () => {
    setLinks([...links, ""])
  }

  const handleLinks = (e, index) => {
    links[index] = e.target.value

    setLinks(links[index]);
  }

  const handleImageChange = event => {
    if (imageRef.current.files[0]) {
      let fileReader = new FileReader()

      fileReader.onload = function (event) {
        avatarRef.current.src = event.target.result
      }

      const imgUrl = fileReader.readAsDataURL(imageRef.current.files[0])

      authAxios.patch(`/organizations/${orgId}/members/${user._id}/photo`, {"image_utl": imgUrl})
        .then (res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


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
      timeZone: state.timezone,
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

    authAxios.patch(`/organizations/${orgId}/members/${user._id}/profile`, data)
      .then(res => {
        console.log(res)
        setState({ loading: false })
        toast.success("User Profile Updated Successfully", {
          position: "bottom-center"
        })
      })
      .catch(err => {
        console.log(err)
        setState({ loading: false })
        toast.error(err?.message, {
          position: "bottom-center"
        })
      }
    )
  }

  return (
    <ProfileModal full title="Edit profile">
      <>
        <StyledProfileWrapper>
          <div className="grid-container">
            <div className="input-cage">
                <div className="mobileCon">
                  <div className="mobileAvataeCon">
                    <img ref={avatarRef} src={state.image_url ? state.image_url : avatar}
                      alt="profile-pic" className="avatar"/>
                    
                    <label htmlFor="img" className="icon-container">
                      <AiFillCamera className="icon" />
                    </label>
                  </div>
                  <div className="input-group ml-4 md:ml-0">
                    <label htmlFor="name" className="inputLabel">First Name</label>
                    <input type="text" className="input" id="name" defaultValue={state.name} onChange={(e) => setState({ name: e.target.value })} name="name" />
                  </div>
                </div>

              <div className="double-input">
                <div className="input-group">
                  <label htmlFor="dname" className="inputLabel">Choose a Display Name</label>
                  <input type="text" className="input" id="dname" defaultValue={state.display_name} onClick={(e) => setState({ display_name: e.target.value })} name="dname" />
                  <p className="para">Please use a unique and permanent display name. If someone uses your exact name, you should change it!</p>
                </div>
                <div className="input-group">
                  <label htmlFor="pronouns" className="inputLabel">Pronouns</label>
                  <select name="pronouns" defaultValue={state.pronouns} onClick={(e) => setState({ pronouns: e.target.value })} className="select" id="pronouns">
                    <option value="He/him">He/him</option>
                    <option value="She/her">She/her</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="what" className="inputLabel">What you do</label>
                <input type="text" onClick={(e) => setState({ what: e.target.value })} defaultValue={state.what} className="input" id="what" name="what" />
                <p className="para">Let people know what you do at <b>ZURI</b></p>
              </div>

              <div className="input-group">
                <label htmlFor="bio" className="inputLabel">Bio</label>
                <textarea onClick={(e) => setState({ bio: e.target.value })} defaultValue={state.bio} className="textarea" name="bio" id="bio"></textarea>
              </div>
              <div className="input-group">
                <label className="inputLabel">Phone Number</label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}/>
              </div>
              <div className="input-group">
                <label className="inputLabel">Time Zone</label>
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                />
              </div>

              <div className="input-group">
                <label htmlFor="twitter" className="inputLabel">Twitter</label>
                <input type="text" className="input" defaultValue={state.twitter} onClick={(e) => setState({ twitter: e.target.value })} id="twitter" name="twitter" />
              </div>
              <div className="input-group">
                <label htmlFor="facebook" className="inputLabel">Facebook</label>
                <input defaultValue={state.facebook} onClick={(e) => setState({ facebook: e.target.value })} type="text" className="input" id="facebook" name="facebook" />
              </div>

              <div className="input-group">
                <label className="inputLabel">Additional Links <span>(5 max)</span></label>
                {
                  links?.map((list, index) => (
                    <input type="text" className="input mb-3" key={index} />
                  ))
                }

                <p className="warning" onClick={addList}>Add new link</p>
              </div>
            </div>
            <div className="img-container">
              <div className="avatar">
                <img
                  ref={avatarRef}
                  className="img"
                  src={state.image_url ? state.image_url : avatar}
                  alt="profile-pic"
                />

                <input ref={imageRef} onChange={handleImageChange} type="file" hidden id="img" />
                <label htmlFor="img" className="btns chgBtn">Upload an image</label>
                <button className="btns rmvBtn">Delete image</button>
              </div>
            </div>
          </div>

          <div onClick={handleFormSubmit} className="mobileButton">
          {state.loading ? 
              <Loader
                type="ThreeDots"
                color="#00B87C"
                height={24}
                width={24}
              /> : "Save"}
          </div>
          <div className="button-wrapper">
            <button className="btns rmvBtn">Cancel</button>
            <button onClick={handleFormSubmit} className="btns chgBtn">{state.loading ? 
              <Loader
                type="ThreeDots"
                color="#00B87C"
                height={40}
                width={40}
              /> : "Save Changes"}
            </button>
          </div>
          <Toaster/>
        </StyledProfileWrapper>
      </>
    </ProfileModal>
  )
}

export default EditProfile