import { useContext, Fragment, useEffect, useState } from 'react'
import useSWR from 'swr'
import { URLContext } from '../contexts/Url'

import styles from '../styles/Sidebar.module.css'
import Dropdown from './Dropdown'
import { useHistory } from 'react-router'
import Cookies from 'universal-cookie'
import axios from 'axios'

const fetcher = url => fetch(url).then(res => res.json())

export const Sidebar = () => {
  const { data: channelsData } = useSWR('/api/plugin/channels', fetcher)
  const { data: messagesData } = useSWR('/api/plugin/messages', fetcher)
  // const { data: plugins } = useSWR('/api/plugin/list', fetcher)

  const { setUrl } = useContext(URLContext)

  const [plugins, setPlugins] = useState([])
  const [sidebar, setSidebar] = useState([])
  const cookies = new Cookies()
  const history = useHistory()
  const getCookies = () => {
    const token = cookies.get("Zuri_Chat")
    if (!token) { history.push('/login') }
  }
  const token = getCookies()

  useEffect(() => {

    axios.get("/api/plugin/list", { headers: { "Authorization": "Token " + token } })
      .then(r => {
        let p = [];
        let apiPlugins = r.data.data
        //  The PLugins registered are still duplicated at the moment, this can be removed later
        // setPlugins(APIPlugins.data.filter((val, i, self) => self.indexOf(val) === i))
        for (let i = 0; i < apiPlugins.length; i++) {
          const el = apiPlugins[i];
          if (!p.filter(x => x.name === el.name).length > 0) {
            p.push(el)
          }
        }
        setPlugins(p)
      })
      .catch(() => setPlugins([]))
    // eslint-disable-next-line
  }, [])

  const handlePluginClicked = (e, plugin) => {
    axios.get(`/api/plugin/sidebar?url=${plugin.sidebar_url}`, { headers: { "Authorization": "Token " + token } })
      .then(r => {
        setSidebar(r.data)

        plugin['sidebar'] = sidebar
        console.log(plugin['sidebar'])

        let i = plugins.indexOf(plugin)
        let p = plugins
        p[i] = plugin
        console.log(i, p)
        setPlugins(p)
        setUrl(plugin.template_url)
      })
      .catch(e => {
        console.log(e)
        setUrl(plugin.template_url)
      })
    console.log(sidebar)

  }

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
      {plugins &&
        plugins.map(plugin => (
          <Dropdown
            title={plugin.name}
            key={plugin.name}
            showAddButton={false}
            onTitleClick={(e) => handlePluginClicked(e, plugin)}
            children={plugin.sidebar && ["menu", "menu"]}
          >
          </Dropdown>
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
