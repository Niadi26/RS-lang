import { ElementHTML } from '../create-element';

class ScrollButton {
  constructor() {
    const wrapper = new ElementHTML('div', 'button-above', '');
    this.node = wrapper.node;
  }
}

export const buttonAbove = new ScrollButton();

function moveAbove() {
  if (window.pageYOffset > document.documentElement.clientHeight) {
    buttonAbove.node.classList.add('but-active');
    return;
  }
  buttonAbove.node.classList.remove('but-active');
}

function debounceButton(f, ms = 50) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}

function toTopMover() {
  scrollTo(0, 0);
}

window.addEventListener('scroll', debounceButton(moveAbove));
buttonAbove.node.addEventListener('click', toTopMover);
