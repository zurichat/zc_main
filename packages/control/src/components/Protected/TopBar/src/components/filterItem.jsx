import React from "react";

import cancel from "../assets/images/cancel.svg";
import styled from "styled-components";

const FilterWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid #00b87c;
  gap: 4px;
  align-items: center;
  padding: 0 5px;
  margin: 5px;
  border-radius: 3px;
`;
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;
const StyledImage = styled.img`
  display: block;
  height: 10px;
`;
export const FilterItem = ({ onRemove, filter }) => {
  return (
    <FilterWrapper className="d-flex">
      {filter}
      <StyledButton className="btn" onClick={onRemove}>
        <StyledImage src={cancel} alt="close" />
      </StyledButton>
    </FilterWrapper>
  );
};
