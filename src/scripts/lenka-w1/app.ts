import { rootElem } from '../components/constants';
import { audioCall } from './GameAudioCall';

export function createPageGameAudioCall() {
  rootElem.innerHTML = '';
  rootElem.append(audioCall.node);
  localStorage.setItem('namePage', 'audio-call');
  const footer = document.querySelector('.footer') as HTMLElement;
  footer.style.display = 'none';
}


