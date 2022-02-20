import { ElementHTML } from "../create-element";
import { getGroupCount, getPageCount } from "./glossary-functions";
import { MAX_PAGE, GROUPS_COLOR } from './constants';

export class Groups {
    // eslint-disable-next-line prettier/prettier
    public node: HTMLElement;
  
    public page: HTMLElement;
  
    constructor(num: number) {
      const container = new ElementHTML('div', 'groups_flex', '');
  
      const buttonsPageCont = new ElementHTML('div', 'pagination__wrapper', '', '', container.node);
      const pageCount = new ElementHTML('p', 'pagination__text', `1/${MAX_PAGE + 1}`, '', buttonsPageCont.node);
      const buttonFirst = new ElementHTML('button', 'button-page button-page_prev button-little', '', '', buttonsPageCont.node);
      buttonFirst.node.setAttribute('id', 'first');
      const buttonPrev = new ElementHTML('button', 'button-page button-page_prev', '', '', buttonsPageCont.node);
      buttonPrev.node.setAttribute('id', 'prev');
      const buttonNext = new ElementHTML('button', 'button-page button-page_next', '', '', buttonsPageCont.node);
      buttonNext.node.setAttribute('id', 'next');
      const buttonLast = new ElementHTML('button', 'button-page button-page_next button-little', '', '', buttonsPageCont.node);
      buttonLast.node.setAttribute('id', 'last');
      buttonsPageCont.node.addEventListener('click', (e) => getPageCount(e));
      
      const bookGroupCont = new ElementHTML('div', 'glossary__groups', '', '', container.node);
      bookGroupCont.node.addEventListener('click', (e) => getGroupCount(e));
      const currentGroup = localStorage.getItem('glossaryGroup') || '0';
      for(let i = 0; i < num; i++) {
        const groupCont = new ElementHTML('button', 'glossary__group', `Level  ${i + 1}`);
        groupCont.node.setAttribute('id', `${i}`);
        groupCont.node.dataset["group"] = 'group';
        groupCont.node.style.backgroundColor = `${GROUPS_COLOR[i]}`;
        if (i == +currentGroup) groupCont.node.classList.add('group_active');
        bookGroupCont.node.append(groupCont.node);
        if (i === num - 1) {
          groupCont.node.innerHTML = 'Repeat';
          groupCont.node.setAttribute('id', `difficult`);
        } 
      }
  
      this.node = container.node;
      this.page = pageCount.node;
    }
  }
  