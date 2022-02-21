import { createPage } from "./navigation";

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
