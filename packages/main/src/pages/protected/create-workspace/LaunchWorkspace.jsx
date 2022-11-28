import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_API_URL } from "@zuri/utilities";
import { GeneralLoading } from "../../../components";
import { useTranslation } from "react-i18next";

export default function Index({ createWorkspaceData }) {
  const history = useHistory();

  const user = JSON.parse(sessionStorage.getItem("user"));

  const { t } = useTranslation();

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
      `${BASE_API_URL}/organizations`,
      { creator_email: user.email },
      { headers: { Authorization: "Bearer " + user.token } }
    );
    console.log(createWorkspaceApiCall);
    const workspaceId = createWorkspaceApiCall.data.data.organization_id;

    // Rename the Workspace
    const renameWorkspaceApiCall = await axios.patch(
      `${BASE_API_URL}/organizations/${workspaceId}/name`,
      { organization_name: createWorkspaceData.workspaceName },
      { headers: { Authorization: "Bearer " + user.token } }
    );

    // Get Creators MemberId
    const getCreatorMemberIdApiCall = await axios.get(
      `${BASE_API_URL}/organizations/${workspaceId}/members/?query=${user.email}`
    );
    const creatorMemberId = getCreatorMemberIdApiCall.data.data[0]._id;

    // Install Messaging Plugin in ZC Core
    const fetchPluginsFromMarketplaceApiCall = await axios.get(
      `${BASE_API_URL}/marketplace/plugins`
    );
    const messagingPluginId =
      fetchPluginsFromMarketplaceApiCall.data.data.plugins.find(plugin =>
        plugin.template_url.includes("chat.zuri.chat")
      )?.id;
    const installMessagingPluginInCore = await axios.post(
      `${BASE_API_URL}/organizations/${workspaceId}/plugins`,
      {
        plugin_id: messagingPluginId,
        user_id: creatorMemberId
        // memberEmails : createWorkspaceData.coworkersEmail
      },

      { headers: { Authorization: "Bearer " + user.token } }
    );

    // Install Messaging Plugin in ZC Main
    const installMessagingPluginApiCall = await axios.post(
      `https://chat.zuri.chat/api/v1/install`,
      { organisation_id: workspaceId, user_id: creatorMemberId },
      { headers: { Authorization: "Bearer " + user.token } }
    );
    // Redirect

    // Adding new code

    const short_id = `${workspaceId.slice(4, 6)}${workspaceId.slice(
      6,
      8
    )}${workspaceId.slice(-3, -1)}`;

    localStorage.setItem("currentWorkspace", workspaceId);
    localStorage.setItem("currentWorkspaceShort", short_id);

    // history.push(`/workspace/${workspaceId}`);
    history.push(`/create-workspace/step-3`);
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
      text={`${t("create_workspace_twenty_seven")} ${
        createWorkspaceData.workspaceName
      } ${t("create_workspace_twenty_eight")}`}
    />
  );
}
