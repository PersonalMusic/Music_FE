import React from 'react';
import { useRecoilValue } from 'recoil';
import { selector } from '../recoil/text';

function CharacterCount() {
  const count = useRecoilValue(selector);

  return <>Character Count: {count}</>;
}

export default CharacterCount;
