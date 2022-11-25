import styled from "styled-components";

const CommentBoardWrapper = styled.aside`
  /* width: 60%; */
  display: ${props => (props.showCommentBoard ? "grid" : "none")};
  grid-template-rows: auto 1fr auto;

  width: 400px;
  z-index: 999;
  /* margin-top: 40px; */
  position: relative;
  top: 10px;

  height: 93vh;
  padding: 0 0 20px 0;
  overflow-y: scroll;
  overflow-x: none;
  border-left: 3px solid grey;
  /* padding: 2px; */
`;
const CommentBoardHeader = styled.header`
  background: hsla(160, 100%, 36%, 1);
  padding: 6px 16px;

  /* height: 40px; */
  margin-right: -16px;
  color: white;
  font-weight: 700;
  width: 100%;
  position: sticky;
  top: -10px;
  font-size: ${18 / 16}rem; ;
`;
const CommentMessagesWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 17px;
  margin-bottom: 9px;
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
