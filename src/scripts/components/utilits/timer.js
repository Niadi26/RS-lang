export const countdown = () => {
  let timer;
  let x = 60;
  function turnOnTimer() {
    if (document.querySelector('.timer') !== null) {
      document.querySelector('.timer').innerHTML = x;
      x -= 1;
      if (x < 0) {
        clearTimeout(timer);
        x = 60;
      } else {
        timer = setTimeout(turnOnTimer, 1000);
      }
    }
  }
  turnOnTimer();
};
