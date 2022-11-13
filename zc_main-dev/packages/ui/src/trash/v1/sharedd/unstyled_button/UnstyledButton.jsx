import styled from "styled-components";

export default styled.button`
  display: ${props => props.display || "block"};
  margin: 0;
  padding: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }
  &:hover {
    background-color: #e6e6e6;
    border-radius: 4px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
