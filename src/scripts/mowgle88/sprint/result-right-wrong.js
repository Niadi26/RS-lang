import { getWord } from '../../components/methods/get-word';

export const addRightResults = async () => {
  const rightId = localStorage.getItem('rightID');
  const rightIdArray = JSON.parse(rightId);
  const IdArray = [];
  for await (let id of rightIdArray) {
    const data = await getWord(id);
    const options = [data.audio, data.word, data.wordTranslate];
    IdArray.push(options);
  }
  console.log(IdArray);
  let contant = IdArray.map(
    (el, ind) =>
      `<div class="sprint-word">
        <div id="sprint-audio-${ind}" class="sprint-swg-right">
          <audio class="sprint-game-audio" src="https://react-rslang-by.herokuapp.com/${el[0]}"></audio>
        </div>
        <p class="sprint-">${el[1]} - ${el[2]}</p>
      </div>`
  );
  console.log(contant.join('\n'));
  return contant.join('\n');
};

export const addWrongResults = async () => {
  const wrongId = localStorage.getItem('wrongID');
  const wrongIdArray = JSON.parse(wrongId);
  const IdArray = [];
  for await (let id of wrongIdArray) {
    const data = await getWord(id);
    const options = [data.audio, data.word, data.wordTranslate];
    IdArray.push(options);
  }
  console.log(IdArray);
  let contant = IdArray.map(
    (el) =>
      `<div class="sprint-word">
        <div class="sprint-swg-right">
          <audio class="sprint-game-audio" src="https://react-rslang-by.herokuapp.com/${el[0]}"></audio>
        </div>
        <p class="sprint-">${el[1]} - ${el[2]}</p>
      </div>`
  );
  console.log(contant.join('\n'));
  return contant.join('\n');
};
