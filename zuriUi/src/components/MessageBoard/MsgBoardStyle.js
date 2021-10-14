import styled from "styled-components"

export const MsgBoard = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  overflow-y: scroll;
  flex-direction: column;
  box-sizing: border-box;
  .msg-container {
    margin: 5px 10px;
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
        margin-top: -4px;
        .name {
          font-weight: 700;
          font-size: 15px;
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
`

export const textInput = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 80vh;
  bottom: 100px;

  .message-input {
    outline: none;
    width: 100%;
    height: 100%;
    border: 1px solid red;
  }
`
