import { fetchUser } from './context/fetchUserDetails'
import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Sidebar.module.css'
import Dropdown from './components/Dropdown'
import EmailInviteModal from './components/EmailInvite'
import ModalComponent from './components/ModalComponent'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from 'styled-components'
import AuthInputBox from './components/AuthInputBox'
import DropDown from './components/Drop'

import newMsgIcon from './assets/images/newMsgIcon.svg'
import threadIcon from './verified-components/assets/icons/thread-icon.svg'
import dmIcon from './verified-components/assets/icons/dm-icon.svg'
import draftIcon from './verified-components/assets/icons/draft-icon.svg'
import filesIcon from './verified-components/assets/icons/files-icon.svg'
import pluginIcon from './verified-components/assets/icons/plugin-icon.svg'
import addIcon from './verified-components/assets/icons/add-icon.svg'
import shapekeyboardarrowdown from './verified-components/assets/icons/shapekeyboardarrowdown.svg'
import newmessage from './verified-components/assets/icons/newmessage.svg'
import { links } from './utils/links'
import { navigateToUrl } from 'single-spa'
import { Button } from '../../control/src/pages/createworkspace/components/WorkspaceHome'
import Channels from './components/Channels'
import { Modall } from './components/Modal'
import SkeletonLoader from './components/SkeletonLoader'
import Messages from './components/Messages'
import fetcher from './utils/fetcher'
import axios from 'axios'
import { GetUserInfo } from '@zuri/control'
import { authAxios } from './utils/Api'
import linkIcon from './assets/link.svg'

import { ChakraProvider, Spinner } from '@chakra-ui/react'

