import { rootElem } from '../components/constants';
import { audioCall } from './GameAudioCall';

export function createPageGameAudioCall() {
  rootElem.innerHTML = '';
  rootElem.append(audioCall.node);
  localStorage.setItem('namePage', 'audio-call');
  const footer = document.querySelector('.footer') as HTMLElement;
  footer.style.display = 'none';
}

export let pagePreloader = document.getElementById('preloader') as HTMLElement;
export let dataBall = document.querySelector('[data-loader="ball-auto"]') as HTMLElement;
export function preloader() {
  pagePreloader.style.display = 'none';
  dataBall.style.display = 'none';
}

