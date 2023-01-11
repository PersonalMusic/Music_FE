import { selector } from 'recoil';
import textAtom from './atom';

const textWithCount = selector({
  key: 'textWithCount',
  get: ({ get }) => {
    const text = get(textAtom);

    return text.length;
  },
});

export default textWithCount;
