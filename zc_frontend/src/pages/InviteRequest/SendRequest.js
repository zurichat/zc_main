import React from 'react';
import { Navbar } from 'react-bootstrap';
import SentRequest from './SentRequest.module.css';

function SentRequest() {
    return (
        <div className="App">
          <div className="Request">
      <div className="nav">
      <Navbar className="navbar">
        <img className="cancel" src="cancel.png" alt="cancel" href="#"/>
      </Navbar>
      </div>
      <div className="check">
        <img className="tick" src="shape.png" alt="shape" />
      </div>
      <div className="info">
      <h1>Sent!</h1>
      <p> <img className="add" src="add.png" alt="add"/> olaorosamson@yahoo.com</p>
      <p className="desc">Will be invited as a member of Zuri Chat once an admin
         approves the request.</p>
      </div>
      <div className="buttons">
        <button className="btninv">Invite more people</button>
        <button className="btnd">Finished</button>
      </div>
      </div>
    </div>
    )
}
export default SentRequest