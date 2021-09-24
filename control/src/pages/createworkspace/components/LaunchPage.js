<<<<<<< HEAD:zc_frontend/src/pages/create-workspace/LaunchPage.js
import React,{useState,useEffect} from 'react'
import LaunchPageCSS from './styles/LaunchPage.module.css'

function LaunchPage() {
  const [user,setUser] = useState(null)
  const [projectname,setProjectname] = useState(localStorage.getItem('input') || "alpha")
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if(user) {
            setUser(user)
        }  
    },[])
=======
import React, { useState, useEffect } from 'react'
import LaunchPageCSS from '../styles/LaunchPage.module.css'

function LaunchPage() {
  const [user, setUser] = useState(null)
  const [projectname, setProjectname] = useState(
    localStorage.getItem('input') || 'alpha'
  )
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  }, [])
>>>>>>> bf60a340a9cd4f0152b05fd9a25629dbe09c80bf:control/src/pages/createworkspace/components/LaunchPage.js
  return (
    <div>
      <article className={LaunchPageCSS.wrapper}>
        <div className={LaunchPageCSS.email}>
          {' '}
<<<<<<< HEAD:zc_frontend/src/pages/create-workspace/LaunchPage.js
          {user ? <span>Signed in as {user.email}</span>:null}
=======
          {user ? <span>Signed in as {user.email}</span> : null}
>>>>>>> bf60a340a9cd4f0152b05fd9a25629dbe09c80bf:control/src/pages/createworkspace/components/LaunchPage.js
        </div>
        <div className={LaunchPageCSS.centerWrapper}>
          <div className={LaunchPageCSS.logoContainer}>
            <span className={LaunchPageCSS.zuriLogo}></span> Zuri Chat
          </div>
          <div className={LaunchPageCSS.bigLetter}>
            <h1>TB</h1>
          </div>
          {/* Desktop View */}
          <h1 className={LaunchPageCSS.brandhub}> Launching {projectname}</h1>

          <div className={LaunchPageCSS.openZuriDesktop}>
<<<<<<< HEAD:zc_frontend/src/pages/create-workspace/LaunchPage.js
            Click <a href="https://zuri.chat/home"> "Open Zuri Chat"</a> to launch the
            desktop app
=======
            Click <a href="https://zuri.chat/home"> "Open Zuri Chat"</a> to
            launch the desktop app
>>>>>>> bf60a340a9cd4f0152b05fd9a25629dbe09c80bf:control/src/pages/createworkspace/components/LaunchPage.js
          </div>
          {/* end */}
          <a href="" className={LaunchPageCSS.openZuri}>
            Open Zuri Chat App
          </a>
          <p>
            Don't have the app ? You can also{' '}
<<<<<<< HEAD:zc_frontend/src/pages/create-workspace/LaunchPage.js
            <a href="https://zuri.chat/home" className={LaunchPageCSS.inBrowser}>
=======
            <a
              href="https://zuri.chat/home"
              className={LaunchPageCSS.inBrowser}
            >
>>>>>>> bf60a340a9cd4f0152b05fd9a25629dbe09c80bf:control/src/pages/createworkspace/components/LaunchPage.js
              use Zuri Chat in your browser
            </a>
          </p>
        </div>
      </article>
    </div>
  )
}

export default LaunchPage