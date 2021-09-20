import React from 'react'
import LaunchPageCSS from './styles/LaunchPage.module.css'

function LaunchPage() {
  return (
    <div>
      <article className={LaunchPageCSS.wrapper}>
        <div className={LaunchPageCSS.email}>
          {' '}
          adimchisylester2@gmail.com <a href="zuri.chat">Change</a>
        </div>
        <div className={LaunchPageCSS.centerWrapper}>
          <div className={LaunchPageCSS.logoContainer}>
            <span className={LaunchPageCSS.zuriLogo}></span> Zuri Chat
          </div>
          <div className={LaunchPageCSS.bigLetter}>
            <h1>TB</h1>
          </div>
          {/* Desktop View */}
          <h1 className={LaunchPageCSS.brandhub}> Launching The Brand Hub</h1>

          <div className={LaunchPageCSS.openZuriDesktop}>
            Click <a href="zuri.chat"> "Open Zuri Chat"</a> to launch the
            desktop app
          </div>
          {/* end */}
          <a href="zuri.chat" className={LaunchPageCSS.openZuri}>
            Open Zuri Chat App
          </a>
          <p>
            Don't have the app ? You can also{' '}
            <a href="zuri.chat" className={LaunchPageCSS.inBrowser}>
              use Zuri Chat in your browser
            </a>
          </p>
        </div>
      </article>
    </div>
  )
}

export default LaunchPage
