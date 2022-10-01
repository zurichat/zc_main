import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import CompanyName from "./CompanyName";
import WorkspaceHome from "./WorkspaceHome";
import LaunchPage from "./LaunchPage";
import Step3 from "./Step3";
import ProjectName from "./ProjectName";

const CreateWorkspaces = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("input", input);
  }, [input]);

  const handleInputChange = event => {
    setInput(event.target.value);
  };
  let workspaceRoute = "/create-workspace";
  return (
    <div>
      <Route path={workspaceRoute} exact>
        <WorkspaceHome />
      </Route>
      <Route path={`${workspaceRoute}/step1`} exact>
        <CompanyName input={input} />
      </Route>
      <Route path={`${workspaceRoute}/step1/step2`} exact>
        <ProjectName value={input} inputChangeHandler={handleInputChange} />
      </Route>
      <Route path={`${workspaceRoute}/step1/step2/step3`} exact>
        <Step3 input={input} />
      </Route>
      <Route path={`${workspaceRoute}/step1/step2/step3/launch`}>
        <LaunchPage />
      </Route>
    </div>
  );
};
export default CreateWorkspaces;
