import { getWord } from '../../components/methods/get-word';

export const addRightResults = async () => {
  if (localStorage.getItem('rightID')) {
    const rightId = localStorage.getItem('rightID');
    const rightIdArray = JSON.parse(rightId);

    const resultsArray = rightIdArray.map(async (id) => {
      const data = await getWord(id);
      const options = [data.audio, data.word, data.wordTranslate];
      return options;
    });
    const endResult = await Promise.all(resultsArray);

    let contant = endResult.map(
      (el, ind) =>
        `<div class="sprint-word">
          <div id="sprint-audio-${ind}" class="sprint-swg-right">
            <audio class="sprint-game-audio" src="https://react-rslang-by.herokuapp.com/${el[0]}"></audio>
          </div>
          <p class="sprint-">${el[1]} - ${el[2]}</p>
        </div>`
    );
    return contant.join('\n');
  } else {
    return '';
  }
};

export const addWrongResults = async () => {
  if (localStorage.getItem('wrongID')) {
    const wrongId = localStorage.getItem('wrongID');
    const wrongIdArray = JSON.parse(wrongId);

    const resultsArray = wrongIdArray.map(async (id) => {
      const data = await getWord(id);
      const options = [data.audio, data.word, data.wordTranslate];
      return options;
    });
    const endResult = await Promise.all(resultsArray);
    let contant = endResult.map(
      (el) =>
        `<div class="sprint-word">
          <div class="sprint-swg-right">
            <audio class="sprint-game-audio" src="https://react-rslang-by.herokuapp.com/${el[0]}"></audio>
          </div>
          <p class="sprint-">${el[1]} - ${el[2]}</p>
        </div>`
    );
    return contant.join('\n');
  } else {
    return '';
  }
};
