import { ElementHTML } from "../create-element";
import { GROUPS_COLOR } from "./constants";
import { playAudio } from "./play-audio";
import { changeUserWord } from "./glossary-functions";
import { rootHTTP } from "../../components/constants";

export class WordCard {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;
  
  public flag: HTMLElement;
  
  public buttons: HTMLElement;
  
  constructor(
      id: string, 
      group: number,
      image: string,
      word: string,
      transcription: string,
      wordTranslate: string,
      textExample: string, 
      textExampleTranslate: string, 
      textMeaning: string, 
      textMeaningTranslate: string,
      audioMain: string,
      audioMeaning: string,
      audioExample: string,
      autorized: boolean) {
    const wordWrapper = new ElementHTML('div', 'glossary__word', '');
    const flag = new ElementHTML('div', 'difficult-flag', '', '', wordWrapper.node)
    wordWrapper.node.setAttribute('id', id);
    const img = new Image();
    img.src = `${rootHTTP}${image}`;
    img.classList.add('word__img');
    img.onload = () => {  
        wordWrapper.node.prepend(img);
    }
    const descriptionWord = new ElementHTML('div', 'word__decription', '', '', wordWrapper.node);
    const mainWord = new ElementHTML('div', 'word__main', '', '', descriptionWord.node);
    const mainTextWord = new ElementHTML('div', '', '', '', mainWord.node);
    mainWord.node.style.borderBottom = `3px solid ${GROUPS_COLOR[group]}`
    const enWord = new ElementHTML('p', 'main__text', `${word}`, '', mainTextWord.node);
    const transWord = new ElementHTML('span', '', `${transcription} `, '', mainTextWord.node);
    const ruWord = new ElementHTML('span', 'ru__text', ` ${wordTranslate}`, '', mainTextWord.node);
    const mainAudiotWord = new ElementHTML('div', '', '', '', mainWord.node);
    const audioButton = new ElementHTML('button', 'button-audio', '', '', mainAudiotWord.node);
    audioButton.node.addEventListener('click', () => {
      playAudio(0, audioMain, audioMeaning, audioExample);
    });
    const buttonsWord = new ElementHTML('div', 'word__buttons', '', '', descriptionWord.node);
    if(!autorized) buttonsWord.node.classList.add('hidden');
    const goodButton = new ElementHTML('button', 'button-word', 'Learned', '', buttonsWord.node);
    goodButton.node.dataset["id"] = 'learned'
    goodButton.node.addEventListener('click', (e) => {
      const elementClick = e.target as HTMLElement;
      const parent = elementClick.closest('.glossary__word');
      flag.node.classList.remove('dificult-hard');
      flag.node.classList.toggle('dificult-easy');
      flag.node.innerHTML = 'Learned';
      changeUserWord('learned', parent!.id, 'difficult');
    })
    const bedButton = new ElementHTML('button', 'button-word', 'Difficult', '', buttonsWord.node);
    bedButton.node.dataset["id"] = 'difficult'
    bedButton.node.addEventListener('click', (e) => {
      const elementClick = e.target as HTMLElement;
      const parent = elementClick.closest('.glossary__word');
      flag.node.classList.remove('dificult-easy');
      flag.node.classList.toggle('dificult-hard');
      flag.node.innerHTML = 'Difficult';
      changeUserWord('difficult', parent!.id, 'learned');
    })
    const meaningWord = new ElementHTML('div', 'word__meaning', '', '', descriptionWord.node);
    const enMeaningWord = new ElementHTML('p', '', `${textMeaning}`, '', meaningWord.node);
    const ruMeaningWord = new ElementHTML('p', 'ru__text', `${textMeaningTranslate}`, '', meaningWord.node);
    const exampleWord = new ElementHTML('div', 'word__example', '', '', descriptionWord.node);
    const enExampleWord = new ElementHTML('div', '', `${textExample}`, '', exampleWord.node);
    const ruExampleWord = new ElementHTML('div', 'ru__text', `${textExampleTranslate}`, '', exampleWord.node);
    this.node = wordWrapper.node;
    this.flag = flag.node;
    this.buttons = buttonsWord.node;
  }
}