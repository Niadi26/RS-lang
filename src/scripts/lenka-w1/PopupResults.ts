import '../../styles/lenka-w1/audio-call.css';
import { rootElem } from '../components/constants';
import { ElementHTML } from "../niadi26/create-element";
import { gamePage } from '../niadi26/games-page';
import { footer } from './app';
import { cross, fullScreenSvg, gameContainer, newGameAudioCall } from './NewGame';

export function clearContent() {
  rootElem.innerHTML = '';
  newGameAudioCall.node.innerHTML = '';
  newGameAudioCall.node.append(gameContainer.node);
  newGameAudioCall.node.append(fullScreenSvg.node);
  newGameAudioCall.node.append(cross.node)
  footer.style.display = 'block';
}

class PopupResults {
  public node: HTMLElement;

  constructor() {

    const popup = new ElementHTML('div', 'popup-results');
    const popupHeader = new ElementHTML('div', 'popup-header', '', '', popup.node);
    const popupTitle = new ElementHTML('h2', 'popup-title', 'Result');
    popupHeader.node.append(popupTitle.node);

    const popupBtns = new ElementHTML('div', 'popup-btns', '', '', popupHeader.node);
    const playAgain = new ElementHTML('button', 'play-again', 'Play again');
    const backToGames = new ElementHTML('button', 'back-to-games', 'Back to games');
    popupBtns.node.append(playAgain.node);
    popupBtns.node.append(backToGames.node);

    backToGames.node.addEventListener('click', () => {
      clearContent();
      rootElem.append(gamePage.node);
    });

    const resultBlock = new ElementHTML('div', 'result-block', '', '', popup.node);
    const gameResultsContainer = new ElementHTML('div', 'game-results-container', '', '', resultBlock.node);
    const rightAnswers = new ElementHTML('div', 'right-answers', 'Right answers');
    gameResultsContainer.node.append(rightAnswers.node);
    const span = new ElementHTML('span');
    rightAnswers.node.append(span.node);

    const mistakes = new ElementHTML('div', 'mistakes', 'Mistakes', '', gameResultsContainer.node);
    const SPAN = new ElementHTML('span');
    mistakes.node.append(SPAN.node);

    const wordResult = new ElementHTML('div', 'word-result', '', '', resultBlock.node);

    const resultRight = new ElementHTML('div', 'result-right');
    wordResult.node.append(resultRight.node);

    const resultWrong = new ElementHTML('div', 'result-wrong');
    wordResult.node.append(resultWrong.node);

    this.node = popup.node;
  }  
}

export const popUpResults = new PopupResults();

