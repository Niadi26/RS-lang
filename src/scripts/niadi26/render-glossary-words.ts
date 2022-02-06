import { WordCard } from './word-card';
import { getWordss } from '../components/methods/get-words';
import { Word } from '../components/interfaces/get-word';

export async function renderPage(parent?: HTMLElement) {
  const group = localStorage.getItem('glossaryGroup');
  const page = localStorage.getItem('glossaryPage');
  const rootElement = parent || document.getElementById('words');
  const data = await getWordss(group, page);
  if (rootElement) {
    rootElement.innerHTML = '';
    data.map((el: Word) => {
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
        el.textMeaningTranslate
      );
      rootElement.append(item.node);
    });
  }
}
