import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "../styles/Profile.module.css";

import { useTranslation } from "react-i18next";

import { ProfileContext } from "../context/profile-modal.context";
import { TopbarContext } from "../context/topbar.context";
import toast, { Toaster } from "react-hot-toast";
import Preferences from "./Preferences";
import { getCurrentWorkspace, getUser } from "../utils/common";
import { authAxios } from "../utils/api";

export const Dropdown = () => {
  const { t } = useTranslation();

  const { toggleModalState } = useContext(ProfileContext);
  const [modal, setModal] = useState("");

  const user = getUser();
  const currentWorkspace = getCurrentWorkspace();
  const [workspaceData, setWorkspaceData] = React.useState({});

  useEffect(() => {
    if (currentWorkspace) {
      authAxios
        .get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data);
          // console.log(res.data.data)
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [currentWorkspace]);

  // console.log('workspace==>', workspaceData)

  const state = useContext(TopbarContext);
  const { presence, toggleUserPresence, reusableModal, setReusableModal } =
    state;

  const getText = useRef("");

  const CopyToClipBoard = () => {
    const copiedText = getText.current.innerHTML;
    navigator.clipboard.writeText(copiedText).then(
      () => {
        toast.success("Member ID Copied", {
          position: "bottom-center"
        });
      },
      err => {
        toast.error(err?.message, {
          position: "bottom-center"
        });
      }
    );
  };

  return (
    <>
      <div className={styles.profileDropDown}>
        <div className={styles.topSection}>
          <p
            onClick={() => {
              setReusableModal("preference");
              toggleModalState();
              // console.log(reusableModal)
            }}
            className={styles.paragraph}
          >
            {t("profilemore_preferences")}
          </p>
          <p className={styles.paragraph}>{t("profile_view_files")}</p>
          <p onClick={() => toggleUserPresence()} className={styles.paragraph}>
            {t("profile_set_yourself")}{" "}
            {presence === "true" ? "away" : "active"}
          </p>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.paragraphNull} onClick={CopyToClipBoard}>
            {t("profile_copy_member")}
          </p>
          <small className={styles.small} ref={getText}>
            U031203013
          </small>
          <a
            href={
              workspaceData.creator_email === user.email
                ? "/admin/settings"
                : "/settings"
            }
            style={{ color: "black", fontWeight: "normal" }}
          >
            <p className={styles.paragraphNull}>
              {t("profile_account_settings")}
            </p>
          </a>
        </div>
      </div>
      {reusableModal === "preference" && <Preferences />}
      <Toaster />
    </>
  );
};
