import React from 'react'
import '../styles/Modal.css'

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h5 onClick={() => closeModal(false)} id="exitBtn">
          {' '}
          X{' '}
        </h5>
        <div className="Header">
          <h3>X</h3>
        </div>
        <div className="title">
          <h1>Unable to send invite</h1>
        </div>
        <div className="body">
          <p>dedi@teamvolitaire.com is already in your workspace</p>
        </div>

        <div className="footer">
          <a href="_#">
            {' '}
            <img src="arrow.png" alt="img" />{' '}
          </a>{' '}
          <h4 className="see"> See previous invites </h4>
          <button id="sendBtn">Send more invites</button>
          <button onClick={() => closeModal(false)} id="cancelBtn">
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal
