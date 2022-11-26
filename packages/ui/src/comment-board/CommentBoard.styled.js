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
  padding-right: 1.5rem;
  overflow-y: auto;
  overflow-x: none;
`;
const CommentBoardHeader = styled.header`
  background: hsla(160, 100%, 36%, 1);
  padding: 6px 16px;

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
  padding-left: 17px;
  margin-bottom: 9px;
  padding-top: 1.1rem;
  height: 69vh;
  overflow-x: none;
  border: 2px solid red;
  overflow-y: scroll;
  /* Style message */
  /* .message_container {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    .img_container {
      width: 45px;
      height: 45px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }

    .text-content {
      .user_name {
        display: flex;
        align-items: flex-end;
        gap: 20px;
      }

      .time_ago {
        font-size: 0.7rem;
      }
    }
  } */
`;
const CommentMessageItem = styled.div`
  margin-bottom: 16px;
`;

export {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  CommentMessageItem
};
