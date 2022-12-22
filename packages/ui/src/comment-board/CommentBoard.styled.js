import styled from "styled-components";

const CommentBoardWrapper = styled.aside`
  display: ${props => (props.showCommentBoard ? "grid" : "none")};
  grid-template-rows: auto auto 1fr auto;
  z-index: 999;
  width: 390px;
  position: relative;
  height: 100%;
  background-color: #fff;
  padding: 0 0 5px 0;
  overflow-y: auto;
  overflow-x: none;

  .msg__wrapper {
    height: 100%;
    overflow-y: auto;
    overflow-x: none;
  }
  .name-time {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .time {
    font-weight: 400;
    color: #5b5858;
    font-size: 12px;
  }
`;
const Commentflex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CommentBoardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: hsla(160, 100%, 36%, 1);
  padding: 6px 16px;
  z-index: 99;
  height: 40px;
  /* margin-right: -16px; */
  color: white;
  font-weight: 700;
  width: 100%;
  position: sticky;
  top: 0px;
  font-size: ${18 / 16}rem;

  .header_title {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
const CommentMessagesWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 9px;
  padding-top: 1.1rem;

  .msg-container {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }

  .img__wrapper {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 10%;
    border-radius: 8px;
    /* flex: auto; */

    overflow: hidden;
  }
  .user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 8px;
  }

  #hoverItems {
    position: relative;
    top: 0px;
  }

  .message {
    width: 100%;
  }
`;
const CommentMessageItem = styled.div`
  margin-bottom: 16px;
`;
export const ParentMessage = styled.div`
  .msg-container {
    display: flex;
    gap: 8px;
       align-items: center;
  }
  .user-avatar {
    width: 35px;
    height: 35px
    border-radius: 8px;
  }
  #hoverItems {
    position: relative;
    top: 10px;
  }
  hr {
    width: 70%;
  }
  & span {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .msgParticulars {
  }
.name-time{
    display: flex;
    align-items: center;
    gap:.5em;
}
.time {
    font-weight: 400;
    color: #5b5858;
    font-size: 12px;
}
  .message {
    width: 100%;
  }
`;

export const MessagePaneWrapper = styled.div` 
.input-text {
    width: 100%;
    padding: 0 1.2em;
  `;

export {
  CommentBoardWrapper,
  Commentflex,
  CommentBoardHeader,
  CommentMessagesWrapper,
  CommentMessageItem
};
