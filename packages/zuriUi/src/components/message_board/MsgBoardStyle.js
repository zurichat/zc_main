import styled from "styled-components"

export const ChatContainer = styled.section`
  // margin-top:2rem;
  // height: 100vh;
  width: 100%;
  flex-direction: column;
  .MsgBoard {
    width: 100%;
    height: 75vh;
    display: flex;
    overflow-y: scroll;

    // overflow-y: scroll;
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
    display: flex;
    flex: 1;
    width: 80%;
    height: 15%;
    position: fixed;
    bottom: 0;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
