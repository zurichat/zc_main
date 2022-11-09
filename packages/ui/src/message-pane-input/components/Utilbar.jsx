import React, { useState } from "react";
import { convertToRaw, EditorState, RichUtils } from "draft-js";
import RealUnstyledButton from "~/shared/button/Button";
import styled from "styled-components";
import { AtSign, Clip, Computer, Google, Send } from "@assets/index";
import {
  GlobalStyleForEmojiSelect,
  StyledEmojiSelectWrapper
} from "../EmojiStyles.styled";
import ClickAwayListener from "react-click-away-listener";

const ClipIcon = () => <img src={Clip} alt="" />;
const SendIcon = () => <img src={Send} alt="" />;
const AtIcon = () => <img src={AtSign} alt="" />;

const UtilBar = props => {
  const { editorState, setEditorState, emojiSelect, sendMessageHandler } =
    props;
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
    sendMessageHandler(editorState.getCurrentContent());
    setEditorState(EditorState.createEmpty());
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
const SendContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 5px 18px 5px 18px;
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

export default UtilBar;
