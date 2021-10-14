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
  const closeFrm = (e) => {
    props.closeFrm && props.closeFrm(e);
  };
  if (props.show) {
    return null;
  }
  return (
    <ModalContainer>
      <LeaveModal>
        <ModalTop>
          <ModalTopic>Leave Channel</ModalTopic>
          <CloseBtn onClick={(e) => closeFrm(e)}> X </CloseBtn>
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
