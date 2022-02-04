import { ElementHTML } from "./create-element";

// eslint-disable-next-line prettier/prettier
const rootElem = document.querySelector('.main') as HTMLElement;

class MainPage {
    public node: HTMLElement;

    constructor(parent: HTMLElement) {
        const mainWrapper = new ElementHTML('div', 'main__wrapper', '', '', parent);
        const sectionName = new ElementHTML('section', 'section section__name', '', '', mainWrapper.node);
        const sectionNameWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionName.node);
        const gameName = new ElementHTML('h1', '', 'New app!', '', sectionNameWrapper.node);
        const buttonsCont = new ElementHTML('div', '', '', '', sectionNameWrapper.node);
        const grammaButton = new ElementHTML('button', 'game', '', '', buttonsCont.node);
        const gamesButton = new ElementHTML('button', 'game', '', '', buttonsCont.node);
        const sectionAbout = new ElementHTML('section', 'section section__about', 'About our app', '', mainWrapper.node);
        const ectionAboutWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionAbout.node);
        const sectionTeam = new ElementHTML('section', 'section section__team', 'Our Team!', '', mainWrapper.node);
        const sectionTeamWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionTeam.node);
        this.node = mainWrapper.node;
    }
}

export const mainPage = new MainPage(rootElem);
