import React, { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import PreferenceWrapper from "../preference-wrapper/PreferenceWrapper";

import Calls from "../../../components/calls/Calls";
import DefaultChannels from "../../../components/default-channel/DefaultChannel";
import DisplayEmail from "../../../components/display-email/DisplayEmail";
import DisplayName from "../../../components/display-name/DisplayName";
import DisplayPronoun from "../../../components/display-pronoun/DisplayPronoun";
import FileRetention from "../../../components/file-retention/FileRetention";
import Guidelines from "../../../components/guidelines/Guidelines";
import JoinChannel from "../../../components/join-channel/JoinChannel";
import JoinWorkspace from "../../../components/join-workspace/JoinWorkspace";
import MessageRetention from "../../../components/message-retention/MessageRetention";
import NotifyUsers from "../../../components/notify-user/NotifyUsers";
import WorkspaceLanguage from "../../../components/workspace-language/WorkspaceLanguage";
import { authAxios } from "../manage-workspace/utils/Api";
import { getCurrentWorkspace } from "../manage-workspace/utils/Common";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "../manage-workspace/ManageWorkspace.css";
import styles from "../manage-workspace/preference.module.css";

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

  const { t } = useTranslation();

  return (
    <>
      <div className={classes.overall}>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("join_manager")}
            text={t("choose_manage")}
            btnText={t("expand_manage")}
          >
            <JoinWorkspace />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("lang_manage")}
            text={t("set_manage")}
            btnText={t("expand_manage")}
          >
            <WorkspaceLanguage />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("default_manage")}
            text={t("channel_manage")}
            btnText={t("expand_manage")}
          >
            <DefaultChannels />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("display_manage")}
            text={t("guidelines_manage")}
            btnText={t("expand_manage")}
          >
            <Guidelines />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("name_manage")}
            text={t("members_manage")}
            btnText={t("expand_manage")}
          >
            <DisplayName />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("email_manage")}
            text={t("display_manage")}
            btnText={t("expand_manage")}
          >
            <DisplayEmail />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("pronouns_manage")}
            text={t("membersPronoun_manage")}
            btnText={t("expand_manage")}
          >
            <DisplayPronoun />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("dnb_manage")}
            text={t("dnbdefault_manage")}
            btnText={t("expand_manage")}
          ></PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("join_manage")}
            text={t("know_manage")}
            btnText={t("expand_manage")}
          >
            <JoinChannel />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("notify_manage")}
            text={t("users_manage")}
            btnText={t("expand_manage")}
          >
            <NotifyUsers />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("calls_manage")}
            text={t("third_manage")}
            btnText={t("expand_manage")}
          >
            <Calls />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("message_manage")}
            text={t("lifetime_manage")}
            btnText={t("expand_manage")}
          >
            <MessageRetention />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("file_manage")}
            text={t("posts_manage")}
            btnText={t("expand_manage")}
          >
            <FileRetention />
          </PreferenceWrapper>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <PreferenceWrapper
            title={t("icon_manage")}
            text={t("desktop_manage")}
            btnText={t("seticon_manage")}
            imgsource={logoUrl}
          ></PreferenceWrapper>
        </AnimateSharedLayout>

        <AnimateSharedLayout>
          <motion.div layout className={`${styles.settings_wrapper}`}>
            <motion.div layout className={styles.settingsTab}>
              <div layout className={styles.settingleft}>
                {t("url_manage")}
                <span>{t("link_manage")}</span>
              </div>
              <div className={styles.settingsright}>
                <Link to="/admin/settings/ManageWorkspace/ChangeWorkspaceName">
                  {" "}
                  <button> {t("setname_manage")} </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </AnimateSharedLayout>

        <AnimateSharedLayout>
          <div className={classes.deleteContainer}>
            <div className={classes.deleteContainerTab}>
              <div className={classes.floatleft}>
                <div>{t("delete_manage")}</div>
                <div>
                  <span>
                    {t("delzuri_manage")}
                    <br />
                    {t("before_manage")}
                    <br /> <br /> {t("note_manage")}
                    <br />
                    {t("urlspace_manage")}
                    <br /> {t("beforedelete_manage")}
                  </span>
                </div>
              </div>
              <div className={classes.floatright}>
                <Link to="/admin/workspace/delete">
                  <button>{t("delwork_manage")}</button>
                </Link>
              </div>
            </div>
          </div>
        </AnimateSharedLayout>
      </div>
    </>
  );
};

export default adminSettings;
