import React,{useState,useEffect} from 'react'
import LaunchPageCSS from '../styles/LaunchPage.module.css'

function LaunchPage() {
  const [user,setUser] = useState(null)
  const [projectname,setProjectname] = useState(localStorage.getItem('input') || "alpha")
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if(user) {
            setUser(user)
        }  
    },[])
  return (
    <div>
      <article className={LaunchPageCSS.wrapper}>
        <div className={LaunchPageCSS.email}>
          {' '}
          {user ? <span>Signed in as {user.email}</span>:null}
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
            Click <a href="https://zuri.chat/home"> "Open Zuri Chat"</a> to launch the
            desktop app
          </div>
          {/* end */}
          <a href="" className={LaunchPageCSS.openZuri}>
            Open Zuri Chat App
          </a>
          <p>
            Don't have the app ? You can also{' '}
            <a href="https://zuri.chat/home" className={LaunchPageCSS.inBrowser}>
              use Zuri Chat in your browser
            </a>
          </p>
        </div>
      </article>
    </div>
  )
}

export default LaunchPage