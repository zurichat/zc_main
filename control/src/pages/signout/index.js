import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import {GetUserInfo} from '../../zuri-control'
import { SignoutStyleWrapper } from '../../component-styles/SignoutStyle'
import logo from '../../component-assets/zuri.svg'
import { Helmet } from 'react-helmet'

const Signout = ({ history }) => {

const orgName = localStorage.getItem('orgName')

  let token = sessionStorage.getItem('token')

useEffect( ()=> {
   
    axios({
      method: 'post',
      url: `https://api.zuri.chat/auth/logout`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res)
      
      })
      .catch(err => {
        console.error(err)
      })
  
})

  return (
    <>
      <SignoutStyleWrapper>
        <div className="logo">
          <Helmet>
            <title>Sign Out - Zuri Chat</title>
          </Helmet>
          <img src={logo} alt="zuri logo" />
        </div>

        <div className="content-wrapper">
          <h6 className="org-name">Signed out of Team {orgName} Workspace</h6>
          <signoutMessage>
            You have been signed out of Team {orgName} Workspace
          </signoutMessage>

          <button className="push" onClick={() => history.push('/login')}>
            Login
          </button>
          <p className="login">
            or
            <a href="/login" className="link">
              Login
            </a>
            to another workspace
          </p>
        </div>
      </SignoutStyleWrapper>
    </>
  )
}

export default withRouter(Signout)
