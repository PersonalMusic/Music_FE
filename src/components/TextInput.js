import React from "react";
import { useRecoilState } from "recoil";
import textAtom from "../recoil/text/atom";

function TextInput() {
  const [text, setText] = useRecoilState(textAtom);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
