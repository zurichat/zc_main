// import React, { useEffect, useState } from "react"
// import { IoFlashOutline, IoSendSharp } from "react-icons/io5"
// import { BsTypeBold, BsLink45Deg } from "react-icons/bs"
// import { FiAtSign, FiItalic } from "react-icons/fi"
// import { AiOutlineBars } from "react-icons/ai"
// // import Editor from "draft-js-plugins-editor"
// import { EditorState, RichUtils, convertToRaw } from "draft-js"
// import { ImAttachment } from "react-icons/im"
// import "../../../src/App.css"
// import createEmojiPlugin from "draft-js-emoji-plugin"
// import "draft-js-emoji-plugin/lib/plugin.css"
// import "draft-js/dist/Draft.css"

// const emojiPlugin = createEmojiPlugin({
//   useNativeArt: true
// })
// const { EmojiSuggestions, EmojiSelect } = emojiPlugin
// const plugins = [emojiPlugin]

// const CommentBox = ({ channelId }) => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty())

//   const [isFocused, setFocused] = useState(false)
//   const [data, setData] = useState("")
//   const [emoji, setEmoji] = useState(false)

//   function editorStates(editorState) {
//     setEditorState(editorState)
//     const blocks = convertToRaw(editorState.getCurrentContent()).blocks
//     const value = blocks
//       .map(block => (!block.text.trim() && "\n") || block.text)
//       .join("\n")
//     setData(value)
//   }

//   const onChange = editorState => {
//     editorStates(editorState)
//   }

//   let className = "RichEditor-editor"
//   var contentState = editorState.getCurrentContent()
//   if (!contentState.hasText()) {
//     if (contentState.getBlockMap().first().getType() !== "unstyled") {
//       className += " RichEditor-hidePlaceholder"
//     }
//   }

//   const toggleBlockType = blockType => {
//     onChange(RichUtils.toggleBlockType(editorState, blockType))
//   }

//   const toggleInlineStyle = inlineStyle => {
//     onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
//   }

//   const onEmojiClick = (event, emojiObject) => {
//     const selection = editorState.getSelection()
//     setFocused(true)
//     const text =
//       data.slice(0, selection) + emojiObject.emoji + data.slice(selection)
//     setData(text)
//   }
//   // const focus = () => {
//   //   Editor.focus();
//   // }
//   return (
//     <div>
//       <div className="RichEditor-root">
//         <div className="styling">
//           <div className={className}>
//             <Editor
//               editorState={editorState}
//               onChange={onChange}
//               placeholder="Message #announcement"
//               spellCheck={true}
//               plugins={plugins}
//               onFocus={() => setFocused(true)}
//               onBlur={() => setFocused(false)}
//             />
//             <EmojiSuggestions />
//           </div>
//           <div className="icons">
//             <ImAttachment />
//             <FiAtSign />
//             <IoSendSharp />
//           </div>
//           <IoSendSharp />
//         </div>
//         <div overflowX="auto" marginTop="12px" justifyContent="space-between">
//           <div style={{ display: "flex", minWidth: "12em" }}>
//             <InlineStyleControls
//               editorState={editorState}
//               onToggle={toggleInlineStyle}
//             />
//             <div style={{ padding: "2px", marginRight: "10px" }}>
//               <BsLink45Deg />
//             </div>
//             <BlockStyleControls
//               editorState={editorState}
//               onToggle={toggleBlockType}
//             />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               minWidth: "5em",
//               flexWrap: "wrap"
//             }}
//           >
//             {/* <GrEmoji onClick={()=>setEmoji(!emoji)}/> */}
//             <EmojiSelect />
//             <ImAttachment />
//             <FiAtSign />
//             <IoSendSharp />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function StyleButton({ onToggle, style, label, active }) {
//   const onToggled = e => {
//     e.preventDefault()
//     onToggle(style)
//   }

//   let className = "RichEditor-styleButton"
//   if (active) {
//     className += " RichEditor-activeButton"
//   }

