import React from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

const LogoAlert = () => {
  return (
    <Alert>
      <BsCheck2Circle />
      <Text>Your workspace icon has been updated.</Text>
    </Alert>
  );
};
const Alert = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.3rem 1rem 0.3rem 1rem;
  border: 1px solid #007a5a;
  background: #fff;
  border-left-width: 5px;
  margin-bottom: 0.75rem;
  border-radius: 0.25rem;
`;

const Text = styled.p`
  font-size: 18px;
  margin-left: 5px;
  margin-bottom: 0;
`;

export default LogoAlert;
