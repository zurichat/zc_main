import React, { useState } from "react"
import { convertToRaw, EditorState, RichUtils } from "draft-js"
import UnstyledButton from "./UnstyledButton"
import Italic from "./assets/comments/italic.svg"
import styled from "styled-components"
import Bold from "./assets/comments/bold.svg"
import List from "./assets/comments/list.svg"
import Border from "./assets/comments/border.svg"
import Lightning from "./assets/comments/lightning.svg"
import Clip from "./assets/comments/clip.svg"
import Link from "./assets/comments/link.svg"
import Send from "./assets/comments/send.svg"
import AtSign from "./assets/comments/at-sign.svg"
import "./ToolbarStyles.css"

const BoldIcon = () => <img src={Bold} alt="" />
const ItalicIcon = () => <img src={Italic} alt="" />
const ListIcon = () => <img src={List} alt="" />
const BorderIcon = () => <img src={Border} alt="" />
const LightningIcon = () => <img src={Lightning} alt="" />
const LinkIcon = () => <img src={Link} alt="" />
const ClipIcon = () => <img src={Clip} alt="" />
const SendIcon = () => <img src={Send} alt="" />
const AtIcon = () => <img src={AtSign} alt="" />

const inlineStyles = [
  { type: "BOLD", label: <BoldIcon /> },
  { type: "ITALIC", label: <ItalicIcon /> }
]

const blockStyles = [{ type: "ordered-list-item", label: <ListIcon /> }]
const Toolbar = props => {
  const {
    editorState,
    setEditorState,
    emojiSelect,
    sendMessageHandler,
    addToMessages,
    currentUserData
  } = props
  const [focus, setFocus] = useState(false)
  const toggleFocus = () => setFocus(!false)
  const [attachedFile, setAttachedFile] = useState(null)
  const [inputKey, setInputKey] = useState("any-key-press")
  const [showAttachInputBox, setshowAttachInputBox] = useState(false)

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

  const handleClickSendMessage = () => {
    const currentDate = new Date()
    const newMessageData = {
      message_id: Date.now().toString(),
      username: currentUserData.username || "John Doe",
      time: `${
        currentDate.getHours() < 12
          ? currentDate.getHours()
          : currentDate.getHours() - 12
      }:${currentDate.getMinutes()}${
        currentDate.getHours() < 12 ? "AM" : "PM"
      }`,
      emojis: [],
      richUiData: convertToRaw(editorState.getCurrentContent())
    }
    // console.log("submit-msg", newMessageData)
    // console.log("submit-editor", convertToRaw(editorState.getCurrentContent()))
    addToMessages && addToMessages(newMessageData)
    setEditorState(EditorState.createEmpty())
    // sendMessageHandler(convertToRaw(editorState.getCurrentContent()))
  }
  const handleInlineStyle = (event, style) => {
    event.preventDefault()
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  const handleBlockStyle = (event, block) => {
    event.preventDefault()
    setEditorState(RichUtils.toggleBlockType(editorState, block))
  }

  const renderInlineStyleButton = (style, index) => {
    const currentInlineStyle = editorState.getCurrentInlineStyle()
    let className = "toolbar-button"
    if (currentInlineStyle.has(style.type)) {
      className = "toolbar-button-selected"
    }

    return (
      <UnstyledButton
        key={index}
        onMouseDown={event => handleInlineStyle(event, style.type)}
        onClick={event => event.preventDefault()}
        className={className}
      >
        {style.label}
      </UnstyledButton>
    )
  }

  const renderBlockStyleButton = (block, index) => {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState)
    let className = "toolbar-button"
    if (currentBlockType === block.type) {
      className = "toolbar-button-selected"
    }

    return (
      <UnstyledButton
        key={index}
        title={block.toolTip}
        onMouseDown={event => handleBlockStyle(event, block.type)}
        onClick={event => event.preventDefault()}
        className={className}
      >
        {block.label}
      </UnstyledButton>
    )
  }

  return (
    <Wrapper>
      {/* Attached File Input field */}
      {showAttachInputBox ? (
        <div>
          <input onChange={attachedFile} key={inputKey || ""} type="file" />
          <button onClick={handleAttachMedia}>Send</button>
          <button onClick={clearAttached}>Clear Attached File</button>
        </div>
      ) : null}
      <FormatContainer>
        <LightningIcon />

        <BorderIcon />

        {inlineStyles.map((style, index) => {
          return renderInlineStyleButton(style, index)
        })}
        <UnstyledButton>
          <LinkIcon />
        </UnstyledButton>
        {blockStyles.map((block, index) => {
          return renderBlockStyleButton(block, index)
        })}
      </FormatContainer>
      <SendContainer>
        <UnstyledButton>
          <AtIcon />
        </UnstyledButton>
        {emojiSelect}
        <UnstyledButton onClick={() => setshowAttachInputBox(true)}>
          <ClipIcon />
        </UnstyledButton>
        <UnstyledButton onClick={handleClickSendMessage}>
          <SendIcon />
        </UnstyledButton>
      </SendContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const FormatContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`
const SendContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 19px;
  align-items: center;
`

export default Toolbar
