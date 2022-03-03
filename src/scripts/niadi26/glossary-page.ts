import { ElementHTML } from "./create-element";
import { getGroupCount, getPageCount } from "./glossary/glossary-functions";
import { renderPage } from "./glossary/render-glossary-words";
import { startGame } from "../mowgle88/sprint/sprint-page";
import { sprintGameContent } from "../mowgle88/sprint/sprint-page-contant";
import { rootElem } from "../components/constants";
import { MAX_PAGE, GROUPS_COUNT } from './glossary/constants';
import { createNewGameAudioCall, start } from "../lenka-w1/app";
import { Groups } from './glossary/glossary-groups';
import { clearContent } from "../lenka-w1/PopupResults";

class GlossaryPage {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;

  public page: HTMLElement;

  public gameButtons: HTMLElement;

  public notPlay: HTMLElement;
  
  constructor() {
    const mainWrapper = new ElementHTML('div', 'wrapper', '');
    const buttonsCont = new ElementHTML('div', 'buttons-wrapper', '', '', mainWrapper.node);
    const playText = new ElementHTML('p', 'play_text', 'Play right now!', '', buttonsCont.node);
    const notPlayText = new ElementHTML('p', 'play_text not-play_text hidden', 'All words learned!', '', buttonsCont.node);
    const buttonSprint = new ElementHTML('button', 'button-glossary', '', '', buttonsCont.node);
    const buttonSprintBg = new Image();
    buttonSprintBg.src = 'assets/niadi26/race-cat.png';
    buttonSprintBg.onload = () => {  
      buttonSprint.node.style.backgroundImage = `url('${buttonSprintBg.src}')`;
    }
    buttonSprint.node.addEventListener('click', async () => {
      const sprintGamePage = sprintGameContent();
      const group = localStorage.getItem('glossaryGroup');
      const page = localStorage.getItem('glossaryPage');
      await startGame(group, page, rootElem, sprintGamePage);
    });

    const buttonAudio = new ElementHTML('button', 'button-glossary', '', '', buttonsCont.node);
    const buttonAudioBg = new Image();
    buttonAudioBg.src = 'assets/niadi26/audio-cat.png';
    buttonAudioBg.onload = () => {  
      buttonAudio.node.style.backgroundImage = `url('${buttonAudioBg.src}')`;
    }
    buttonAudio.node.addEventListener('click', async () => {
      clearContent();
      const createGameAudioCall = createNewGameAudioCall();
      const group = localStorage.getItem('glossaryGroup');
      const page = localStorage.getItem('glossaryPage');
      await start(Number(group), Number(page), rootElem, createGameAudioCall);
    });

    const bookCont = new ElementHTML('div', 'glossary__cont', '', '', mainWrapper.node);
    const bookSettingsCont = new ElementHTML('div', 'glossary__settings', '', '', bookCont.node);
    const bookSettings = new Groups(GROUPS_COUNT);
    bookSettingsCont.node.append(bookSettings.node);
    const bookWordsCont = new ElementHTML('div', 'glossary__pages', '', '', bookCont.node);
    bookWordsCont.node.setAttribute('id', 'words');
    renderPage(bookWordsCont.node);

    this.node = mainWrapper.node;
    this.page = bookSettings.page;
    this.gameButtons = buttonsCont.node;
    this.notPlay = notPlayText.node;
  }

  changePage(id?: number) {
    const num = id || localStorage.getItem('glossaryPage') || 0;
    this.page.innerHTML = `${+num + 1}/${MAX_PAGE + 1}`;
  }

  rerenderPage() {
    renderPage();
  }
}

export const glosarryPage = new GlossaryPage();