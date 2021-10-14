import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ACTIONS } from "../../../App"
import useClickOutside from "../customHooks/useClickOutside"
import cancel from "./assets/cancel.svg"
import { sendInviteAPI } from "./new-invite.utils"

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
  display: block !important;
  font-size: 16px !important;

  &.invite-modal-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(64, 79, 74, 0.5) !important;
    z-index: 10;
  }

  &.invite-modal-innerContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 90%;
    padding: 1.5em;
    display: flex;
    background: white !important;
    border: 1px solid #e7e7e7;
    box-shadow: 1px 1px 44px rgba(64, 64, 64, 0.5);
    border-radius: 4px;
  }

  &.invite-modal-header {
    display: flex !important;
    justify-content: space-between !important;
  }

  &.invite-modal-textarea,
  &.invite-modal-btnContainer {
    display: block !important;
  }

  &.invite-modal-sendBtn {
    display: flex !important;
    justify-content: end;
    margin-top: 1em !important;
  }

  &.invite-modal-textarea,
  &.invite-modal-sendBtn {
    width: 100%;
  }

  @media (min-width: 768px) {
    font-size: 18px !important;

    &.invite-modal-innerContainer {
      min-width: 35%;
    }
  }
`
const Text = styled.h3`
  color: black !important;
  font-weight: 700 !important;
  font-size: 1.3em !important;
  padding: 0 !important;
  margin-top: 0 !important;

  @media (min-width: 768px) {
    font-size: 1.7em !important;
  }
`

const TextArea = styled.textarea`
  min-height: 8em;
  width: 100%;
  padding: 10px;
  border: 1px solid #a1a1a1;
  color: black !important;
  border-radius: 3px !important;

  &:focus {
    outline-color: #00b87c !important;
  }

  &::placeholder {
    font-family: "Lato", san-serif !important;
  }
`

const Label = styled.label`
  display: block;
  margin: 2em 0 1em !important;
  color: black !important;
`

const Image = styled.img``

const Button = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 3px !important;

  &.invite-sendBtn {
    background: #00b87c !important;
    color: white !important;
    padding: 0.8em 1.8em;
  }
`

function NewInviteModal(props) {
  const [emailField, setEmailField] = useState("")
  const [showInviteModal, setShowInviteModal] = useState(true)
  const handleCloseInviteModal = () => {
    props.dispatch({
      type: ACTIONS.INVITE_MODAL_TYPE,
      payload: ""
    })
  }

  //Dom Node for the invite modal
  const inviteModalNode = useClickOutside(() => {
    setShowInviteModal(false)
    handleCloseInviteModal()
  })

  const modalToShow = status => {
    props.dispatch({
      type: ACTIONS.MODAL_TO_SHOW,
      payload: status
    })
  }

  const showMessage = message => {
    props.dispatch({
      type: ACTIONS.SHOW_MESSAGE,
      payload: message
    })
  }

  const isLoading = visibililty => {
    props.dispatch({
      type: ACTIONS.IS_LOADING,
      payload: visibililty
    })
  }
  const isOpen = visibililty => {
    isLoading(false)
    props.dispatch({
      type: ACTIONS.IS_OPEN,
      payload: visibililty
    })
  }

  const handleSendInvite = async () => {
    handleCloseInviteModal()
    isLoading(true)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailField.length > 5) {
      try {
        const response = await sendInviteAPI(
          emailField.trim().replaceAll(" ", "").split(",")
        )
        if (response.status === 200) {
          setEmailField("")
          handleCloseInviteModal()
          modalToShow("success")

          isLoading(false)
          isOpen(false)
        }
      } catch (err) {
        setEmailField("")
        handleCloseInviteModal()
        modalToShow("error")
        isLoading(false)
        isOpen(false)
      }
    } else {
      setEmailField("")
      handleCloseInviteModal()
      showMessage("Invalid Email")
      modalToShow("error")
      isOpen(false)
    }
  }

  useEffect(() => {
    setShowInviteModal(true)
  }, [props.state.inviteModalType])

  return (
    showInviteModal &&
    props.state.inviteModalType === "show-invite-modal" && (
      <Container className="invite-modal-main">
        <Container
          className="invite-modal-innerContainer"
          ref={inviteModalNode}
        >
          <Container className="invite-modal-header">
            <Text>Invite people to HNGi8</Text>
            <Button onClick={handleCloseInviteModal}>
              <Image src={cancel}></Image>
            </Button>
          </Container>

          <Container className="invite-modal-textarea">
            <Label for="emails"></Label>
            <TextArea
              placeholder="name@gmail.com"
              name="emails"
              id="emails"
              value={emailField}
              onChange={evt => setEmailField(evt.target.value)}
              required
            ></TextArea>
          </Container>

          <Container className="invite-modal-sendBtn">
            <Button className="invite-sendBtn" onClick={handleSendInvite}>
              Send
            </Button>
          </Container>
        </Container>
      </Container>
    )
  )
}

export default NewInviteModal
