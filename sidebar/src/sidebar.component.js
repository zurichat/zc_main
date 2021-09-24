import { Fragment, useState } from 'react'
import useSWR from 'swr'
import { Link } from 'react-router-dom'
// import { URLContext } from './context/Url'
// import { PluginContext } from './context/Plugins'
import styles from './styles/Sidebar.module.css'
import Dropdown from './components/Dropdown'
import Modal from './components/InviteModal'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from 'styled-components'
import AuthInputBox from './components/AuthInputBox'
// import JoinedRooms from './joinedRooms/JoinedRooms'
// import PublicRooms from '../publicRooms/PublicRooms'
// import cheerio from 'cheerio'

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

const fetcher = url => fetch(url).then(res => res.json())

const Sidebar = props => {
  // const { data: channelsData } = useSWR('/api/plugin/channels', fetcher)

  const { data: messagesData } = useSWR('/api/plugin/messages', fetcher)

  const [show, setShow] = useState(false)

  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <div className={styles.container}>
      <div className={styles.orgInfo}>
        <div className={styles.orgName}>
          <p>HNGi8</p>
          <img
            src={shapekeyboardarrowdown}
            alt="Organisation settings button"
          />
        </div>

        <Overlay isOpen={showDialog} onDismiss={close}>
          <Content aria-label="room-list">
            <CloseButton className="close-button" onClick={close}>
              <Span aria-hidden>×</Span>
            </CloseButton>
            <AuthInputBox
              value={query}
              setValue={setQuery}
              placeholder="🔍 Search by channel name or description"
            />
            <Wrapper>
              {/*loading && <p>Loading..</p>*/}
              {/* {rooms.joined_rooms && <JoinedRooms rooms={filteredJoinedRooms} />} */}
              {/* {rooms.public_rooms && <PublicRooms rooms={filteredPublicRooms} />} */}
            </Wrapper>
          </Content>
        </Overlay>
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
        <div className={styles.newMessage}>
          <img src={newmessage} alt="New message icon" />
        </div>
      </div>
      <div>
        <Item>
          <img src={threadIcon} alt="icon" />
          <p>Threads</p>
        </Item>
      </div>
      <div>
        <Item>
          <img src={dmIcon} alt="icon" />
          <p>All DMs</p>
        </Item>
      </div>
      <div>
        <Item>
          <img src={draftIcon} alt="icon" />
          <p>Drafts</p>
        </Item>
      </div>
      <div>
        <Item>
          <img src={filesIcon} alt="icon" />
          <p>Files</p>
        </Item>
      </div>
      <div>
        <Item>
          <img src={pluginIcon} alt="icon" />
          <p>Plugins</p>{' '}
          <ClickButton
            onClick={open}
            className={`${styles.addButton}`}
            src={addIcon}
            alt="Add button"
            role="button"
          />
        </Item>
        <Dropdown onAddButtonClick={open} showAddButton={true} title="Plugins">
          {links.map((plugin, index) => (
            <Fragment key={index}>
              <a href={plugin.href} onClick={navigateToUrl}>
                {plugin.name}
              </a>
            </Fragment>
          ))}
        </Dropdown>
      </div>
      {/*<Dropdown onAddButtonClick={open} showAddButton={true} title="Channels">
        {channelsData &&
          channelsData.channels.map((channel, index) => (
            <Fragment key={index}>
              <span>#</span>
              {channel.name}
            </Fragment>
          ))}
          </Dropdown>*/}

      <Channels />

      <Dropdown title="messages">
        {messagesData &&
          messagesData.messages.map((message, index) => (
            <Fragment key={index}>
              <span>
                <img src={message.avatar} alt="avatar" />
              </span>
              {message.name}
            </Fragment>
          ))}
      </Dropdown>
      {/* button for adding invites */}
      <div className={styles.buttonstyle}>
        <button onClick={() => setShow(true)}>Add Teammates</button>
        <Modal onClose={() => setShow(false)} show={show} />
      </div>
      <Button
        style={{
          width: '80%',
          margin: '0 auto',
          marginTop: '20px',
          color: 'white'
        }}
      >
        <LinkStyled to={'/createworkspace'}>Create Workspace</LinkStyled>{' '}
      </Button>
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

export default Sidebar
