import Editor from "@draft-js-plugins/editor";
import { convertFromRaw, EditorState } from "draft-js";
import { useState } from "react";

const RichTextRenderer = ({ richUiMessageConfig }) => {
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
export default RichTextRenderer;
