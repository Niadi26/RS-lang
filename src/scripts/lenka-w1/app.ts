import { rootElem } from '../components/constants';
import { getWords } from '../components/methods/get-words';
import { audioCall } from './GameAudioCall';
import { newGameAudioCall } from './NewGame';
import { Word } from '../components/interfaces/get-word';
import { shuffle } from '../components/utilits/random';

export let footer = document.querySelector('.footer') as HTMLElement;;

export function createPageGameAudioCall() {
  rootElem.innerHTML = '';
  rootElem.append(audioCall.node);
  localStorage.setItem('namePage', 'audio-call');
  footer.style.display = 'none';
}

export function createNewGameAudioCall() {
  rootElem.innerHTML = '';
  rootElem.append(newGameAudioCall.node);
  localStorage.setItem('namePage', 'audio-call');
  footer.style.display = 'none';
}

const getWordTranslate = async (group: number, page: number) => {
  const wordsApi = await getWords(group, page);
  const wordTranslate = await wordsApi.map((el: Word) => [el.id, el.wordTranslate]);
  return wordTranslate;
};

const getElementForAudioGame = async (group: number, page: number) => {
  const wordsApi = await getWords(group, page);
  console.log(wordsApi)
  const word = await wordsApi.map((el: Word) => [el.id, el.word, el.audio, el.image]);
  return word;
};

const addWords = (array: string[][], i: number) => {
  const arr: string[][] = [];

  arr.push(array[i] as string[]);
  const newArr = array.filter((el) => el !== array[i]);
  shuffle(newArr);

  const value = newArr.slice(0, 4).concat(arr);
  shuffle(value);

  const textContent = value.map((el, j) => `<div id="eng-${el[0]}" class="words">${j + 1} ${el[1]}</div>`);
  return textContent.join('\n');
};


export const start = async (group: number, page: number, container: HTMLElement, func: void) => {
  const baseUrl = 'https://react-rslang-by.herokuapp.com';

  let values = await getElementForAudioGame(group, page);
  let wordTranslate = await getWordTranslate(group, page);

  let index = 0;

  const img = document.querySelector('.image-block') as HTMLElement;
  const imgWord = document.querySelector('.current-image') as HTMLImageElement;
  imgWord.src = `${baseUrl}/${values[index][3]}`;

  const sound = document.querySelector('.game-audio') as HTMLAudioElement;
  sound.src = `${baseUrl}/${values[index][2]}`;

  (document.querySelector('.svg-block') as HTMLElement).addEventListener('click', () => {
    sound.play();
  });

  const blockWords = document.querySelector('.block-words') as HTMLElement;
  blockWords.innerHTML = addWords(wordTranslate, index);
  
  const englishWord = document.querySelector('.english-word') as HTMLElement;
  englishWord.textContent = `${values[index][1]}`;

  const btnNext = document.querySelector('.button-next') as HTMLElement;

  btnNext.addEventListener('click', () => {
  
    if (btnNext.textContent === `I don't now`) {
      img.classList.add('img-active');
      englishWord.style.display = 'block';
      btnNext.textContent = 'Next';
    } else if (btnNext.textContent === `Next`) {
        img.classList.remove('img-active');
        btnNext.textContent = `I don't now`;
        englishWord.style.display = 'none';
        englishWord.textContent = `${values[index + 1][1]}`
        imgWord.src = `${baseUrl}/${values[index + 1][3]}`;
        sound.src = `${baseUrl}/${values[index + 1][2]}`;
        blockWords.innerHTML = addWords(wordTranslate, index + 1);
        console.log(index++)
        if(index === 19) index = 18;
      }
  }); 
}

const STARS = audioCall.node.querySelector('.stars') as HTMLElement;
STARS.addEventListener('click', async (event: Event) => {
  const CREATE = createNewGameAudioCall();
  const item = event.target as HTMLElement;
  
  if (item.classList.contains('num-stars')) {
    const ID = item.id;
    const number = Number(ID[ID.length - 1]) - 1;
    await start(number, 0, rootElem, CREATE);
  }
});



