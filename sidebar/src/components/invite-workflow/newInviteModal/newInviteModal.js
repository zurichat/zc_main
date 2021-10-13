import React from "react"
import styled from "styled-components"
import cancel from "./assets/cancel.svg"

const Container = styled.div`
  display: block !important;

  &.invite-modal-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(64, 79, 74, 0.5); !important;
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
    display: flex!important;
    justify-content: end;
  }

  &.invite-modal-textarea,
  &.invite-modal-sendBtn {
    width: 100%;
  }
`
const Text = styled.h3`
  color: black !important;
  font-weight: 700 !important;
  padding: 0 !important;
  margin-top: 0 !important;
`

const TextArea = styled.textarea`
  min-height: 8em;
  width: 100%;
  padding: 10px;
  margin-bottom: 1em;

  &:focus {
    outline-color: #00b87c !important;
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`

const Image = styled.img``

const Button = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;

  &.invite-sendBtn {
    background: #00b87c !important;
    color: white !important;
    padding: 0.8em 1.5em;
  }
`

function NewInviteModal({ openModal, setOpenModal }) {
  const validateEmail = () => {}

  return (
    <Container className="invite-modal-main">
      <Container className="invite-modal-innerContainer">
        <Container className="invite-modal-header">
          <Text>Invite people to HNGi8</Text>
          <Button onClick={() => setOpenModal(!openModal)}>
            <Image src={cancel}></Image>
          </Button>
        </Container>

        <Container className="invite-modal-textarea">
          <Label for="emails">To:</Label>
          <TextArea
            placeholder="name@gmail.com"
            name="emails"
            id="emails"
            required
            onChange={() => validateEmail()}
          ></TextArea>
        </Container>

        <Container className="invite-modal-sendBtn">
          <Button className="invite-sendBtn">Send</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default NewInviteModal
