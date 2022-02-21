import '../../styles/lenka-w1/audio-call.css';
import { rootElem } from '../components/constants';
import { ElementHTML } from '../niadi26/create-element';
import { gamePage } from '../niadi26/games-page';
import { footer } from './app';

class GameAudioCall {
  public node: HTMLElement;

  constructor() {
    const mainContainer = new ElementHTML('div', 'audio-call', '');
    const blockAboutGame = new ElementHTML('div', 'panel block-about-game', '', '', mainContainer.node);
    const blockTitle = new ElementHTML('h2', 'block-title', 'Audiochallange');
    blockAboutGame.node.append(blockTitle.node);
    const paragraph = new ElementHTML('p', 'block-text');
    paragraph.node.textContent = `
    After pronouncing the word, choose the correct translation from the options provided.
    `
    blockAboutGame.node.append(paragraph.node);
    const containerWithLevels = new ElementHTML('div', 'stars-container stars');
    blockAboutGame.node.append(containerWithLevels.node);

    let btnStar;

    for(let i = 1; i < 7; i++) {
      btnStar = new ElementHTML('button', 'star btn-animation num-stars', `${i}`);
      btnStar.node.id = `star-level-${i}`;
      btnStar.node.style.backgroundImage = `url(./assets/lenka-w1/star_${i}.svg)`;
      if(i === 1) btnStar.node.classList.add('first');
      if(i === 2) btnStar.node.classList.add('second');
      if(i === 3) btnStar.node.classList.add('third');
      if(i === 4) btnStar.node.classList.add('fourth');
      if(i === 5) btnStar.node.classList.add('fifth');
      if(i === 6) btnStar.node.classList.add('sixth');

      containerWithLevels.node.append(btnStar.node)
    }

    const backButton = new ElementHTML('button', 'back-button btn-animation', 'Back to home');
    blockAboutGame.node.append(backButton.node);

    backButton.node.addEventListener('click', () => {
      rootElem.innerHTML = '';
      rootElem.append(gamePage.node);
      footer.style.display = 'block';
    });

    this.node = mainContainer.node;
  }
}

export const audioCall = new GameAudioCall();