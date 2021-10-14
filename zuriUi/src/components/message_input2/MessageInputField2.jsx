import styled from "styled-components"
import Lightning from "../../assets/comments/lightning.svg"
import Border from "../../assets/comments/border.svg"
import Bold from "../../assets/comments/bold.svg"
import Italic from "../../assets/comments/italic.svg"
import Link from "../../assets/comments/link.svg"
import List from "../../assets/comments/list.svg"
import AtSign from "../../assets/comments/at-sign.svg"
import Clip from "../../assets/comments/clip.svg"
import Bigborder from "../../assets/comments/bigborder.svg"
import Dropdown from "../../assets/comments/dropdown.svg"
import Send from "../../assets/comments/send.svg"
import UnstyledButton from "./UnstyledButton"

import { useState } from "react"
const MessageInputBox2 = ({ sendMessageHandler, addToMessages }) => {
  const [text, setText] = useState("")
  const [textIsBold, setTextBold] = useState(false)
  const [textIsItalic, setTextItalic] = useState(false)
  const [attachedFile, setAttachedFile] = useState(null)
  const [inputKey, setInputKey] = useState("any-key-press")
  const [showAttachInputBox, setshowAttachInputBox] = useState(false)

  const generateMessageFormatOptions = () => {
    const options = []
    if (textIsBold) options.push("bold")
    if (textIsItalic) options.push("italic")
    return options
  }

  const handleClickSendMessage = () => {
    if (text) {
      const newMessage = {
        message: text,
        formatOptions: [...generateMessageFormatOptions()]
      }
      setText("")
      setTextBold(false)
      setTextItalic(false)
      addToMessages && addToMessages(newMessage)
      sendMessageHandler(newMessage)
    }
  }

  const handleAttachMedia = e => {
    if (e.target.files && e.target.files[0]) {
      const fd = new FormData()
      fd.append("media", e.target.files[0], e.target.files[0].name)
      setAttachedFile(fd)
    }
  }

  // on click clear attached file
  const clearAttached = () => {
    setInputKey("reset-attached")
    setAttachedFile("")
    setshowAttachInputBox(false)
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Send a message"
          value={text}
          onChange={ev => setText(ev.target.value)}
        />
        {/* Attached File Input field */}
        {showAttachInputBox ? (
          <div>
            <input onChange={attachedFile} key={inputKey || ""} type="file" />
            <button onClick={handleAttachMedia}>Send</button>
            <button onClick={clearAttached}>Clear Attached File</button>
          </div>
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
                onClick={() => setshowAttachInputBox(true)}
              />
            </UnstyledButton>
            <UnstyledButton>
              <img src={Send} alt="" onClick={handleClickSendMessage} />
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
  )
}
export default MessageInputBox2

const Wrapper = styled.div`
  padding: 0 2px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
`
const InputWrapper = styled.section`
  border: 1px solid hsla(0, 0%, 92%, 1);
  border-radius: 3px;
  margin: 0;
`
const SendWrapper = styled.section`
  padding: 10px 18px 15px 18px;
  display: flex;
  gap: 120px;
  align-items: center;
  padding-right: 18px;
  gap: 4px;
`
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
`
const SendButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: hsl(160, 100%, 26%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
`
