import { ElementHTML } from "./create-element";
import { getGroupCount, getPageCount } from "./glossary-functions";
import { WordCard } from "./word-card";
import { getWordss } from "../components/methods/get-words";

const GROUPS_COUNT = 7; // 6 groups + difficult words
const CROUPS_COLOR = [
  'rgb(237, 20, 201)',
  'rgb(146, 20, 237)',
  'rgb(20, 197, 237)',
  'rgb(99, 237, 20)',
  'rgb(237, 230, 20)',
  'rgb(240, 168, 60)',
  'rgb(240, 87, 60)',
]


async function renderPage(parent: HTMLElement) {
  const group = localStorage.getItem('glossaryGroup');
  const page = localStorage.getItem('glossaryPage');
  const data = await getWordss(group, page);
  console.log(data[0]);
//   data.map((el) => {
//     const item = new WordCard();
//     parent.append(item.node);
//   })
}

class Groups {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;

  constructor(num: number) {
    const bookGroupCont = new ElementHTML('div', 'glossary__groups', '');
    for(let i = 0; i < num; i++) {
      const groupCont = new ElementHTML('button', 'glossary__group', `Level  ${i + 1}`);
      groupCont.node.setAttribute('id', `${i}`);
      groupCont.node.style.backgroundColor = `${CROUPS_COLOR[i]}`;
      bookGroupCont.node.append(groupCont.node);
      if (i === num - 1) {
        groupCont.node.innerHTML = 'Repeat';
        groupCont.node.setAttribute('id', `X`);                                           //change id
        groupCont.node.setAttribute('disabled', 'true');
      } 
    }
    this.node = bookGroupCont.node;
  }
}

class GlossaryPage {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;
  
  constructor() {
    const mainWrapper = new ElementHTML('div', 'wrapper', '');
    const buttonsCont = new ElementHTML('div', 'buttons-wrapper', '', '', mainWrapper.node);
    const buttonSprint = new ElementHTML('button', 'button-glossary', '', '', buttonsCont.node);
    const buttonSprintBg = new Image();
    buttonSprintBg.src = '../assets/niadi26/race-cat.png';
    buttonSprintBg.onload = () => {  
      buttonSprint.node.style.backgroundImage = `url('${buttonSprintBg.src}')`;
    }
    const buttonAudio = new ElementHTML('button', 'button-glossary', '', '', buttonsCont.node);
    const buttonAudioBg = new Image();
    buttonAudioBg.src = '../assets/niadi26/audio-cat.png';
    buttonAudioBg.onload = () => {  
      buttonAudio.node.style.backgroundImage = `url('${buttonAudioBg.src}')`;
    }

    const buttonsPageCont = new ElementHTML('div', 'pagination__wrapper', '', '', mainWrapper.node);
    const buttonPrev = new ElementHTML('button', 'button-page button-page_prev', '', '', buttonsPageCont.node);
    buttonPrev.node.setAttribute('id', 'prev');
    const buttonNext = new ElementHTML('button', 'button-page button-page_next', '', '', buttonsPageCont.node);
    buttonNext.node.setAttribute('id', 'next');
    buttonsPageCont.node.addEventListener('click', (e) => getPageCount(e));

    const bookCont = new ElementHTML('div', 'glossary__cont', '', '', mainWrapper.node);
    const bookGroupCont = new Groups(GROUPS_COUNT);
    bookCont.node.append(bookGroupCont.node);
    bookGroupCont.node.addEventListener('click', (e) => getGroupCount(e));
    const bookWordsCont = new ElementHTML('div', 'glossary__pages', '', '', bookCont.node);
    renderPage(bookWordsCont.node);
    const word = new WordCard();
    const word2 = new WordCard();
    const word3 = new WordCard();
    bookWordsCont.node.append(word.node, word2.node, word3.node);

    this.node = mainWrapper.node;
  }
}

export const glosarryPage = new GlossaryPage();