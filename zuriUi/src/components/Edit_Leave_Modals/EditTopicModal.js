import { useState} from "react";
import {
  ModalContainer,
  TopicModal,
  ModalTop,
  CloseBtn,
  Modalbody,
  ModalButtons,
  CancelBtn,
  AcceptBtn,
  ModalTopic,
} from "./ModalStyles";

const EditTopicModal = (props) => {


    return (
      <ModalContainer>
      <TopicModal>
        <ModalTop>
          <ModalTopic>Topic</ModalTopic>
          <CloseBtn onClick=  { ()=>{props.closeEdit()}}> X </CloseBtn>
        </ModalTop>
        <Modalbody>
          <input type="text" placeholder="Add Topic" />

          <p>Let people know what this channel is for.</p>

          <ModalButtons>
            <CancelBtn>Cancel</CancelBtn>
            <AcceptBtn>Save</AcceptBtn>
          </ModalButtons>
        </Modalbody>
      </TopicModal>
    </ModalContainer>
  );

};

export default EditTopicModal;