import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import ProjectNameCSS from './styles/ProjectName.module.css'
import { Button } from './CreateWorkSpace'

const ProjectName = ({ inputChangeHandler, value }) => {
  let match = useRouteMatch()

  const [user, setUser] = useState(null)
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  }, [])

  return (
    <div>
      <article className={ProjectNameCSS.wrapper}>
        <div className={ProjectNameCSS.email}>
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>

        <div className={ProjectNameCSS.centerWrapper}>
          <h4> Step 2 of 3</h4>
          <h1>What is your team working on right now ?</h1>
          <h4>
            This could be anything- a project, campiagn, event or the deal you
            are trying to close
          </h4>
          <input
            type="text"
            placeholder="Ex: Q1 Budget, Project Alpha"
            maxLength="80"
            className={ProjectNameCSS.inputBox}
            onChange={inputChangeHandler}
            value={value}
          />
          <span className={ProjectNameCSS.charLimit}>
            Maximum 80 characters
          </span>

          <Link to={`${match.url}/step3`}>
            <Button
              style={
                value.length > 1
                  ? {
                      backgroundColor: '#00b87c',
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'center'
                    }
                  : { display: 'flex', justifyContent: 'center' }
              }
            >
              Continue
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ProjectName
