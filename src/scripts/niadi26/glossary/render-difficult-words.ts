import { getUserWords } from '../../components/methods/users-words/get-user-words';
import { getWord } from '../../components/methods/get-word';
import { UserWords, flags, Iflags } from '../../components/interfaces/interface-user-word';
import { IWord } from '../../components/interfaces/interface-get-word';
import { WordCard } from './word-card';
import { glosarryPage } from '../glossary-page';
import { checkAutorization } from '../../components/utilits/check-autorization'; 
import { changeUserWord } from "./glossary-functions";
import { WarningGlossary } from '../popap';

const BUTTONS_ROLES: Iflags = {
  learned: 'difficult',
  difficult: 'learned',
}

export async function renderDifficultPage() {
  const rootElement = document.getElementById('words');
  if (rootElement) rootElement.innerHTML = '';
  rootElement?.classList.remove('glossary__pages-learned');
  glosarryPage.gameButtons.style.pointerEvents = 'auto';
  glosarryPage.notPlay.classList.add('hidden');
  const autorization = checkAutorization();
  if (!autorization) {
    const notise = new WarningGlossary('Please, autorizate to use this opportunity!');
    rootElement?.append(notise.node);
    return;
  }
  // eslint-disable-next-line prettier/prettier
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
    item.flag.classList.add('dificult-hard');
    item.flag.innerHTML = 'Dificult';
    rootElement?.append(item.node);
    item.buttons.addEventListener('click', async (e) => {
      const elementClick = e.target as HTMLElement;
      if(elementClick.tagName === 'BUTTON') {
        const parent = elementClick.closest('.glossary__word');
        const role = elementClick.dataset['id'] as flags;
        await changeUserWord( role, parent!.id, BUTTONS_ROLES[role]);
        renderDifficultPage();
      }
    })
  });
}
