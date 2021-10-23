import axios from "axios"
import { useState, useContext, useCallback, useEffect } from "react"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"
import { AiOutlineMenu } from "react-icons/ai"
import { navigateToUrl } from "single-spa"
// import Loader from 'react-loader-spinner'

// Components || Assets || Contexts
import { ProfileContext } from "./context/ProfileModal"
import { TopbarContext } from "./context/Topbar"
import { BaseInput } from "./TopBarIndex"
import { authAxios } from "./utils/Api"
import { GetUserInfo, SubscribeToChannel, themeColors } from "@zuri/utilities"

import Profile from "./components/Profile"
import { BigModal } from "./components/bigModal"
import TopSearchBar from "./components/TopSearchBar"
import TopBarSearchModal from "./components/TopBarSearchModal"
import SearchAutocomplete from "../src/components/SearchAutocomplete"
// import HelpIcon from './assets/images/help-icon.svg'
// import HelpModal from './components/HelpModal'
// import UserForm from '../../control/src/pages/ReportFeature/User/Form'
// import AdminForm from '../../control/src/pages/ReportFeature/Admin/Form'

import zurichatlogo from "./assets/images/zurilogo.svg"
import defaultAvatar from "./assets/images/avatar_vct.svg"
import TopbarModal from "./components/TopbarModal"
import styles from "../src/styles/TopNavBar.module.css"

