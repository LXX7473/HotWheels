import React, { useState, FC, ReactElement } from "react";
import MonacoEditor from "react-monaco-editor";
interface Props {}
const MyEdit: FC<Props> = (): ReactElement => {
  const [text, setText] = useState("");
  function onChangeHandle(value: any) {
     setText(value);
  }
  return (
      <div>
        <MonacoEditor
          width="100%"
          height={window.innerHeight - 16}
          language="typescript"
          theme="vs-dark"
          value={text}
          onChange={onChangeHandle}
          options={{
            selectOnLineNumbers: true,
            matchBrackets: "near",
          }}
        />
      </div>
  );
}
export default MyEdit;
