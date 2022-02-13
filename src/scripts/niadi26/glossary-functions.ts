import { renderPage } from "./render-glossary-words";
import { MAX_PAGE, glosarryPage } from './glossary-page';
import { renderDifficultPage } from './render-difficult-words'


function toggleGroupClass(index: string) {
  const allGroups = document.querySelectorAll("[data-group]");
  allGroups.forEach((el) => el.classList.remove('group_active'));
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  (index === 'difficult') 
  ? allGroups[allGroups.length - 1]?.classList.add('group_active') 
  : allGroups[+index]?.classList.add('group_active');
}

export function getGroupCount(event: Event) {
  // eslint-disable-next-line prettier/prettier
  const element = event.target as HTMLElement;
  if (!element.id) return;
  localStorage.setItem('glossaryGroup', `${element.id}`);
  toggleGroupClass(element.id);
  if (element.id === 'difficult') {
    renderDifficultPage();
  } else {
    renderPage();
  }
}

export function getPageCount(event: Event) {
  // eslint-disable-next-line prettier/prettier
  const element = event.target as HTMLElement;
  if (!element.id) return;
  const currentPage = localStorage.getItem('glossaryPage') || 0;
  let newPage = +currentPage;
  if (element.id === 'prev') {
    newPage = +currentPage - 1;
    if(newPage < 0) return;
  }
  if (element.id === 'next') {
    newPage = +currentPage + 1;
    if(newPage > MAX_PAGE) return;
  }
  localStorage.setItem('glossaryPage', `${newPage}`);
  glosarryPage.changePage(newPage);
  renderPage();
}
