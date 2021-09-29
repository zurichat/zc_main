import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import {GetUserInfo} from '../../zuri-control'
import { SignoutStyleWrapper } from '../../component-styles/SignoutStyle'
import logo from '../../component-assets/zuri.svg'

const Signout = ({ history }) => {
  const currentWorkspace = localStorage.getItem('currentWorkspace')
  let token = sessionStorage.getItem('token')
  const [orgName, SetOrgName] = useState('')

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem('user'))

    if ((user && token) !== null) {
      try {
        axios
          .get(`https://api.zuri.chat/organizations/${currentWorkspace}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            SetOrgName(response.data.data.name)
            // let userData = { currentWorkspace, ...response.data.data }
          })
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('YOU ARE NOT LOGGED IN, PLEASE LOG IN')
    }
  }, [orgName])

  return (
    <>
      <SignoutStyleWrapper>
        <div className="logo">
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
