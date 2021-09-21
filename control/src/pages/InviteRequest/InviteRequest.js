 import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {Card, CardContent ,Typography, TextField}  from '@material-ui/core'
import {ArrowDropDown, AddCircleOutline} from '@material-ui/icons'

const UseStyles = makeStyles(theme => ({
  root: {
    width: '40rem',
    height: '580px',
    margin: '20px auto',
    fontSize: "10px",
    backgroundcolor: '#FFFFFF'
  },

    h1:{
  fontSize: '10px'
   },

  submain:{
    textAlign: 'center' 
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
          <br />
          <br />
          <Typography className={classes.title} gutterBottom align="left">
              <h1 className="main">Request Invitation to Zuri Chat <AddCircleOutline/> </h1>
              <form>
           <div className="first-input">
               <p> To: </p>

            <TextField fullWidth label="tosben@hnginternship.com" 
             placeholder="tosben@hnginternship.com"> </TextField>

           </div>
           <div className="second-input">
           <p> Invite as: </p>
            <TextField fullWidth label={"Member"} placeholder="Member">
            <ArrowDropDown/> 
               </TextField>
           </div>
           <div className="third-input">
           <p> Reason for request(optional): </p>

            <TextField fullWidth label={"Add a note to your admin"} placeholder="Add a note to your admin">
            <ArrowDropDown/> 
               </TextField>
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
            <Link to="/SendRequest">
            <button href="SendRequest" variant="contained" color="success" type='submit' >Send Request</button>
            </Link>
          </div>
          </Typography>
          <br/>
        </CardContent>
      </Card>
    </div>
  )
} 