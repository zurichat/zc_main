import axios from 'axios'
import { useContext, Fragment, useState, useEffect } from 'react'
import useSWR from 'swr'
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

const fetcher = url => fetch(url).then(res => res.json())

const Sidebar = props => {
  // const { data: channelsData } = useSWR('/api/plugin/channels', fetcher)
  const { data: messagesData } = useSWR('/api/plugin/messages', fetcher)

  const channelsData = [
    {
      id: 0,
      name: 'announcments'
    },
    {
      id: 1,
      name: 'games'
    }
  ]
  // const { data: plugins } = useSWR('/api/plugin/list', fetcher)
  // const { data: organization } = useSWR('https://api.zuri.chat/organizations/6133c5a68006324323416896', fetcher)
  // console.log(organization)

  // const { setUrl } = useContext(URLContext)
  const [show, setShow] = useState(false)
  // const { plugins, setPlugins } = useContext(PluginContext)

  // // const user = JSON.parse(sessionStorage.getItem('user'))
  // // const org_id = '6133c5a68006324323416896'
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  // // const [rooms, setRooms] = useState({})
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // // Sort room function

  // // const sortRooms = (val, type) => {
  // //   let values = [...val]
  // //   console.log(type)
  // //   switch (type) {
  // //     case 'atoz':
  // //       values.sort((a, b) => a.title.localeCompare(b.title))
  // //       break
  // //     case 'ztoa':
  // //       values.sort((a, b) => b.title.localeCompare(a.title))
  // //       break
  // //     case 'minmax':
  // //       values.sort((a, b) => a.members - b.members)
  // //       break
  // //     case 'maxmin':
  // //       values.sort((a, b) => b.members - a.members)
  // //       break
  // //     default:
  // //       break
  // //   }
  // //   return values
  // // }

  // const sidebarApi = async url => {
  //   setLoading(true)
  //   try {
  //     const res = await axios.get(
  //       `https://channels.zuri.chat/api/v1/sidebar/?org=1&user=43567868&format=json`
  //     )
  //     return res.data
  //   } catch (err) {
  //     return console.log(err)
  //   }
  // }

  // // const filteredJoinedRooms = rooms?.joined_rooms ?
  // //   rooms.joined_rooms.filter(room =>
  // //     room.title.toLowerCase().includes(query)
  // //   )
  // //   : null
  // // const filteredPublicRooms = rooms?.joined_rooms ?
  // //   rooms.public_rooms.filter(room =>
  // //     room.title.toLowerCase().includes(query)
  // //   )
  // //   : null

  // useEffect(() => {
  //   ;(async () => {
  //     await sidebarApi().then(async res => {
  //       // setRooms(res)
  //       setLoading(false)

  //       // console.log(sortRooms(res.public_rooms, 'ztoa'))
  //       // console.log(sortRooms(res.public_rooms, 'atoz'))
  //       // console.log(sortRooms(res.public_rooms, 'minmax'))
  //       // console.log(sortRooms(res.public_rooms, 'maxmin'))
  //     })
  //   })()
  // }, [])

  // useEffect(() => {
  //   axios
  //     .get('https://api.zuri.chat/organizations/6133c5a68006324323416896')
  //     .then(r => {
  //       r.data.data.plugins.forEach(api_plugin => {
  //         let homepage_url
  //         // Get Homepage
  //         axios.get(api_plugin).then(res => {
  //           homepage_url = res.data.data.homepage_url
  //           let homepage = null
  //           let loaded = false
  //           const reProtocol = /^https?:\/\//
  //           const oURL = new URL(
  //             reProtocol.test(homepage_url)
  //               ? homepage_url
  //               : 'http://' + homepage_url
  //           )
  //           const prefixLink = (url, oURL, mimeType = 'text/html') => {
  //             let ret = reProtocol.test(url) ? url : `${oURL.origin}${url}`
  //             return `${ret}&mimeType=${mimeType}`
  //           }
  //           axios
  //             .get(prefixLink(oURL.toString()))
  //             .then(res => {
  //               const $ = cheerio.load(res.data)
  //               // append stylesheet
  //               $(`link[rel="stylesheet"]`).each(function () {
  //                 const link = document.createElement('link')
  //                 Object.keys(this.attribs).forEach(attr =>
  //                   link.setAttribute(attr, this.attribs[attr])
  //                 )
  //                 link.setAttribute(
  //                   'href',
  //                   prefixLink(this.attribs.href, oURL, 'text/css')
  //                 )
  //                 link.setAttribute('data-plugin-res', true)
  //                 $(this).remove()
  //                 document.head.prepend(link)
  //               })

  //               // append scripts
  //               $('script').each(function () {
  //                 const script = document.createElement('script')
  //                 Object.keys(this.attribs).forEach(attr =>
  //                   script.setAttribute(attr, this.attribs[attr])
  //                 )
  //                 if (script.src) {
  //                   script.setAttribute(
  //                     'src',
  //                     prefixLink(
  //                       this.attribs.src,
  //                       oURL,
  //                       'application/javascript'
  //                     )
  //                   )
  //                 } else {
  //                   script.innerText = $(this).html()
  //                 }
  //                 $(this).remove()
  //                 script.setAttribute('data-plugin-res', true)
  //                 document.body.appendChild(script)
  //               })
  //               homepage = $('body').html()
  //             })
  //             .catch(e => {
  //               homepage = `Failed to Load ${homepage_url} Plugin: ${e.message}`
  //             })

  //           // Get Sidebar Info
  //           // console.log(`${r.data.data.sidebar_url}?org=${org_id}&user=${user.id}`)
  //           axios
  //             .get(
  //               'https://sales.zuri.chat/api/v1/sidebar?org=5336&user=Devjoseph&token=FGEZJJ-ZFDGB-FDGG'
  //             )
  //             .then(r => {
  //               const api_plugin = r.data.data
  //               const plugin = {
  //                 name: api_plugin.group_name,
  //                 joined_rooms: api_plugin.joined_rooms,
  //                 homepage,
  //                 homepage_url,
  //                 loaded
  //               }
  //               let _plugins = []
  //               if (api_plugin) {
  //                 _plugins.push(plugin)
  //               }
  //               console.log('plugins ', _plugins)
  //               setPlugins(_plugins)
  //             })
  //         })
  //       })
  //     })
  // }, [setPlugins])

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
      <Dropdown onAddButtonClick={open} showAddButton={true} title="Channels">
        {channelsData.map((channel, index) => (
          <Fragment key={index}>
            <span>#</span>
            {channel.name}
          </Fragment>
        ))}
      </Dropdown>
      {/*<Dropdown
        onAddButtonClick={open}
        onTitleClick={() => setUrl(`https://sales.zuri.chat/`)}
        showAddButton={true}
        title="Sales"
      >
        {channelsData &&
          channelsData.channels.map((channel, index) => (
            <Fragment key={index}>
              <span>#</span>
              {channel.name}
            </Fragment>
          ))}
          </Dropdown>*/}
      {/*plugins.length > 0 &&
        plugins.map((plugin, i) => (
          <Fragment key={i}>
            {plugin && (
              <Dropdown
                title={plugin.name}
                plugin
                onTitleClick={() => setUrl(plugin.homepage_url)}
                children={plugin.joined_rooms}
                showAddButton={true}
                onAddButtonClick={open}
              ></Dropdown>
            )}
          </Fragment>
            ))*/}
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
