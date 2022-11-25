import { useEffect } from "react";
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
  // handle form input change
  const handleChange = e => {
    setAddTopic(e.target.value);
  };

  // saving edited topic to LS as the endpoint for a PUT request isn't working
  useEffect(() => {
    console.log(addTopic);
    return localStorage.setItem("editedTopic", JSON.stringify(addTopic));
  }, [addTopic]);

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
            <AcceptBtn
              onClick={() => {
                setAddTopic(addTopic);
                closeEdit();
              }}
            >
              Save
            </AcceptBtn>
          </ModalButtons>
        </Modalbody>
      </TopicModal>
    </ModalContainer>
  );
};

export default EditTopicModal;
