import { rootHTTP } from './word-card';

const audio = new Audio();

export function playAudio(num: number, ...audiosSrc: string[]) {
  if (num > audiosSrc.length) return;
  audio.src = `${rootHTTP}${audiosSrc[num]}`;
  audio.play();
  audio.onended = function () {
    playAudio(num + 1, ...audiosSrc);
  };
}
