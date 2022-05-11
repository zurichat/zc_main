import React from "react";
import LoadingWorkspace from "./LoadingWorkspace";
import { WorkspaceProvider } from "./WorkspaceContext";
import { Helmet } from "react-helmet";
import "../../../i18n";
import { useTranslation } from "react-i18next";

const Workspace = () => {
  const { t } = useTranslation();

  return (
    <WorkspaceProvider>
      <Helmet>
        <title>Workspace - Zuri Chat</title>
      </Helmet>
      <LoadingWorkspace />
    </WorkspaceProvider>
  );
};

export default Workspace;
