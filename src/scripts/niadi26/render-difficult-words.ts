import { getUserWords } from '../components/methods/users-words/get-user-words';
import { getWord } from '../components/methods/get-word';
import { IUserWord, UserWords } from '../components/interfaces/interface-user-word';
import { IWord } from '../components/interfaces/interface-get-word';
import { WordCard } from './word-card';

export async function renderDifficultPage() {
  const rootElement = document.getElementById('words');
  const id = localStorage.getItem('userId');
  if (!id) {
    console.log('need autorization');
    return;
  }
  const data: UserWords = await getUserWords(id);
  const userDifficultWords = data.filter((el) => el.optional.difficult);
  if (!userDifficultWords.length) {
    console.log('no difficult words');
    return;
  }
  const wordsPromises = userDifficultWords.map((el) => getWord(el.wordId));
  const wordsResults = await Promise.all(wordsPromises);
  wordsResults.map((el: IWord) => {
    const item = new WordCard(
      el.id,
      el.group,
      el.image,
      el.word,
      el.transcription,
      el.wordTranslate,
      el.textExample,
      el.textExampleTranslate,
      el.textMeaning,
      el.textMeaningTranslate,
      el.audio,
      el.audioMeaning,
      el.audioExample,
      id
    );
    rootElement?.append(item.node);
  });
}
