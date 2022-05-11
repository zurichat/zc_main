import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Members.module.css";
import OptionsPopUp from "./OptionsPopUp";
import { Route } from "react-router";
import { Link } from "react-router-dom";
// import { GetWorkspaceUsers } from '../../../../../../utilities/src/zuri-utilities';
import { GetWorkspaceUsers } from "@zuri/utilities";
import Table from "./Table";
import AdminSettings from "../..";
import UserOrganization from "../../../create-workspace/components/UserOrganization";
import { authAxios } from "../../Utils/Api";
import { getUser, getCurrentWorkspace } from "../../Utils/Common";

const ManageMembers = ({ organization }) => {
  const currentUser = getUser();
  const organisationId = getCurrentWorkspace();
  const [users, setUsers] = useState({});

  // useEffect(async () => {
  //     getMembers()
  //   }, [])

  // const getMembers = async  () => {
  // try {
  //     const res= await authAxios.get(`https://api.zuri.chat/organizations/${organization.id}/members`)

  //     setUsers(res.data.data)
  //         // eslint-disable-next-line no-console
  //         console.log(res.data);

  //     // console.log(res.data)
  // } catch (err) {
  //       if (err) throw err
  // }
  // }

  useEffect(() => {
    if (organisationId) {
      authAxios
        .get(`/organizations/${organisationId}/members`)
        .then(res => {
          setUsers(res.data.data);
          //   console.log(res.data)
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [organisationId]);

  // const users = [
  //     {
  //         _id: 1,
  //         first_name: "Joe",
  //         last_name: "Kunste",
  //         email: "maridbheh@gmail.com",
  //         account_role: "Primary Owner",
  //         verify: "Active",
  //         image_url: "https://bit.ly/sage-adebayo",
  //         account_type: "Default"

  //     },
  //     {
  //         _id: 2,
  //         first_name: "Me",
  //         last_name: "Kunste",
  //         email: "maridbheh@gmail.com",
  //         account_role: "Primary Owner",
  //         verify: "Active",
  //         image_url: "",
  //         account_type: "Default"

  //     },
  //     {
  //         _id: 3,
  //         first_name: "Pee",
  //         last_name: "Thiii",
  //         email: "maridbheh@gmail.com",
  //         account_role: "Full Member",
  //         verify: "Active",
  //         image_url: "https://bit.ly/sage-adebayo",
  //         account_type: "Default"

  //     },
  //     {
  //         _id: 4,
  //         first_name: "Goe",
  //         last_name: "Abhu",
  //         email: "maridbheh@gmail.com",
  //         account_role: "Admin Owner",
  //         verify: "Active",
  //         image_url: "https://bit.ly/sage-adebayo",
  //         account_type: "Default"

  //     },
  // ];

  const [billing, setBilling] = useState("Active");

  const ref = useRef();
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const updateQuery = query => {
    setQuery(query.trim());
  };

  // //const clearQuery = () => {
  //     this.updateQuery("");
  // };

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

  // const getModal = data => {
  //     setShowModal(true);
  // };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // useEffect(() => {
  //     const checkIfClickedOutside = e => {
  //         // If the menu is open and the clicked target is not within the menu,
  //         // then close the menu
  //         if (showModal && ref.current && !ref.current.contains(e.target)) {
  //             setShowModal(false)
  //         }
  //     }

  //     document.addEventListener("mousedown", checkIfClickedOutside)

  //     return () => {
  //         // Cleanup the event listener
  //         document.removeEventListener("mousedown", checkIfClickedOutside)
  //     }
  // }, [showModal])

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
            <OptionsPopUp
              ref={ref}
              toggleModal={toggleModal}
              // name={this.state.dataModal.name}
            />
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
