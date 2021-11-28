import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { GeneralLoading } from "../../../components";

export default function Index({ createWorkspaceData }) {
  const history = useHistory();

  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) history.push("/login");

  if (
    !createWorkspaceData.workspaceName &&
    !createWorkspaceData.workspaceDefaultChannelName
  ) {
    history.push("/create-workspace");
  }

  const WorkspaceSetup = async () => {
    // Create a Workspace
    const createWorkspaceApiCall = await axios.post(
      "https://api.zuri.chat/organizations",
      { creator_email: user.email },
      { headers: { Authorization: "Bearer " + user.token } }
    );

    const workspaceId = createWorkspaceApiCall.data.data.organization_id;

    // Rename the Workspace
    const renameWorkspaceApiCall = await axios.patch(
      `https://api.zuri.chat/organizations/${workspaceId}/name`,
      { organization_name: createWorkspaceData.workspaceName },
      { headers: { Authorization: "Bearer " + user.token } }
    );

    // Get Creators MemberId
    const getCreatorMemberIdApiCall = await axios.get(
      `https://api.zuri.chat/organizations/${workspaceId}/members/?query=${user.email}`
    );
    const creatorMemberId = getCreatorMemberIdApiCall.data.data[0]._id;

    // Install Channels Plugin and DM Plugin
    // const installChannelsPluginApiCall = await axios.post(
    //   `https://channels.zuri.chat/api/v1/install`,
    //   { organisation_id: workspaceId, user_id: creatorMemberId },
    //   { headers: { Authorization: "Bearer " + user.token } }
    // );
    // const installDmPluginApiCall = await axios.post(
    //   `https://dm.zuri.chat/api/v1/install`,
    //   { organisation_id: workspaceId, user_id: creatorMemberId },
    //   { headers: { Authorization: "Bearer " + user.token } }
    // );
    // Install Messaging Plugin
    const installMessagingPluginInCore = await axios.post(
      `https://api.zuri.chat/organizations/${workspaceId}/plugins`,
      {
        organisation_id: workspaceId,
        user_id: creatorMemberId
        // memberEmails : createWorkspaceData.coworkersEmail
      },
      { headers: { Authorization: "Bearer " + user.token } }
    );
    const installMessagingPluginApiCall = await axios.post(
      `https://chat.zuri.chat/api/v1/install`,
      { organisation_id: workspaceId, user_id: creatorMemberId },
      { headers: { Authorization: "Bearer " + user.token } }
    );
    // Redirect
    localStorage.setItem("currentWorkspace", workspaceId);
    history.push(`/workspace/${workspaceId}`);
  };

  React.useEffect(() => {
    if (
      createWorkspaceData.workspaceName &&
      createWorkspaceData.workspaceDefaultChannelName
    ) {
      WorkspaceSetup();
    }
  }, []);

  return (
    <GeneralLoading
      text={`Launching ${createWorkspaceData.workspaceName} Workspace`}
    />
  );
}
