import React, { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import PreferenceWrapper from "./PreferenceWrapper";

import JoinWorkspace from "./components/JoinWorkspace";
import WorkspaceLanguage from "./components/WorkspaceLanguage";
import Guidelines from "./components/Guidelines";
import DisplayName from "./components/DisplayName";
import JoinChannel from "./components/JoinChannel";
import NotifyUsers from "./components/NotifyUsers";
import Calls from "./components/Calls";
import DisplayPronoun from "./components/DisplayPronoun";
import MessageRetention from "./components/MessageRetention";
import FileRetention from "./components/FileRetention";
import DisplayEmail from "./components/DisplayEmail";
import DefaultChannels from "./components/DefaultChannel";
import { authAxios } from "../Utils/Api";
import { getCurrentWorkspace } from "../Utils/Common";

// syling for the delete workspace
import classes from "./styles/AdminSettings.css";

import styles from "./styles/preference.module.css";
import { Link } from "react-router-dom";

const adminSettings = () => {
  const [logoUrl, setLogoUrl] = useState({});

  useEffect(() => {
    const currentWorkspaceId = getCurrentWorkspace();

    if (currentWorkspaceId) {
      authAxios
        .get(`/organizations/${currentWorkspaceId}`)
        .then(res => {
          setLogoUrl(res.data.data.logo_url);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [logoUrl]);

  return (
    <>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Joining this workspace"
          text="Choose how people join your workspace by accepting an email invitation or signing up with an email from an approved domain. If you enable the setting to let people with an email address on an approved domain join automatically. Zuri chat will generate a link that anyone with an approved email address can use to confirm their email and sign up"
          btnText="expand"
        >
          <JoinWorkspace />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Workspace language"
          text="Set the language for your workspace. This affects system notifications, Zurichat messages and sign up emails. Your workspace language is currently English (US)"
          btnText="expand"
        >
          <WorkspaceLanguage />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Default channels"
          text="Choose the channels new members will automatically be added to in addition to #general"
          btnText="expand"
        >
          <DefaultChannels />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Display new guidelines"
          text="Explain the guidelines you want memebers to follow when they say display names"
          btnText="expand"
        >
          <Guidelines />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Name display"
          text="If you’d like, Zuri chat can show your members full name instead of their shorter display names."
          btnText="expand"
        >
          <DisplayName />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Email display"
          text="Choose whether to display members email address in profile"
          btnText="expand"
        >
          <DisplayEmail />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Pronouns display"
          text="Choose whether to display members pronouns (ex: they/them/theirs) in their zurichat profiles"
          btnText="expand"
        >
          <DisplayPronoun />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Do not disturb"
          text="Set default Do Not Disturb hours for members of your workspace."
          btnText="expand"
        >
          {/* Password input goes uunder here */}
          {/* <SavePassword /> */}
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Channel join & Leave messages"
          text="If you’d like, Zurichat can let everyone in the channel know when someone leaves"
          btnText="expand"
        >
          <JoinChannel />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Notify of new users"
          text="Choose whether your members are notified when new users come in"
          btnText="expand"
        >
          <NotifyUsers />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Calls"
          text="Choose how members make calls in ZuriChat. You can use Zuri Chat itself or a third-party calling app"
          btnText="expand"
        >
          <Calls />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Message Retention & Deletion"
          text="By default, Zuri chat keeps all your messages for your lifetime of your wworkspace. If you’d like, you can have them delted after a selt amount of time. You can also configure this for specifiv channels.
                In channels shared with other organisations, your retentionsettings will only apply to messages from members of your organisation. Learn more about retention in shared channels."
          btnText="expand"
        >
          <MessageRetention />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="File Retention & Deletion"
          text="By default, Zuri chat keeps all your messages for your lifetime of your workspace. If you’d like, you can have them deleted after a set amount of time.Note that this affects all files - including images, docs, Zuri chat posts and more"
          btnText="expand"
        >
          <FileRetention />
        </PreferenceWrapper>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Workspace icon"
          text="Your workspace icon is used in the desktop an mobile apps, where it’s useful in helping you quickily identiy this workspace"
          btnText="Set Workspace Icon"
          imgsource={logoUrl}
          // imgsource="https://user-images.githubusercontent.com/66237754/137007060-0fe55896-bd5f-4c7e-90bf-da12b527ed58.png"
        >
          {/* Password input goes uunder here */}
          {/* <SavePassword /> */}
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <motion.div layout className={`${styles.settings_wrapper}`}>
          <motion.div layout className={styles.settingsTab}>
            <div layout className={styles.settingleft}>
              {"Workspace name & URL"}
              <span>
                {
                  "Your workspace name is Zuri Chat and your URL is https://zuri.zuriChat.com"
                }
              </span>
            </div>
            <div className={styles.settingsright}>
              <Link to="/admin/name">
                {" "}
                <button> Set workspace name & URL </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <div className={classes.deleteContainer}>
          <div className={classes.deleteContainerTab}>
            <div className={classes.floatleft}>
              <div>Delete workspace</div>
              <div>
                <span>
                  Deleting a Zuri Chat workspace can't be undone. All messages
                  and files will irretrievable. Please use caution and consider
                  exporting your data
                  <br />
                  before deletion.
                  <br /> <br /> Note: Don’t delete your workspace if you just
                  want to change your
                  <br />
                  worskspace’s URL or name. You also might want to export data
                  <br /> before deleting workspace
                </span>
              </div>
            </div>
            <div className={classes.floatright}>
              <Link to="/admin/delete">
                <button>Delete Workspace</button>
              </Link>
            </div>
          </div>
        </div>
      </AnimateSharedLayout>
    </>
  );
};

export default adminSettings;
