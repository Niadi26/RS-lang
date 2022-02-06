import { ElementHTML } from "./create-element";

export class WordCard {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;
  
  constructor() {
    const wordWrapper = new ElementHTML('div', 'glossary__word', '');
    const img = new Image();
    img.src = '../assets/niadi26/audio-cat.png';
    img.classList.add('word__img');
    img.onload = () => {  
        wordWrapper.node.prepend(img);
    }
    const descriptionWord = new ElementHTML('div', 'word__decription', '', '', wordWrapper.node);
    const mainWord = new ElementHTML('div', 'word__main', '', '', descriptionWord.node);
    const mainTextWord = new ElementHTML('div', '', '', '', mainWord.node);
    const enWord = new ElementHTML('p', 'main__text', 'fu', '', mainTextWord.node);
    const transWord = new ElementHTML('span', '', '[f yyy]', '', mainTextWord.node);
    const ruWord = new ElementHTML('span', 'ru__text', 'фу', '', mainTextWord.node);
    const mainAudiotWord = new ElementHTML('div', '', '', '', mainWord.node);
    const audioButton = new ElementHTML('button', 'button-audio', '', '', mainAudiotWord.node);
    const buttonsWord = new ElementHTML('div', 'word__buttons', '', '', descriptionWord.node);
    const goodButton = new ElementHTML('button', 'button-word', 'good', '', buttonsWord.node);
    const bedButton = new ElementHTML('button', 'button-word', 'bed', '', buttonsWord.node);
    const meaningWord = new ElementHTML('div', 'word__meaning', '', '', descriptionWord.node);
    const enMeaningWord = new ElementHTML('p', '', 'bad small', '', meaningWord.node);
    const ruMeaningWord = new ElementHTML('p', 'ru__text', 'вонь', '', meaningWord.node);
    const exampleWord = new ElementHTML('div', 'word__example', '', '', descriptionWord.node);
    const enExampleWord = new ElementHTML('div', '', 'thats fu', '', exampleWord.node);
    const ruExampleWord = new ElementHTML('div', 'ru__text', 'какой фу!', '', exampleWord.node);
    this.node = wordWrapper.node;
  }
}