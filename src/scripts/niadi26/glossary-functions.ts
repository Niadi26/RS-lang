import { renderPage } from "./render-glossary-words";
import { MAX_PAGE, glosarryPage } from './glossary-page';
import { renderDifficultPage } from './render-difficult-words';
import { getUserWord } from '../components/methods/users-words/get-user-word';
import { createUserWord } from '../components/methods/users-words/create-user-words';
import { updateUserWord } from '../components/methods/users-words/update-user-word';
import { UserWords } from '../components/interfaces/interface-user-word'; 
import { checkAutorization } from '../components/utilits/check-autorization'; 

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

export function isEmpty(obj: UserWords) {
  for (const key in obj) {
    return false;
  }
  return true;
}

export async function changeUserWord(type: 'learned' | 'difficult', wordId: string) {
  const autorization = checkAutorization();
  if (!autorization) {
    return;
  }
  const userId = localStorage.getItem('userId');
  const group = localStorage.getItem('glossaryGroup') || '0';
  const page = localStorage.getItem('glossaryPage') || '0';
  const data: UserWords = await getUserWord(userId, wordId);
  const optional = {
    learned: false,
    difficult: false,
    group: group,
    page: page,
  }
  optional[type] = !optional[type];
  if(isEmpty(data)) {
    createUserWord(userId, wordId, optional)
  } else {
    updateUserWord(userId, wordId, optional)
  }
}
