import { getUserWords } from '../components/methods/users-words/get-user-words';
import { getWord } from '../components/methods/get-word';
import { IUserWord, UserWords } from '../components/interfaces/interface-user-word';
import { IWord } from '../components/interfaces/interface-get-word';
import { WordCard } from './word-card';
import { ElementHTML } from './create-element';
import { checkAutorization } from '../components/utilits/check-autorization'; 

class WarningGlossary {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;
  
  constructor(text: string) {
    const wrapper = new ElementHTML('div', 'message-wrapper', '');
    const warningText = new ElementHTML('p', '', text, '', wrapper.node);
    this.node = wrapper.node;
  }
}

export async function renderDifficultPage() {
  const rootElement = document.getElementById('words');
  if (rootElement) rootElement.innerHTML = '';
  const autorization = checkAutorization();
  if (!autorization) {
    const notise = new WarningGlossary('Please, autorizate to use this opportunity!');
    rootElement?.append(notise.node);
    return;
  }
  const id = localStorage.getItem('userId') as string;
  const data: UserWords = await getUserWords(JSON.parse(id));
  const userDifficultWords = data.filter((el) => el.optional.difficult);
  if (!userDifficultWords.length) {
    const empty = new WarningGlossary('You dont checked any difficult words!');
    rootElement?.append(empty.node);
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
      autorization
    );
    rootElement?.append(item.node);
  });
}
