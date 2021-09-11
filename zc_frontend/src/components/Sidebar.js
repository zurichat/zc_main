import axios from 'axios'
import { useContext, Fragment, useState, useEffect } from 'react'
import useSWR from 'swr'
import { URLContext } from '../context/Url'

import styles from '../styles/Sidebar.module.css'
import Dropdown from './Dropdown'
import Modal from './UI/Modal/Modal'
import alt_add from '../assets/alt_add.svg'
import InviteDialogue from './Invite/InviteDialogue/InviteDialogue'

import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from 'styled-components'
import AuthInputBox from '../components/AuthInputBox'
// import "@reach/dialog/styles.css";

const fetcher = url => fetch(url).then(res => res.json())

export const Sidebar = () => {
  const [display, setDisplay] = useState(false)

  const handleDisplayModal = () => {
    setDisplay(!display)
  }

  const { data: channelsData } = useSWR('/api/plugin/channels', fetcher)
  const { data: messagesData } = useSWR('/api/plugin/messages', fetcher)
  const { data: plugins } = useSWR('/api/plugin/list', fetcher)

  const { setUrl } = useContext(URLContext)

  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const [rooms, setRooms] = useState({})
  const [query, setQuery] = useState('')
  // const [sort,setSort] = useState('');

  useEffect(() => {
    sidebarApi()
    // rooms.filter()
  })

  // const sorters = {
  //   leastMembers : (a,b)=>{return a.members - b.members},
  //   mostMembers : (a,b)=>{return b.members - a.members},
  //   aToZ : (a,b)=>{
  //     const aName = a.title.toUpperCase();
  //     const bName = b.title.toUpperCase();
  //     return (aName < bName) ? 1:-1
  //   },
  //   zToA : (a,b)=>{
  //     const aName = a.title.toUpperCase();
  //     const bName = b.title.toUpperCase();
  //     return (aName < bName) ? 1:-1
  //   }
  // }
  const sorters = [
    (a, b) => {
      return a.unread - b.unread
    },
    (a, b) => {
      return b.unread - a.unread
    },
    (a, b) => {
      const aName = a.title.toUpperCase()
      const bName = b.title.toUpperCase()
      return aName === bName ? 0 : aName < bName ? 1 : -1
    },
    (a, b) => {
      const aName = a.title.toUpperCase()
      const bName = b.title.toUpperCase()
      return aName === bName ? 0 : aName < bName ? -1 : 1
    }
  ]

  const sidebarApi = () => {
    axios
      .get(
        `https://channels.zuri.chat/api/v1/sidebar/?org=1&user=43567868&format=json`
      )
      .then(res => {
        // console.log(res)

        let result = res.data
        setRooms(result)
        // console.log(rooms.joinedRooms)
        // console.log(result.joined_rooms[1].icon)
        sorters.forEach((sortfunc, ind) => {
          const sortedroom = rooms.public_rooms.sort(sortfunc)
          console.log(sortedroom)
          // rooms.joined_rooms.forEach(curr => console.log(ind,curr.sort(sortfunc)))
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.zuriLogo}>
          <img src="/zurichatlogo.svg" alt="Zuri Chat logo" />
          <p>ZURI</p>
        </div>
        <Overlay isOpen={showDialog} onDismiss={close}>
          <Content>
            <CloseButton className="close-button" onClick={close}>
              {/* <VisuallyHidden>Close</VisuallyHidden> */}
              <span aria-hidden>×</span>
            </CloseButton>
            <AuthInputBox
              value={query}
              setValue={setQuery}
              placeholder="🔍 Search by channel name or description"
            />
            <Wrapper>
              <p>
                {rooms.joined_rooms
                  ? `${
                      rooms.joined_rooms.length + rooms.public_rooms.length
                    } channels`
                  : null}
              </p>
              <div style={{ marginTop: `1rem` }}>
                {rooms.joined_rooms &&
                  rooms.joined_rooms.map((room, id) => {
                    if (query === '') {
                      return (
                        <Div key={id}>
                          <p>
                            <Hash>#</Hash>
                            {room.title}
                          </p>
                          <Joined>&#10003; joined</Joined>{' '}
                          <Bull>&bull; {room.members} members</Bull>{' '}
                          <Span>&bull; {room.unread} unread</Span>
                          <Button className={`leave`}>leave</Button>
                        </Div>
                      )
                    } else if (room.title.toLowerCase().includes(query)) {
                      return (
                        <Div key={id}>
                          <p>
                            <Hash>#</Hash>
                            {room.title}
                          </p>
                          <Joined>&#10003; joined</Joined>{' '}
                          <Bull>&bull; {room.members} members</Bull>{' '}
                          <Span>&bull; {room.unread} unread</Span>
                          <Button className={`leave`}>leave</Button>
                        </Div>
                      )
                    }
                    return null
                  })}
              </div>
              {/* {console.log(rooms)} */}
              <div>
                {rooms.public_rooms &&
                  rooms.public_rooms.map((room, id) => {
                    if (query === '') {
                      return (
                        <Div key={id}>
                          <p>
                            <Hash>#</Hash>
                            {room.title}
                          </p>
                          <Bull> {room.members} members</Bull>{' '}
                          <Span>&bull; {room.unread} unread</Span>
                          <Button className={`join`}>join</Button>
                        </Div>
                      )
                    } else if (room.title.toLowerCase().includes(query)) {
                      return (
                        <Div key={id}>
                          <p>
                            <Hash>#</Hash>
                            {room.title}
                          </p>
                          <Bull> {room.members} members</Bull>{' '}
                          <Span>&bull; {room.unread} unread</Span>
                          <Button className={`join`}>join</Button>
                        </Div>
                      )
                    }
                    return null
                  })}
              </div>
            </Wrapper>
          </Content>
        </Overlay>
        <div className={styles.newMessage}>
          <img src="/newmessage.svg" alt="New message icon" />
        </div>
      </div>
      <Dropdown onAddButtonClick={open} showAddButton={true} title="Channels">
        {channelsData &&
          channelsData.channels.map((channel, index) => (
            <Fragment key={index}>
              <span>#</span>
              {channel.name}
            </Fragment>
          ))}
      </Dropdown>
      {plugins &&
        Object.keys(plugins).map(key => (
          <Dropdown
            title={plugins[key].name}
            key={key}
            onTitleClick={() => setUrl(key)}
          ></Dropdown>
        ))}
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
    </div>
  )
}

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
  overflow-y: scroll;
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
const Div = styled.div`
  padding: 0.5rem 2rem;
  border-top: 1px solid #dee1ec;
  &:hover {
    button {
      display: block;
    }
  }
  position: relative;
`
const Button = styled.button`
  padding: 0.5rem 1.2rem;
  position: absolute;
  right: 10px;
  top: 25%;
  font-size: 1rem;
  border: none;
  &.leave {
    background-color: #007a5a;
    color: white;
  }
  &.join {
    background-color: #dee1ec;
  }
  display: none;
  margin-left: auto;
  border-radius: 5px;
`
const Span = styled.span`
  font-size: 0.8rem;
`
const Hash = styled(Span)`
  padding: 0.5rem;
`

const Joined = styled(Span)`
  color: #007a5a;
`
const Bull = styled(Span)`
  padding: 0 0 0.5rem;
`
