import { mainPage } from "./main-page";
import { glosarryPage } from "./glossary-page";
import { gamePage } from "./games-page";
import { statisticsPage } from "./statistics";
// eslint-disable-next-line prettier/prettier
const rootElem = document.querySelector('.main') as HTMLElement;
const navigation = document.querySelector('.nav__cont');

const NAVIGATION_ID = {
  main: 'main',
  glossary: 'glossary',
  minigames: 'minigames',
  statistics: 'statistics'
}

function createPage(id: string) {
  rootElem.innerHTML = '';
  switch(id) {
  case NAVIGATION_ID.main:
    rootElem.append(mainPage.node);
    break;
  case NAVIGATION_ID.glossary:
    rootElem.append(glosarryPage.node);
    break;
  case NAVIGATION_ID.minigames:
    rootElem.append(gamePage.node);
    break;
  case NAVIGATION_ID.statistics:
    rootElem.append(statisticsPage.node);
    break;
    }
  }

if (navigation) {
    navigation.addEventListener('click', (e) => {
      // eslint-disable-next-line prettier/prettier
      const elementClick = e.target as HTMLElement;
      if (elementClick && elementClick.tagName === 'LI') {
        createPage(elementClick.id);
      }
    });
  }