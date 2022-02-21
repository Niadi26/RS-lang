export const addFullscreen = () => {
  const main = document.querySelector('.main');
  const sprintGame = document.querySelector('.sprint-game');
  if (document.fullscreenElement) {
    document.exitFullscreen();
    sprintGame.style.height = 'calc(100vh - 70px)';
  } else {
    main.requestFullscreen();
    sprintGame.style.height = '100vh';
  }
};
