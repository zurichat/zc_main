import React from 'react'
import { Navbar } from 'react-bootstrap'
import '../styles/InvitationAcceptance.css'

function InvitationAcceptance() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar className="navbar">
          <img src="cancel.png" alt="cancel" />
        </Navbar>
      </div>
      <div className="check">
        <img className="tick" src="shape.png" alt="shape" />
      </div>
      <div className="info">
        <h1>Sent!</h1>
        <p>dedi@teamvolitaire.com has received an invite.</p>
        <p className="desc">
          They’ll be able to receive and reply messages by email until they join
          the workspace.
        </p>
      </div>
      <div className="buttons">
        <button className="btninv">Send More Invites</button>
        <button className="btnd">Done</button>
      </div>
    </div>
  )
}

export default InvitationAcceptance
