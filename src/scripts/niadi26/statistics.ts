import { ElementHTML } from "./create-element";

class StatisticsPage {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;
  
  constructor() {
    const mainWrapper = new ElementHTML('div', 'wrapper', '');
    const pageName = new ElementHTML('h2', '', 'Statistics for today', '', mainWrapper.node);
    const countsCont = new ElementHTML('div', '', '', '', mainWrapper.node);
    const newCount = new ElementHTML('div', '', '', '', countsCont.node);
    const newNum = new ElementHTML('div', '', '0', '', newCount.node);
    const newText = new ElementHTML('h3', '', 'New words', '', newCount.node);
    const learnCount = new ElementHTML('div', '', '', '', countsCont.node);
    const learnNum = new ElementHTML('div', '', '0', '', newCount.node);
    const learnText = new ElementHTML('h3', '', 'Learned words', '', newCount.node);
    const percentCount = new ElementHTML('div', '', '', '', countsCont.node);
    const percentNum = new ElementHTML('div', '', '0%', '', newCount.node);
    const percentText = new ElementHTML('h3', '', 'Right answers', '', newCount.node);

    const gamesCont = new ElementHTML('div', '', '', '', mainWrapper.node);
    const sprintCont = new ElementHTML('div', '', '', '', gamesCont.node);
    const sprintName = new ElementHTML('h3', '', 'Sprint', '', sprintCont.node);
    const sprintNew = new ElementHTML('h3', '', 'New words: 0', '', sprintCont.node);
    const sprintLearn = new ElementHTML('h3', '', 'Learned words: 0', '', sprintCont.node);
    const sprintPrecent = new ElementHTML('h3', '', 'Right answers: 0%', '', sprintCont.node);
    const audioCont = new ElementHTML('div', '', '', '', gamesCont.node);
    const audioName = new ElementHTML('h3', '', 'Audiochallange', '', audioCont.node);
    const audioNew = new ElementHTML('h3', '', 'New words: 0', '', audioCont.node);
    const audioLearn = new ElementHTML('h3', '', 'Learned words: 0', '', audioCont.node);
    const audioPrecent = new ElementHTML('h3', '', 'Right answers: 0%', '', audioCont.node);
    this.node = mainWrapper.node;
  }
}

export const statisticsPage = new StatisticsPage();