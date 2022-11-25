import React, { useState, useEffect } from "react";
import { MembersPanel } from "../MessageRoomDetailsDialog";
import axios from "axios";
import {
  ModalContainer,
  LeaveModal,
  ModalTop,
  CloseBtn,
  Modalbody,
  ModalButtons,
  CancelBtn,
  AcceptBtn,
  ModalTopic
} from "../MessageRoomDetailsDialog.styled";
const LeaveChannelModal = props => {
  const org = localStorage.getItem("currentWorkspace");
  const orgs = JSON.parse(sessionStorage.getItem("organisations"));
  const [memberId, setMemberId] = useState("");
  const [errorDetail, setErrorDetail] = useState(null);
  const [laeveData, setLeaveData] = useState(null);

  useEffect(() => {
    setMemberId(orgs?.find(x => x.id == org)?.member_id);
  }, []);

  const leaveChannel = () => {
    let ourCurrentRoom = sessionStorage.getItem("currentRoom");

    console.log(ourCurrentRoom);

    const token = sessionStorage.getItem("token");

    axios
      .patch(
        `https://chat.zuri.chat/api/v1/org/${org}/rooms/${ourCurrentRoom}/members/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(
        response => {
          return setLeaveData(response.data.detail);
        },
        error => {
          return setErrorDetail(error.response.data.detail);
        }
      );
  };

  return (
    <ModalContainer>
      <LeaveModal>
        <ModalTop>
          <ModalTopic>Leave Channel</ModalTopic>
          <CloseBtn
            onClick={() => {
              props.closeEdit();
            }}
          >
            {" "}
            X{" "}
          </CloseBtn>
        </ModalTop>
        {errorDetail || laeveData ? (
          <Modalbody>
            <p>{errorDetail || laeveData}</p>

            <ModalButtons>
              <CancelBtn
                onClick={() => {
                  props.closeEdit();
                }}
              >
                Cancel
              </CancelBtn>
              <AcceptBtn
                onClick={() => {
                  props.closeEdit();
                  props.closeAll();
                }}
              >
                OK
              </AcceptBtn>
            </ModalButtons>
          </Modalbody>
        ) : (
          <Modalbody>
            <p>
              Channel members won’t be notified that you’ve left. You can rejoin
              anytime.
            </p>
            <input type="checkbox" id="dontShow" />
            <label>Don’t show this again</label>

            <ModalButtons>
              <CancelBtn
                onClick={() => {
                  props.closeEdit();
                }}
              >
                Cancel
              </CancelBtn>
              <AcceptBtn
                onClick={() => {
                  leaveChannel();
                }}
              >
                Leave
              </AcceptBtn>
            </ModalButtons>
          </Modalbody>
        )}
      </LeaveModal>
    </ModalContainer>
  );
};

export default LeaveChannelModal;
