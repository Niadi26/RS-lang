let timer;
let x = 60;

export const countdown = async () => {
  document.querySelector('.timer').innerHTML = x;
  x -= 1;
  if (x < 0) {
    clearTimeout(timer);
    x = 60;
  } else {
    timer = setTimeout(countdown, 1000);
  }
};
