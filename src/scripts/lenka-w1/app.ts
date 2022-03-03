import { rootElem } from '../components/constants';
import { getWords } from '../components/methods/get-words';
import { audioCall } from './GameAudioCall';
import { cross, fullScreenSvg, gameContainer, newGameAudioCall } from './NewGame';
import { IWord } from '../components/interfaces/interface-get-word';
import { shuffle } from '../components/utilits/random';
import { right, wrong } from '../components/utilits/audio';
import { popUpResults } from './PopupResults';
import { addRightResults, addWrongResults } from '../mowgle88/sprint/result-right-wrong';

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
  const wordTranslate = await wordsApi.map((el: IWord) => [el.id, el.wordTranslate]);
  return wordTranslate;
};

const getElementForAudioGame = async (group: number, page: number) => {
  const wordsApi = await getWords(group, page);
  const word = await wordsApi.map((el: IWord) => [el.id, el.word, el.audio, el.image]);
  return word;
};

const addWords = (array: string[][], i: number) => {
  const arr: string[][] = [];

  arr.push(array[i] as string[]);
  const newArr = array.filter((el) => el !== array[i]);
  shuffle(newArr);

  const value = newArr.slice(0, 4).concat(arr);
  shuffle(value);

  const textContent = value.map((el, j) => `<div id="rus-${el[0]}" class="words">${j + 1} ${el[1]}</div>`);
  return textContent.join('\n');
};

export async function showGameResults() {
  newGameAudioCall.node.innerHTML = '';
  newGameAudioCall.node.append(popUpResults.node);
  const rightResults = await addRightResults();
  const wrongResults = await addWrongResults();

  const rightContainer = document.querySelector('.result-right') as HTMLElement;
  const wrongContainer = document.querySelector('.result-wrong') as HTMLElement;
  const rightAnswers = document.querySelector('.right-answers span') as HTMLElement;
  const mistakes = document.querySelector('.mistakes span') as HTMLElement;

  rightContainer.innerHTML = rightResults ? rightResults : 'no correct answer';
  wrongContainer.innerHTML = wrongResults ? wrongResults : 'no wrong answer';

  rightAnswers.textContent = localStorage.getItem('rightCount') ? localStorage.getItem('rightCount') : ' 0';
  mistakes.textContent = localStorage.getItem('wrongCount') ? localStorage.getItem('wrongCount') : ' 0';

  localStorage.removeItem('rightID');
  localStorage.removeItem('wrongID');
  localStorage.removeItem('rightCount');
  localStorage.removeItem('wrongCount');
}

export const start = async (group: number, page: number, container: HTMLElement, func: void) => {
  const baseUrl = 'https://react-rslang-by.herokuapp.com';

  let values = await getElementForAudioGame(group, page);
  let wordTranslate = await getWordTranslate(group, page);

  const rightArray: string[] = [];
  const wrongArray: string[] = [];

  let rightCount = 0;
  let wrongCount = 0
  let index = 0;

  const img = document.querySelector('.image-block') as HTMLElement;
  const imgWord = document.querySelector('.current-image') as HTMLImageElement;
  imgWord.src = `${baseUrl}/${values[index][3]}`;
  img.classList.remove('img-active');

  const sound = document.querySelector('.game-audio') as HTMLAudioElement;
  sound.src = `${baseUrl}/${values[index][2]}`;

  (document.querySelector('.svg-block') as HTMLElement).addEventListener('click', () => {
    sound.play();
  });
  
  sound.currentTime = 0;
  sound.play();

  const blockWords = document.querySelector('.block-words') as HTMLElement;
  blockWords.innerHTML = addWords(wordTranslate, index);
  
  const englishWord = document.querySelector('.english-word') as HTMLElement;
  englishWord.textContent = `${values[index][1]}`;
  englishWord.id = `${values[index][0]}`;
  englishWord.style.display = 'none';

  const btnNext = document.querySelector('.button-next') as HTMLElement;
  btnNext.textContent = `I don't now`;

  async function switchFunction() {
    const allWords = document.querySelectorAll('.words') as NodeListOf<Element>;

    if (btnNext.textContent === `I don't now`) {
      img.classList.add('img-active');
      englishWord.style.display = 'block';
      btnNext.textContent = 'Next';

      for (let item of allWords) {
        if (englishWord.id === item.id.slice(4)) {
          item.classList.add('right');
          wrongArray.push(englishWord.id);
          localStorage.setItem('wrongID', JSON.stringify(wrongArray));
          wrongCount += 1;
          localStorage.setItem('wrongCount', ` ${wrongCount}`);
        }
      } 
      wrong.play();
    } else if (btnNext.textContent === `Next`) {
        index += 1;
        img.classList.remove('img-active');
        btnNext.textContent = `I don't now`;
        englishWord.style.display = 'none';
        englishWord.id = `${values[index][0]}`;
        englishWord.textContent = `${values[index][1]}`
        imgWord.src = `${baseUrl}/${values[index][3]}`;
        sound.src = `${baseUrl}/${values[index][2]}`;
        blockWords.innerHTML = addWords(wordTranslate, index);
        sound.play();
        
        if (index === 2) {
          showGameResults();
        } 
      }
   } btnNext.addEventListener('click', switchFunction);

  function rightWrongFunction(event: Event) {
    const allWords = document.querySelectorAll('.words') as NodeListOf<Element>;
    const evt = event.target as HTMLElement;

    if (evt.classList.contains('words')) {
      const rusID = evt.id.slice(4);
      img.classList.add('img-active');
      englishWord.style.display = 'block';
      btnNext.textContent = 'Next';

      if (englishWord.id === rusID) {
        evt.classList.add('right');
        right.play();
        rightArray.push(englishWord.id);
        localStorage.setItem('rightID', JSON.stringify(rightArray));
        rightCount += 1;
        localStorage.setItem('rightCount', ` ${rightCount}`);
      }
      else if (englishWord.id !== rusID) {
        evt.classList.add('wrong');
        wrongArray.push(englishWord.id);
        localStorage.setItem('wrongID', JSON.stringify(wrongArray));
        wrongCount += 1;
        localStorage.setItem('wrongCount', ` ${wrongCount}`);

        for (let item of allWords) {
          if (englishWord.id === item.id.slice(4)) {
            item.classList.add('right');
          }
        }
        wrong.play();
      }
    }
  } blockWords.addEventListener('click', rightWrongFunction);
   
  const navigation = document.querySelector('.nav__cont') as HTMLElement;
  navigation.addEventListener('click', (event: Event) => {
    const ev = event.target as HTMLElement;

    if (ev.classList.contains('nav__item')) {
      btnNext.removeEventListener('click', switchFunction);
      blockWords.removeEventListener('click', rightWrongFunction);
      newGameAudioCall.node.innerHTML = '';
      newGameAudioCall.node.append(gameContainer.node);
      newGameAudioCall.node.append(fullScreenSvg.node);
      newGameAudioCall.node.append(cross.node);
    }
  });

  const btnCross = document.querySelector('.cross') as HTMLElement;
  btnCross.addEventListener('click', () => {
    btnNext.removeEventListener('click', switchFunction);
    blockWords.removeEventListener('click', rightWrongFunction);
    createPageGameAudioCall();
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



