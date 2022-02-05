import { ElementHTML } from "./create-element";

class GamePage {
    // eslint-disable-next-line prettier/prettier
    public node: HTMLElement;
    
    constructor() {
      const mainWrapper = new ElementHTML('div', 'wrapper', '');
      const gamesCont = new ElementHTML('div', 'games__wrapper', '', '', mainWrapper.node);

      const sprintCont = new ElementHTML('div', 'games__cont', '', '', gamesCont.node);
      const sprintImg = new ElementHTML('div', 'games__img ', '', '', sprintCont.node);
      const sprintImgBg = new Image();
      sprintImgBg.src = '../assets/niadi26/race-cat.png';
      sprintImgBg.onload = () => {  
        sprintImg.node.style.backgroundImage = `url('${sprintImgBg.src}')`;
      }
      const sprintName = new ElementHTML('div', 'games__title', 'Sprint', '', sprintCont.node);
      const sprintText = new ElementHTML('div', 'games__text', 'Try minigame sprint!', '', sprintCont.node);
      const sprintPlay = new ElementHTML('button', 'button-play', 'Play', '', sprintCont.node);

      const audioCont = new ElementHTML('div', 'games__cont', '', '', gamesCont.node);
      const audioImg = new ElementHTML('div', 'games__img ', '', '', audioCont.node);
      const audioImgBg = new Image();
      audioImgBg.src = '../assets/niadi26/audio-cat.png';
      audioImgBg.onload = () => {  
        audioImg.node.style.backgroundImage = `url('${audioImgBg.src}')`;
      }
      const audioName = new ElementHTML('div', 'games__title', 'Audiochallange', '', audioCont.node);
      const audioText = new ElementHTML('div', 'games__text', 'Try minigame audio!', '', audioCont.node);
      const audioPlay = new ElementHTML('button', 'button-play', 'Play', '', audioCont.node);

      this.node = mainWrapper.node;
    }
  }
  
  export const gamePage = new GamePage();