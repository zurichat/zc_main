import styled from "styled-components";

export const MessageBoardContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 8px;
  flex-direction: column;

  .MsgBoard {
    flex: 1;
    width: 100%;
    display: flex;
    overflow-y: scroll;
    overflow-x: hidden;
    flex-direction: column;
    box-sizing: border-box;
    .msg-container {
      margin: 8px 10px;
      display: flex;
      .user-avatar {
        height: 35px;
        width: 35px;
        border-radius: 6px;
        margin-right: 10px;
      }
      .msgParticulars {
        display: flex;
        flex-direction: column;
        .name-time {
          margin-top: -5px;
          .name {
            font-weight: 700;
            font-size: 15px;
            margin-right: 0.25rem;
          }
          .time {
            font-weight: 400;
            color: #5b5858;
            font-size: 12px;
          }
          .message {
            font-size: 14px;
            line-height: 150%;
          }
        }
      }
    }
  }
  .input-text {
    width: 100%;

    ${
      "" /* @media (max-width: 768px) {
      width: 100%;
    } */
    }
  }
`;
