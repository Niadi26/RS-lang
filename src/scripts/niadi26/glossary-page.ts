import { ElementHTML } from "./create-element";
import { getGroupCount, getPageCount } from "./glossary-functions";
import { renderPage } from "./render-glossary-words";

const GROUPS_COUNT = 7; // 6 groups + difficult words
export const MAX_PAGE = 29;
 export const GROUPS_COLOR = [
  'rgb(237, 20, 201)',
  'rgb(146, 20, 237)',
  'rgb(20, 197, 237)',
  'rgb(99, 237, 20)',
  'rgb(237, 230, 20)',
  'rgb(240, 168, 60)',
  'rgb(240, 87, 60)',
]

class Groups {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;

  constructor(num: number) {
    const bookGroupCont = new ElementHTML('div', 'glossary__groups', '');
    const currentGroup = localStorage.getItem('glossaryGroup') || '0';
    for(let i = 0; i < num; i++) {
      const groupCont = new ElementHTML('button', 'glossary__group', `Level  ${i + 1}`);
      groupCont.node.setAttribute('id', `${i}`);
      groupCont.node.dataset["group"] = 'group';
      groupCont.node.style.backgroundColor = `${GROUPS_COLOR[i]}`;
      if (i == +currentGroup) groupCont.node.classList.add('group_active');
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
  
  public node: HTMLElement;

  public page: HTMLElement;
  
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
    const pageCount = new ElementHTML('p', '', `1/${MAX_PAGE + 1}`, '', buttonsPageCont.node);
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
    bookWordsCont.node.setAttribute('id', 'words');
    renderPage(bookWordsCont.node);

    this.node = mainWrapper.node;
    this.page = pageCount.node;
  }

  changePage(id?: number) {
    const num = id || localStorage.getItem('glossaryPage') || 0;
    this.page.innerHTML = `${+num + 1}/${MAX_PAGE + 1}`;
  }
}

export const glosarryPage = new GlossaryPage();