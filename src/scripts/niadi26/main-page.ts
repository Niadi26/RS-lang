import { ElementHTML } from "./create-element";

// eslint-disable-next-line prettier/prettier
const rootElem = document.querySelector('.main') as HTMLElement;

class MainPage {
    public node: HTMLElement;

    constructor(parent: HTMLElement) {
        const mainWrapper = new ElementHTML('div', 'main__wrapper', '', '', parent);
        const sectionName = new ElementHTML('section', 'section section__name', '', '', mainWrapper.node);
        const sectionNameBg = new Image();
        sectionNameBg.src = '../assets/niadi26/main-bg.jpg';
        sectionNameBg.onload = () => {  
            sectionName.node.style.backgroundImage = `url('${sectionNameBg.src}')`;
        }
        const sectionNameWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionName.node);
        const gameName = new ElementHTML('h1', '', 'RS-lang', '', sectionNameWrapper.node);
        const buttonsCont = new ElementHTML('div', '', '', '', sectionNameWrapper.node);
        const grammaButton = new ElementHTML('button', 'button-main', '', '', buttonsCont.node);
        const grammaButtonBg = new Image();
        grammaButtonBg.src = '../assets/niadi26/book-icon.jpg';
        grammaButtonBg.onload = () => {  
            grammaButton.node.style.backgroundImage = `url('${grammaButtonBg.src}')`;
        }
        const gamesButton = new ElementHTML('button', 'button-main', '', '', buttonsCont.node);
        const gamesButtonBg = new Image();
        gamesButtonBg.src = '../assets/niadi26/games-icon.png';
        gamesButtonBg.onload = () => {  
            gamesButton.node.style.backgroundImage = `url('${gamesButtonBg.src}')`;
        }
        const sectionAbout = new ElementHTML('section', 'section section__about', 'About our app', '', mainWrapper.node);
        const ectionAboutWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionAbout.node);
        const sectionTeam = new ElementHTML('section', 'section section__team', 'Our Team!', '', mainWrapper.node);
        const sectionTeamWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionTeam.node);
        this.node = mainWrapper.node;
    }
}

export const mainPage = new MainPage(rootElem);
