import { mainPage } from "./main-page";
import { glosarryPage } from "./glossary-page";
import { gamePage } from "./games-page";
import { statisticsPage } from "./statistics";
import { rootElem, navigation } from "../components/constants";
import { audio } from "./play-audio";
// eslint-disable-next-line prettier/prettier

export const NAVIGATION_ID = {
  main: 'main',
  glossary: 'glossary',
  minigames: 'minigames',
  statistics: 'statistics'
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
    glosarryPage.changePage();
    break;
  case NAVIGATION_ID.minigames:
    rootElem.append(gamePage.node);
    break;
  case NAVIGATION_ID.statistics:
    rootElem.append(statisticsPage.node);
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

// eslint-disable-next-line prettier/prettier
const menuBtn = document.querySelector('.menu-btn') as HTMLElement;
const menu = document.querySelector('.menu') as HTMLElement;

function outsideEvtListener() {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  document.removeEventListener('click', outsideEvtListener);
}

menuBtn.addEventListener('click', function() {
  if(menuBtn.classList.contains('active')) {
    outsideEvtListener();
  } else {
	menuBtn.classList.add('active');
	menu.classList.add('active');
  setTimeout(() => document.addEventListener('click', outsideEvtListener), 0);
  }
})

menu.addEventListener('click', (e) => {
  // eslint-disable-next-line prettier/prettier
  const elementClick = e.target as HTMLElement;
  if (elementClick && elementClick.tagName === 'LI') {
    const actualPage = localStorage.getItem('namePage');
    if (actualPage == elementClick.id) return;
    createPage(elementClick.id);
  }
});

