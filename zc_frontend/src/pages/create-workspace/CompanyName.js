import React from 'react'
import CompanyNameCSS from './styles/CompanyName.module.css'
import { Link, useRouteMatch } from 'react-router-dom'
function CompanyName({input}) {
  let match = useRouteMatch()
  return (
    <div>
      <article className={CompanyNameCSS.wrapper}>
        <div className={CompanyNameCSS.email}>
          adimchisylester2@gmail.com <a href="zuri.chat">Change</a>
        </div>

        <div className={CompanyNameCSS.centerWrapper}>
          <h4> Step 1 of 3</h4>
          <h1>What is the name of your company or team</h1>
          <h4>
            This will be the name of your workspace. Choose something that your
            team will recognise
          </h4>
          <input
            type="text"
            placeholder="Ex: The Brand Hub"
            maxLength="50"
            className={CompanyNameCSS.inputBox}
          />
          <span className={CompanyNameCSS.charLimit}>
            Maximum 50 characters
          </span>
          <Link to={`${match.url}/step2`}>
            {' '}
            <button style={input.length > 1 ?{backgroundColor:"#00b87c",color:"white"}:{backgroundColor:"revert"}}> Continue</button>{' '}
          </Link>
        </div>
      </article>
    </div>
  )
}

export default CompanyName
