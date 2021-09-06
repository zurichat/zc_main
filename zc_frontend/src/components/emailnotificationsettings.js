import React from 'react';
import logo from './logo.svg';
import './emailnotificationsettings.css';
import { Button, ListGroup, Card} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        


        <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Title className= 'Header'>Email notification setting</Card.Title>
  <ListGroup variant="flush">
    <ListGroup.Item>     
        <img
          alt=""
          src="/on.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
Turn on</ListGroup.Item>
    <ListGroup.Item>    
        <img
          alt=""
          src="/clock.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
Mute for 1 hour</ListGroup.Item>
    <ListGroup.Item>    
        <img
          alt=""
          src="/clock.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
Mute for 2 days</ListGroup.Item>
    <ListGroup.Item>    
        <img
          alt=""
          src="/settings.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
Customize</ListGroup.Item>

    <ListGroup.Item>    
        <img
          alt=""
          src="/off.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
Turn off</ListGroup.Item>
  </ListGroup>
</Card>
<Button variant="success">Save Settings</Button>{' '}
      </header>
    </div>
  );
}

export default App;
