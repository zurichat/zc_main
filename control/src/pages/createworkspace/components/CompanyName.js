import React,{useState,useEffect} from 'react'
import CompanyNameCSS from '../styles/CompanyName.module.css';
import { Link, useRouteMatch } from 'react-router-dom'

function CompanyName({input}) {
  const [user,setUser] = useState(null);
  let match = useRouteMatch()
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(user) {
        setUser(user)
    }  
},[])
  return (
    <div>
      <article className={CompanyNameCSS.wrapper}>
        <div className={CompanyNameCSS.email}>
        {user ? <span>Signed in as {user.email}</span>:null}
        </div>

        <div className={CompanyNameCSS.centerWrapper}>
          <h4> Step 1 of 3</h4>
          <h1>What is the name of your company or team?</h1>
          <h4>
            This will be the name of your workspace. Choose something that your team will recognise
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
