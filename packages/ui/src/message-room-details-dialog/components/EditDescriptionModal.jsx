import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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
  ErrorModal
} from "../MessageRoomDetailsDialog.styled";

const EditDescriptionModal = ({
  closeEdit,
  roomData,
  handleDescriptionUpdate,
  description
}) => {
  const descriptionRef = useRef();

  // to update data
  const handleDesc = () => {
    const organization = JSON.parse(localStorage.getItem("description"));
    const org_id = organization.org_id;
    const member_id = organization.member_id;
    const room_id = organization.room_id;

    const newDescription = {
      room_name: roomData.data.room_name,
      description: descriptionRef.current.value,
      topic: roomData.data.topic,
      is_private: roomData.data.is_private,
      is_archived: roomData.data.is_archived
    };

    handleDescriptionUpdate(newDescription);

    axios.put(
      `https://chat.zuri.chat/api/v1/org/${org_id}/members/${member_id}/rooms/${room_id}`,
      newDescription
    );
  };

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
            X
          </CloseBtn>
        </ModalTop>
        <Modalbody>
          <textarea
            ref={descriptionRef}
            defaultValue={description}
            placeholder="Add description"
          ></textarea>

          <p>Let people know what this channel is for.</p>

          <ModalButtons>
            <CancelBtn
              onClick={() => {
                closeEdit();
              }}
            >
              Cancel
            </CancelBtn>
            <AcceptBtn
              onClick={() => {
                handleDesc();
                closeEdit();
              }}
            >
              Save
            </AcceptBtn>
          </ModalButtons>
        </Modalbody>
      </DescModal>
    </ModalContainer>
  );
};

export default EditDescriptionModal;
