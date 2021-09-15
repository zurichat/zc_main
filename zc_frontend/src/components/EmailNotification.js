import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import chatIcon from '../assets/chatIcon.svg'
import '../styles/EmailNotification.css'

function EmailNotification() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="headtop" src={chatIcon} alt="zurilogo" />
        <h3 className="head">Zuri</h3>
      </div>
      <div className="welcome_note">
        <h3 className="note">Welcome to your new workspace!</h3>
        <p>Here are the details for your new Zuri workspace</p>
      </div>
      <div className="log">
        <img className="logo2" src={chatIcon} alt="zurilogo" />
        <h3 className="Z-name">Zuri</h3>
        <a className="atag" href="_#" target="_blank">
          {' '}
          Zuri.Voltaire.com{' '}
        </a>
        <Button href="#" className="btn" size="sm">
          {' '}
          Open App{' '}
        </Button>{' '}
      </div>
      <div className="third">
        <h3>Setting up your workspace</h3>
        <p className="p1">
          If you have used Zuri before and have the basic off pat, here are a
          few ways to get more out of your new space
        </p>
      </div>
      <div className="fourth">
        <ul>
          <li>
            <h6>
              {' '}
              <img className="icon" src={chatIcon} alt="icon" /> Connect your
              tool{' '}
            </h6>
            <p>
              {' '}
              Sync your calendar, run polls by connecting on Zuri on{' '}
              <a className="app" href="_#">
                {' '}
                1,000+ apps in the App Directory{' '}
              </a>{' '}
            </p>
          </li>
          <li>
            <h6>
              {' '}
              <img className="icon" src={chatIcon} alt="icon" /> Connect your
              tool{' '}
            </h6>
            <p>
              {' '}
              Sync your calendar, run polls by connecting on Zuri on{' '}
              <a className="app" href="_#">
                {' '}
                1,000+ apps in the App Directory{' '}
              </a>{' '}
            </p>
          </li>
          <li>
            <h6>
              {' '}
              <img className="icon" src={chatIcon} alt="icon" /> Connect your
              tool{' '}
            </h6>
            <p>
              {' '}
              Sync your calendar, run polls by connecting on Zuri on{' '}
              <a className="app" href="_#">
                {' '}
                1,000+ apps in the App Directory{' '}
              </a>{' '}
            </p>
          </li>
        </ul>
        <Button href="#" target="_blank" className="btn2" size="sm">
          See More tips{' '}
        </Button>{' '}
      </div>
      <div className="bott">
        <p className="getZuriApp"> Get the Zuri app for your computer</p>
        <p className="p">
          Zuri is supported on any Mac, Windows, or Linux computer. For help
          getting started, check out the Help Center.
        </p>
        <p className="questionP">
          Have questions about your new workspace? Drop us a note at{' '}
          <a href="mailto:help@Zuri.com." target="_blank" rel="noreferrer">
            help@Zuri.com.
          </a>{' '}
          We’re glad you’re here!
        </p>
      </div>
      <footer className="footer">
        <a className="a1" href="_#" target="_blank" rel="noreferrer">
          {' '}
          Our Blog{' '}
        </a>
        <a className="a2" href="_#" target="_blank">
          {' '}
          Email Preferences{' '}
        </a>
        <a className="a3" href="_#" target="_blank">
          {' '}
          Policies{' '}
        </a>
      </footer>
    </div>
  )
}

export default EmailNotification
