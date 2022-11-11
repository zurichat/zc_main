import { useState } from "react";
import styled from "styled-components";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Div>
      <InputWrapper>
        <Input type="checkbox" />
        <Slider
          onClick={() => setToggle(!toggle)}
          style={{
            "--justify-item": toggle ? "flex-end" : "flex-start",
            "--background-color": toggle ? "#00b87c" : "#d3d3d3"
          }}
        />
      </InputWrapper>
    </Div>
  );
};

const InputWrapper = styled.label`
  position: relative;
`;
const Slider = styled.span`
  display: flex;
  align-items: center;
  justify-content: var(--justify-item);
  height: 22px;
  width: 45px;
  background-color: var(--background-color);
  border-radius: 15.2px;
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background: white;
    filter: drop-shadow(3.8px 3.04px 15.2px hsla(214, 8%, 77%, 0.3));
    transition: background 1s;
  }
`;
const Div = styled.div`
  height: 50px;
`;
const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;
export default ToggleButton;
