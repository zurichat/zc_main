import styled from "styled-components";
import Lightning from "../../assets/comments/lightning.svg";
import Border from "../../assets/comments/border.svg";
import Bold from "../../assets/comments/bold.svg";
import Italic from "../../assets/comments/italic.svg";
import Link from "../../assets/comments/link.svg";
import List from "../../assets/comments/list.svg";
import AtSign from "../../assets/comments/at-sign.svg";
import Clip from "../../assets/comments/clip.svg";
import Bigborder from "../../assets/comments/bigborder.svg";
import Dropdown from "../../assets/comments/dropdown.svg";
import Send from "../../assets/comments/send.svg";
import Google from "../InputBox/assets/comments/google.svg";
import Computer from "../InputBox/assets/comments/computer.svg";
import UnstyledButton from "./UnstyledButton";
import axios from "axios";
import React, { useState, useEffect } from "react";

const MessageInputBox2 = ({
  sendMessageHandler,
  addToMessages,
  org_id,
  room_id
}) => {
  const [text, setText] = useState("");
  const [textIsBold, setTextBold] = useState(false);
  const [textIsItalic, setTextItalic] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [inputKey, setInputKey] = useState("any-key-press");
  const [showAttachInputBox, setshowAttachInputBox] = useState(false);

  const generateMessageFormatOptions = () => {
    const options = [];
    if (textIsBold) options.push("bold");
    if (textIsItalic) options.push("italic");
    return options;
  };

  const handleClickSendMessage = () => {
    if (text) {
      const newMessage = {
        message: text,
        formatOptions: [...generateMessageFormatOptions()]
      };
      setText("");
      setTextBold(false);
      setTextItalic(false);
      addToMessages && addToMessages(newMessage);
      sendMessageHandler(newMessage);
    }
  };
  const inputRef = React.createRef();

  const handleAttachMedia = e => {
    {
      e.preventDefault();
      //const data = attachedFile
      axios
        .post(
          `https://dm.zuri.chat/api/v1/${org_id}/rooms/${room_id}/messagemedia`,
          attachedFile
        )
        .then(res => {
          alert(res);
        });
      clearAttached();
    }
  };
  useEffect(() => {
    if (attachedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(attachedFile);
    } else {
      setPreview("");
    }
  }, [attachedFile]);
  const handleSelectMedia = e => {
    //console.log(e.target.files[0])
    setAttachedFile(e.target.files[0]);
    setshowAttachInputBox(false);
  };

  // on click clear attached file
  const clearAttached = () => {
    setInputKey("reset-attached");
    setAttachedFile("");
    setshowAttachInputBox(false);
  };

  return (
    <Wrapper>
      <InputWrapper>
        {preview ? (
          <Preview>
            <img
              src={preview}
              style={{ position: "relative", height: "100px", weight: "100px" }}
              alt="Image Preview"
            />
            <button
              style={{
                position: "absolute",
                top: "-12px",
                left: "8",
                height: "30px",
                width: "30px",
                borderRadius: "50%"
              }}
              onClick={clearAttached}
            >
              X
            </button>
          </Preview>
        ) : null}
        <Input
          type="text"
          placeholder="Send a message"
          value={text}
          onChange={ev => setText(ev.target.value)}
        />
        {/* Attached File Input field */}
        {showAttachInputBox ? (
          <AttachFile>
            <div>
              <div>
                <img src={Google} alt="" />
                Google Drive
              </div>
              <label>
                <img src={Computer} alt="" onClick={handleSelectMedia} />
                Upload from your computer
                <input
                  style={{
                    display: "none"
                  }}
                  onChange={handleSelectMedia}
                  key={inputKey || ""}
                  type="file"
                  ref={inputRef}
                  //onClick={handleAttachMedia}
                />
              </label>
            </div>
          </AttachFile>
        ) : null}
        <SendWrapper>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", gap: "11px", alignItems: "center" }}>
              <img src={Lightning} alt="" />
              <img src={Border} alt="" />
              <UnstyledButton>
                <img
                  src={Bold}
                  alt=""
                  onClick={() => setTextBold(!textIsBold)}
                />
              </UnstyledButton>
            </div>
            <div
              style={{
                display: "flex",
                gap: "19px",
                marginLeft: "22px",
                alignItems: "center"
              }}
            >
              <UnstyledButton>
                <img
                  src={Italic}
                  alt=""
                  onClick={() => setTextItalic(!textIsItalic)}
                />
              </UnstyledButton>
              <UnstyledButton>
                <img src={Link} alt="" />
              </UnstyledButton>
              <UnstyledButton>
                <img src={List} alt="" />
              </UnstyledButton>
            </div>
          </div>
          <div style={{ display: "flex", gap: "15px", marginLeft: "auto" }}>
            <UnstyledButton>
              <img src={AtSign} alt="" />
            </UnstyledButton>
            <UnstyledButton>
              <img
                src={Clip}
                alt=""
                className="attach_file"
                onClick={() => setshowAttachInputBox(true)}
              />
            </UnstyledButton>
            <UnstyledButton>
              <img
                src={Send}
                alt=""
                onClick={handleClickSendMessage && handleAttachMedia}
              />
            </UnstyledButton>
            <UnstyledButton>
              <img src={Bigborder} alt="" />
            </UnstyledButton>
            <UnstyledButton>
              {" "}
              <img src={Dropdown} alt="" />
            </UnstyledButton>
          </div>
        </SendWrapper>
      </InputWrapper>
    </Wrapper>
  );
};
export default MessageInputBox2;

const Wrapper = styled.div`
  padding: 0 2px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
`;
const InputWrapper = styled.section`
  border: 1px solid hsla(0, 0%, 92%, 1);
  border-radius: 3px;
  width: 100%;
  /* padding-left: 8px;
padding-top: 8px;
padding-bottom: 8px; */
  /* border-bottom: 1px solid hsl(160, 100%, 86%); */
`;
const SendWrapper = styled.section`
  padding: 10px 18px 15px 18px;
  display: flex;
  gap: 120px;
  align-items: center;
  padding-right: 18px;
  gap: 4px;
  position: relative;
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
const AttachFile = styled.div`
  width: 324px;
  border-radius: 8px;
  background-color: #f8f8f8;
  padding: 15px 35px;
  position: absolute;
  right: 104px;
  bottom: 46px;
`;
const Preview = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 2px;
`;
