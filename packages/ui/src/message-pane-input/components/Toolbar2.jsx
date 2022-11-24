import React, { useState, useRef, useEffect } from "react";
import { convertToRaw, EditorState, RichUtils } from "draft-js";
import RealUnstyledButton from "~/shared/button/Button";
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
} from "../EmojiStyles.styled";
import ClickAwayListener from "react-click-away-listener";

// Gif Integration
import { AiOutlineGif } from "react-icons/ai";
import classes from "./Gif.module.css";
import ReactGiphySearchbox from "react-giphy-searchbox";
import sendfile from "./SendFile.module.css";

const BoldIcon = () => <img src={Bold} alt="" />;
const ItalicIcon = () => <img src={Italic} alt="" />;
const ListIcon = () => <img src={List} alt="" />;
const BorderIcon = () => <img src={Border} alt="" />;
const LightningIcon = () => <img src={Lightning} alt="" />;
const LinkIcon = () => <img src={Link} alt="" />;
const ClipIcon = () => <img src={Clip} alt="" />;
const SendIcon = () => <img src={Send} alt="send icon" />;
const AtIcon = () => <img src={AtSign} alt="" />;

const inlineStyles = [
  { type: "BOLD", label: <BoldIcon /> },
  { type: "ITALIC", label: <ItalicIcon /> }
];

const blockStyles = [{ type: "ordered-list-item", label: <ListIcon /> }];
const Toolbar2 = props => {
  const {
    editorState,
    setEditorState,
    emojiSelect,
    sendMessageHandler,
    sendAttachedFileHandler,
    sentAttachedFile
  } = props;
  const [focus, setFocus] = useState(false);
  const toggleFocus = () => setFocus(!false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [inputKey, setInputKey] = useState("any-key-press");
  const [showAttachInputBox, setshowAttachInputBox] = useState(false);
  //const [preview, setPreview] = useState('')

  const inputLength = editorState.getCurrentContent().getPlainText("").length;
  // Gif state management
  const [showGif, setShowGif] = useState(false);

  //Attachment ref
  const inputRef = React.createRef();

  // File ref
  const fileRef = useRef();

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        fileRef.current.click();
      }
    });
  }, []);

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

  // This is the function that will be called whenever a gif is clicked or selected. The function will receives the gif object from which the url key has the path to the gif.
  const gifSelectionHandler = gifObj => {
    const gif = <img src={gifObj.url} alt={gifObj.id} />;
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
        <div className={`${sendfile.modal}`}>
          {showAttachInputBox ? (
            <AttachFile>
              <div>
                <div className={`${sendfile.container}`}>
                  <div className={`${sendfile.flex}`}>
                    <img src={Google} alt="" />
                    <span className={`${sendfile.span}`}>
                      Upload from Google Drive
                    </span>
                  </div>
                </div>

                <div className={`${sendfile.container}`}>
                  <label className={`${sendfile.flex} ${sendfile.label}`}>
                    <img src={Computer} alt="" onClick={handleSelectMedia} />
                    <span className={`${sendfile.span}`}>
                      Upload from your computer
                    </span>
                    <span className={`${sendfile.ctrl}`}>Ctrl+U</span>
                    <input
                      style={{
                        display: "none"
                      }}
                      onChange={handleSelectMedia}
                      key={inputKey || ""}
                      type="file"
                      ref={fileRef}
                      //onClick={handleAttachMedia}
                    />
                  </label>
                </div>
              </div>
            </AttachFile>
          ) : null}
        </div>
        <FormatContainer2>
          <LightningIcon />

          <span style={{ paddingInline: "4px" }}>
            <BorderIcon />
          </span>

          {inlineStyles.map((style, index) => {
            return renderInlineStyleButton(style, index);
          })}
          <span style={{ paddingInline: "4px" }}>
            <BorderIcon />
          </span>
          <UnstyledButton>
            <LinkIcon />
          </UnstyledButton>
          <span style={{ paddingInline: "4px" }}>
            <BorderIcon />
          </span>
          {blockStyles.map((block, index) => {
            return renderBlockStyleButton(block, index);
          })}

          {/* GIF integration */}
          <div
            className={`${classes.box} ${showGif && `${classes.box__active}`}`}
          >
            <AiOutlineGif
              className={classes.svg}
              onClick={() => setShowGif(prev => !prev)}
            />
          </div>
          <div
            className={`${classes.gif__box} ${
              showGif
                ? `${classes.gif__box__active}`
                : `${classes.gif__box__inactive}`
            }`}
          >
            <ReactGiphySearchbox
              apiKey="aK3byM6d4TMBFh7fkw3m7FuJOuRLHnM0"
              searchPlaceholder="Search Gif"
              gifListHeight="250px"
              onSelect={gifSelectionHandler}
              masonryConfig={[
                { columns: 2, imageWidth: 110, gutter: 5 },
                { mq: "768px", columns: 3, imageWidth: 120, gutter: 5 },
                { mq: "1200px", columns: 3, imageWidth: 130, gutter: 5 }
              ]}
            />
          </div>
        </FormatContainer2>
      </Wrapper>
    </ClickAwayListener>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
`;
const FormatContainer2 = styled.div`
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
  width: 45%;
  border-radius: 8px;
  background-color: #f8f8f8;
  padding-top: 30px;
  padding-buttom: 40px;
  position: absolute;
  right: 55%;
  bottom: 40px;
`;

const UnstyledButton = styled(RealUnstyledButton)`
  height: 32px;
  width: 24px;
  display: grid;
  place-items: center;
  padding: 2px 4px;
  &:disabled {
    cursor: not-allowed;
  }
`;

export default Toolbar2;
