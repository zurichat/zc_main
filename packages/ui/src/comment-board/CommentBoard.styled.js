import styled from "styled-components";

const CommentBoardWrapper = styled.aside`
  /* width: 60%; */
  display: ${props => (props.showCommentBoard ? "grid" : "none")};
  grid-template-rows: auto 1fr auto;

  width: 400px;

  /* margin-top: 40px; */
  position: relative;
  /* position: fixed; */

  /* right: 10px; */
  top: -8.5px;
  height: 93vh;
  padding: 0 0 20px 0;
  overflow-y: auto;
  overflow-x: none;
`;
const CommentBoardHeader = styled.header`
  background: hsla(160, 100%, 36%, 1);
  padding: 6px 16px;
  z-index: 1000;
  height: 40px;
  margin-right: -16px;
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
  }
  #hoverItems {
    position: relative;
    top: 200px;
    /* display: none; */
  }
  hr {
    width: 70%;
  }
  & span {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  CommentMessageItem
};
