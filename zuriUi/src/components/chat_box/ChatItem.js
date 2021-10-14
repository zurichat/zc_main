import Editor from "@draft-js-plugins/editor"
import { convertFromRaw, EditorState } from "draft-js"
import { useState } from "react"
import styled from "styled-components"

const ChatItem = ({ messageConfig }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(messageConfig))
  )
  return (
    <div>
      <Editor
        readOnly={true}
        editorState={EditorState.createWithContent(
          convertFromRaw(messageConfig)
        )}
        onChange={setEditorState}
      />
    </div>
  )
}
export default ChatItem

const Message = styled.p`
  font-family: "Lato";
  font-style: ${props => (props.isItalic ? "italic" : "normal")};
  font-weight: ${props => (props.isBold ? "bolder" : "normal")};
`
