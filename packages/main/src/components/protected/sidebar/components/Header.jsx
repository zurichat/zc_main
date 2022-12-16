import React, { useState, useRef } from "react";
import styles from "../styles/Sidebar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import newMsgIcon from "../assets/icons/new-msg-icon.svg";
import ModalComponent from "./ModalComponent";

const SidebarHeader = props => {
  //home modal
  const [homeModal, toggleHomeModal] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const Menu = useRef(null);
  //toggle
  const toggle = () => {
    toggleHomeModal(!homeModal);
    document.removeEventListener("click", toggle);
  };
  const closeToggle = e => {
    if (Menu.current && homeModal && !Menu.current.contains(e.target)) {
      toggleHomeModal(false);
    }
  };
  document.addEventListener("mousedown", closeToggle);

  const showModal = () => {
    setOpenModal(!openModal);
  };
  // const theme = localStorage.getItem("theme")
  // if (theme !== null || theme !== "") {
  //   const sideBarHeader = document.getElementsByClassName("sidebar-header-div")
  //   sideBarHeader[0].style.backgroundColor = themeColors[theme].secondary
  // } else {
  //   const sideBarHeader = document.getElementsByClassName("sidebar-header-div")
  //   sideBarHeader[0].style.backgroundColor = "#00b87c"
  // }
  return (
    <div className={`row ${styles.orgDiv} ${styles.subCon1}`}>
      <div className={`col-12 ${styles.orgInfo}`}>
        <div
          onClick={() => toggle()}
          className={styles.orgHeader}
          data-cy="sidebar_header"
        >
          <p className={styles.orgTitle}>
            {props.state.organization_info &&
              props.state.organization_info.name}
          </p>
          <p className={styles.orgHeaderArrowDown} onClick={() => showModal()}>
            <MdKeyboardArrowDown style={{ color: `#fff` }} />
          </p>{" "}
          {/* {openModal && (
              <NewInviteModal
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )} */}
        </div>
        <div className={styles.newMessage}>
          <img
            className={`img-fluid w-100 ${styles.newMsgIcon}`}
            style={{ cursor: "pointer" }}
            src={newMsgIcon}
            alt="message"
          />
        </div>
      </div>
      <div className={`col-12 px-3 ${styles.modalContainer}`}>
        {
          <div className={`col-12 px-3 ${styles.modalContainer}`} ref={Menu}>
            <ModalComponent
              workSpace={props.state.organization_info}
              isOpen={homeModal}
              toggleOpenInvite={toggle}
            />
          </div>
          /*


            <Modall showDialog={showDialog} closeDialog={close} />

            <Overlay isOpen={showDialog} onDismiss={close}>
              <Content aria-label="room-list">
                <CloseButton className="close-button" onClick={close}>
                  <Span aria-hidden>×</Span>
                </CloseButton>
                <AuthInputBox
                  value={query}
                  setValue={setQuery}
                  placeholder="🔍 Search for plugins"
                />
                <Wrapper>
                  {loading && <p>Loading..</p>}
                  <p>
                    {links.map((plugs, id) => {
                      return (
                        <div key={id}>
                          <Link to={plugs.href} onClick={navigateToUrl}>
                            <p>{plugs.name}</p>
                          </Link>
                        </div>
                      )
                    })}
                  </p>
                </Wrapper>
              </Content>
            </Overlay>

                  */
        }
      </div>
    </div>
  );
};

export default SidebarHeader;
