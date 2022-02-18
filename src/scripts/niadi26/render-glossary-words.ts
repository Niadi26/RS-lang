import { WordCard } from './word-card';
import { getWords } from '../components/methods/get-words';
import { getUserWords } from '../components/methods/users-words/get-user-words';
import { IWord } from '../components/interfaces/interface-get-word';
import { IUserWord, UserWords } from '../components/interfaces/interface-user-word';
import { renderDifficultPage } from './render-difficult-words';
import { glosarryPage } from './glossary-page';
import { checkAutorization } from '../components/utilits/check-autorization';

const WORDS_ON_PAGE = 20;

export async function renderPage(parent?: HTMLElement) {
  const rootElement = parent || document.getElementById('words');
  const group = localStorage.getItem('glossaryGroup');
  if (group === 'difficult') {
    renderDifficultPage();
    return;
  }
  const page = localStorage.getItem('glossaryPage');
  const autorization = checkAutorization();
  let userWords: UserWords = [];
  if (autorization) {
    const userId: string = localStorage.getItem('userId') as string;
    const data = await getUserWords(JSON.parse(userId));
    userWords = data.filter(
      (el: IUserWord) =>
        el.optional.page === page && el.optional.group === group && (el.optional.difficult || el.optional.learned)
    );
  }
  const data = await getWords(group, page);
  if (rootElement) {
    rootElement.innerHTML = '';
    data.map((el: IWord) => {
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
      if (userWords.length) {
        if (userWords.find((word: IUserWord) => word.wordId === item.node.id && word.optional.learned)) {
          item.flag.classList.add('dificult-easy');
        } else if (userWords.find((word: IUserWord) => word.wordId === item.node.id && word.optional.difficult)) {
          item.flag.classList.add('dificult-hard');
        }
        if (userWords.length === WORDS_ON_PAGE) {
          rootElement.classList.add('glossary__pages-learned');
          glosarryPage.gameButtons.style.pointerEvents = 'none';
          glosarryPage.notPlay.classList.remove('hidden');
        }
      }
      rootElement.append(item.node);
    });
  }
}
