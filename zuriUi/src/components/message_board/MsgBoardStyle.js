import styled from "styled-components"

export const ChatContainer = styled.section`
  height: 100vh;
  width: 100%;
  flex-direction: column;
  .MsgBoard {
    width: 100%;
    height: 85%;
    display: flex;
    
    overflow-y: scroll;
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
  .input-text{
      display: flex;
      flex : 1;
      width: 100%;
      height: 15%;
      margin-bottom : 20px; 
      
  }
`