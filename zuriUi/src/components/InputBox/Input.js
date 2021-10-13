import styled from "styled-components"
import UnstyledButton from "./UnstyledButton"
import { EditorState, RichUtils, convertToRaw } from "draft-js"
import { useState } from "react"
// import Send from "../assets/comments/goto.svg";
import "draft-js-emoji-plugin/lib/plugin.css"
import Toolbar from "./Toolbar"
import createEmojiMartPlugin from "draft-js-emoji-mart-plugin"
import data from "emoji-mart/data/apple.json"

import "emoji-mart/css/emoji-mart.css"
import Editor from "@draft-js-plugins/editor"
import createEmojiPlugin from "@draft-js-plugins/emoji"

// const emojiPlugin = createEmojiPlugin({
//   useNativeArt: true,
// });
// const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
// const plugins = [emojiPlugin];
const emojiPlugin = createEmojiMartPlugin({
  data,
  set: "apple"
})
const { Picker } = emojiPlugin
const CommentBox = ({ addToMessage }) => {
  const [data, setData] = useState("")
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [showEmoji, setShowEmoji] = useState(false)
  // const handleAddToMessages = () => {
  //   if (text) {
  //     addToMessage(text);
  //     setText("");
  //   }

  const editorStates = editorState => {
    setEditorState(editorState)
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks
    const value = blocks
      .map(block => (!block.text.trim() && "\n") || block.text)
      .join("\n")
    setData(value)
  }
  const onChange = editorState => {
    editorStates(editorState)
  }

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      setEditorState(newState)
      return "handled"
    }
    return "not handled"
  }
  const emojiHandler = () => {
    setShowEmoji(!showEmoji)
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          plugins={[emojiPlugin]}
        />
        <Toolbar
          editorState={editorState}
          setEditorState={setEditorState}
          showEmoji={emojiHandler}
        />
        {/* <div>
          {showEmoji && (
            <Picker perLine={7} showPreview={false} onChange={true} />
          )}
        </div> */}
      </InputWrapper>
    </Wrapper>
  )
}
export default Input

const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
`
const InputWrapper = styled.section`
  border: 1px solid hsla(0, 0%, 92%, 1);
  border-radius: 3px;
  padding: 10px 18px 15px 18px;
  /* padding-left: 8px;
padding-top: 8px;
padding-bottom: 8px; */
  /* border-bottom: 1px solid hsl(160, 100%, 86%); */
`
const SendWrapper = styled.section`
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
