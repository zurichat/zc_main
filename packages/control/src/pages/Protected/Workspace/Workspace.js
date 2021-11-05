import { lazily } from "react-lazily";
import React from "react";
import { useParams } from "react-router-dom";
const { Sidebar, TopBar } = lazily(() => import("../../../components"));

export default function Index() {
  const { workspaceId } = useParams();

  React.useEffect(() => {
    document.title = "Workspace";
    localStorage.setItem("currentWorkspace", workspaceId);
  }, [workspaceId]);

  return (
    <>
      <h1>Workspace</h1>

      <TopBar />

      <Sidebar />

      <div className="container">
        <div className="row"></div>
      </div>
    </>
  );
}
