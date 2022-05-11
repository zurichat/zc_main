import React from "react";
import styled from "styled-components";
import Dropdown from "../assets/dropdown.svg";

const Select = ({ label, value, children, ...delegated }) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(child => child.props.value === value);

  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>

        <DisplayedBit>
          {displayedValue}
          <IconWrapper>
            <img src={Dropdown} alt="" />
          </IconWrapper>
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label``;

//   const VisibleLabel = styled.span`
//     color: ${COLORS.gray[700]};
//     margin-right: 16px;
//   `;

const SelectWrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const DisplayedBit = styled.span`
  display: block;
  background: white;
  font-size: ${15 / 16}rem;
  font-weight: 400;
  color: hsla(300, 1%, 69%, 1);
  padding: 10px 16px 10px 12px;
  border-radius: 4px;
  pointer-events: none;
  border: 1px solid hsla(0, 0%, 63%, 1);

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 9px;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;

export default Select;
