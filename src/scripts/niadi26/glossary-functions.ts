import { renderPage } from "./render-glossary-page";

const MAX_PAGE = 29;

export function getGroupCount(event: Event) {
  // eslint-disable-next-line prettier/prettier
  const element = event.target as HTMLElement;
  if (!element.id) return;
  localStorage.setItem('glossaryGroup', `${element.id}`);
  renderPage();
}

export function getPageCount(event: Event) {
  // eslint-disable-next-line prettier/prettier
  const element = event.target as HTMLElement;
  if (!element.id) return;
  const currentPage = localStorage.getItem('glossaryPage') || 0;
  let newPage;
  if (element.id === 'prev') {
    newPage = +currentPage - 1;
    if(newPage < 0) return;
  }
  if (element.id === 'next') {
    newPage = +currentPage + 1;
    if(newPage > MAX_PAGE) return;
  }
  localStorage.setItem('glossaryPage', `${newPage}`);
  renderPage();
}