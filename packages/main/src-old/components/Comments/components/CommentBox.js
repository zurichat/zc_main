import styled from "styled-components";
import Lightning from "../assets/comments/lightning.svg";
import Border from "../assets/comments/border.svg";
import Bold from "../assets/comments/bold.svg";
import Italic from "../assets/comments/italic.svg";
import Link from "../assets/comments/link.svg";
import List from "../assets/comments/list.svg";
import AtSign from "../assets/comments/at-sign.svg";
import Clip from "../assets/comments/clip.svg";
import Bigborder from "../assets/comments/bigborder.svg";
import Dropdown from "../assets/comments/dropdown.svg";
import Send from "../assets/comments/goto.svg";
const CommentBox = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Input type="text" placeholder="Send a message" />
      </InputWrapper>
      <SendWrapper>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", gap: "11px", alignItems: "center" }}>
            <img src={Lightning} alt="" />
            <img src={Border} alt="" />
            <img src={Bold} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              gap: "19px",
              marginLeft: "22px",
              alignItems: "center"
            }}
          >
            <img src={Italic} alt="" />
            <img src={Link} alt="" />
            <img src={List} alt="" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px", marginLeft: "auto" }}>
          <img src={AtSign} alt="" />
          <img src={Clip} alt="" />
          <img src={Send} alt="" />
          <img src={Bigborder} alt="" />
          <img src={Dropdown} alt="" />
        </div>
      </SendWrapper>
    </Wrapper>
  );
};
export default CommentBox;

const Wrapper = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const InputWrapper = styled.section`
  /* padding-left: 8px;
padding-top: 8px;
padding-bottom: 8px; */
  border-bottom: 1px solid hsl(160, 100%, 86%);
`;
const SendWrapper = styled.section`
  padding: 10px 18px 15px 18px;
  display: flex;
  gap: 120px;
  align-items: center;
  padding-right: 18px;
  gap: 4px;
`;
const Input = styled.input`
  display: block;
  border: none;
  padding: 18px 0 18px 12px;
  background-color: inherit;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    color: hsla(0, 0%, 75%, 1);
    font-size: ${15 / 16}rem;
  }
`;
const SendButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: hsl(160, 100%, 26%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;
