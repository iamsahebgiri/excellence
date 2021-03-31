import React from "react";
import { Editor } from "@tinymce/tinymce-react";


class TextEditor extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  render() {
    return (
      "sasa"
    );
  }
}

export default TextEditor;
