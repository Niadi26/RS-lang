import { sprintResultContent, sprintGameContent } from './sprint-page-contant';
import { renderSprintPage } from './render-sprint-game';
import { startGame } from './sprint-page';
import { gamePage } from '../../niadi26/games-page';
import { addRightResults, addWrongResults } from './result-right-wrong';

export const renderSprinResultPage = async (container) => {
  const sprintResultPage = sprintResultContent();
  await renderSprintPage(sprintResultPage, container);
  const rightResults = await addRightResults();
  const wrongResults = await addWrongResults();

  const playAgainBtn = document.querySelector('.play-again-btn');
  const backButton = document.querySelector('.sprint-result-back-btn');
  const sprintScore = document.querySelector('.sprint-result-score span');
  const rightAnswers = document.querySelector('.right-answers span');
  const mistakes = document.querySelector('.mistakes span');

  const rightContainer = document.querySelector('.result-right');
  const wrongContainer = document.querySelector('.result-wrong');

  rightContainer.innerHTML = rightResults ? rightResults : 'no correct answer';
  wrongContainer.innerHTML = wrongResults ? wrongResults : 'no wrong answer';
  localStorage.removeItem('rightID');
  localStorage.removeItem('wrongID');

  const sprintSvgRight = document.querySelectorAll('.sprint-swg-right');

  sprintSvgRight.forEach((elem) => {
    elem.addEventListener('click', async (e) => {
      e.target.firstElementChild.play();
    });
  });

  sprintScore.textContent = localStorage.getItem('sprintScore') ? localStorage.getItem('sprintScore') : 0;
  rightAnswers.textContent = localStorage.getItem('rightCount') ? localStorage.getItem('rightCount') : 0;
  mistakes.textContent = localStorage.getItem('wrongCount') ? localStorage.getItem('wrongCount') : 0;

  playAgainBtn.addEventListener('click', async () => {
    localStorage.removeItem('sprintScore');
    localStorage.removeItem('rightCount');
    localStorage.removeItem('wrongCount');
    const sprintGamePage = sprintGameContent();
    const g = localStorage.getItem('currentGroup');
    const p = localStorage.getItem('currentPage');
    await startGame(g, p, container, sprintGamePage);
  });

  backButton.addEventListener('click', async () => {
    container.innerHTML = '';
    container.append(gamePage.node);
    localStorage.removeItem('sprintScore');
    localStorage.removeItem('rightCount');
    localStorage.removeItem('wrongCount');
    localStorage.removeItem('currentPage');
    localStorage.removeItem('currentGroup');
    localStorage.removeItem('wrongID');
    localStorage.removeItem('rightID');
  });
};
