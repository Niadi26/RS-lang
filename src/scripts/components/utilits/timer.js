import { renderSprinResultPage } from '../../mowgle88/sprint/render-sprint-result-page';
import { rootElem } from '../constants';

export const countdown = () => {
  let timer;
  let x = 60;
  function turnOnTimer() {
    if (document.querySelector('.timer') !== null) {
      document.querySelector('.timer').innerHTML = x;
      x -= 1;
      if (x < 0) {
        clearTimeout(timer);
        renderSprinResultPage(rootElem);
        x = 60;
      } else {
        timer = setTimeout(turnOnTimer, 1000);
      }
    }
  }
  turnOnTimer();
};
