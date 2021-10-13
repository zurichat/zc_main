import React from "react";
import {
  ModalContainer,
  DescModal,
  ModalTop,
  CloseBtn,
  Modalbody,
  ModalButtons,
  CancelBtn,
  AcceptBtn,
  ModalTopic,
} from "./ModalStyles";

const EditDescriptionModal = (props) => {
  const closeFrm = (e) => {
    props.closeFrm && props.closeFrm(e);
  };
  if (props.show) {
    return null;
  }
  return (
    <ModalContainer>
      <DescModal>
        <ModalTop>
          <ModalTopic>Description</ModalTopic>
          <CloseBtn onClick={(e) => closeFrm(e)}> X </CloseBtn>
        </ModalTop>
        <Modalbody>
          <textarea placeholder="Add Description" />

          <p>Let people know what this channel is for.</p>

          <ModalButtons>
            <CancelBtn>Cancel</CancelBtn>
            <AcceptBtn>Save</AcceptBtn>
          </ModalButtons>
        </Modalbody>
      </DescModal>
    </ModalContainer>
  );
};

export default EditDescriptionModal;
