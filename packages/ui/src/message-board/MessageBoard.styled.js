import styled from "styled-components";

export const MessageBoardContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 8px;
  flex-direction: column;

  .MsgBoard {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden scroll;
    box-sizing: border-box;
    padding-top: 1.5rem;

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
    padding-inline: 2px;
    padding: 0.5rem 0.5rem 0.7rem 0.5rem;

    ${
      "" /* @media (max-width: 768px) {
      width: 100%;
    } */
    }
  }
`;
