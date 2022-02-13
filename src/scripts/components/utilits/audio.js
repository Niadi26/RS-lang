let isAudio = true;

export const right = new Audio();
right.src = '../../assets/audio/right.mp3';

export const wrong = new Audio();
wrong.src = '../../assets/audio/wrong.mp3';

export const turnOffSounds = (el) => {
  if (isAudio) {
    isAudio = false;
    right.volume = 0;
    wrong.volume = 0;
    el.style.background = 'url(../../assets/mowgle88/volumeoff.svg) no-repeat';
  } else {
    isAudio = true;
    right.volume = 1;
    wrong.volume = 1;
    el.style.background = 'url(../../assets/mowgle88/volumeup.svg) no-repeat';
  }
};
