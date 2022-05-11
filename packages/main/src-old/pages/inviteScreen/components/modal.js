import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";
import AuthInputBox from "../../../components/AuthInputBox";

export const Modal = ({ show, close, password, setpassword }) => {
  return (
    <div>
      <Overlay isOpen={show} onDismiss={close}>
        <Content aria-label="room-list">
          <CloseButton className="close-button" onClick={close}>
            <Span aria-hidden>×</Span>
          </CloseButton>

          <div>
            <h3>Enter Password to login</h3>
            <p>Close this page if you do not want to join this workspace</p>
          </div>

          <AuthInputBox
            name={`Password`}
            value={password}
            setValue={setpassword}
            placeholder={`Enter Password`}
          />
          <button className={`btn `}>Submit</button>
        </Content>
      </Overlay>
    </div>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  z-index: 5;
`;
const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  margin: auto;
  flex-direction: column;
`;
const Wrapper = styled.div`
  overflow-y: auto;
  padding: 1rem 0;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0;
  padding: 0.5rem;
  width: 50px;
  color: red;
  background-color: transparent;
  border: none;
`;
const Span = styled.span`
  font-size: 0.8rem;
`;
const Item = styled.p`
font-family: Lato;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 28px;
text-align: left;
letter-spacing: 0em;
display: flex;
padding:0.25rem;
& > img { 
  padding: 0 1rem;

`;

const ClickButton = styled.img`
  margin-left: auto;
`;
