import { ElementHTML } from "./create-element";
import { checkAutorization } from '../components/utilits/check-autorization';
import { WarningGlossary } from './popap';
import { IUserWord } from '../components/interfaces/interface-user-word';
import { getUserWords } from '../components/methods/users-words/get-user-words';

class StatisticsPage {
  // eslint-disable-next-line prettier/prettier
  public node: HTMLElement;

  public learn: HTMLElement;

  public img: HTMLElement;

  public difficult: HTMLElement;
  
  constructor() {
    const mainWrapper = new ElementHTML('div', 'wrapper wrapper__statistics', '');
    const pageName = new ElementHTML('h2', 'section__title', 'Your progress', '', mainWrapper.node);
    const glossaryStatistic = new ElementHTML('div', 'statistics__cont', '', '', mainWrapper.node);
    const countsCont = new ElementHTML('div', 'statistics__count', '', '', glossaryStatistic.node);
    const newCont = new ElementHTML('div', 'statistics__item', '', '', countsCont.node);
    const learnCount = new ElementHTML('div', 'statistics__num', '', '', newCont.node);
    const learnText = new ElementHTML('h3', 'statistics__txt', 'Learned words', '', newCont.node);
    const diffCont = new ElementHTML('div', 'statistics__item', '', '', countsCont.node);
    const diffNum = new ElementHTML('div', 'statistics__num', '', '', diffCont.node);
    const diffText = new ElementHTML('h3', 'statistics__txt', 'Difficult words', '', diffCont.node);
    const imgCont = new ElementHTML('div', 'statistics__item statistics__img', '', '', glossaryStatistic.node);

    this.node = mainWrapper.node;
    this.learn = learnCount.node;
    this.img = imgCont.node;
    this.difficult = diffNum.node;
  }

  changeLearned(num: number) {
    this.learn.innerHTML = `${num}/3600`;
  }

  changeDifficult(num: number) {
    this.difficult.innerHTML = `${num}`;
  }

  changeImg(num: number) {
    const imgProgress = new Image();
    imgProgress.src = `assets/niadi26/learn-progress/${num}.jpg`;
    imgProgress.onload = () => {  
      this.img.style.backgroundImage = `url('${imgProgress.src}')`;
    }
  }
}

export let statisticsPage = new StatisticsPage();
const STAT_CHECKPOINT = [600, 1200, 1800, 2400, 2800, 3600];

function changeStatisticsImg(num: number) {
  if (num < STAT_CHECKPOINT[0]!) {
    statisticsPage.changeImg(1);
  } else if (num > (STAT_CHECKPOINT[0]! -1) && num < STAT_CHECKPOINT[1]!) {
    statisticsPage.changeImg(2);
  } else if (num > (STAT_CHECKPOINT[1]! -1) && num < STAT_CHECKPOINT[2]!) {
    statisticsPage.changeImg(3);
  } else if (num > (STAT_CHECKPOINT[2]! -1) && num < STAT_CHECKPOINT[3]!) {
    statisticsPage.changeImg(4);
  } else if (num > (STAT_CHECKPOINT[3]! -1) && num < STAT_CHECKPOINT[4]!) {
    statisticsPage.changeImg(5);
  } else if (num > (STAT_CHECKPOINT[4]! -1) && num < STAT_CHECKPOINT[5]!) {
    statisticsPage.changeImg(6);
  } else {
    statisticsPage.changeImg(7);
  }
}

export async function getStatistics() {
  const userId: string = localStorage.getItem('userId') as string;
  const data = await getUserWords(JSON.parse(userId));
  const learnedWords = data.filter((el: IUserWord) => el.optional.learned).length;
  const difficultWords = data.filter((el: IUserWord) => el.optional.difficult).length;
  statisticsPage.changeLearned(learnedWords);
  statisticsPage.changeDifficult(difficultWords);
  changeStatisticsImg(learnedWords);
}

export function makeStatisticsPage() {
  const autorization = checkAutorization();
  if (!autorization) {
    const statisticsWarning = new WarningGlossary('Please, autorizate to use this opportunity!');
    statisticsPage.node.innerHTML = '';
    statisticsPage.node.append(statisticsWarning.node);
  } else {
    statisticsPage.node.innerHTML = '';
    statisticsPage = new StatisticsPage();
    getStatistics();
  }
}