import { ElementHTML } from "./create-element";

class GlossaryPage {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;
  
  constructor() {
    const mainWrapper = new ElementHTML('div', 'wrapper', '');
    const buttonsCont = new ElementHTML('div', 'buttons-wrapper', '', '', mainWrapper.node);
    const buttonSprint = new ElementHTML('button', 'game', 'sprint', '', buttonsCont.node);
    const buttonAudio = new ElementHTML('button', 'game', 'audio', '', buttonsCont.node);
    const bookCont = new ElementHTML('div', 'glossary__cont', '', '', mainWrapper.node);
    const bookChapterCont = new ElementHTML('div', 'glossary__chapters', '', '', bookCont.node);
    const bookWordsCont = new ElementHTML('div', 'glossary__pages', '', '', bookCont.node);
    const bookWords = new ElementHTML('div', 'glossary__worlds', '', '', bookWordsCont.node);
    const bookPage = new ElementHTML('div', '', '', '', bookWordsCont.node);
    const buttonsPageCont = new ElementHTML('div', 'buttons-wrapper', '', '', bookPage.node);
    const buttonPrev = new ElementHTML('button', '', 'prev', '', buttonsPageCont.node);
    const buttonNext = new ElementHTML('button', '', 'next', '', buttonsPageCont.node);
    this.node = mainWrapper.node;
  }
}

export const glosarryPage = new GlossaryPage();