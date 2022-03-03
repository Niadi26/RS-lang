import { countdown } from '../../components/utilits/timer';
import { addFullscreen } from '../../components/fullscreen';
import { turnOffSounds } from '../../components/utilits/audio';
import { renderSprintPage } from './render-sprint-game';
import { getWordForSprint, getWordTranslateForSprint, getOption } from './get-words-for-sprint';
import { isRight, isWrong } from './right-wrong';

export const startGame = async (group, page, container, func) => {
  localStorage.setItem('currentGroup', group);
  localStorage.setItem('currentPage', page);
  let word = await getWordForSprint(group, page);
  let wordTranslate = await getWordTranslateForSprint(group, page);
  let index = 0;
  let rightCount = 0;
  let wrongCount = 0;
  let value = getOption(wordTranslate, index);
  const wrongArray = [];
  const rightArray = [];

  await renderSprintPage(func, container);

  document.querySelector('#minigames').addEventListener('click', (e) => {
    console.log(e);
    container.innerHTML = '';
    container.append(gamePage.node);
  });

  const englishWord = document.querySelector('.english-word');
  const russianWord = document.querySelector('.russian-word');
  const panel = document.querySelector('.panel');
  const volume = document.querySelector('.volume');

  englishWord.textContent = `${word[index][1]}`;
  russianWord.textContent = `${value[1]}`;

  document.querySelector('.right-btn').addEventListener('click', async () => {
    if (index === 19) {
      page = +page + 1;
      if (+page > 29) page = 0;
      word = await getWordForSprint(group, page);
      wordTranslate = await getWordTranslateForSprint(group, page);
      index = 0;
    }

    if (word[index][0] === value[0]) {
      isRight();
      rightArray.push(word[index][0]);
      localStorage.setItem('rightID', JSON.stringify(rightArray));
      // console.log(rightArray);
      rightCount += 1;
      localStorage.setItem('rightCount', rightCount);
    } else {
      isWrong();
      wrongArray.push(word[index][0]);
      localStorage.setItem('wrongID', JSON.stringify(wrongArray));
      // console.log(wrongArray);
      wrongCount += 1;
      localStorage.setItem('wrongCount', wrongCount);
    }
    index += 1;
    value = getOption(wordTranslate, index);
    englishWord.textContent = `${word[index][1]}`;
    russianWord.textContent = `${value[1]}`;
    setTimeout(() => {
      panel.classList.remove('panel-right');
      panel.classList.remove('panel-wrong');
    }, 300);
  });

  document.querySelector('.wrong-btn').addEventListener('click', async () => {
    if (index === 19) {
      page = +page + 1;
      if (+page > 29) page = 0;
      word = await getWordForSprint(group, page);
      wordTranslate = await getWordTranslateForSprint(group, page);
      index = 0;
    }
    if (word[index][0] === value[0]) {
      isWrong();
      wrongArray.push(word[index][0]);
      localStorage.setItem('wrongID', JSON.stringify(wrongArray));
      wrongCount += 1;
      localStorage.setItem('wrongCount', wrongCount);
      // console.log(wrongArray);
    } else {
      isRight();
      rightArray.push(word[index][0]);
      localStorage.setItem('rightID', JSON.stringify(rightArray));
      // console.log(rightArray);
      rightCount += 1;
      localStorage.setItem('rightCount', rightCount);
    }
    index += 1;
    value = getOption(wordTranslate, index);
    englishWord.textContent = `${word[index][1]}`;
    russianWord.textContent = `${value[1]}`;
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
