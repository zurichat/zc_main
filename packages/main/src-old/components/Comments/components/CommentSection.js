import { useState, useEffect } from "react";
import styled from "styled-components";
import { GetUserInfo, GetWorkspaceUser } from "@zuri/utilities";
import Chats from "./Chats";
import CommentBox from "./CommentBox";

const CommentSection = ({ header = "Comments" }) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      {/* <Chats chatInfo={comments} /> */}
      <CommentBox />
    </Wrapper>
  );
};
// https://realtime.zuri.chat/api
const Wrapper = styled.aside`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin-left: 8px;
  background-color: white;
  height: 8s0vh;
  padding: 0 16px 50px 0;
`;
const Header = styled.header`
  background: hsla(160, 100%, 36%, 1);
  padding: 12px 16px;
  margin-right: -16px;
  color: white;
  font-weight: 700;

  font-size: ${18 / 16}rem; ;
`;

export default CommentSection;
