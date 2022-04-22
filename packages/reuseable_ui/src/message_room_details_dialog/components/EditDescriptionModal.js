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
  ModalTopic
} from "../message-room-details-dialog.styled";

const EditDescriptionModal = ({ closeEdit }) => {
  return (
    <ModalContainer>
      <DescModal>
        <ModalTop>
          <ModalTopic>Description</ModalTopic>
          <CloseBtn
            onClick={() => {
              closeEdit();
            }}
          >
            {" "}
            X{" "}
          </CloseBtn>
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