const TopNavBar = () => {
  const theme = localStorage.getItem("theme")
  if (theme !== null || theme !== "") {
    const topBar = document.getElementById(
      "single-spa-application:@zuri/topbar"
    )
    topBar.style.backgroundColor = themeColors[theme]?.primary
  }
  const currentWorkspace = localStorage.getItem("currentWorkspace")

  const { closeModal, openModal, presence, setPresence } =
    useContext(TopbarContext)
  const { setUser, user, userProfileImage, setOrgId, setUserProfileImage } =
    useContext(ProfileContext)

  const state = useContext(TopbarContext)
  const [showModal] = state.show

  const [organizations, setOrganizations] = useState([])

  const [search, setSearch] = useState("")
  const [helpModal, setHelpModal] = useState(false)
  const [messages, setMessages] = useState("")
  const [isSearchOpen, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const onSearchSubmit = e => {
    if (e.keyCode === 13 && searchValue.length >= 1) {
      setOpenSearch(true)
    }
  }

  const onSearchChange = value => {
    setSearchValue(value)
  }

  const getLoggedInUser = async () => {
    try {
      const userInfo = await GetUserInfo()
      //Check if user id is valid and get user organization
      if (userInfo[0]._id !== "") {
        setUser(userInfo)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLoggedInUser()
    SubscribeToChannel(currentWorkspace, event => {
      const session_user = JSON.parse(sessionStorage.getItem("user"))
      if (
        event.event === "UpdateOrganizationMemberPic" ||
        event.event === "UpdateOrganizationMemberStatus" ||
        event.event === "UpdateOrganizationMemberProfile" ||
        event.event === "UpdateOrganizationMemberPresence"
      ) {
        if (event.id === session_user["id"]) {
          UpdateInfo()
        } else return
      } else return
    })
  }, [])

  useEffect(() => {
    const searchFunction = async () => {
      let organization_id = currentWorkspace
      let member_id = user[0]?._id
      axios
        .get(
          `https://dm.zuri.chat/api/v1/org/${organization_id}/members/${member_id}/messages/search?keyword=${search}`
        )
        .then(response => {
          setMessages(response.data.results)
        })
        .catch(err => {
          console.error(err)
        })
    }
    searchFunction()
  }, [search])

  useEffect(() => {
    const userdef = JSON.parse(sessionStorage.getItem("user"))

    async function getOrganizations() {
      await authAxios
        .get(`/users/${userdef.email}/organizations`)
        .then(response => {
          setOrganizations(response.data.data)
          setOrgId(response.data.data[0].id)
          authAxios
            .get(`/organizations/${response.data.data[0].id}/members`)
            .then(response => {
              setUser(
                response.data.data.find(
                  member => member.email === userdef.email
                )
              )
              return response.data.data.find(
                member => member.email === userdef.email
              )
            })
            .catch(err => {
              console.error(err.response.data)
            })
        })
        .catch(err => {
          console.error(err)
        })
    }

    getOrganizations()
  }, [setOrgId, user.image_url, setUser])

  useEffect(() => {
    UpdateInfo()
  }, [userProfileImage])

  const UpdateInfo = () => {
    GetUserInfo().then(res => {
      setUserProfileImage(res[0]?.image_url)
      setUser(res[0])
    })
  }

  let toggleStatus = null

  switch (presence) {
    case "true":
      toggleStatus = (
        <ToggleStatus>
          <div className="user-active" />
        </ToggleStatus>
      )
      break
    default:
      toggleStatus = (
        <ToggleStatus>
          <div className="user-away" />
        </ToggleStatus>
      )
  }

  const [toggleSidebar, setToggleSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  // useEffect(() => {
  //   //Handle sidebar on mobile
  //   const sidebar = document.getElementById(
  //     "single-spa-application:@zuri/sidebar"
  //   )
  //   if (toggleSidebar && window.outerWidth <= 768) {
  //     sidebar.style.display = "block"
  //   } else if (window.outerWidth > 768) {
  //     sidebar.style.display = "block"
  //   } else {
  //     sidebar.style.display = "none"
  //   }
  // }, [toggleSidebar])

  // Search autocomplete

  const [inputValue, setInputValue] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [selectedSuggestion, setSelectedSuggestion] = useState(0)
  const [displaySuggestions, setDisplaySuggestions] = useState(false)

  const suggestions = [
    "Zuri Workspace",
    "Squid Game",
    "American Gods",
    "A Game of Thrones",
    "Prince of Thorns",
    "Stephen Gbolagade",
    "The Hero of Ages",
    "Mark Essien"
  ]

  const handleSearchChange = event => {
    const value = event.target.value
    setInputValue(value)

    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredSuggestions(filteredSuggestions)
    setDisplaySuggestions(true)
  }

  const onSelectSuggestion = index => {
    setSelectedSuggestion(index)
    setInputValue(filteredSuggestions[index])
    setFilteredSuggestions([])
    setDisplaySuggestions(false)
  }
  // end search

  const [statusModal, setStatusModal] = useState(false)

  const handleEnter = e => {
    e.preventDefault()

    navigateToUrl("/search")
  }

  return (
    <>
      <div className="ps-3" style={{ width: "10%" }}>
        {/* <a href="/home"> */}
        <div className={styles["topNavBar__logo"]}>
          <img src={zurichatlogo} alt="zuri chat logo" />
        </div>
        {/* </a> */}
      </div>
      <div className="ps-3" style={{ width: "10%" }}>
        <button
          onClick={handleToggleSidebar}
          type="button"
          aria-label="hamburger-menu"
          className={styles["hamburger__menu-button"]}
        >
          <AiOutlineMenu
            style={{ fill: "#00b87c", width: "1.5em", height: "1.5em" }}
          />
        </button>
      </div>
      <div className="ms-4" style={{ width: "60%" }}>
        {/* <BaseInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          width={12}
          error
          placeholder="Search here"
          border={"#99999933"}
        /> */}
        {/* <TopSearchBar onClick={() => setShowTopSearchModal(true)} /> */}
        <TopBarSearchModal />
        {/* <div>
            <form onSubmit={handleEnter}>
              <BaseInput
                onChange={handleSearchChange}
                value={inputValue}
                type="text"
                width={12}
                error
                placeholder="Search here"
                border={"#99999933"}
              />
            </form>
        </div>
        <div>
          <SearchAutocomplete
            inputValue={inputValue}
            selectedSuggestion={selectedSuggestion}
            onSelectSuggestion={onSelectSuggestion}
            displaySuggestions={displaySuggestions}
            suggestions={filteredSuggestions}
          />
        </div> */}

        {isSearchOpen ? (
          <BigModal
            onClose={() => {
              setOpenSearch(false)
            }}
            inputValue={searchValue}
          />
        ) : null}
      </div>
      <ProfileImageContainer
        className="d-flex justify-content-end pe-3"
        style={{ width: "20%", position: "relative" }}
      >
        {toggleStatus}
        <ProfileImg
          src={userProfileImage ? userProfileImage : defaultAvatar}
          onClick={openModal}
          role="button"
          className="avatar-img"
          alt="user profile avatar"
        />
        {user?.status?.tag && (
          <>
            <div
              style={{
                position: "absolute",
                top: "0px",
                right: "50px",
                display: "flex",
                alignItems: "center",
                height: "100%",
                backgroundColor: "#fafafa",
                padding: "0px 4px",
                cursor: "pointer",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px"
              }}
              data-tip
              data-for="StatusHover"
              onClick={() => setStatusModal(!statusModal)}
            >
              <span style={{ fontSize: "16px" }}>{user?.status?.tag}</span>
            </div>
            <ReactTooltip id="StatusHover" type="dark" effect="solid">
              <span>
                {user?.status?.tag}&nbsp;&nbsp;{user?.status?.text}
              </span>
            </ReactTooltip>
          </>
        )}
      </ProfileImageContainer>

      <Profile />
      <TopbarModal statusModal={statusModal} setStatusModal={setStatusModal} />
    </>
  )
}

// const mapStateToProps = state => ({
//   userProfile: state
// })

export default TopNavBar

// Styled Components
const LogoDiv = styled.div`
  margin: auto 0;
  display: flex;
  align-items: center;
`
// const Logo = styled.img`
//   @media (min-width: 1023px) {
//     // width: 50%;
//   }
//   // @media (max-width: 768px) {
//   //   width: 60%;
//   // }
//   // @media (max-width: 425px) {
//   //   width: 80%;
//   // }
// `
const ProfileImg = styled.img`
  border-radius: 4px;
  width: 32px;
  height: 32px;
  object-fit: cover;
  @media (max-width: 1024px) {
    height: 30px;
  }
  @media (max-width: 425px) {
    // height: 22.4px;
  }
`
const ProfileImageContainer = styled.div`
  position: relative;
  /* img {
    object-fit: cover;
    border-radius: 4px;
    height: 30px;
    width: 30px;
  } */
`

const HelpContainer = styled.div`
  display: none;
  > .MuiSvgIcon-root {
    opacity: 0.5;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  @media (max-width: 425px) {
    display: none;
  }
`
const ToggleStatus = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
  .user-active {
    background-color: green;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid white;
    margin-right: 15px;
  }
  .user-away {
    background-color: grey;
    height: 10px;
    width: 10px;
    margin-right: 15px;
    border-radius: 50%;
    border: 1px solid white;
  }
`
