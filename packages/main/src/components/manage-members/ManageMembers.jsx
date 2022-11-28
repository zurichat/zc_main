import React, { useState, useRef, useEffect } from "react";
import styles from "../manage-members/Members.module.css";
import OptionsPopUp from "../options-popup/OptionsPopUp";
import { Link } from "react-router-dom";
import Table from "../table/Table";
import AdminSettings from "../../pages/protected/admin-settings/AdminSettings";
import { authAxios } from "../manage-members/utils/Api";
import { getUser, getCurrentWorkspace } from "../manage-members/utils/Common";

const ManageMembers = ({ organization }) => {
  const currentUser = getUser();
  const organisationId = getCurrentWorkspace();
  const [users, setUsers] = useState({});

  useEffect(() => {
    if (organisationId) {
      authAxios
        .get(`/organizations/${organisationId}/members`)
        .then(res => {
          setUsers(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [organisationId]);

  const [billing, setBilling] = useState("Active");

  const ref = useRef();
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const updateQuery = query => {
    setQuery(query.trim());
  };

  const showingMembers =
    query === ""
      ? users
      : users.filter(
          userF =>
            userF.first_name.toLowerCase().includes(query.toLowerCase()) ||
            userF.last_name.toLowerCase().includes(query.toLowerCase()) ||
            userF.email.toLowerCase().includes(query.toLowerCase()) ||
            userF.image_url.toLowerCase().includes(query.toLowerCase()) ||
            userF.verify.toLowerCase().includes(query.toLowerCase()) ||
            userF.account_type.toLowerCase().includes(query.toLowerCase()) ||
            userF.account_role.toLowerCase().includes(query.toLowerCase())
        );

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AdminSettings>
      <div className={styles.membersWrap}>
        <div className={styles.banner}>
          Looking to use Slack with people outside your organization? Give
          external teams or individuals restricted access to your workspace.
          <Link to={{ pathname: "/" }}>Learn more</Link>
        </div>
        <div className={styles.header}>
          <h1 className={styles.mainHeading}> Manage Members</h1>
          <div className={styles.headerSub}>
            <button className={styles.btn1}>Export Member List </button>
            <button className={styles.btn2}>Invite People</button>
          </div>
        </div>
        <div>
          <div className={styles.listTop}>
            <input
              className={styles.searchMembers}
              type="text"
              placeholder="search current members"
              value={query}
              onChange={event => updateQuery(event.target.value)}
            />
            <button className={styles.filter} onClick="">
              Filters
            </button>
          </div>
          {showModal ? (
            <OptionsPopUp ref={ref} toggleModal={toggleModal} />
          ) : null}
          <Table
            users={users}
            billing={billing}
            toggleModal={toggleModal}
            showingContacts={showingMembers}
          />
        </div>
      </div>
    </AdminSettings>
  );
};

export default ManageMembers;
