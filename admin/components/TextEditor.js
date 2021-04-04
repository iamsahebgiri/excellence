import React from "react";
import { Editor } from "@tinymce/tinymce-react";

if (typeof window !== "undefined") {
  require("tinymce/tinymce");
  require("tinymce/icons/default/icons");
  require("tinymce/themes/silver");
  require("tinymce/plugins/advlist");
  require("tinymce/plugins/autolink");
  require("tinymce/plugins/lists");
  require("tinymce/plugins/link");
  require("tinymce/plugins/image");
  require("tinymce/plugins/charmap");
  require("tinymce/plugins/print");
  require("tinymce/plugins/preview");
  require("tinymce/plugins/anchor");
  require("tinymce/plugins/searchreplace");
  require("tinymce/plugins/visualblocks");
  require("tinymce/plugins/code");
  require("tinymce/plugins/codesample");
  require("tinymce/plugins/fullscreen");
  require("tinymce/plugins/insertdatetime");
  require("tinymce/plugins/media");
  require("tinymce/plugins/table");
  require("tinymce/plugins/paste");
  require("tinymce/plugins/help");
  require("tinymce/plugins/wordcount");
  require("../public/assets/libs/tinymce/plugins/wiris");
}

class TextEditor extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log(content);
  };

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 300,
          statusbar: false,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code codesample fullscreen",
            "insertdatetime media table paste code help wordcount tiny_mce_wiris",
          ],
          toolbar:
            "bold italic underline subscript superscript removeformat | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | \
              table image codesample|  fullscreen code | preview tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",
          skin_url: "/assets/libs/tinymce/skins/ui/oxide", // Static files path(step 2)
          content_css:
            "/assets/libs/tinymce/skins/content/default/content.min.css", // Static files path(step 2)
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default TextEditor;
