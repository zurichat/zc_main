import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/ModalComponentStyles.module.css";
import CompanyImage from "../assets/CompanyIcon.svg";
import EmailInviteModal from "./invite-workflow/newInviteModal/EmailInviteModal";
// import axios from 'axios'
import { RiArrowRightSLine as Arrow } from "react-icons/ri";
import { useHistory } from "react-router-dom";
// import Workspace from '../../../control/src/pages/workspace/components/Workspace'

const ModalComponent = ({ workSpace, isOpen, toggleOpenInvite }) => {
  const history = useHistory();
  const [orgs, setOrgs] = React.useState([]);

  useEffect(() => {
    setOrgs(JSON.parse(sessionStorage.getItem("organisations")));
    // console.log(orgs);
  }, []);
  // console.log(orgs);

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

  return (
    <div className={`${isOpen ? styles.open : styles.modalCon}`}>
      <div
        className={`d-flex align-items-center justify-content-between ${styles.TopmodalSection}`}
      >
        <div className={`col-2 d-flex px-0 align-items-center ${styles.logo}`}>
          <img src={CompanyImage} alt="logo" />
        </div>
        <div className={`col-10 px-0  ${styles.header}`}>
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
          <p onClick={handleInviteClick}>Invite people to {workSpace?.name}</p>

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
            <a href="/create-workspace">Create a new Workspace</a>
          </p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column ${styles.modalSection}`}>
        <div>
          <p>Preferences*</p>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.popover}`}
        >
          <p>Customize {workSpace?.name}*</p>
          {/* <div>
            <Arrow className={`${styles.arrow}`} />
          </div> */}
        </div>
        <div>
          <p onClick={() => history.push("/admin/settings")}>
            {" "}
            Workspace Settings*
          </p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div ref={hoverRef} className={` ${styles.modalSection}`}>
        <div
          className={`d-flex align-items-center justify-content-between ${styles.modalSection}`}
        >
          <p>Tools</p>
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
              <div onClick={() => history.push("/plugins")}>
                <p> Plugins</p>
              </div>
              <hr className={styles.modalDivider} />
              <div>
                <p>Analytics*</p>
              </div>
            </section>
          </section>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p onClick={() => history.push("/signout")}> Sign Out</p>
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
          <p>Switch workspace</p>
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
          <p onClick={() => history.push("/downloads")}>
            {" "}
            Open the Zuri Chat App
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
