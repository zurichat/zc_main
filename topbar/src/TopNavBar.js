import { useContext, useEffect } from 'react'
import { ProfileContext } from './context/ProfileModal'
import { TopbarContext } from './context/Topbar'
import { connect } from 'react-redux'
import zurichatlogo from './assets/images/Logo.svg'
import { useState } from 'react'
import styled from 'styled-components'
import { BaseInput } from './TopBarIndex'
import userAvatar from './assets/images/user.svg'
import HelpIcon from './assets/download_images/question.svg'
import HelpIcons from '@material-ui/icons/HelpOutline'
import TopbarModal from './components/TopbarModal'
import HelpModal from './components/HelpModal'
import UserForm from '../../control/src/pages/ReportFeature/User/Form'
import AdminForm from '../../control/src/pages/ReportFeature/Admin/Form'
import { authAxios } from './utils/Api'
import Profile from './components/Profile'
import styles from './styles/Topbar.module.css'

const TopNavBar = ({ userProfile: { last_name, first_name } }) => {
  const { openModal, presence, setPresence } = useContext(TopbarContext)
  const { setUser, user, userProfileImage, setOrgId, setUserProfileImage } =
    useContext(ProfileContext)
  const [organizations, setOrganizations] = useState([])
  const [search, setSearch] = useState('')
  const [helpModal, setHelpModal] = useState(false)

  useEffect(() => {
    const userdef = JSON.parse(sessionStorage.getItem('user'))

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

  let toggleStatus = null

  switch (presence) {
    case 'true':
      toggleStatus = (
        <ToggleStatus>
          <div className="activeCircle" />
        </ToggleStatus>
      )
      break
    default:
      toggleStatus = (
        <ToggleStatus>
          <div className="awayCircle" />
        </ToggleStatus>
      )
  }

  return (
    <TopNavBarBase>
      <LogoDiv>
        <a href="#">
          <Logo src={zurichatlogo} alt="zuri chat logo" />
        </a>
        {/* <LogoName>ZURI</LogoName> */}
      </LogoDiv>
      <BaseInput
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="text"
        width={7}
        error
        placeholder="Search here"
        border={'#99999933'}
      />
      {/* <HelpContainer>
        <HelpIcons onClick={() => setHelpModal(true)} />
      </HelpContainer> */}
      {/* {helpModal ? <HelpModal setHelpModal={setHelpModal} /> : ''} */}

      {/* <UserForm /> */}
      {/* <AdminForm /> */}
      <ProfileImageContainer>
        {toggleStatus}
        <img
          style={{ height: '30px', width: '30px', borderRadius: '5px' }}
          src={userProfileImage ? userProfileImage : userAvatar}
          onClick={openModal}
          role="button"
          alt="user profile avatar"
        />
      </ProfileImageContainer>

      <Profile />
      <TopbarModal />
    </TopNavBarBase>
  )
}

const mapStateToProps = state => ({
  userProfile: state
})

export default connect(mapStateToProps)(TopNavBar)

//  TopNavBar

const TopNavBarBase = styled.div`
  padding-inline-start: 1.4rem;
  padding-inline-end: 1.4rem;
  background-color: var(--bg-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  width: 100%;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    padding-inline-start: 0.3rem;
    padding-inline-end: 0.8rem;
  }
  @media (max-width: 425px) {
    padding-inline-start: 0rem;
    padding-inline-end: 0.8rem;
  }
`
const LogoDiv = styled.div`
  margin: auto 0;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 70%;
  }
`
const ProfileImageContainer = styled.div`
  position: relative;
`

const HelpContainer = styled.div`
  > .MuiSvgIcon-root {
    opacity: 0.5;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
const ToggleStatus = styled.div`
  position: absolute;
  top: 28px;
  right: -18px;
  .activeCircle {
    background-color: green;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid white;
    margin-right: 15px;
  }

  .awayCircle {
    background-color: grey;
    height: 10px;
    width: 10px;
    margin-right: 15px;
    border-radius: 50%;
    border: 1px solid white;
  }
`
