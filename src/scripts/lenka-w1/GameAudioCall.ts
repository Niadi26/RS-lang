import '../../styles/lenka-w1/audio-call.css';
import { rootElem } from '../components/constants';
import { ElementHTML } from '../niadi26/create-element';
import { gamePage } from '../niadi26/games-page';
import { GROUPS_COLOR } from '../niadi26/glossary-page';

class GameAudioCall {
  public node: HTMLElement;

  constructor() {
    const mainContainer = new ElementHTML('div', 'audio-call', '');
    const blockAboutGame = new ElementHTML('div', 'select-level', '', '', mainContainer.node);
    const blockTitle = new ElementHTML('h2', 'sprint-title block-title', 'Audio call');
    blockAboutGame.node.append(blockTitle.node);
    const paragraph = new ElementHTML('p', 'sprint-text block-text');
    paragraph.node.textContent = `
    After pronouncing the word, choose the correct translation from the options provided.
    `
    blockAboutGame.node.append(paragraph.node);
    const containerWithLevels = new ElementHTML('div', 'stars-container');
    blockAboutGame.node.append(containerWithLevels.node);



    const backButton = new ElementHTML('button', 'sprint-back-btn btn-animation', 'Back to home');
    blockAboutGame.node.append(backButton.node);

    backButton.node.addEventListener('click', () => {
      rootElem.innerHTML = '';
      rootElem.append(gamePage.node);
    });

    this.node = mainContainer.node;
  }
}

export const audioCall = new GameAudioCall();