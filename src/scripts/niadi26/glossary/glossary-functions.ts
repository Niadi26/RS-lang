import { renderPage } from "./render-glossary-words";
import { glosarryPage } from '../glossary-page';
import { MAX_PAGE } from "./constants";
import { renderDifficultPage } from './render-difficult-words';
import { getUserWord } from '../../components/methods/users-words/get-user-word';
import { createUserWord } from '../../components/methods/users-words/create-user-words';
import { updateUserWord } from '../../components/methods/users-words/update-user-word';
import { IUserWord, UserWords, flags } from '../../components/interfaces/interface-user-word'; 
import { checkAutorization } from '../../components/utilits/check-autorization'; 

export function toggleGroupClass(index: string) {
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
  if (element.id === 'first') {
    newPage = 0;
    if(newPage > MAX_PAGE) return;
  }
  if (element.id === 'last') {
    newPage = MAX_PAGE;
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

export async function changeUserWord(type: flags, wordId: string, otherType: 'learned' | 'difficult') {
  const autorization = checkAutorization();
  if (!autorization) {
    return;
  }
  const userId = localStorage.getItem('userId') as string;
  const group = localStorage.getItem('glossaryGroup') || '0';
  const page = localStorage.getItem('glossaryPage') || '0';
  const data: IUserWord = await getUserWord(JSON.parse(userId), wordId);
  if(!data) {
    const optional = {
      learned: false,
      difficult: false,
      group: group,
      page: page,
    }
    optional[type] = !optional[type];
    const result = await createUserWord(JSON.parse(userId), wordId, { "difficulty": "weak", optional: optional});
  } else {
    data.optional[type] = !data.optional[type];
    data.optional[otherType] = false;
    const result = await updateUserWord(JSON.parse(userId), wordId, { "difficulty": "weak", optional: data.optional});
  }
}
