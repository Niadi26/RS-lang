import { ElementHTML } from "./create-element";

class GlossaryPage {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;
  
  constructor() {
    const mainWrapper = new ElementHTML('div', 'wrapper', 'glosarry');
    const buttonsCont = new ElementHTML('div', '', '', '', mainWrapper.node);
    const buttonSprint = new ElementHTML('button', '', 'sprint', '', buttonsCont.node);
    const buttonAudio = new ElementHTML('button', '', 'audio', '', buttonsCont.node);
    const bookCont = new ElementHTML('div', '', '', '', mainWrapper.node);
    const bookChapterCont = new ElementHTML('div', '', '', '', bookCont.node);
    const bookWordsCont = new ElementHTML('div', '', '', '', bookCont.node);
    const bookWords = new ElementHTML('div', '', '', '', bookWordsCont.node);
    const bookPage = new ElementHTML('div', '', '', '', bookWordsCont.node);
    const buttonsPageCont = new ElementHTML('div', '', '', '', bookPage.node);
    const buttonPrev = new ElementHTML('button', '', 'prev', '', buttonsPageCont.node);
    const buttonNext = new ElementHTML('button', '', 'next', '', buttonsPageCont.node);
    this.node = mainWrapper.node;
  }
}

export const glosarryPage = new GlossaryPage();