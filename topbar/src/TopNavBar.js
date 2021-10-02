import { useContext, useEffect } from 'react'
import { ProfileContext } from './context/ProfileModal'
import { TopbarContext } from './context/Topbar'
import { connect } from 'react-redux'
import zurichatlogo from './assets/images/Logo.svg'
import { useState } from 'react'
import styled from 'styled-components'
import { BaseInput } from './TopBarIndex'
import defaultAvatar from './assets/images/avatar_vct.svg'
import HelpIcon from './assets/images/help-icon.svg'
import TopbarModal from './components/TopbarModal'
import HelpModal from './components/HelpModal'
import UserForm from '../../control/src/pages/ReportFeature/User/Form'
import AdminForm from '../../control/src/pages/ReportFeature/Admin/Form'
import { authAxios } from './utils/Api'
import Profile from './components/Profile'
import Loader from 'react-loader-spinner'
import { GetUserInfo, SubscribeToChannel } from '@zuri/control'
import axios from 'axios'
import toggleStyle from './styles/sidebartoggle.module.css'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'

const TopNavBar = ({ userProfile: { last_name, first_name } }) => {
  const { closeModal, openModal, presence, setPresence } =
    useContext(TopbarContext)
  const { setUser, user, userProfileImage, setOrgId, setUserProfileImage } =
    useContext(ProfileContext)
  const state = useContext(TopbarContext)
  const [showModal] = state.show
  const [organizations, setOrganizations] = useState([])
  const [search, setSearch] = useState('')
  const [helpModal, setHelpModal] = useState(false)
  // const [memberId, setMemberId] = useState('');
  const [messages, setMessages] = useState('')

  useEffect(() => {
    // const fetchUser = async () => {
    //   const info = await GetUserInfo()
    //   setMemberId(info[0]._id)
    // }

    // fetchUser();

    let currentWorkspace = localStorage.getItem('currentWorkspace')

    const searchFunction = async () => {
      let organization_id = `614679ee1a5607b13c00bcb7`
      let member_id = `614732f4f41cb684cc531fc9`
      // console.log(member_id, organization_id, "pim");
      // console.log(search)
      axios
        .get(
          `https://dm.zuri.chat/api/v1/org/${organization_id}/members/${member_id}/messages/search?keyword=${search}`
        )
        .then(response => {
          console.log(response.data.results[0])
          setMessages(response.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }

    searchFunction()
  }, [search])

  useEffect(() => {
    const userdef = JSON.parse(sessionStorage.getItem('user'))

    getOrganizations()

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
              console.log(err.response.data)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }

    setUserProfileImage(user.image_url)

    getOrganizations()
  }, [setOrgId, user.image_url, setUser])

  const UpdateInfo = () => {
    GetUserInfo().then(res => {
      setUserProfileImage(res['0'].image_url)
      setUser(res['0'])
    })
  }

  useEffect(() => {
    UpdateInfo()
  }, [])

  // RTC subscription
  const callbackFn = event => {
    const session_user = JSON.parse(sessionStorage.getItem('user'))
    if (
      event.event === 'UpdateOrganizationMemberPic' ||
      'UpdateOrganizationMemberStatus' ||
      'UpdateOrganizationMemberProfile' ||
      'UpdateOrganizationMemberPresence'
    ) {
      if (event.id === session_user['id']) {
        UpdateInfo()
      } else return
    } else return
  }

  const currentWorkspace = localStorage.getItem('currentWorkspace')

  SubscribeToChannel(currentWorkspace, callbackFn)

  // useEffect(() => {
  //   if (showModal===true) {
  //     document.addEventListener('click', openModal)
  //   }
  // },[showModal])

  let toggleStatus = null

  switch (presence) {
    case 'true':
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
  //Handle sidebar on mobile
  const sidebar = document.getElementById(
    'single-spa-application:@zuri/sidebar'
  )
  const zc_spa_body = document.querySelector('body')
  const sidebar_toggle = document.querySelector('#sidebar_toggle')
  const openSidebar = () => {
    sidebar.style.display = 'block'
    sidebar.style.left = '0'
    sidebar.style.width = '200px'
    sidebar_toggle.style.display = 'none'
  }

  zc_spa_body.addEventListener('click', () => {
    if (window.outerWidth <= 768) {
      if (sidebar !== null) {
        sidebar.style.display = 'none'
        sidebar_toggle.style.display = 'block'
      }
    } else {
      if (sidebar !== null) {
        sidebar.style.display = 'block'
        sidebar_toggle.style.display = 'none'
      }
    }
  })

  //Handle sidebar on mobile
  // const sidebar = document.getElementById(
  //   'single-spa-application:@zuri/sidebar'
  // // )
  // const zc_spa_body = document.querySelector('body')
  // const sidebar_toggle = document.querySelector('#sidebar_toggle')
  // const openSidebar = () => {
  //   sidebar.style.display = 'block'
  //   sidebar.style.left = '0'
  //   sidebar.style.width = '200px'
  //   sidebar_toggle.style.display = 'none'
  // }

  // zc_spa_body.addEventListener('click', () => {
  //   if (window.outerWidth <= 768) {
  //     if (sidebar !== null) {
  //       sidebar.style.display = 'none'
  //       sidebar_toggle.style.display = 'block'
  //     }
  //   } else {
  //     if (sidebar !== null) {
  //       sidebar.style.display = 'block'
  //       sidebar_toggle.style.display = 'none'
  //     }
  //   }
  // })

  return (
    <>
      <div className="ps-3" style={{ width: '20%' }}>
        {/* <a href="/home"> */}
        <Logo src={zurichatlogo} alt="zuri chat logo" />
        {/* </a> */}
        <div
          onClick={openSidebar}
          id="sidebar_toggle"
          className={toggleStyle.sidebar_toggle_icon}
          style={{
            top: '7rem'
          }}
        >
          <BsReverseLayoutTextSidebarReverse
            style={{
              margin: '0.6rem 0.6rem'
            }}
            size={18}
            fill="#fff"
          />
        </div>
      </div>
      <div className="ms-4" style={{ width: '60%' }}>
        <BaseInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          width={12}
          error
          placeholder="Search here"
          border={'#99999933'}
        />
      </div>
      <ProfileImageContainer
        className="d-flex justify-content-end pe-3"
        style={{ width: '20%' }}
      >
        {toggleStatus}
        <ProfileImg
          src={userProfileImage ? userProfileImage : defaultAvatar}
          onClick={openModal}
          role="button"
          className="avatar-img"
          alt="user profile avatar"
        />
      </ProfileImageContainer>

      <Profile />
      <TopbarModal />
    </>
  )
}

const mapStateToProps = state => ({
  userProfile: state
})

export default connect(mapStateToProps)(TopNavBar)

//  TopNavBar

const LogoDiv = styled.div`
  margin: auto 0;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  @media (min-width: 1023px) {
    // width: 50%;
  }
  // @media (max-width: 768px) {
  //   width: 60%;
  // }
  // @media (max-width: 425px) {
  //   width: 80%;
  // }
`
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
