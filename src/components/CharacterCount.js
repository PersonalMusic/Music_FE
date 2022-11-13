import React from "react";
import { useRecoilValue } from "recoil";
import { withCount } from "../recoil/text";

function CharacterCount() {
  const count = useRecoilValue(withCount);

  return <>Character Count: {count}</>;
}

export default CharacterCount;
