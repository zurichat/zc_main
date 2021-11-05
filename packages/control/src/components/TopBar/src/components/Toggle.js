import { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Div>
      <InputWrapper>
        <Input type="checkbox" />
        <Slider
          onClick={() => setToggle(!toggle)}
          style={{
            "--background-color": toggle ? "#00B87C" : "white",
            "--justify-item": toggle ? "flex-end" : "flex-start"
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
  height: 12.92px;
  width: 30.22px;
  background-color: #e1fdf4;
  border-radius: 15.2px;
  &:before {
    content: "";
    width: 18.89px;
    height: 19px;
    border-radius: 50%;
    cursor: pointer;
    background: var(--background-color);
    filter: drop-shadow(3.8px 3.04px 15.2px hsla(214, 8%, 77%, 0.3));
    transition: background 1s;
  }
`;
const Div = styled.div`
  padding-left: 100px;
  background: #e5e5e5;
  height: 50px;
`;
const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;
export default Toggle;
