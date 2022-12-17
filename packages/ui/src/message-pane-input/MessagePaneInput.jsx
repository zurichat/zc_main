import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  getDefaultKeyBinding,
  ContentState,
  Modifier
} from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter
} from "@draft-js-plugins/mention";
import "emoji-mart/css/emoji-mart.css";
import "!style-loader!css-loader!draft-js-emoji-plugin/lib/plugin.css";
import "@draft-js-plugins/mention/lib/plugin.css";
import "!style-loader!css-loader!@draft-js-plugins/emoji/lib/plugin.css";
import "!style-loader!css-loader!@draft-js-plugins/mention/lib/plugin.css";

// import suggestionStyles from "./suggestions.module.css"
import "./message-editor-input.css";
import ToolbarBottom from "./components/ToolbarBottom";
import ToolbarTop from "./components/ToolbarTop";
import mentions from "./mentions.data";

import createEmojiPlugin from "@draft-js-plugins/emoji";
import { theme } from "./EmojiStyles.styled.js";
import axios from "axios";
import { BsFillFileEarmarkFill } from "react-icons/bs";

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
  theme: theme
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const mentionPlugin = createMentionPlugin({ mentionPrefix: "@" });
const { MentionSuggestions } = mentionPlugin;

function keyBindingFn(e, editorState) {
  if (e.code === "Enter") {
    if (e.shiftKey || e.nativeEvent.shiftKey) {
      return "newline";
    } else {
      if (
        editorState.getEditorState().getCurrentContent().getPlainText("")
          .length > 0
      ) {
        return "send";
      }
    }
  }
  return getDefaultKeyBinding(e);
}

// https://github.com/jpuri/draftjs-utils/blob/master/js/block.js
const removeSelectedBlocksStyle = editorState => {
  const newContentState = RichUtils.tryToRemoveBlockStyle(editorState);
  if (newContentState) {
    return EditorState.push(editorState, newContentState, "change-block-type");
  }
  return editorState;
};

// https://github.com/jpuri/draftjs-utils/blob/master/js/block.js
export const getResetEditorState = editorState => {
  const blocks = editorState.getCurrentContent().getBlockMap().toList();
  const updatedSelection = editorState.getSelection().merge({
    anchorKey: blocks.first().get("key"),
    anchorOffset: 0,
    focusKey: blocks.last().get("key"),
    focusOffset: blocks.last().getLength()
  });
  const newContentState = Modifier.removeRange(
    editorState.getCurrentContent(),
    updatedSelection,
    "forward"
  );

  const newState = EditorState.push(
    editorState,
    newContentState,
    "remove-range"
  );
  removeFromSessionStorage();
  return removeSelectedBlocksStyle(newState);
};

const loadFromSessionStorage = () => {
  const editorStateID = "editorState_" + sessionStorage.getItem("currentRoom");
  const sessionData = sessionStorage.getItem(editorStateID);
  if (sessionData) {
    return convertFromRaw(JSON.parse(sessionData));
  }
  return null;
};

const saveToSessionStorage = editorState => {
  const currentRoom = sessionStorage.getItem("currentRoom");
  const editorStateID = "editorState_" + currentRoom;
  if (currentRoom) {
    sessionStorage.setItem(
      editorStateID,
      JSON.stringify(convertToRaw(editorState))
    );
  }
};

const removeFromSessionStorage = () => {
  const editorStateID = "editorState_" + sessionStorage.getItem("currentRoom");
  sessionStorage.removeItem(editorStateID);
};

