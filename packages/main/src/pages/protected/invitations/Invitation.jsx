import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSettings from "../../../../src/pages/protected/admin-settings/AdminSettings";
import { FiSearch } from "react-icons/fi";
import styles from "../invitations/Invitation.module.css";
import InviteModal from "../invite-modal/InviteModal";
import { GetUserInfo } from "@zuri/utilities";
import axios from "axios";

const Invitation = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [organizationName, setOrganizationName] = useState("");
  const [pendingInvite, setPendingInvite] = useState([]);
  const getUserInfo = async () => {
    const useInfo = await GetUserInfo();
    setUserInfo(useInfo);
  };

  useEffect(() => {
    getUserInfo();
  }, [userInfo.token]);
  useEffect(() => {}, [pendingInvite]);

  return (
    <AdminSettings>
      <div className={styles.inviteContainer}>
        <div className={styles.adminInvitesContent}>
          <div className={styles.invitesHeader}>
            <div className={styles.invitesHeaderContent}>
              <div className={styles.invitesHeaderTxt}>
                <div className={styles.invitesHeaderTitle}>Invitations</div>
                <p className={styles.invitesDescr}>
                  Invite others to join your workspace. You can also allow
                  members to sign up using your company's email domain.
                  <Link
                    to={{ pathname: "/admin/settings" }}
                    className="invitation-link"
                  >
                    Setup your email domain
                  </Link>
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className={styles.invitesBtn}
              >
                Invite People
              </button>
            </div>
            {showModal ? (
              <InviteModal
                setShowModal={setShowModal}
                userInfo={userInfo}
                organizationName={organizationName}
                setPendingInvite={setPendingInvite}
              />
            ) : (
              ""
            )}
          </div>
          <div className={styles.invitesTab}>
            <div className={styles.tabMenu}>
              <button className={styles.btnTab}>Pending</button>
              <button className={styles.btnTab}>Accepted</button>
            </div>
            <div className={styles.tabPanel}>
              <div className={styles.invitesSearchCon}>
                <div className={styles.inputContainer}>
                  <FiSearch className={styles.icon} />
                  <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="Search invitations by email"
                  />
                </div>
              </div>
              <div className={styles.adminInvitesContainer}>
                <p className={styles.adminInviteRes}>
                  {pendingInvite.length > 0
                    ? pendingInvite.map((user, id) => {
                        {
                          user;
                        }
                      })
                    : "There are currently no pending invitation"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminSettings>
  );
};

export default Invitation;
