import React from "react";
import CharacterCount from "./components/CharacterCount";
import TextInput from "./components/TextInput";

function App() {
  return (
    <div className="App">
      <TextInput />
      <CharacterCount />
      <h1 className="text-3xl font-bold underline">
        하이루
      </h1>
    </div>
  );
}

export default App;
