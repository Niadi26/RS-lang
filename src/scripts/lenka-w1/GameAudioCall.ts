import '../../styles/lenka-w1/audio-call.css';
import { ElementHTML } from '../niadi26/create-element';

class GameAudioCall {
  public node: HTMLElement;

  constructor() {
    const mainWrapper = new ElementHTML('div', 'audio-call', '');
    const footer = document.querySelector('.footer') as HTMLElement;
    footer.style.display = 'none';

    this.node = mainWrapper.node;
  }
}

export const audioCall = new GameAudioCall();