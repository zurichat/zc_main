import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { RiArrowRightSLine as Arrow } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import defaultLogo from "../assets/icons/zuri-chat-logo.svg";
import styles from "../styles/ModalComponentStyles.module.css";
import EditWorkspaceModal from "./EditWorkspaceModal";
import EmailInviteModal from "./invite-workflow/EmailInviteModal";

const ModalComponent = ({ workSpace, isOpen, toggleOpenInvite }) => {
  const [orgLogoUrl, setOrgLogoUrl] = useState("");
  const [editDetails, setEditDetails] = useState(false);
  const history = useHistory();
  const [orgs, setOrgs] = React.useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (userData?.currentWorkspace) {
      //Fetch organization logo
      axios
        .get(
          `https://${BASE_API_URL}/organizations/${userData.currentWorkspace}`,
          {
            headers: {
              Authorization: `Bearer ${userData.token}`
            }
          }
        )
        .then(res => {
          setOrgLogoUrl(res.data.data.logo_url ? res.data.data.logo_url : "");
        })
        .catch(err => {
          toast.error(err?.message ?? "Something went wrong", {
            position: "top-center"
          });
        });
    }

    setOrgs(JSON.parse(sessionStorage.getItem("organisations")));
  }, []);

  // HoverFunctionality
  const useHover = () => {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);

    const handleMouseOut = () => setValue(false);

    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
      }
    }, [[ref.current]]);
    return [ref, value];
  };
  const [hoverRef, isHovered] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();

  //InviteModal Functionaility
  const [openInviteModal, setOpenInvite] = useState(false);
  const handleInviteClick = () => {
    toggleOpenInvite();
    setOpenInvite(!openInviteModal);
  };

  const { t } = useTranslation();

  return (
    <div
      className={`${isOpen ? styles.open : styles.modalCon}`}
      data-cy="sidebar_menu_modal"
    >
      <div
        className={`d-flex align-items-center justify-content-between ${styles.TopmodalSection}`}
      >
        <div className={`col-2 d-flex px-0 align-items-center ${styles.logo}`}>
          <img
            src={orgLogoUrl ? orgLogoUrl : defaultLogo}
            alt="Organization Logo"
          />
        </div>
        <div className={`col-10 px-3 py-4 ${styles.header}`}>
          <h5> {workSpace?.name}</h5>
          <span>{workSpace?.workspace_url}</span>
        </div>
      </div>
      {/* <hr className={styles.modalDivider} />
      <div
        className={`d-flex align-items-center justify-content-between ${styles.TopmodalSection}`}
      >
        <div className={`${styles.info}`}>
          <p className={`${styles.infoHeader}`}>Total Messages </p> <br />
          <p className={`${styles.infoP}`}>
            The workspace is currently on the free version of Zuri Chat.
          </p>
          <span> see plans</span>
        </div> 
        <div className={`${styles.infoChart}`}>
          <img src={TotalMessages} alt="chart" />
        </div>
      </div> */}
      <hr className={styles.modalDivider} />
      <div className={` d-flex flex-column ${styles.modalSection}`}>
        <div>
          <p
            onClick={handleInviteClick}
            data-cy="invite_to_workspace_action_element"
          >
            {t("workspace_invite")} {workSpace?.name}
          </p>

          <EmailInviteModal
            isOpen={openInviteModal}
            onDismiss={() => {
              setOpenInvite(false);
            }}
            name={workSpace?.name}
          />
        </div>
        <div>
          <p>
            <a href="/create-workspace">{t("new_workspace")}</a>
          </p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div
        className={`d-flex flex-column ${
          editDetails ? styles.editModalSection : styles.modalSection
        }`}
      >
        <div>
          <p>{t("modal_preferences")}</p>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.popover}`}
        >
          <p>
            {t("modal_customize")} {workSpace?.name}
          </p>
          {/* <div>
            <Arrow className={`${styles.arrow}`} />
          </div> */}
        </div>
        <div>
          <p onClick={() => history.push("/admin/settings")}>
            {" "}
            {t("modal_workspace_settings")}
          </p>
        </div>
        <EditWorkspaceModal
          workSpace={workSpace}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
        />
      </div>
      <hr className={styles.modalDivider} />
      <div ref={hoverRef} className={` ${styles.odalSection}`}>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.modalSection}`}
        >
          <p>{t("modal_tools")}</p>
          <div>
            <Arrow className={`${styles.arrow}`} />
          </div>

          <section
            className={`${
              isHovered ? styles.openmodalSubCon : styles.modalSubCon
            }`}
          >
            <section
              ref={hoverRef}
              className={`d-flex flex-column ${styles.submodalSection}`}
            >
              <div>
                <p>{t("modal_analytics")}</p>
              </div>
            </section>
          </section>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p onClick={() => history.push("/signout")}> {t("modal_signout")}</p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={` d-flex flex-column ${styles.modalSection}`}>
        {/* <div
          ref={hoverRef3}
          className={`d-flex align-items-center justify-content-between ${styles.modalSubSection} `}
        >
          <p> Add workspace </p>
          <div>
            <Arrow className={`${styles.arrow}`} />
          </div>
          <section
            className={`${
              isHovered3 ? styles.openmodalSubCon : styles.modalSubCon
            }`}
          >
            <section
              ref={hoverRef3}
              className={`d-flex flex-column ${styles.submodalSection}`}
            >
              <div>
                <p>HNGi8</p>
              </div>
              <hr className={styles.modalDivider} />
              <div>
                <p>The BrandHub</p>
              </div>
            </section>
          </section>
        </div> */}
        <div
          ref={hoverRef2}
          className={`d-flex align-items-center justify-content-between ${styles.modalSubSection}`}
        >
          <p>{t("modal_switch_workspace")}</p>
          <Arrow className={`${styles.arrow}`} />
          <section
            className={`${
              isHovered2 ? styles.openmodalSubCon : styles.modalSubCon
            }`}
          >
            <section
              ref={hoverRef2}
              className={`d-flex flex-column ${styles.submodalSection}`}
            >
              {orgs &&
                orgs?.map((o, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      history.push(`/workspace/${o.id}`);
                      window.location.reload();
                    }}
                  >
                    <p>{o.name}</p>
                  </div>
                  // <hr
                  //  className={styles.modalDivider} />
                ))}
              {/* <div>
              <p>HNGi8</p>
              </div>
              <hr className={styles.modalDivider} />
              <div>
              <p>The BrandHub</p>
              </div> */}
            </section>
          </section>
        </div>
        <div className={`${styles.modalSubSection}`}>
          <p onClick={() => history.push("/")}> {t("modal_open_chat")}</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ModalComponent;
