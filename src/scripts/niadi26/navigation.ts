import { mainPage } from "./main-page";
import { glosarryPage } from "./glossary-page";
import { ElementHTML } from "./create-element";
// eslint-disable-next-line prettier/prettier
const rootElem = document.querySelector('.main') as HTMLElement;
const navigation = document.querySelector('.nav__cont');

const game = new ElementHTML('div', '', 'game');
const stat = new ElementHTML('div', '', 'stat');
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
    rootElem.append(game.node);
    break;
  case NAVIGATION_ID.statistics:
    rootElem.append(stat.node);
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