import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles'
import {Card, CardContent ,Typography, TextField}  from '@material-ui/core'
import { AddCircleOutline} from '@material-ui/icons'

const UseStyles = makeStyles(theme => ({
  root: {
    width: '40rem',
    height: '620px',
    margin: '20px auto',
    fontSize: "10px",
    backgroundcolor: '#FFFFFF'
  },
  firsticon:{
    paddingRight: "9px"
  },
  main:{
  fontSize: '6px'
   },

  submain:{
    textAlign: 'center' 
  },
  p:{
    fontSize: '12px' 
  },
  btnd: {
    backgroundcolor: 'rgba(0, 139, 94, 1)',
    color: 'white',
    },
  button:{
    backgroundcolor: '#00B87C'
  }

}))

export default function Inviterequest() {
  const classes = UseStyles()

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: rgba(58, 58, 58, 0.7); }'}</style>
      </Helmet>
      <Card
        className={classes.root}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <CardContent>
          <Typography className={classes.title} gutterBottom align="left">
              <p className="main">Request Invitation to Zuri Chat <AddCircleOutline className="firsticon"/> </p>
              <form>
           <div className="first-input">
               <p> To: </p>
             <Container>
      <Form.Control
        style={{ fontSize: 12, padding: 20, width: 500 }}
        name="foo"
        placeholder="tosben@hnginternship.com"
      />
    </Container>
           </div>
           <div className="second-input">
    <p> Invite as: </p>
            <Container>
      <Form.Control
        style={{ fontSize: 12, padding: 5, width: 500 }}
        name="foo"
        placeholder="Member"
      />
    </Container>
           </div>
           <div className="third-input"> 
           <p> Reason for request(optional): </p>
     <Container>
      <Form.Control
        style={{ fontSize: 12, padding: 16, width: 500 }}
        name="foo"
        placeholder="Add a note to your admin"
      />
    </Container>
    </div>
           </form>
           </Typography>
           <Typography className={classes.submain}  gutterBottom align="center">
           <div className="firstsubmain">
              <p> Your request will be sent to the admin, and you will be notified when it has been approved or denied</p>
                  <p>New member will automatically join your workspace's default channel <a
                      href='addmore'> Add more</a> </p>
           </div>
          <div className="secondsubmain">
            <Link to="./SendRequest">
            <button href="SendRequest" className="btnd" variant="contained" backgroundcolor='#00B87C' color="success" type='submit' >Send Request</button>
            </Link>
          </div>
          </Typography>
          <br/>
        </CardContent>
      </Card>
    </div>
  )
}