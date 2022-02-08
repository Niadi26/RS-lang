import './main-page';
import './navigation';
import { createPage } from './navigation';

if (!localStorage.getItem('glossaryGroup')) localStorage.setItem('glossaryGroup', '0');
if (!localStorage.getItem('glossaryPage')) localStorage.setItem('glossaryPage', '0');

const pageName = localStorage.getItem('namePage');
if (pageName) {
  createPage(pageName);
} else {
  createPage();
}
