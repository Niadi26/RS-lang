import { mainPage } from "./main-page";
import { ElementHTML } from "./create-element";
// eslint-disable-next-line prettier/prettier
const rootElem = document.querySelector('.main') as HTMLElement;
const navigation = document.querySelector('.nav__cont');

const glos = new ElementHTML('div', '', 'gloss');
const game = new ElementHTML('div', '', 'game');
const stat = new ElementHTML('div', '', 'stat');

function createPage(id: string) {
  switch(id) {
    case 'main':
      rootElem.innerHTML = '';
      rootElem.append(mainPage.node);
      break;
    case 'glossary':
      rootElem.innerHTML = '';
      rootElem.append(glos.node);
      break;
    
    case 'minigames':
      rootElem.innerHTML = '';
      rootElem.append(game.node);
      break;
    case 'statistics':
      rootElem.innerHTML = '';
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