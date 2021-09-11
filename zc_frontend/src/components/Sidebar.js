import { useContext, useState, Fragment } from 'react'
import useSWR from 'swr'
import { URLContext } from '../context/Url'

import styles from '../styles/Sidebar.module.css'
import Dropdown from './Dropdown'
import Modal from './UI/Modal/Modal'
import alt_add from '../assets/alt_add.svg'
import InviteDialogue from './Invite/InviteDialogue/InviteDialogue'

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

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.zuriLogo}>
          <img src="/zurichatlogo.svg" alt="Zuri Chat logo" />
          <p>ZURI</p>
        </div>
        <div className={styles.orgInfo}>
          <div className={styles.orgName}>
            <p>HNGi8</p>
            <img
              src="/shapekeyboardarrowdown.svg"
              alt="Organisation settings button"
            />
          </div>
          <div className={styles.newMessage}>
            <img src="/newmessage.svg" alt="New message icon" />
          </div>
        </div>
        <Dropdown title="Channels">
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
              showAddButton={false}
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
        <div onClick={handleDisplayModal} className={styles.addTeamMates}>
          <img src={alt_add} alt="add" /> Add Teammates
        </div>
      </div>
      <Modal modalClosed={handleDisplayModal} show={display}>
        <InviteDialogue />
      </Modal>
    </Fragment>
  )
}
