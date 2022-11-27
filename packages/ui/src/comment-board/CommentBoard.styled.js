import styled from "styled-components";

const CommentBoardWrapper = styled.aside`
  display: ${props => (props.showCommentBoard ? "grid" : "none")};
  grid-template-rows: auto 1fr auto;
  z-index: 999;
  width: 450px;

  position: relative;

  top: -9px;
  height: 93vh;
  padding: 0 0 20px 0;
  overflow-y: auto;
  overflow-x: none;
`;
const CommentBoardHeader = styled.header`
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
  font-size: ${18 / 16}rem; ;
`;
const CommentMessagesWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 8px;
  margin-bottom: 9px;
  padding-top: 1.1rem;
  padding-bottom: 100px;

  .msg-container {
    display: flex;
    gap: 16px;
  }

  .img__wrapper {
    width: 69px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 10%;
    border-radius: 8px;
    /* flex: auto; */

    overflow: hidden;
  }
  .user-avatar {
    width: 100%;
  }

  #hoverItems {
    position: relative;
    top: 0px;
  }
`;
const CommentMessageItem = styled.div`
  margin-bottom: 16px;
`;
export const ParentMessage = styled.div`
  .msg-container {
    display: flex;
    gap: 8px;
  }
  .user-avatar {
    width: 300px;
    border-radius: 6px;
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
    padding-left: 1.5rem;
  }
`;

export const MessagePaneWrapper = styled.div`
  position: fixed;
  bottom: 22px;
  width: 28%;
`;
export {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  CommentMessageItem
};
