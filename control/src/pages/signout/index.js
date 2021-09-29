import React from 'react'
import { withRouter } from 'react-router-dom'
// import styles from '../../styles/Signout.module.css'
import styles from '../../component-styles/Signout.module.css'
import { SignoutStyleWrapper } from '../../component-styles/SignoutStyle'
import logo from '../../component-assets/zuri.svg'

const Signout = ({ history }) => {
  return (
    <>
      <SignoutStyleWrapper>
        <div className="logo">
          <img src={logo} alt="zuri logo" />
        </div>

        <div className="content-wrapper">
          <h6>Signed out of Team Einstein Workspace</h6>
          <signoutMessage>
            You have been signed out of Team Einstein Workspace
          </signoutMessage>

          <button onClick={history.push('/home')}>Login</button>
          <p>
            or <a href="/login"> Login</a> to another workspace
          </p>
        </div>
      </SignoutStyleWrapper>
    </>
  )
}

export default withRouter(Signout)
