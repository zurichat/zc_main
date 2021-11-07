import React from "react";
// Components
import WorkspaceHeader from "./WorkspaceHeader";
import { useWorkspaceContext } from "./WorkspaceContext";
import LoginLoading from "../../../components/LoginLoading";

// Styles
import styles from "../style/workspace.module.css";
import WorkspaceCard from "./WorkspaceCard";
import WorkspaceFooter from "./WorkspaceFooter";
import JoinWorkspaceCard from "./JoinWorkspaceCard";
import WorkspaceError from "./Error";

const LoadingWorkspace = () => {
  const { pageLoading, error } = useWorkspaceContext();
  return (
    <>
      {/* { pageLoading 
      ?  (<LoginLoading />) 
      : error ? (<WorkspaceError error={error} />) :  */}
      {/* ( */}
      <div className={`${styles.workspace}`}>
        <main className={`${styles.workspace_container}`}>
          <WorkspaceHeader />
          <article className={`${styles.workspace_wrapper}`}>
            <WorkspaceCard />
          </article>
          <section className={`${styles.joinworkspace_wrapper}`}>
            <JoinWorkspaceCard />
          </section>
        </main>
        <WorkspaceFooter />
      </div>
      {/* ) */}
      {/* } */}
    </>
  );
};

export default LoadingWorkspace;
