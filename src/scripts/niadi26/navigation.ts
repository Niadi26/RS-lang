import { mainPage } from "./main-page";
import { glosarryPage } from "./glossary-page";
import { gamePage } from "./games-page";
import { statisticsPage, makeStatisticsPage } from "./statistics";
import { rootElem, navigation } from "../components/constants";
import { audio } from "./glossary/play-audio";
import { renderSprintGamePage } from "../mowgle88/sprint/render-sprint-game";
// eslint-disable-next-line prettier/prettier

export const NAVIGATION_ID = {
  main: 'main',
  glossary: 'glossary',
  minigames: 'minigames',
  statistics: 'statistics',
  sprintGame: 'sprint-game'
}

export function createPage(id = 'main') {
  localStorage.setItem('namePage', id);
  audio.pause();
  rootElem.innerHTML = '';
  switch(id) {
  case NAVIGATION_ID.main:
    rootElem.append(mainPage.node);
    break;
  case NAVIGATION_ID.glossary:
    rootElem.append(glosarryPage.node);
    glosarryPage.rerenderPage();
    glosarryPage.changePage();
    break;
  case NAVIGATION_ID.minigames:
    rootElem.append(gamePage.node);
    break;
  case NAVIGATION_ID.statistics:
    makeStatisticsPage();
    rootElem.append(statisticsPage.node);
    break;
  case NAVIGATION_ID.sprintGame:
    renderSprintGamePage(rootElem);
    (document.querySelector('.footer') as HTMLElement).style.display = 'none';
    break;
    }
    // eslint-disable-next-line prettier/prettier
    (document.querySelector('.footer') as HTMLElement).style.display = 'block';
  }

if (navigation) {
  navigation.addEventListener('click', (e) => {
    // eslint-disable-next-line prettier/prettier
    const elementClick = e.target as HTMLElement;
    if (elementClick && elementClick.tagName === 'LI') {
      const actualPage = localStorage.getItem('namePage');
      if (actualPage == elementClick.id) return;
      createPage(elementClick.id);
    }
  });
}
