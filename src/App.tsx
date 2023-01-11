import React from 'react';
import CharacterCount from './components/CharacterCount';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="w-full h-screen max-w-screen-sm m-auto bg-red-300">
      <TextInput />
      <CharacterCount />
      <p className="text-xl">하이루</p>
    </div>
  );
}

export default App;