//   return (
//     <span className={className} onMouseDown={onToggled}>
//       {label}
//     </span>
//   )
// }

// const BLOCK_TYPES = [
//   { label: <AiOutlineBars />, style: "ordered-list-item" }
//   // {label: 'OL', style: 'ordered-list-item'},
// ]

// const BlockStyleControls = props => {
//   const { editorState } = props
//   const selection = editorState.getSelection()
//   const blockType = editorState
//     .getCurrentContent()
//     .getBlockForKey(selection.getStartKey())
//     .getType()

//   return (
//     <div className="RichEditor-controls">
//       {BLOCK_TYPES.map(type => (
//         <StyleButton
//           key={type.label}
//           active={type.style === blockType}
//           label={type.label}
//           onToggle={props.onToggle}
//           style={type.style}
//         />
//       ))}
//     </div>
//   )
// }
// var INLINE_STYLES = [
//   { label: <IoFlashOutline />, style: "" },
//   { label: <BsTypeBold />, style: "BOLD" },
//   { label: <FiItalic />, style: "ITALIC" }
// ]

// const InlineStyleControls = props => {
//   const currentStyle = props.editorState.getCurrentInlineStyle()

//   return (
//     <div className="RichEditor-controls">
//       {INLINE_STYLES.map(type => (
//         <StyleButton
//           key={type.style}
//           active={currentStyle.has(type.style)}
//           label={type.label}
//           onToggle={props.onToggle}
//           style={type.style}
//         />
//       ))}
//     </div>
//   )
// }
// export default CommentBox

import styled from "styled-components";
import Lightning from "../assets/lightning.svg";
import Border from "../assets/border.svg";
import Bold from "../assets/bold.svg";
import Italic from "../assets/italic.svg";
import Link from "../assets/link.svg";
import List from "../assets/list.svg";
import AtSign from "../assets/at-sign.svg";
import Clip from "../assets/clip.svg";
import Bigborder from "../assets/bigborder.svg";
import Dropdown from "../assets/dropdown.svg";
import Send from "../assets/send.svg";
import UnstyledButton from "../UnstyledButton";
import {
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  DraftDecoratorComponentProps,
  convertToRaw
} from "draft-js";

import { useState } from "react";
// import Send from "../assets/comments/goto.svg";
const CommentBox = ({ sendMessageHandler }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  //   const [text, setText] = useState("")
  //   const [textIsBold, setTextBold] = useState(false)
  //   const [textIsItalic, setTextItalic] = useState(false)

  //   const generateMessageFormatOptions = () => {
  //     const options = []
  //     if (textIsBold) options.push("bold")
  //     if (textIsItalic) options.push("italic")
  //   }

  //   const handleClickSendMessage = () => {
  //     if (text) {
  //       const newMessage = {
  //         message: text,
  //         formatOptions: [...generateMessageFormatOptions()]
  //       }
  //       setText("")
  //       setTextBold(false)
  //       setTextItalic(false)
  //       sendMessageHandler(newMessage)
  //     }
  //   }
  const makeBold = () => {
    const editorState = RichUtils.toggleInlineStyle(
      this.state.editorState,
      "BOLD"
    );
    setEditorState(editorState);
  };

  return (
    <Wrapper>
      <InputWrapper>
        {/* <Input
          type="text"
          placeholder="Send a message"
          value={text}
          onChange={ev => setText(ev.target.value)}
        /> */}
        <Editor editorState={editorState} onChange={setEditorState} />
        <SendWrapper>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", gap: "11px", alignItems: "center" }}>
              <img src={Lightning} alt="" />
              <img src={Border} alt="" />
              <img src={Bold} alt="" onClick={() => makeBold()} />
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
                  //   onClick={() => setTextItalic(!textIsItalic)}
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
              <img src={Clip} alt="" />
            </UnstyledButton>
            <UnstyledButton>
              <img src={Send} alt="" />
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

const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 100%;
`;
const InputWrapper = styled.section`
  border: 1px solid hsla(0, 0%, 92%, 1);
  border-radius: 3px;
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

export default CommentBox;
