import { right, wrong } from '../../components/utilits/audio';

let count = 0;

export const isRight = () => {
  const panel = document.querySelector('.panel');
  const dot = document.querySelectorAll('.dot');
  const points = document.querySelector('.points span');
  const score = document.querySelector('.score-count');
  score.textContent = `${+score.textContent + +points.textContent}`;
  count += 1;
  if (count > 3) {
    points.textContent = `${+points.textContent + 10}`;
    dot.forEach((el) => {
      el.classList.remove('dot-active');
    });
    count = 0;
  }
  if (count > 0) {
    document.querySelector(`#dot-${count}`).classList.add('dot-active');
  }
  panel.classList.add('panel-right');
  right.currentTime = 0;
  right.play();
  localStorage.setItem('sprintScore', score.textContent);
};

export const isWrong = () => {
  const panel = document.querySelector('.panel');
  const dot = document.querySelectorAll('.dot');
  const points = document.querySelector('.points span');
  points.textContent = `${10}`;
  panel.classList.add('panel-wrong');
  dot.forEach((el) => {
    el.classList.remove('dot-active');
  });
  count = 0;
  wrong.currentTime = 0;
  wrong.play();
};
