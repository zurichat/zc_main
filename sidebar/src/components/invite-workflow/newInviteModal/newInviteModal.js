import React, { useState } from "react"
import styled from "styled-components"
import { ACTIONS } from "../../../App"
import cancel from "./assets/cancel.svg"
import { sendInviteAPI } from "./new-invite.utils"

const Container = styled.div`
  display: block !important;

  &.invite-modal-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: grey !important;
    z-index: 10;
  }

  &.invite-modal-innerContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 30%;
    padding: 1em;
    display: flex;
    margin-bottom: 1em;
    background: white !important;
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
    display: flex;
    justify-content: flex-end;
  }

  &.invite-modal-textarea,
  &.invite-modal-sendBtn {
    width: 100%;
  }
`
const Text = styled.h3`
  color: black !important;
  font-weight: 800 !important;
  padding: 0 !important;
`

const TextArea = styled.textarea`
  border: 1px solid black !important;
  min-height: 8em;
  width: 100%;
  padding: 10px 0;

  &:focus {
    color: black !important;
  }
`

const Label = styled.label``

const Image = styled.img``

const Button = styled.button`
  outline: none;
  background: transparent;

  &.invite-sendBtn {
    display: flex !important;
    justify-content: flex-end;
    background: #00b87c !important;
    color: white !important;
  }
`

function NewInviteModal(props) {
  const [emailField, setEmailField] = useState("")
  const handleCloseInviteModal = () => {
    props.dispatch({
      type: ACTIONS.INVITE_MODAL_TYPE,
      payload: ""
    })
  }
  const isLoading= (visibililty) =>{
props.dispatch({
  type: ACTIONS.IS_LOADING,
  payload: visibililty
})
  }
  const isOpen = (visibililty) => {
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
          
          isLoading(false)
          isOpen(false)
        }
      } catch (err) {
        setEmailField("")
        isLoading(false)
        isOpen(false)
      }
    }
  }
  return (
    props.state.inviteModalType === "show-invite-modal" && (
      <Container className="invite-modal-main">
        <Container className="invite-modal-innerContainer">
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
