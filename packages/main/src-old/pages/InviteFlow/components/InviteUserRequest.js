import { useState } from "react";
import styled from "styled-components";
import { Overlay, Content } from "../../../components";
import Close from "../assets/Close.svg";
import Select from "./Select";
import UnstyledButton from "./UnstyledButton";
const InviteUserRequest = () => {
  const [value, setValue] = useState("Member");
  const [text, setText] = useState("");

  return (
    <OverlayWrapper>
      <InviteContent>
        <HeadingSection>
          <Header>Request Invitation to HNGi8</Header>
          <UnstyledButton
            style={{
              marginLeft: "auto",
              marginBottom: "8px",
              padding: "4px 8px"
            }}
          >
            <img src={Close} alt="" />
          </UnstyledButton>
        </HeadingSection>
        <CloseButton />
        <Label htmlFor="email-input">
          To :
          <Input type="email" placeholder="name@gmail.com" />
        </Label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select value={value} onChange={ev => setValue(ev.target.value)}>
            <option value="Member">Member</option>
            <option value="Organization">Organization</option>
          </Select>
        </div>
        <Label2>Reason for request (optional)</Label2>
        <Textarea
          placeholder="Add a note for the admin"
          value={text}
          onChange={evt => setText(evt.target.value)}
        />
        <TextSection>
          <p>
            Your request will be sent to your admins, and you’ll be notified
            when it has been approved or denied.
          </p>
          <p style={{ marginTop: "8px" }}>
            New members will authomatically join your workplace’s default
            channels.<span style={{ color: "#00b87c" }}> Add more </span>
          </p>
        </TextSection>
        <ButtonWrapper>
          <Button
            style={
              text === ""
                ? { opacity: "0.4", fontWeight: "400", padding: "12px 17px" }
                : { opacity: "revert" }
            }
          >
            Send Request
          </Button>
        </ButtonWrapper>
      </InviteContent>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled(Overlay)`
  background: hsla(160, 10%, 28%, 0.5); ;
`;
const InviteContent = styled(Content)`
  --black-color: hsla(300, 2%, 11%, 1);
  width: min(90%, 550px);
  display: revert;
  padding: revert;
  padding: 24px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1000px;
    background-color: white;
  }
`;
const Header = styled.h1`
  line-height: revert;
  font-weight: 700;
  color: hsla(300, 2%, 11%, 1);
  font-size: ${28 / 16}rem;
`;
const Label2 = styled.label`
  font-weight: 700;
  font-size: ${15 / 16}rem;
  color: hsla(0, 0%, 14%, 0.7);
  margin-top: 17px;
  margin-bottom: 9px;
`;
const HeadingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
const CloseButton = styled.img``;
const Label = styled.label`
  display: block;
  font-weight: 700;
  color: var(--black-color);
  margin-bottom: 12px;
`;
const Input = styled.input`
  display: block;
  font-size: ${15 / 16}rem;
  padding-top: 12px;
  padding-bottom: 56px;
  padding-left: 12px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid hsla(0, 0%, 63%, 1);
  &:placeholder {
    font-size: ${15 / 16}rem;
    font-weight: 400;
    color: hsla(300, 1%, 69%, 1);
  }
`;
const Textarea = styled.textarea`
  height: 82px;
  display: block;
  width: 100%;
  border: 1px solid hsla(0, 0%, 63%, 1);
  border-radius: 4px;
  margin-bottom: 16px;
  resize: none;
  padding-left: 16px;
  padding-top: 12px;
`;
const TextSection = styled.section`
  margin-bottom: 21px;
  & p,
  span {
    font-weight: 700;
    font-size: ${13 / 16}rem;
    color: hsla(0, 0%, 14%, 0.7);
    margin: 0;
  }
`;
const Button = styled(UnstyledButton)`
  padding: 12px 17.5px;
  background: hsla(160, 100%, 36%, 1);
  color: white;
  border-radius: 4px;
  font-size: ${15 / 16}rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default InviteUserRequest;
