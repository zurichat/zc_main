import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "../styles/Profile.module.css";

import { ProfileContext } from "../context/profile-modal.context";
import { TopbarContext } from "../context/topbar.context";
import toast, { Toaster } from "react-hot-toast";
import Preferences from "./Preferences";
import { getCurrentWorkspace, getUser } from "../utils/common";
import { authAxios } from "../utils/api";
import useOnClickOutside from "../hooks/useClickOutside";

export const Dropdown = ({ setDropdown }) => {
  const { toggleModalState } = useContext(ProfileContext);
  const [modal, setModal] = useState("");
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
              setReusableModal("preference");
              toggleModalState();
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
