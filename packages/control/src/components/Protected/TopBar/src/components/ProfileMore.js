import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "../styles/Profile.module.css";

import { ProfileContext } from "../context/ProfileModal";
import { TopbarContext } from "../context/Topbar";
// import 'react-notifications/lib/notifications.css'
import toast, { Toaster } from "react-hot-toast";
import Preferences from "./Preferences";
import { getCurrentWorkspace, getUser } from "../utils/common";
import { authAxios } from "../utils/Api";

export const Dropdown = () => {
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
            View preferences
          </p>
          <p className={styles.paragraph}>View your files</p>
          <p onClick={() => toggleUserPresence()} className={styles.paragraph}>
            Set yourself {presence === "true" ? "away" : "active"}
          </p>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.paragraphNull} onClick={CopyToClipBoard}>
            Copy member ID
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
            <p className={styles.paragraphNull}>Account settings</p>
          </a>
        </div>
      </div>
      {reusableModal === "preference" && <Preferences />}
      <Toaster />
    </>
  );
};
