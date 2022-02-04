import { ElementHTML } from "./create-element";

class GamePage {
    // eslint-disable-next-line prettier/prettier
    public node: HTMLElement;
    
    constructor() {
      const mainWrapper = new ElementHTML('div', 'wrapper', 'games');
      const gamesCont = new ElementHTML('div', '', '', '', mainWrapper.node);

      const sprintCont = new ElementHTML('div', '', '', '', gamesCont.node);
      const sprintImg = new ElementHTML('div', '', '', '', sprintCont.node);
      const sprintName = new ElementHTML('div', '', '', '', sprintCont.node);
      const sprintText = new ElementHTML('div', '', '', '', sprintCont.node);
      const sprintPlay = new ElementHTML('button', '', 'play', '', sprintCont.node);

      const audioCont = new ElementHTML('div', '', '', '', gamesCont.node);
      const audioImg = new ElementHTML('div', '', '', '', audioCont.node);
      const audioName = new ElementHTML('div', '', '', '', audioCont.node);
      const audioText = new ElementHTML('div', '', '', '', audioCont.node);
      const audioPlay = new ElementHTML('button', '', 'play', '', audioCont.node);

      this.node = mainWrapper.node;
    }
  }
  
  export const gamePage = new GamePage();