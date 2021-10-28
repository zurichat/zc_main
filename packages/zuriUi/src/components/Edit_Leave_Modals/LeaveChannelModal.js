import React from "react";
import {
  ModalContainer,
  LeaveModal,
  ModalTop,
  CloseBtn,
  Modalbody,
  ModalButtons,
  CancelBtn,
  AcceptBtn,
  ModalTopic,
} from "./ModalStyles";
const LeaveChannelModal = (props) => {
 
  return (
    <ModalContainer>
      <LeaveModal>
        <ModalTop>
          <ModalTopic>Leave Channel</ModalTopic>
          <CloseBtn onClick= { ()=>{props.closeEdit()}}> X </CloseBtn>
        </ModalTop>
        <Modalbody>
          <p>
            Channel members won’t be notified that you’ve left. You can rejoin
            anytime.
          </p>
          <input type="checkbox" id="dontShow" />
          <label>Don’t show this again</label>

          <ModalButtons>
            <CancelBtn>Cancel</CancelBtn>
            <AcceptBtn>Leave</AcceptBtn>
          </ModalButtons>
        </Modalbody>
      </LeaveModal>
    </ModalContainer>
  );
};

export default LeaveChannelModal;