import { SubscribeToChannel } from '@zuri/control'
import { filterUrl, trimUrl } from './utils/filterurl'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Sidebar = props => {
  const [show, setShow] = useState(false)

  //for background
  const [bg, setBg] = useState(1)

  //for invite
  const [openInvite, setOpenInvite] = useState(false)

  //dialoag
  const [showDialog, setShowDialog] = useState(false)

  //Function to open dialog
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  //Invite modal
  const openInviteModal = () => setOpenInvite(true)
  const closeInviteModal = () => setOpenInvite(false)

  //Some type of query
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  //invite mail
  const [inviteEmail, setInviteEmail] = useState([])

  //organization email
  const [orgEmails, setOrgEmails] = useState([])

  //set owner
  const [owner, setOwner] = useState(false)

  //invite modal
  const [InviteSuccess, setInviteSuccess] = useState(false)

  //home modal
  const [homeModal, toggleHomeModal] = useState(false)

  //organization
  const [org, setOrg] = useState({})
  // console.log('ORGGGG', org)

  //toggle
  const toggle = () => {
    toggleHomeModal(!homeModal)
    document.removeEventListener('click', toggle)
  }

  useEffect(() => {
    if (homeModal) {
      document.addEventListener('click', toggle)
    }
  }, [homeModal])

  document.removeEventListener('click', toggle)

  let currentWorkspace = localStorage.getItem('currentWorkspace')

  //open invite
  const toggleOpenInvite = () => setOpenInvite(!openInvite)
  const setInviteEmails = emails => setInviteEmail(emails)
  const [sendLoading, setSendLoading] = useState(false)

  const [userInfo, setUserInfo] = useState({
    userId: '',
    Organizations: [],
    token: ''
  })

  //   // console.log('userinfo', userInfo)

  const [nullValue, setnullValue] = useState(0)

  const [organizationInfo, setOrganizationInfo] = useState(null)
  const [sidebarData, setSidebarData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const loaderFunc = () => {
    setIsLoading(false)
  }

  setTimeout(loaderFunc, 13000)

  let sideBarDataSize = Object.keys(sidebarData).length

  //   console.log('SidebarData', sidebarData)
  //   console.log('SidebarData Size:', sideBarDataSize)
  //   console.log('ORG INFO:', organizationInfo)

  // let user = JSON.parse(sessionStorage.getItem('user'))
  let token = sessionStorage.getItem('token')
  let user_id_session = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    //Fetch sidebar when component mounts
    fetchUser(props.dispatch)
    setnullValue(1)
    axios({
      method: 'get',
      url: `https://api.zuri.chat/organizations/${currentWorkspace}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      const org = res.data.data
      setOrg(org)
    })
  }, [])

  useEffect(() => {
    inviteVisibility()

    const fetchUser = async () => {
      const user = await GetUserInfo()
      setUserInfo({
        userId: user_id_session.id,
        token
      })
    }
    fetchUser()
  }, [])

  const getOrgDetails = () => {
    return axios({
      method: 'get',
      url: `https://api.zuri.chat/organizations/${currentWorkspace}/members`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  const inviteVisibility = () => {
    const userEmail = JSON.parse(sessionStorage.getItem('user')).email
    getOrgDetails().then(res => {
      const currentUser = res.data.data.find(user => user.email === userEmail)
      setOwner(currentUser?.role === 'owner' || currentUser?.role === 'admin')
      const existingEmails = []
      res.data.data.map(user => existingEmails.push(user.email))
      // console.log(existingEmails);
      setOrgEmails(existingEmails)
    })
  }

  //   // Invite Users
  //   // 6150542f6dc33f65ab425403
  //   // ${currentWorkspace}
  const inviteUser = async emails => {
    // console.log(currentWorkspace, token, emails)
    // console.log(...emails, 'pidoxy')
    setSendLoading(true)
    return await axios({
      method: 'post',
      url: `https://api.zuri.chat/organizations/${currentWorkspace}/send-invite`,
      data: {
        emails: [...emails]
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        // setSendLoading(false)
        setInviteSuccess(true)
        setSendLoading(false)
      })
      .catch(err => {
        setSendLoading(false)
        setInviteSuccess(false)
        console.error(err)
      })
  }

  {
    nullValue === 1 &&
      currentWorkspace &&
      userInfo.userId &&
      SubscribeToChannel(
        `${currentWorkspace}_${userInfo.userId}_sidebar`,
        ctx => {
          const websocket = ctx.data
          console.log('Websocket', websocket)
          if (websocket.event === 'sidebar_update') {
            setSidebarData({
              ...sidebarData,
              [websocket.plugin_id]: websocket.data
            })
          }
        }
      )
  }

  return (
    <div className={`container-fluid ${styles.sb__container}`}>
      <div className={`${styles.subCon1}`}>
        <div className={`row ${styles.orgDiv}`}>
          <div className={`col-12 px-3 ${styles.orgInfo}`}>
            <div onClick={toggle} className={`row p-0 ${styles.orgHeader}`}>
              <span className={`col-8 mb-0 ${styles.orgTitle}`}>
                {org.name}
              </span>
              <span className={`col-4 p-0 ${styles.sidebar__header__arrow}`}>
                <MdKeyboardArrowDown />
              </span>{' '}
              {/* <img
                className={`col-4 mx-auto ${styles.arrowDown}`}
                src={shapekeyboardarrowdown}
                alt="HNGi8"
              /> */}
            </div>
            <div className={`row ${styles.newMessage}`}>
              <img
                className={`col-3 img-fluid w-100 ${styles.newMsgIcon}`}
                src={newMsgIcon}
                alt="message"
              />
            </div>
          </div>
          <div className={`col-12 px-3 ${styles.modalContainer}`}>
            <div className={`col-12 px-3 ${styles.odalContainer}`}>
              <ModalComponent
                workSpace={org}
                isOpen={homeModal}
                toggleOpenInvite={toggleOpenInvite}
              />
            </div>

            <Modall showDialog={showDialog} closeDialog={close} />

            <Overlay isOpen={showDialog} onDismiss={close}>
              <Content aria-label="room-list">
                <CloseButton className="close-button" onClick={close}>
                  <Span aria-hidden>×</Span>
                </CloseButton>
                <AuthInputBox
                  value={query}
                  setValue={setQuery}
                  placeholder="🔍 Search for plugins"
                />
                <Wrapper>
                  {loading && <p>Loading..</p>}
                  <p>
                    {links.map((plugs, id) => {
                      return (
                        <div key={id}>
                          <Link to={plugs.href} onClick={navigateToUrl}>
                            <p>{plugs.name}</p>
                          </Link>
                        </div>
                      )
                    })}
                  </p>
                </Wrapper>
              </Content>
            </Overlay>

            <EmailInviteModal
              isOpen={openInvite}
              onDismiss={closeInviteModal}
              orgvalEmails={orgEmails}
              setInviteEmails={setInviteEmails}
              inviteUserViaMail={inviteUser}
              sendLoadin={sendLoading}
              currentWorkspace={currentWorkspace}
              invSucc={InviteSuccess}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.subCon2}`}>
        <div className={`row mt-2 ${styles.sb__item}`}>
          {owner && (
            <div
              className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
            >
              <img
                style={{ width: '10%' }}
                className={`${styles.item__img}`}
                role="button"
                onClick={openInviteModal}
                src={addIcon}
                alt="icon"
              />
              <p
                role="button"
                onClick={openInviteModal}
                className={`mb-0 ${styles.item_p}`}
              >
                Invite people to workspace
              </p>
            </div>
          )}
        </div>
        
        {/* Checks if sidebarData is fully loaded; if not it mounts the skeletonloader, if sidebarData is complete it mounts sidebar fully */}
        {isLoading ? (
          <SkeletonLoader pluginNumber={sideBarDataSize} />
        ) : (
          <>
            <div className={`row mt-2 ${styles.sb__item}`}>
              <div
                className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
              >
                <img
                  className={`${styles.item__img}`}
                  src={threadIcon}
                  alt="icon"
                />
                <p className={`mb-0 ${styles.item_p}`}>Threads</p>
              </div>
            </div>
            <div className={`row ${styles.sb__item}`}>
              <div
                className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
              >
                <img
                  className={`${styles.item__img}`}
                  src={draftIcon}
                  alt="icon"
                />
                <p className={`mb-0 ${styles.item_p}`}>Drafts</p>
              </div>
            </div>
            <div className={`row ${styles.sb__item}`}>
              <div
                className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
              >
                <img
                  className={`${styles.item__img}`}
                  src={filesIcon}
                  alt="icon"
                />
                <p className={`mb-0 ${styles.item_p}`}>Files</p>
              </div>
            </div>
            <div className={`row ${styles.sb__item}`}>
              <div
                className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
              >
                <img
                  className={`${styles.item__img}`}
                  src={pluginIcon}
                  alt="icon"
                />
                <p className={`mb-0 ${styles.item_p}`}>Plugins</p>{' '}
                <img
                  onClick={open}
                  className={`${styles.addButton}`}
                  src={addIcon}
                  alt="Add button"
                  role="button"
                />
              </div>
            </div>

            {/* <DropDown /> */}

            {/* SIDE BAR DATA */}
            {props.state.sidebar &&
              Object.keys(props.state.sidebar).map((plugin, index) => {
                return (
                  <DropDown
                    itemName={props.state.sidebar[plugin].name}
                    id={props.state.sidebar.name}
                    key={index}
                    items={props.state.sidebar[plugin]}
                  />
                  // console.log()

                  // <div key={index}>
                  //   <h5>{plugin.name}</h5>

                  //   <ul>
                  //     {plugin.joined_rooms &&
                  //       plugin.joined_rooms.map((room, index) => {
                  //         if (room.room_name !== undefined) {
                  //           return (
                  //             <li key={index}>
                  //               <a
                  //                 style={{
                  //                   marginLeft: '5px',
                  //                   color: 'red'
                  //                 }}
                  //                 href={room.room_url}
                  //                 onClick={navigateToUrl}
                  //               >
                  //                 {room.room_name}
                  //               </a>
                  //             </li>
                  //           )
                  //         }
                  //       })}
                  //   </ul>
                  // </div>
                )
              })}
          </>
        )}

        {/*
        {roomInfo.rooms !== undefined &&
                roomInfo.rooms.map(room => {
                  return (
                    <Fragment>
                      <a href={room.room_url} onClick={navigateToUrl}>
                        {room.name}
                      </a>
                    </Fragment>
                  )
                })}
        <Dropdown onAddButtonClick={open} showAddButton={true} title="Plugins">
        {sidebarData &&
          links.map((pluginLink, index) =>
            sidebarData.map(pluginName => {
              pluginLink.name === pluginName.group_name ? (
                <Fragment key={index}>
                  <a href={pluginLink.href} onClick={navigateToUrl}>
                    {pluginLink.name}
                  </a>
                </Fragment>
              ) : null
            })
          )}
      </Dropdown>
        <Dropdown onAddButtonClick={open} showAddButton={true} title="Channels">
        {channelsData &&
          channelsData.channels.map((channel, index) => (
            <Fragment key={index}>
              <span>#</span>
              {channel.name}
            </Fragment>
          ))}
          </Dropdown>
          organization === '' ? (
        <SkeletonLoader />
      ) : (
        <div>
          <Channels organization={organization} userid={id} />
          <Messages organization={organization} userid={id} />
        </div>
      )
          */}

        {/* button for adding invites */}

        {/* <Button
        style={{
          width: '80%',
          margin: '0 auto',
          marginTop: '20px',
          color: 'white'
        }}
      >
        <LinkStyled to={'/createworkspace'}>Create Workspace</LinkStyled>{' '}
      </Button> */}
      </div>
    </div>
  )
}

const LinkStyled = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  font-weight: 500;
  color: white;
`
export const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 2rem;
  z-index: 5;
  box-shadow: 0 15px 16px 0.17px rgba(0, 0, 0, 0.05);
`
export const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  margin: auto;
  flex-direction: column;
`
const Wrapper = styled.div`
  overflow-y: auto;
  padding: 1rem 0;
`
const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 15px;
  // padding: 1.2rem 1.2rem;
  width: 50px;
  height: 50px;
  color: black;
  background-color: transparent;
  border: none;
`
const Span = styled.span`
  font-size: 2.5rem;
`
const Item = styled.p`
font-family: Lato;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
display: flex;
padding:0.25rem;
& > img {
  padding: 0 1rem;
`

const ClickButton = styled.img`
  margin-left: auto;
`

const theme = {
  bgcolor: '#00b87c'
}

export default Sidebar
