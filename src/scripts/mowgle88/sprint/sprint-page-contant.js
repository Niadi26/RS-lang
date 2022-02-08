export const sprintChooseLevelContent = () => {
  return `
  <div class="select-level">
    <h1 class="sprint-title">Sprint</h1>
    <p class="sprint-text">Trains the skill of quick translation from English into Russian. You need to choose whether the translation matches the suggested word.</p>
    <div class="stars-container">
      <button id="sprint-level-btn-1" class="star star-red btn-animation">1</button>
      <button id="sprint-level-btn-2" class="star star-orange btn-animation">2</button>
      <button id="sprint-level-btn-3" class="star star-yellow btn-animation">3</button>
      <button id="sprint-level-btn-4" class="star star-green btn-animation">4</button>
      <button id="sprint-level-btn-5" class="star star-blue btn-animation">5</button>
      <button id="sprint-level-btn-6" class="star star-navyblue btn-animation">6</button>
    </div>
    <button class="sprint-back-btn btn-animation">back to home</button>
  </div>`;
};

export const sprintGameContent = () => {
  return `
  <div class="top">
    <div class="fullscreen"></div>
    <div class="score">
      <b class="letter">s</b>
      <b class="letter">c</b>
      <b class="letter">o</b>
      <b class="letter">r</b>
      <b class="letter">e</b>
      <h2 class="count">0</h2>
    </div>
    <div class="volume"></div>
  </div>
  <div class="select-level">
    <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="points">+ <span>10</span> points</div>
    <h2 class="english-word">English</h2>
    <h3 class="russian-word">Russian</h3>
    <div class="right-wrong">
      <button class="right-btn">right</button>
      <button class="wrong-btn">wrong</button>
    </div>
  </div>
  <div class="wrap">
    <h2 class="count timer"></h2>
    <div class="fill">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve"><path fill="#04ACFF" class="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"/>
      </svg>
    </div>
  </div>`;
};

export const sprintResultContent = () => {
  return `
  <div class="select-level">
    
  </div>`;
};
