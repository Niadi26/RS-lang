import { sprintChooseLevelContent, sprintGameContent } from './sprint-page-contant';
import { getWords } from '../../components/methods/get-words';
import { countdown } from '../../components/utilits/timer';
import { addFullscreen } from '../../components/fullscreen';
import { shuffle } from '../../components/utilits/random';
import { right, wrong, turnOffSounds } from '../../components/utilits/audio';

export const renderSprintPage = async (page, wraapper) => {
  wraapper.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('sprint-game');
  div.innerHTML = `${page}`;
  wraapper.append(div);
};

const getWord = async (group, page) => {
  const wordsApi = await getWords(group, page);
  const word = await wordsApi.map((el) => [el.id, el.word]);
  shuffle(word);
  return word;
};

const getWordTranslate = async (group, page) => {
  const wordsApi = await getWords(group, page);
  const wordTranslate = await wordsApi.map((el) => [el.id, el.wordTranslate]);
  shuffle(wordTranslate);
  return wordTranslate;
};

export const startGame = async (group, page, container, func) => {
  let word = await getWord(group, page);
  let wordTranslate = await getWordTranslate(group, page);
  let index = 0;
  let count = 0;
  // console.log(word);
  // console.log(wordTranslate);

  await renderSprintPage(func, container);

  const englishWord = document.querySelector('.english-word');
  const russianWord = document.querySelector('.russian-word');
  const panel = document.querySelector('.panel');
  const dot = document.querySelectorAll('.dot');
  const points = document.querySelector('.points span');
  const score = document.querySelector('.score-count');
  const volume = document.querySelector('.volume');

  englishWord.textContent = `${word[index][1]}`;
  russianWord.textContent = `${wordTranslate[index][1]}`;

  const isRight = () => {
    score.textContent = `${+score.textContent + +points.textContent}`;
    count += 1;
    if (count > 3) {
      points.textContent = `${+points.textContent + 10}`;
      dot.forEach((el) => {
        el.classList.remove('dot-active');
      });
      count = 0;
    }
    if (count > 0) {
      document.querySelector(`#dot-${count}`).classList.add('dot-active');
    }
    panel.classList.add('panel-right');
    right.currentTime = 0;
    right.play();
  };

  const isWrong = () => {
    points.textContent = `${10}`;
    panel.classList.add('panel-wrong');
    dot.forEach((el) => {
      el.classList.remove('dot-active');
    });
    count = 0;
    wrong.currentTime = 0;
    wrong.play();
  };

  document.querySelector('.right-btn').addEventListener('click', async () => {
    if (index === 19) {
      page += 1;
      word = await getWord(group, page);
      wordTranslate = await getWordTranslate(group, page);
      index = 0;
      console.log(word);
    }
    if (word[index][0] === wordTranslate[index][0]) {
      isRight();
    } else {
      isWrong();
    }
    index += 1;
    englishWord.textContent = `${word[index][1]}`;
    russianWord.textContent = `${wordTranslate[index][1]}`;
    setTimeout(() => {
      panel.classList.remove('panel-right');
      panel.classList.remove('panel-wrong');
    }, 300);
  });

  document.querySelector('.wrong-btn').addEventListener('click', async () => {
    if (index === 19) {
      page += 1;
      word = await getWord(group, page);
      wordTranslate = await getWordTranslate(group, page);
      index = 0;
      console.log(word);
    }
    if (word[index][0] === wordTranslate[index][0]) {
      isWrong();
    } else {
      isRight();
    }
    index += 1;
    englishWord.textContent = `${word[index][1]}`;
    russianWord.textContent = `${wordTranslate[index][1]}`;
    setTimeout(() => {
      panel.classList.remove('panel-right');
      panel.classList.remove('panel-wrong');
    }, 300);
  });

  countdown();
  document.querySelector('.fullscreen').addEventListener('click', addFullscreen);
  volume.addEventListener('click', () => {
    turnOffSounds(volume);
  });
};

export const renderSprintGamePage = async (container) => {
  const sprintStartPage = sprintChooseLevelContent();
  const sprintGamePage = sprintGameContent();

  await renderSprintPage(sprintStartPage, container);
  const stars = document.querySelector('.stars-container');

  stars.addEventListener('click', async (event) => {
    const elem = event.target;
    if (elem.classList.contains('star')) {
      const id = elem.id;
      const num = id[id.length - 1] - 1;
      await startGame(num, 0, container, sprintGamePage);
    }
  });
};
