import React from 'react'
import '../styles/LoginLoading.css'
const LoginLoading = () => {
  return (
    <div className="loading-container">
      <div className="loading-header">
        <img src="/zurichatlogo.svg" alt="logo" />
        <span>ZURI</span>
      </div>
      <div className="loader-container">
        <div className="loading-circle"></div>
        <img src="/zurichatlogo.svg" alt="logo" />
      </div>
      <div className="loading-status">
        <h1>Launching Zuri Chat</h1>
      </div>
      <div className="loading-image">
        <img src="/loading-image.svg" alt="" />
      </div>
    </div>
  )
}

export default LoginLoading
