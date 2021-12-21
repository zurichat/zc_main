import Editor from "@draft-js-plugins/editor";
import { convertFromRaw, EditorState } from "draft-js";
import { useState } from "react";

const MessageEditorReader = ({ richUiMessageConfig }) => {
  // console.log("chatItem", richUiMessageConfig)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(richUiMessageConfig))
  );
  return (
    <Editor
      readOnly={true}
      editorState={EditorState.createWithContent(
        convertFromRaw(richUiMessageConfig)
      )}
      onChange={setEditorState}
    />
  );
};
export default MessageEditorReader;
