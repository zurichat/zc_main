import { useContext, Fragment } from 'react'
import useSWR from 'swr'
import { URLContext } from '../contexts/Url'

import styles from '../styles/Sidebar.module.css'
import Dropdown from './Dropdown'

const fetcher = (url) => fetch(url).then((res) => res.json())

export const Sidebar = () => {
  const { data: channelsData } = useSWR('/api/plugins/channels', fetcher)
  const { data: messagesData } = useSWR('/api/plugins/messages', fetcher)
  const { data: plugins } = useSWR('/api/plugins/', fetcher)

  const { setUrl } = useContext(URLContext)

  return (
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
      <Dropdown title="Plugins">
        {plugins &&
          Object.keys(plugins).map((key) => (
            <span key={key} onClick={() => setUrl('http://' + key)}>
              {plugins[key].name}
            </span>
          ))}
      </Dropdown>
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
