import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "../styles/Profile.module.css";

import { ProfileContext } from "../context/profile-modal.context";
import { TopbarContext } from "../context/topbar.context";
import toast, { Toaster } from "react-hot-toast";
import Preferences from "./Preferences";
import { getCurrentWorkspace, getUser } from "../utils/common";
import { authAxios } from "../utils/api";
import useOnClickOutside from "../hooks/useClickOutside";

import { useTranslation } from "react-i18next";

export const Dropdown = ({ setDropdown, setModal }) => {
  const { t } = useTranslation();

  const { toggleModalState } = useContext(ProfileContext);
  const ref = useRef();
  const user = getUser();
  const currentWorkspace = getCurrentWorkspace();
  const [workspaceData, setWorkspaceData] = React.useState({});
  useOnClickOutside(ref, () => setDropdown(false));
  useEffect(() => {
    if (currentWorkspace) {
      authAxios
        .get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [currentWorkspace]);

  const state = useContext(TopbarContext);
  const { presence, toggleUserPresence, reusableModal, setReusableModal } =
    state;

  const getText = useRef("");

  const CopyToClipBoard = () => {
    const copiedText = getText.current.innerHTML;
    navigator.clipboard.writeText(copiedText).then(
      () => {
        toast.success("Member ID Copied", {
          position: "top-right"
        });
      },
      err => {
        toast.error(err?.message, {
          position: "top-right"
        });
      }
    );
  };

  return (
    <>
      <div className={styles.profileDropDown} ref={ref}>
        <div className={styles.topSection}>
          <p
            onClick={() => {
              setModal(() => "preference");
              toggleModalState();
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
