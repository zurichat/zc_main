import React, { useRef } from "react";

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
} from "../MessageRoomDetailsDialog.styled";

const EditDescriptionModal = ({ closeEdit, roomData }) => {
  const roomDescription = roomData.data.description;
  const descriptionRef = useRef();

  // to update data
  const handleDesc = () => {
    const org_id = roomData.data.org_id;
    const member_id = roomData.data.created_by;
    const room_id = roomData.data._id;

    const editedDescription = {
      room_name: roomData.data.room_name,
      description: descriptionRef.current.value,
      topic: roomData.data.topic,
      is_private: roomData.data.is_private,
      is_archived: roomData.data.is_archived
    };

    fetch(
      `https://chat.zuri.chat/api/v1/org/${org_id}/members/${member_id}/rooms/${room_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(editedDescription)
      }
    )
      .then(res => {
        if (!res.ok) {
          throw Error("Could not change description");
        }
      })
      .catch(err => {
        //
      });
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
          <textarea ref={descriptionRef} placeholder="Add description">
            {roomDescription}
          </textarea>

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
