import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Sidebar.module.css'
import Dropdown from './components/Dropdown'
import Modal from './components/InviteModal'
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

const Sidebar = props => {
  const [show, setShow] = useState(false)

  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [userInfo, setUserInfo] = useState({
    userId: '',
    Organizations: [],
    token: ''
  })

  const [organizationInfo, setOrganizationInfo] = useState(null)
  const [sidebarData, setSidebarData] = useState([])

  // let user = JSON.parse(sessionStorage.getItem('user'))
  let token = sessionStorage.getItem('token')

  useEffect(async () => {
    const { _id, Organizations } = await GetUserInfo()
    // console.log('sidebar organization', Organization)
    setUserInfo({
      userId: _id,
      Organizations,
      token
    })

    if (_id !== '') {
      const org_url = `/organizations/${Organizations[0]}/plugins`
      console.log('sidebar url', org_url)
      authAxios
        .get(org_url)
        .then(res => setOrganizationInfo(res.data.data))
        .catch(err => console.log(err))
    } else {
      console.log('Checking')
    }
  }, [])

  useEffect(() => {
    // console.log('sidebar plugins', organizationInfo)
    {
      organizationInfo &&
        organizationInfo.map((plugin, index) => {
          const sidebarUrl = plugin.plugin.sidebar_url

          axios
            .get(
              `${
                sidebarUrl.includes('https://') ||
                sidebarUrl.includes('http://')
                  ? sidebarUrl
                  : `https://${sidebarUrl}`
              }?org=${userInfo.Organizations[0]}&user=${userInfo.userId}`
            )
            .then(res => {
              try {
                const validPlugin = res.data
                if (validPlugin.name !== undefined) {
                  if (typeof validPlugin === 'object') {
                    setSidebarData(prev => [...prev, validPlugin])
                  }
                }

                // console.log(validPlugin)
              } catch (err) {
                console.log(err, 'Invalid plugin')
              }
            })
            .catch(console.log)
        })
    }
  }, [organizationInfo])

  useEffect(() => {
    {
      sidebarData &&
        sidebarData.map((pluginName, index) => {
          console.log('Plugin', pluginName)
          // if (
          //   pluginName.data !== undefined &&
          //   pluginName.data.joined_rooms !== undefined
          // ) {
          //   const pluginInfo = {
          //     id: index,
          //     title: pluginName.data.name,
          //     rooms: pluginName.joined_rooms
          //   }
          //   // new Set(prev).add(pluginInfo)
          //   setFilteredPlugins(prev =>
          //     !prev.has(pluginInfo) ? new Set(prev).add(pluginInfo) : null
          //   )
          // } else {
          //   if (pluginName.joined_rooms !== undefined) {
          //     const pluginInfo = {
          //       id: index,
          //       title: pluginName.name,
          //       rooms: pluginName.joined_rooms
          //     }
          //     setFilteredPlugins(prev =>
          //       !prev.has(pluginInfo) ? new Set(prev).add(pluginInfo) : null
          //     )
          //   }
          // }
        })
    }
  }, [sidebarData])

  return (
    <div className={`container-fluid ${styles.sb__container}`}>
      <div className={`row ${styles.orgDiv}`}>
        <div className={`col-12 px-3 ${styles.orgInfo}`}>
          <div className={`row p-0 ${styles.orgHeader}`}>
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
                      <a href={plugs.href} onClick={navigateToUrl}>
                        <p>{plugs.name}</p>
                      </a>
                    </div>
                  )
                })}
              </p>
            </Wrapper>
          </Content>
        </Overlay>
      </div>
      <div className={`row mt-2 ${styles.sb__item}`}>
        <div
          className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
        >
          <img className={`${styles.item__img}`} src={threadIcon} alt="icon" />
          <p className={`mb-0 ${styles.item_p}`}>Threads</p>
        </div>
      </div>
      <div className={`row ${styles.sb__item}`}>
        <div
          className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
        >
          <img className={`${styles.item__img}`} src={dmIcon} alt="icon" />
          <p className={`mb-0 ${styles.item_p}`}>All DMs</p>
        </div>
      </div>
      <div className={`row ${styles.sb__item}`}>
        <div
          className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
        >
          <img className={`${styles.item__img}`} src={draftIcon} alt="icon" />
          <p className={`mb-0 ${styles.item_p}`}>Drafts</p>
        </div>
      </div>
      <div className={`row ${styles.sb__item}`}>
        <div
          className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
        >
          <img className={`${styles.item__img}`} src={filesIcon} alt="icon" />
          <p className={`mb-0 ${styles.item_p}`}>Files</p>
        </div>
      </div>
      <div className={`row ${styles.sb__item}`}>
        <div
          className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
        >
          <img className={`${styles.item__img}`} src={pluginIcon} alt="icon" />
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
      {sidebarData &&
        sidebarData.map((plugin, index) => {
          return (
            <DropDown
              itemName={plugin.name}
              id={plugin.name}
              key={index}
              items={plugin}
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
  )
}

const LinkStyled = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  font-weight: 500;
  color: white;
`
const Overlay = styled(DialogOverlay)`
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
const Content = styled(DialogContent)`
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
