import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import CompanyName from './CompanyName'
import WorkspaceHome from './WorkspaceHome'
import LaunchPage from './LaunchPage'
import Step3 from './Step3'
import ProjectName from './ProjectName'

const CreateWorkSpaces = () => {
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('input', input)
  }, [input])

  const handleInputChange = event => {
    setInput(event.target.value)
  }
  let workspaceRoute = '/createworkspace'
  return (
    <div>
      <Route path={workspaceRoute} exact>
        <WorkspaceHome />
      </Route>
      <Route path={`${workspaceRoute}/company-name`} exact>
        <CompanyName input={input} />
      </Route>
      <Route path={`${workspaceRoute}/project-name`} exact>
        <ProjectName value={input} inputChangeHandler={handleInputChange} />
      </Route>
      <Route path={`${workspaceRoute}/teammates`} exact>
        <Step3 input={input} />
      </Route>
      <Route path={`${workspaceRoute}/launch`}>
        <LaunchPage />
      </Route>
    </div>
  )
}
export default CreateWorkSpaces
