import React from "react";
import styled from "styled-components";

const TooltipText = styled.span`
  visibility: hidden;
  max-width: 250px;
  display: inline-block;
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  height: fit-content;
  white-space: normal;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  font-size: 13px;
  margin-top: 2px;
  color: #616061;

  &:hover span {
    visibility: visible;
  }
`;

const ToolTip = ({ children, toolTipText }) => (
  <Tooltip>
    {children}
    <TooltipText>{toolTipText}</TooltipText>
  </Tooltip>
);

export default ToolTip;
