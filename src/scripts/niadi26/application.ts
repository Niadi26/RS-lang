import './main-page';
import './navigation';
import { createPage } from './navigation';

const pageName = localStorage.getItem('namePage');
if (pageName) {
  createPage(pageName);
} else {
  createPage();
}
