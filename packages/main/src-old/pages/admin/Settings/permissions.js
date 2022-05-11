import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import PreferenceWrapper from "./PreferenceWrapper";

import Messaging from "./Permissions/components/Messaging";
import Invitation from "./Permissions/components/Invitation";
import ChannelManagement from "./Permissions/components/ChannelManagement";
import NotifyUsers from "./components/NotifyUsers";
import Calls from "./components/Calls";
import MessageRetention from "./components/MessageRetention";
import FileRetention from "./components/FileRetention";
import ZuriChannels from "./Permissions/components/ZuriChannels";
import FileUploads from "./Permissions/components/FileUploads";
import ZuriDM from "./Permissions/components/ZuriDM";
import UserGroups from "./Permissions/components/UserGroups";
import MessageEditing from "./Permissions/components/MessageEditing";
import ProfileCustomization from "./Permissions/components/ProfileCustomization";
import WorkspaceAnalytics from "./Permissions/components/WorkspaceAnalytics";
import CustomEmoji from "./Permissions/components/CustomEmoji";
import Zuribot from "./Permissions/components/Zuribot";
import FileSharing from "./Permissions/components/FileSharing";
import Workflow from "./Permissions/components/Workflow";
import Webhooks from "./Permissions/components/Webhooks";
import DownloadWorkflow from "./Permissions/components/DownloadWorkflow";
import WorkflowBuilder from "./Permissions/components/WorkflowBuilder";
import ChannelEmail from "./Permissions/components/ChannelEmail";

const permissions = () => {
  return (
    <>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Messaging"
          text="See who can use @everyone, @channel, and @here."
          btnText="expand"
        >
          <Messaging />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Invitations"
          text="By default, any member can invite new people to your worspace. If you’d like, you can chnagethis so invitations require admins approval."
          btnText="expand"
        >
          <Invitation />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Channel Management"
          text="Choose who can create, archive, remove members, and manage postig permissions in channels."
          btnText="expand"
        >
          <ChannelManagement />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Zuri Chat Connect Channels"
          text="Zuri Chat Connect enables members of your organization to work with partners, vendors, and other third parties in the same channel. Learn more "
          btnText="expand"
        >
          <ZuriChannels />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="File uploads for Zuri Chat Connect"
          text="Choose whether people can upload files from their device - or share files already uploaded in Zurichat to channels and conversations that include people from outside Announcment. Learn more"
          btnText="expand"
        >
          <FileUploads />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Zuri Chat for direct messages"
          text="Choose who can send and accept invitations to DM people outside your organization. Learn More"
          btnText="expand"
        >
          <ZuriDM />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="User Groups"
          text="Set who can create and manage user groups."
          btnText="expand"
        >
          <UserGroups />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Message Editing & Deletion"
          text="Choose when to allow message editing and deletion."
          btnText="expand"
        >
          <MessageEditing />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Profile Customization"
          text="Choose who can add new fields to your workspace’s profile."
          btnText="expand"
        >
          <ProfileCustomization />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Workspace Analytics"
          text="Choose who can view the Analytics Page"
          btnText="expand"
        >
          <WorkspaceAnalytics />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Custom Emoji"
          text="Choose who can manage custom emoji ( )"
          btnText="expand"
        >
          <CustomEmoji />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Zuribot Responses"
          text="Choose who can manage Zuribot responses for your workspace."
          btnText="expand"
        >
          <Zuribot />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Public File Sharing"
          text="Choose whether to allow members to share files externally by creating public URLS."
          btnText="expand"
        >
          <FileSharing />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Workflow creation"
          text="Choose who can create workflows with Workflow Builder in your workspace."
          btnText="expand"
        >
          <Workflow />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Webhooks in Workflow Builder"
          text="Allow external apps or services to start and send data workflows."
          btnText="expand"
        >
          <Webhooks />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Downloads of workflow from responses"
          text="Allow downloads of responses to Workflow Builder forms as CSV file."
          btnText="expand"
        >
          <DownloadWorkflow />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Workflow Builder steps from apps."
          text="Allow apps to add steps to Workflow Builder."
          btnText="expand"
        >
          <WorkflowBuilder />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Channel email addresses"
          text="Choose who can get email addresses for channels in your workspace."
          btnText="expand"
        >
          <ChannelEmail />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Apps & Custom Integrations"
          text="Manage permissions for apps and integrations in the App Directory >"
          btnText="expand"
        ></PreferenceWrapper>
      </AnimateSharedLayout>
    </>
  );
};

export default permissions;
