import React, { useState } from "react";
import { convertToRaw, EditorState, RichUtils } from "draft-js";
import RealUnstyledButton from "@components/sharedd/unstyled_button/UnstyledButton";
import styled from "styled-components";
import {
  AtSign,
  Bold,
  Border,
  Clip,
  Computer,
  Google,
  Italic,
  Lightning,
  Link,
  List,
  Send
} from "@assets/index";
import {
  GlobalStyleForEmojiSelect,
  StyledEmojiSelectWrapper
} from "../emojiStyles";
import ClickAwayListener from "react-click-away-listener";

const BoldIcon = () => <img src={Bold} alt="" />;
const ItalicIcon = () => <img src={Italic} alt="" />;
const ListIcon = () => <img src={List} alt="" />;
const BorderIcon = () => <img src={Border} alt="" />;
const LightningIcon = () => <img src={Lightning} alt="" />;
const LinkIcon = () => <img src={Link} alt="" />;
const ClipIcon = () => <img src={Clip} alt="" />;
const SendIcon = () => <img src={Send} alt="" />;
const AtIcon = () => <img src={AtSign} alt="" />;

const inlineStyles = [
  { type: "BOLD", label: <BoldIcon /> },
  { type: "ITALIC", label: <ItalicIcon /> }
];

const blockStyles = [{ type: "ordered-list-item", label: <ListIcon /> }];
const Toolbar = props => {
  const {
    editorState,
    setEditorState,
    emojiSelect,
    sendMessageHandler,
    sendAttachedFileHandler,
    addToMessages,
    currentUserData,
    sentAttachedFile
  } = props;
  const [focus, setFocus] = useState(false);
  const toggleFocus = () => setFocus(!false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [inputKey, setInputKey] = useState("any-key-press");
  const [showAttachInputBox, setshowAttachInputBox] = useState(false);
  //const [preview, setPreview] = useState('')

  //Attachment ref
  const inputRef = React.createRef();

  //Handles sending of attachedfile
  const handleAttachMedia = e => {
    {
      e.preventDefault();
      //Post request is sent here
      sendMessageHandler(attachedFile);

      //Then this is to clear the file from the state
      props.sentAttachedFile(null);
      clearAttached();
    }
  };

  const handleClickAway = () => {
    setshowAttachInputBox(false);
  };

  const handleSelectMedia = e => {
    setAttachedFile(e.target.files[0]);
    props.sentAttachedFile(e.target.files[0]);
    setshowAttachInputBox(false);
  };

  // on click clear attached file
  const clearAttached = () => {
    setInputKey("reset-attached");
    setAttachedFile("");
    setshowAttachInputBox(false);
  };

  const handleClickSendMessage = () => {
    const currentDate = new Date();
    const newMessageData = {
      message_id: Date.now().toString(),
      sender: {
        sender_name: currentUserData.username,
        sender_image_url: currentUserData.imageUrl
      },
      time: `${
        currentDate.getHours() < 12
          ? currentDate.getHours()
          : currentDate.getHours() - 12
      }:${currentDate.getMinutes()}${
        currentDate.getHours() < 12 ? "AM" : "PM"
      }`,
      timestamp: currentDate.getTime(),
      emojis: [],
      richUiData: convertToRaw(editorState.getCurrentContent())
    };
    // console.log("submit-msg", newMessageData)
    // console.log("submit-editor", convertToRaw(editorState.getCurrentContent()))
    addToMessages && addToMessages(newMessageData);
    sendMessageHandler(newMessageData);
    setEditorState(EditorState.createEmpty());
  };
  const handleInlineStyle = (event, style) => {
    event.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleBlockStyle = (event, block) => {
    event.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, block));
  };

  const renderInlineStyleButton = (style, index) => {
    const currentInlineStyle = editorState.getCurrentInlineStyle();
    let className = "toolbar-button";
    if (currentInlineStyle.has(style.type)) {
      className = "toolbar-button-selected";
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
    );
  };

  const renderBlockStyleButton = (block, index) => {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState);
    let className = "toolbar-button";
    if (currentBlockType === block.type) {
      className = "toolbar-button-selected";
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
    );
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Wrapper>
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
        <FormatContainer>
          <LightningIcon />

          <span style={{ paddingInline: "4px" }}>
            <BorderIcon />
          </span>

          {inlineStyles.map((style, index) => {
            return renderInlineStyleButton(style, index);
          })}
          <UnstyledButton>
            <LinkIcon />
          </UnstyledButton>
          {blockStyles.map((block, index) => {
            return renderBlockStyleButton(block, index);
          })}
        </FormatContainer>
        <SendContainer>
          <UnstyledButton>
            <AtIcon />
          </UnstyledButton>
          {
            <StyledEmojiSelectWrapper>
              <GlobalStyleForEmojiSelect />
              {emojiSelect}
            </StyledEmojiSelectWrapper>
          }
          <UnstyledButton onClick={() => setshowAttachInputBox(true)}>
            <ClipIcon />
          </UnstyledButton>
          <UnstyledButton onClick={handleClickSendMessage || handleAttachMedia}>
            <SendIcon />
          </UnstyledButton>
        </SendContainer>
      </Wrapper>
    </ClickAwayListener>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FormatContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const SendContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
  align-items: center;
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

const UnstyledButton = styled(RealUnstyledButton)`
  height: 32px;
  width: 24px;
  display: grid;
  place-items: center;
  padding: 2px 4px;
`;

export default Toolbar;
