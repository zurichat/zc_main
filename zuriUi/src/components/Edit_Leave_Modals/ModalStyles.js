import styled from "styled-components";

export const ModalContainer = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 400000;
`;
export const LeaveModal = styled.div`
  width: 40%;
  margin: auto;
  background-color: white;
  height: max-content;
  padding: 0.5rem 1rem;
  margin-top: 10%;
  border-radius: 0.3rem;
`;

export const DescModal = styled.div`
  width: 40%;
  margin: auto;
  background-color: white;
  height: max-content;
  padding: 0.5rem 1rem;
  margin-top: 10%;
  border-radius: 0.3rem;
`;

export const TopicModal = styled.div`
  width: 40%;
  margin: auto;
  background-color: white;
  height: max-content;
  padding: 0.5rem 1rem;
  margin-top: 10%;
  border-radius: 0.3rem;
`;
export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #f6f6f6;
`;
export const ModalTopic = styled.div`
  color: #1d1c1d;
  font-weight: 700;
  font-size: 18px;
`;
export const CloseBtn = styled.button`
  cursor: pointer;
  color: #1d1c1d;
  border: none;
  font-size: 1.2rem;
`;
export const Modalbody = styled.div`
  color: #b0afb0;
  padding: 1rem;
  & p {
    font-size: "15px";
    font-weight: 400;
    width: 90%;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
  & input[type="text"] {
    width: 100%;
    border: 1px solid #f6f6f6;
    padding: 0.6rem;
    margin-bottom: 1rem;
    height: 5rem;
    color: black;
  }
  & textarea {
    width: 100%;
    height: 12rem;
    border: 1px solid #f6f6f6;
    padding: 0.6rem;
    color: black;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CancelBtn = styled.button`
  margin-right: 1rem;
  padding: 0.7rem;
  width: 7rem;
  color: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 0.2rem;
`;

export const AcceptBtn = styled.button`
  padding: 0.7rem;
  color: white;
  width: 7rem;
  border-radius: 0.2rem;
  background-color: #00b87c;
`;
