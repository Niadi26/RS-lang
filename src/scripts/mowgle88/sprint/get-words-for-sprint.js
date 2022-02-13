import { getWords } from '../../components/methods/get-words';
import { shuffle } from '../../components/utilits/random';

const getWordForSprint = async (group, page) => {
  const wordsApi = await getWords(group, page);
  const word = await wordsApi.map((el) => [el.id, el.word]);
  // shuffle(word);
  return word;
};

const getWordTranslateForSprint = async (group, page) => {
  const wordsApi = await getWords(group, page);
  const wordTranslate = await wordsApi.map((el) => [el.id, el.wordTranslate]);
  // shuffle(wordTranslate);
  return wordTranslate;
};

const getOption = (array, i) => {
  const arr = [];
  arr.push(array[i]);
  const newArr = array.filter((el) => el !== array[i]);
  shuffle(newArr);
  const value = newArr.slice(0, 1).concat(arr);
  // console.log(value);
  shuffle(value);
  return value[0];
};

export { getWordForSprint, getWordTranslateForSprint, getOption };
