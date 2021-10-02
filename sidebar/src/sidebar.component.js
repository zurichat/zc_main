// import { useState, useEffect, useContext } from 'react'
// import { fetchUser } from './utils/fetchUserDetails'

// const Sidebar = props => {
//   const nn = fetchUser()
//   // console.log(userInfo, 'sidebar new', organizationInfo)

//   useEffect(() => {
//     console.log(nn, 'test test')
//   })

//   return <div>Welcome</div>
// }

// export default Sidebar

import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Sidebar.module.css'
import Dropdown from './components/Dropdown'
import Modal from './components/InviteModal'
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
import { SubscribeToChannel } from '@zuri/control'
import { filterUrl, trimUrl } from './utils/filterurl'
import { Text } from '../../topbar/src/context/Language'
import { useTranslation } from 'react-i18next'

const Sidebar = props => {
  const [show, setShow] = useState(false)
  const [openInvite, setOpenInvite] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const openInviteModal = () => setOpenInvite(true)
  const closeInviteModal = () => setOpenInvite(false)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')
  const [inviteEmail, setInviteEmail] = useState('')
  const [owner, setOwner] = useState(false)
  const [InviteSuccess, setInviteSuccess] = useState(false)
  const [homeModal, toggleHomeModal] = useState(false)
  const toggle = () => toggleHomeModal(!homeModal)

  let currentWorkspace = localStorage.getItem('currentWorkspace')
  console.log(currentWorkspace)

  const [userInfo, setUserInfo] = useState({
    userId: '',
    Organizations: [],
    token: ''
  })

  const [nullValue, setnullValue] = useState(0)

  const [organizationInfo, setOrganizationInfo] = useState(null)
  const [sidebarData, setSidebarData] = useState({})
  const [channelData, setChannelData] = useState({})
  const [pluginName, setPluginName] = useState([])

  // let user = JSON.parse(sessionStorage.getItem('user'))

  console.log(pluginName, 'Plugin names')

  let token = sessionStorage.getItem('token')
  let user_id_session = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    inviteVisibility()

    const fetchUser = async () => {
      const user = await GetUserInfo()
      setUserInfo({
        userId: user_id_session.id,
        token
      })

      if (userInfo._userId !== '') {
        const org_url = `/organizations/${currentWorkspace}/plugins`
        authAxios
          .get(org_url)
          .then(res => setOrganizationInfo(res.data.data))
          .catch(err => console.log(err))
      } else {
        console.log('Checking')
      }
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
    })
  }

  // Invite Users

  const inviteUser = async () => {
    return axios({
      method: 'post',
      url: `https://api.zuri.chat/organizations/${currentWorkspace}/send-invite`,
      data: {
        emails: [inviteEmail]
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log('invite', res)
        setInviteSuccess(true)
      })
      .catch(err => {
        console.error(err)
      })
  }

  console.log(currentWorkspace, 'workspace')
  console.log(userInfo.userId, 'user id')

  useEffect(() => {
    setnullValue(1)
  }, [])

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
            console.log('check', websocket.sidebar_url)

            const sidebarUrl = websocket.sidebar_url

            const trimmedUrl = trimUrl(sidebarUrl)
            const pluginKey = filterUrl(sidebarUrl)

            axios
              .get(
                `${
                  trimmedUrl.includes('https://') ||
                  trimmedUrl.includes('http://')
                    ? trimmedUrl
                    : `https://${trimmedUrl}`
                }?org=${currentWorkspace}&user=${userInfo.userId}`
              )
              .then(res => {
                try {
                  const validPlugin = res.data
                  if (validPlugin.name !== undefined) {
                    if (typeof validPlugin === 'object') {
                      setSidebarData({
                        ...sidebarData,
                        [pluginKey]: validPlugin
                      })
                    }
                  }
                } catch (err) {
                  console.log(err, 'Invalid plugin')
                }
              })
              .catch(console.log)
          }
        }
      )
  }
  useEffect(() => {
    {
      organizationInfo &&
        organizationInfo.map(pluginData => {
          const { plugin } = pluginData

          const sidebarUrl = plugin.sidebar_url
          const trimmedUrl = trimUrl(sidebarUrl)
          const pluginKey = filterUrl(plugin.sidebar_url)

          axios
            .get(
              `${
                trimmedUrl.includes('https://') ||
                trimmedUrl.includes('http://')
                  ? trimmedUrl
                  : `https://${trimmedUrl}`
              }?org=${currentWorkspace}&user=${userInfo.userId}`
            )
            .then(res => {
              try {
                const validPlugin = res.data
                if (validPlugin.name !== undefined) {
                  if (typeof validPlugin === 'object') {
                    setSidebarData(prev => {
                      return { ...prev, [pluginKey]: validPlugin }
                    })
                  }
                }
              } catch (err) {
                console.log(err, 'Invalid plugin')
              }
            })
            .catch(console.log)
        })
    }
  }, [organizationInfo])
  const { t, i18n } = useTranslation()
  useEffect(() => {
    setInterval(() => {
      i18n.changeLanguage(localStorage.getItem('rcml-lang'))
    }, 500)
  }, [i18n.language])

  return (
    <div className={`container-fluid ${styles.sb__container}`}>
      <div className={`${styles.subCon1}`}>
        <div className={`row ${styles.orgDiv}`}>
          <div className={`col-12 px-3 ${styles.orgInfo}`}>
            <div onClick={toggle} className={`row p-0 ${styles.orgHeader}`}>
              <p className={`col-6 mb-0 ${styles.orgTitle}`}>HNGi8</p>
              <img
                className={`col-6 mx-auto ${styles.arrowDown}`}
                src={shapekeyboardarrowdown}
                alt="HNGi8"
              />
            </div>
            <div className={`row ${styles.newMessage}`}>
              <img
                className={`col-3 img-fluid w-100 ${styles.newMsgIcon}`}
                src={newMsgIcon}
                alt="message"
              />
            </div>
          </div>
          <div className={`col-12 px-3 ${styles.odalContainer}`}>
            <ModalComponent isOpen={homeModal} />
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
                {loading && <p>{t('loading')}</p>}
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
          <Overlay isOpen={openInvite} onDismiss={closeInviteModal}>
            <Content
              style={{ width: '55%', height: '55%' }}
              aria-label="room-list"
            >
              <CloseButton className="close-button" onClick={closeInviteModal}>
                <Span aria-hidden>×</Span>
              </CloseButton>
              <div>
                <h3>{t('invitePeople')}</h3>
              </div>
              {InviteSuccess && (
                <div className={`alert alert-success`}>
                  {t('sent')} {inviteEmail}
                </div>
              )}
              <div>
                <label for="email_invite">To:</label>
              </div>
              <Wrapper>
                <div>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    multiple
                    value={inviteEmail}
                    onChange={e => setInviteEmail(e.target.value)}
                    name="email_invite"
                    className={`pb-4 form-control`}
                  />
                </div>
                <div
                  className={`mt-5 pt-3 d-flex my-auto justify-content-between`}
                >
                  <p
                    onClick={() => {
                      window.navigator.clipboard.writeText(
                        `https://zuri.chat/invite?organization=${currentWorkspace}`
                      )
                      alert('link has been copied')
                    }}
                    className={`mb-0 align-items-center`}
                    style={{ color: '#00B87C', fontSize: '13px' }}
                  >
                    <img className={`pe-3`} src={linkIcon} />
                    {t('CopyInvite')}
                  </p>
                  <button
                    onClick={() => inviteUser()}
                    style={{ color: 'white', backgroundColor: '#00B87C' }}
                    type="button"
                    disabled={inviteEmail === '' ? true : false}
                    className={`btn my-auto `}
                  >
                    {t('Send')}
                  </button>
                </div>
              </Wrapper>
            </Content>
          </Overlay>
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
                {t('invitePeople')}
              </p>
            </div>
          )}
        </div>
        <div className={`row mt-2 ${styles.sb__item}`}>
          <div
            className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
          >
            <img
              className={`${styles.item__img}`}
              src={threadIcon}
              alt="icon"
            />
            <p className={`mb-0 ${styles.item_p}`}>{t('threads')}</p>
          </div>
        </div>
        <div className={`row ${styles.sb__item}`}>
          <div
            className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
          >
            <img className={`${styles.item__img}`} src={dmIcon} alt="icon" />
            <p className={`mb-0 ${styles.item_p}`}>{t('allDms')}</p>
          </div>
        </div>
        <div className={`row ${styles.sb__item}`}>
          <div
            className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
          >
            <img className={`${styles.item__img}`} src={draftIcon} alt="icon" />
            <p className={`mb-0 ${styles.item_p}`}>{t('drafts')}</p>
          </div>
        </div>
        <div className={`row ${styles.sb__item}`}>
          <div
            className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
          >
            <img className={`${styles.item__img}`} src={filesIcon} alt="icon" />
            <p className={`mb-0 ${styles.item_p}`}>{t('files')}</p>
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
            <p className={`mb-0 ${styles.item_p}`}>{t('plugins')}</p>
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

        {sidebarData &&
          Object.keys(sidebarData).map((plugin, index) => {
            // console.log(sidebarData[plugin].name, 'Mwana wa Africa')
            // t(sidebarData[plugin].name)
            // setPluginName(sidebarData[plugin].name)
            return (
              <DropDown
                itemName={sidebarData[plugin].name}
                id={sidebarData[plugin].name}
                key={index}
                items={sidebarData[plugin]}
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
  top: 0px;
  right: 0;
  padding: 0.5rem;
  width: 50px;
  color: red;
  background-color: transparent;
  border: none;
`
const Span = styled.span`
  font-size: 0.8rem;
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
