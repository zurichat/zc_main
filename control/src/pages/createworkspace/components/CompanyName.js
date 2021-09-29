import React, { useState, useEffect } from 'react'
import CompanyNameCSS from '../styles/CompanyName.module.css'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
function CompanyName({ input }) {
  const [user, setUser] = useState(null)
  const [orgId, setOrgId] = useState(null)
  const [orgName, setOrgName] = useState('')
  let match = useRouteMatch()
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (user) {
      setUser(user)
      console.log(user)
    }
  }, [])

  const createUserOrg = () => {
    axios
      .post(
        'https://api.zuri.chat/organizations',
        {
          creator_email: user.email
        },
        {
          headers: {
            Authorization: 'Bearer ' + user.token
          }
        }
      )
      .then(res => {
        console.log(res)
        localStorage.clear()
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  //  return  axios.patch(`https://api.zuri.chat/organizations/${res.data.data.InsertedID}/Zuri Chat`,  {
  //         "organization_name": orgName
  //     },
  //   { headers: {
  //     Authorization: 'Bearer ' + user.token
  //   }
  // })

  return (
    <div>
      <article className={CompanyNameCSS.wrapper}>
        <div className={CompanyNameCSS.email}>
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>

        <div className={CompanyNameCSS.centerWrapper}>
          <h4> Step 1 of 3</h4>
          <h1>What is the name of your company or team?</h1>
          <h4>
            This will be the name of your workspace. Choose something that your
            team will recognise
          </h4>
          <input
            type="text"
            placeholder="Ex: The Brand Hub"
            maxLength="50"
            onChange={e => setOrgName(e.target.value)}
            className={CompanyNameCSS.inputBox}
          />
          <span className={CompanyNameCSS.charLimit}>
            Maximum 50 characters
          </span>
          <Link to={`${match.url}/step2`}>
            {' '}
            <button
              style={
                input.length > 1
                  ? { backgroundColor: '#00b87c', color: 'white' }
                  : { backgroundColor: 'revert' }
              }
              onClick={createUserOrg}
            >
              {' '}
              Continue
            </button>{' '}
          </Link>
        </div>
      </article>
    </div>
  )
}

export default CompanyName
