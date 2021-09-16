import React from 'react'
import chatIcon from '../components/images/img.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import '../styles/EmailConfirmation.css'

function EmailConnfirmation() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="headtop" src={chatIcon} alt="zurilogo" />
        <h3 className="head">Zuri</h3>
      </div>
      <div className="welcome_note">
        <h3 className="note">Confirm your email to join HNGi8 x I4G</h3>
        <p className="p_tag">
          Hello! Once you've confirmed your email address and set a password,
          you'll be the newest member of the Zuri Chat workspace HNGi8 x I4G.
        </p>
      </div>
      <div className="log">
        <Button href="#" className="btn" size="sm">
          {' '}
          Confirm email{' '}
        </Button>{' '}
      </div>
      <div className="third">
        <p className="p1">
          If you have any questions, simply reply to this email. We'd love to
          help
        </p>
        <p className="p2">
          If you didn’t request this email, there’s nothing to worry about — you
          can safely ignore it.
        </p>
      </div>
      <div className="App-header">
        <img className="headtop" src={chatIcon} alt="zurilogo" />
        <h3 className="head">Zuri</h3>
        <h5 className="workspace">
          Workspace URL:
          <a
            href="https://www.zuriboard.zuri.com"
            target="_blank"
            rel="noreferrer"
          >
            zuriboard.zuri.com
          </a>
        </h5>
      </div>

      <div className="bott">
        <p className="questionP">
          Have questions about your new workspace? Drop us a note at{' '}
          <a href="mailto:help@Zuri.com." target="_blank" rel="noreferrer">
            help@Zuri.com.
          </a>{' '}
          We’re glad you’re here!
        </p>
      </div>
      <footer className="footer">
        <a className="a1" href="_#" target="_blank">
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
export default EmailConnfirmation
