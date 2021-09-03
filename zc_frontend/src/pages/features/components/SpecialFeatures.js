import React from 'react'
import '../styles/SpecialFeatures.css'
function SpecialFeatures() {
  return (
    <div className="features">
      <h1>Special Features you didnt know you needed</h1>
      <p>
        zuri chat is different from competitors has it has special features
        absent in other similar platforms
      </p>
      <div className="links">
        <a href="#">
          <img src="https://img.icons8.com/office/16/000000/administrator-female.png" />{' '}
          <br />
          Animated Avatar Lounge
          <br />
          <img
            src="https://img.icons8.com/material-rounded/24/000000/long-arrow-right.png"
            className="arrow"
          />
        </a>
        <a href="#">
          <img src="https://img.icons8.com/ios/50/000000/goal.png" /> <br />
          Company Goals
          <br />
          <img
            src="https://img.icons8.com/material-rounded/24/000000/long-arrow-right.png"
            className="arrow"
          />
        </a>
        <a href="#">
          <img src="https://img.icons8.com/ios-filled/50/000000/standing-man.png" />{' '}
          <br />
          Accessibility
          <br />
          <img
            src="https://img.icons8.com/material-rounded/24/000000/long-arrow-right.png"
            className="arrow"
          />
        </a>
        <a href="#">
          <img src="https://img.icons8.com/ios/50/000000/compare.png" /> <br />
          Company Files
          <br />
          <img
            src="https://img.icons8.com/material-rounded/24/000000/long-arrow-right.png"
            className="arrow"
          />
        </a>
      </div>
    </div>
  )
}

export default SpecialFeatures
