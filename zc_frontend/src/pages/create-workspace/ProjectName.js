import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import ProjectNameCSS from './styles/ProjectName.module.css'

function ProjectName() {
  let match = useRouteMatch()
  return (
    <div>
      <article className={ProjectNameCSS.wrapper}>
        <div className={ProjectNameCSS.email}>
          adimchisylester2@gmail.com <a href="zuri.chat">Change</a>
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
          />
          <span className={ProjectNameCSS.charLimit}>
            Maximum 80 characters
          </span>
          <Link to={`${match.url}/step3`}>
            <button> Continue</button>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ProjectName