const MessagePaneInput = ({ onSendMessage, users, onAttachFile }) => {
  const [data, setData] = useState("");
  const [editorState, setEditorState] = useState(() => {
    const content = loadFromSessionStorage();
    return content
      ? EditorState.createWithContent(content)
      : EditorState.createEmpty();
  });
  const [showEmoji, setShowEmoji] = useState(false);
  const [suggestions, setSuggestions] = useState(users || mentions);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  useEffect(() => {
    const content = loadFromSessionStorage();
    if (content) {
      setEditorState(EditorState.createWithContent(content));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [sessionStorage.getItem("currentRoom")]);

  // Mention helpers
  const onOpenChange = useCallback(_open => {
    setSuggestionsOpen(_open);
  }, []);

  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  const editorStates = editorState => {
    setEditorState(editorState);
    saveToSessionStorage(editorState.getCurrentContent());
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks
      .map(block => (!block.text.trim() && "\n") || block.text)
      .join("\n");
    setData(value);
  };

  const onChange = editorState => {
    editorStates(editorState);
  };

  const clearEditor = () => {
    setEditorState(getResetEditorState(editorState));
  };

  const sendMessage = contentState => {
    if (
      (contentState.hasText() &&
        contentState.getPlainText().trim().length > 0) ||
      sentAttachedFile
    ) {
      onSendMessage(convertToRaw(contentState));
      clearEditor();
    }
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (!newState) {
      if (command === "newline") {
        const newEditorState = RichUtils.insertSoftNewline(editorState);
        if (newEditorState !== editorState) {
          onChange(newEditorState);
        }
        return "handled";
      }
      if (command === "send") {
        sendMessage(editorState.getCurrentContent());
        return "handled";
      }
    }

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not handled";
  };
  //Preview render
  const [sentAttachedFile, setSentAttachedFile] = useState(null);
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    if (sentAttachedFile) {
      setPreview([]); // reset preview

      [...sentAttachedFile].map((file, index) => {
        const reader = new FileReader();
        const extension = file.name.substring(file.name.lastIndexOf(".") + 1);

        reader.onloadend = () => {
          const fileObject = {
            id: index,
            name: file.name,
            src: reader.result,
            extension: extension
          };
          setPreview(prevState => [...prevState, fileObject]);
        };
        reader.readAsDataURL(file);
      });
      onAttachFile(sentAttachedFile);
    } else {
      setPreview([]);
    }
  }, [sentAttachedFile]);

  // on click clear attached file
  const clearAttached = file => {
    if (file) {
      setSentAttachedFile(prev =>
        [...prev].filter((element, index) => index !== file.id)
      );
    } else {
      setSentAttachedFile([]);
      setPreview([]);
    }
  };

  // preview component for audios
  const AudioFilePreview = ({ source }) => {
    return <audio controls src={source} />;
  };

  // preview component for documents
  const DocumentFilePreview = ({ fileName, extension }) => {
    return (
      <StyledDocumentPreview>
        <div>
          <BsFillFileEarmarkFill style={{ width: "42px", height: "42px" }} />
        </div>
        <div style={{ width: "85%" }}>
          <h6>{fileName}</h6>
          <p>{extension}</p>
        </div>
      </StyledDocumentPreview>
    );
  };

  // generic preview component for files of any type
  const PreviewFile = ({ file }) => {
    if (file?.src.includes("data:image")) {
      return <img src={file?.src} alt="Image Preview" />;
    } else if (file?.src.includes("data:audio")) {
      return <AudioFilePreview source={file?.src} />;
    } else if (file?.src.includes("data:video")) {
      return <video autoPlay muted src={file?.src} />;
    } else {
      return (
        <DocumentFilePreview
          fileName={file?.name}
          extension={file?.extension}
        />
      );
    }
  };

  function attachedFileHandler(file) {
    if (sentAttachedFile) {
      const children = Array.from(sentAttachedFile).concat(Array.from(file));
      setSentAttachedFile(children);
    } else {
      setSentAttachedFile(file);
    }
  }

  // used to render the preview on the message input
  const PreviewItem = () => {
    return (
      <div className="previewContainer">
        {preview?.map(file => {
          return (
            <Preview key={file.id}>
              <PreviewFile file={file} />
              <button onClick={() => clearAttached(file)}>X</button>
            </Preview>
          );
        })}
      </div>
    );
  };

  return (
    <Wrapper>
      <InputWrapper>
        <div className="RichEditor-root">
          <ToolbarTop
            editorState={editorState}
            setEditorState={setEditorState}
            emojiSelect={<EmojiSelect />}
            sendMessageHandler={sendMessage}
            sentAttachedFile={file => attachedFileHandler(file)}
          />
          <Editor
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={keyBindingFn}
            plugins={[emojiPlugin, mentionPlugin]}
          />
        </div>
        {preview?.length > 0 ? <PreviewItem /> : null}
        <ToolbarBottom
          editorState={editorState}
          setEditorState={setEditorState}
          emojiSelect={<EmojiSelect />}
          sendMessageHandler={sendMessage}
          sentAttachedFile={file => attachedFileHandler(file)}
          clearAttached={clearAttached}
        />
        <MentionSuggestions
          open={suggestionsOpen}
          onOpenChange={onOpenChange}
          onSearchChange={onSearchChange}
          suggestions={suggestions}
          // onAddMention={m => console.log(m)}
        />
        {/* <div>
          {showEmoji && (
            <Picker perLine={7} showPreview={false} onChange={true} />
          )}
        </div> */}
      </InputWrapper>
    </Wrapper>
  );
};

export default MessagePaneInput;

const Wrapper = styled.div`
  // padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;

  .previewContainer {
    display: flex;
    align-items: center;
    overflow-x: auto;
  }
`;

const InputWrapper = styled.section`
  border: 1px solid #b0afb0;
  ${"" /* border: 1px solid hsla(0, 0%, 92%, 1); */}
  border-radius: 3px;
  padding: 10px 18px;
  ${"" /* width: calc(100% - 24px); */}/* padding-left: 8px;
padding-top: 8px;
padding-bottom: 8px; */
  /* border-bottom: 1px solid hsl(160, 100%, 86%); */
`;
const SendWrapper = styled.section`
  display: flex;
  gap: 120px;
  align-items: center;
  padding-right: 18px;
  gap: 4px;
`;
const Input = styled.input`
  display: block;
  border: none;
  // padding: 18px 0 18px 12px;
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
const StyledDocumentPreview = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  padding: 16px 14px;
  background: #ddd;
  border-radius: 10px;

  h6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    font-weight: bold;
  }

  p {
    text-transform: uppercase;
    font-size: 14px;
  }
`;

const Preview = styled.div`
  /* width: 5%; */
  /* height: 0.05%; */
  width: fit-content;
  margin: 10px 22px 12px 0;
  position: relative;
  flex-shrink: 0;
  width: fit-content;
  margin-top: 6px;
  margin-bottom: 10px;
  position: relative;

  img,
  video {
    width: 95px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 6px #0000001a;
  }

  button {
    position: absolute;
    top: -8px;
    right: -10px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #242424;
    font-weight: 800;
    font-size: 12px;
    color: #fff;
  }
`;
