import { createPageGameAudioCall } from '../lenka-w1/app';
import '../../styles/niadi26/styles.css';
import './main-page';
import './navigation';
import './burger-menu';
import { createPage } from './navigation';

if (!localStorage.getItem('glossaryGroup')) localStorage.setItem('glossaryGroup', '0');
if (!localStorage.getItem('glossaryPage')) localStorage.setItem('glossaryPage', '0');

const pageName = localStorage.getItem('namePage');
if (pageName) {
  createPage(pageName);
} else {
  createPage();
}

if (pageName === 'audio-call') {
  createPageGameAudioCall();
}
