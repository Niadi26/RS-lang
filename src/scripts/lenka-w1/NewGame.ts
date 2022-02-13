import '../../styles/lenka-w1/audio-call.css';
import { ElementHTML } from '../niadi26/create-element';

class NewGame {
  public node: HTMLElement;

  constructor() {
    const pageGame = new ElementHTML('div', 'page-game');
    const gameContainer = new ElementHTML('div', 'game-container');
    pageGame.node.append(gameContainer.node);

    const audioBlock = new ElementHTML('div', 'audio-block', '', '', gameContainer.node);
    const imageBlock = new ElementHTML('div', 'image-block');
    audioBlock.node.append(imageBlock.node);

    const IMG = new ElementHTML('img', 'current-image', '', '', imageBlock.node);
    IMG.node.setAttribute('src', '');
    const currentWordBlock = new ElementHTML('div', 'current-word-block', '', '', audioBlock.node);

    const svgBlock = new ElementHTML('div', 'svg-block');
    currentWordBlock.node.append(svgBlock.node);

    const AUDIO = new ElementHTML('audio', 'game-audio');
    svgBlock.node.append(AUDIO.node);
    
    const englishWord = new ElementHTML('div', 'english-word current-word');
    currentWordBlock.node.append(englishWord.node);

    const wordBlock = new ElementHTML('div', 'block-words');
    gameContainer.node.append(wordBlock.node)
  
    const buttonNext = new ElementHTML('button', 'button-next', '', '', gameContainer.node);
    const btnText = new ElementHTML('span', 'btn-text', `I don't now`);
    buttonNext.node.append(btnText.node)

    this.node = pageGame.node;
  }
}

export const newGameAudioCall = new NewGame();
