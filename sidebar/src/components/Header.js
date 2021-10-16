import React, { useState } from "react"
import styles from "../styles/Sidebar.module.css"
import { MdKeyboardArrowDown } from "react-icons/md"
import newMsgIcon from "../assets/icons/newMsgIcon.svg"
import UserOrganization from "../../../control/src/pages/createworkspace/components/UserOrganization"
import ModalComponent from "./ModalComponent"
import useThemeMode from "../../../topbar/customHooks/useThemeMode"

const SidebarHeader = props => {
  //home modal
  const [homeModal, toggleHomeModal] = useState(false)
  const [nullValue, setnullValue] = useState(0)
  const { theme } = useThemeMode()

  //toggle
  const toggle = () => {
    toggleHomeModal(!homeModal)
    document.removeEventListener("click", toggle)
  }
  return (
    <div className={`${styles.subCon1}`}>
      <div className={`row  ${styles.orgDiv}`}>
        <div className={`col-12 px-3  ${styles.orgInfo} org-Info`}>
          <div
            onClick={() => toggle()}
            className={`row p-0 ${styles.orgHeader}`}
          >
            <span className={`col-8 mb-0 ${styles.orgTitle}`}>
              {props.state.organization_info &&
                props.state.organization_info.name}
            </span>
            <span className={`col-4 p-0 ${styles.sidebar__header__arrow}`}>
              <MdKeyboardArrowDown
                className={`my-auto`}
                style={{ color: `#fff` }}
              />
            </span>{" "}
          </div>
          <div className={`row ${styles.newMessage}`}>
            <img
              className={`col-3 img-fluid w-100 ${styles.newMsgIcon}`}
              src={newMsgIcon}
              alt="message"
            />
          </div>
        </div>
        <div className={`col-12 px-3 ${styles.modalContainer}`}>
          {/*

                 <div className={`col-12 px-3 ${styles.odalContainer}`}>
              <ModalComponent
                workSpace={UserOrganization}
                isOpen={homeModal}
           toggleHomeModal={toggleHomeModal}
              />
            </div>
          {/*


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

            <EmailInviteModal
              isOpen={openInvite}
              onDismiss={closeInviteModal}
              orgvalEmails={orgEmails}
              setInviteEmails={setInviteEmails}
              inviteUserViaMail={inviteUser}
              sendLoadin={sendLoading}
              currentWorkspace={currentWorkspace}
              invSucc={InviteSuccess}
            />
                  */}
        </div>
      </div>
    </div>
  )
}

export default SidebarHeader
