import { sprintChooseLevelContent, sprintGameContent } from './sprint-page-contant';
import { startGame } from './sprint-page';

export const renderSprintPage = async (page, wraapper) => {
  wraapper.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('sprint-game');
  div.innerHTML = `${page}`;
  wraapper.append(div);
};

export const renderSprintGamePage = async (container) => {
  const sprintStartPage = sprintChooseLevelContent();
  const sprintGamePage = sprintGameContent();

  await renderSprintPage(sprintStartPage, container);
  const stars = document.querySelector('.stars-container');

  stars.addEventListener('click', async (event) => {
    const elem = event.target;
    if (elem.classList.contains('star')) {
      const id = elem.id;
      const num = id[id.length - 1] - 1;
      await startGame(num, 0, container, sprintGamePage);
    }
  });
};
