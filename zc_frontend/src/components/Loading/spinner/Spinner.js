import React from 'react'
import './Spinner.css'
import zuriicon from '../../../assets/loadingPageImages/zurilogo.png'

const Spinner = () => {
  return (
    <div className="spinner-1">
      <div>
        <img src={zuriicon} className="zuri-icon" alt="zuri icon" />
      </div>
    </div>
  )
}
export default Spinner
