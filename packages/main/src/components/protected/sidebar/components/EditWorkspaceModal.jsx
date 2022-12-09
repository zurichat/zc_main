import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdClose as Close } from "react-icons/io";
import styles from "../styles/EditWorkspaceModal.module.css";

import { useTranslation } from "react-i18next";

const EditWorkspaceModal = ({ workSpace, editDetails, setEditDetails }) => {
  const { t } = useTranslation();
  
  // getting current workspace id
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  const orgs = JSON.parse(sessionStorage.getItem("organisations"));
  const orgsLength = orgs !== null ? orgs.length : 0;
  let workspaceURL = "";
  const editName = `   ${t("edit_work_details")} ${workSpace?.name}`;

  useEffect(() => {
    const settingworkspace = () => {
      for (let i = 0; i < orgsLength; i++) {
        if (currentWorkspace === orgs[i].id) {
          workspaceURL = orgs[i].workspace_url;
          setWorkspaceURLChange(orgs[i].workspace_url);
        }
      }
    };
    settingworkspace();
  }, []);

  const orgName = localStorage.getItem("orgName") || null;
  const [workspaceNameChange, setWorkspaceNameChange] = useState(`${orgName}`);
  const [workspaceURLChange, setWorkspaceURLChange] = useState(
    // `${orgs[0].workspace_url}`
    `${workspaceURL}`
    // ""
  );

  const HandleWorkspaceNameChange = e => {
    setWorkspaceNameChange(e.target.value);
  };

  const HandleWorkspaceURLChange = e => {
    setWorkspaceURLChange(e.target.value);
  };

  const handleEditDetails = e => {
    setEditDetails(!editDetails);
    e.preventDefault();
  };

  const ChangeNameApi = async () => {
    const organizationID = localStorage.getItem("currentWorkspace") || null;
    const userToken = sessionStorage.getItem("token") || null;
    if (organizationID && userToken) {
      const config = {
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${userToken}`
        }
      };
      const response = await axios.patch(
        `${BASE_API_URL}/organizations/${organizationID}/name`,
        {
          organization_name: `${workspaceNameChange}`
        },
        config
      );
      const response2 = await axios.patch(
        `${BASE_API_URL}/organizations/${organizationID}/url`,
        {
          url: `${workspaceURLChange}`
        },
        config
      );
      window.location.reload();
      // setEditDetails(!editDetails);
      return response, response2;
    } else {
      throw new Error("Invalid information");
    }
  };

  return (
    // <div className={`${editDetails ? "week" : styles.editWorkspaceWrapper}`}>
    <div>
      <div>
        <p onClick={handleEditDetails}>{t("edit_work_details")}</p>
        <div
          onClick={handleEditDetails}
          className={` ${
            editDetails
              ? styles.editWorkshopOption
              : styles.editWorkshopOptionNone
          }`}
        >
          <div
            onClick={e => e.stopPropagation()}
            className={`${styles.editWorkshopInnerDIv}`}
          >
            <div
              className={`d-flex align-items-center justify-content-between `}
            >
              <p>{editName}</p>
              <div
                onClick={handleEditDetails}
                className={`${styles.workspacecloseIcon}`}
              >
                <Close />
              </div>
            </div>
            <p>
              {t("edit_work_textA")} <br /> {t("edit_work_textB")}
              {/* Add a name to represent your company or organization. This name
              will <br /> also be shown to other organizations that you work
              with using Slack. */}
            </p>
            <div>
              <label htmlFor="work_space_name" className=" font-semibold ">
                {t("edit_work_name")}
              </label>
              <input
                value={workspaceNameChange}
                onChange={HandleWorkspaceNameChange}
                type="text"
                id="work_space_name"
              />
            </div>
            <div>
              <label htmlFor="work_space_url">{t("edit_work_url")}</label>
              <input
                value={workspaceURLChange}
                onChange={HandleWorkspaceURLChange}
                type="text"
                id="work_space_url"
              />
            </div>
            <p className={`${styles.editWorkshopP} `}>
              {t("edit_url_textA")} <br /> {t("edit_url_textB")}
              {/* Your workspace URL can only contain lowercase letters, numbers and
              dashed. It <br /> must contain at least one letter. It may not
              start or end with a dash. */}
            </p>
            <div
              className={`d-flex align-items-center justify-content-between ${styles.editWorkshopBottomDiv}`}
            >
              <p>{t("edit_url_icon")}</p>
              <div>
                <button
                  onClick={handleEditDetails}
                  className={`${styles.editWorkshopTopBotton}`}
                >
                  {t("edit_cancel")}
                </button>
                <button
                  onClick={ChangeNameApi}
                  className={`${styles.editWorkshopBtmBotton}`}
                >
                  {t("edit_save")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <>
//       {/* <div className={`${styles.editWorkspaceWrapper}`}> */}
//       <div>
//         <p onClick={handleEditDetails}>Edit workspace details</p>
//       </div>

//       <div
//         onClick={handleEditDetails}
//         className={` ${
//           editDetails
//             ? styles.editWorkshopOption
//             : styles.editWorkshopOptionNone
//         }`}
//       >
//         <div
//           onClick={e => e.stopPropagation()}
//           className={`${styles.editWorkshopInnerDIv}`}
//         >
//           <div className={`d-flex align-items-center justify-content-between `}>
//             <h2>Edit workspace details {workSpace?.name}</h2>
//             <div
//               onClick={handleEditDetails}
//               className={`${styles.workspacecloseIcon}`}
//             >
//               <Close />
//             </div>
//           </div>
//           <p>
//             Add a name to represent your company or organization. This name will{" "}
//             <br /> also be shown to other organizations that you work with using
//             Slack.
//           </p>
//           <div>
//             <label htmlFor="work_space_name" className=" font-semibold ">
//               Workspace name
//             </label>
//             <input
//               value={workspaceNameChange}
//               onChange={HandleWorkspaceNameChange}
//               type="text"
//               id="work_space_name"
//             />
//           </div>
//           <div>
//             <label htmlFor="work_space_url">URL</label>
//             <input
//               value={workspaceURLChange}
//               onChange={HandleWorkspaceURLChange}
//               type="text"
//               id="work_space_url"
//             />
//           </div>
//           <p className={`${styles.editWorkshopP} `}>
//             Your workspace URL can only contain lowercase letters, numbers and
//             dashed. It <br /> must contain at least one letter. It may not start
//             or end with a dash.
//           </p>
//           <div
//             className={`d-flex align-items-center justify-content-between ${styles.editWorkshopBottomDiv}`}
//           >
//             <p>Edit Workspace Icon</p>
//             <div>
//               <button
//                 onClick={handleEditDetails}
//                 className={`${styles.editWorkshopTopBotton}`}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={ChangeNameApi}
//                 className={`${styles.editWorkshopBtmBotton}`}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </>
//   );
// };
export default EditWorkspaceModal;
