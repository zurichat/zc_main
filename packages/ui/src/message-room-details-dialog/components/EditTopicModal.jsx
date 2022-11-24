import { useState } from "react";
import {
  ModalContainer,
  TopicModal,
  ModalTop,
  CloseBtn,
  Modalbody,
  ModalButtons,
  CancelBtn,
  AcceptBtn,
  ModalTopic
} from "../MessageRoomDetailsDialog.styled";

const EditTopicModal = ({ closeEdit, addTopic, setAddTopic }) => {
  const handleChange = e => {
    setAddTopic(e.target.value);
  };

  return (
    <ModalContainer>
      <TopicModal>
        <ModalTop>
          <ModalTopic>Topic</ModalTopic>
          <CloseBtn onClick={() => closeEdit()}>X</CloseBtn>
        </ModalTop>
        <Modalbody>
          <input
            type="text"
            name="topic"
            value={addTopic}
            onChange={handleChange}
            placeholder="Add Topic"
          />

          <p>Let people know what this channel is for.</p>

          <ModalButtons>
            <CancelBtn onClick={() => closeEdit()}>Cancel</CancelBtn>
            <AcceptBtn>Save</AcceptBtn>
          </ModalButtons>
        </Modalbody>
      </TopicModal>
    </ModalContainer>
  );
};

export default EditTopicModal;
