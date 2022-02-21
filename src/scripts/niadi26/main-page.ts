import { ElementHTML } from "./create-element";
import { createPage, NAVIGATION_ID } from "./navigation";
import { TeamMember } from "./team-member";
import { rootElem } from "../components/constants";

class MainPage {
    // eslint-disable-next-line prettier/prettier
    public node: HTMLElement;

    constructor(parent: HTMLElement) {
        const mainWrapper = new ElementHTML('div', 'main__wrapper', '', '', parent);
        const sectionName = new ElementHTML('section', 'section section__name', '', '', mainWrapper.node);
        const sectionNameBg = new Image();
        sectionNameBg.src = 'assets/niadi26/main-bg.jpg';
        sectionNameBg.onload = () => {  
            sectionName.node.style.backgroundImage = `url('${sectionNameBg.src}')`;
        }
        const sectionNameWrapper = new ElementHTML('div', 'wrapper', '', '', sectionName.node);
        const gameName = new ElementHTML('h1', '', 'RS-lang', '', sectionNameWrapper.node);
        const buttonsCont = new ElementHTML('div', '', '', '', sectionNameWrapper.node);
        const grammaButton = new ElementHTML('button', 'button-main', '', '', buttonsCont.node);
        const grammaButtonBg = new Image();
        grammaButtonBg.src = 'assets/niadi26/book-icon.jpg';
        grammaButtonBg.onload = () => {  
            grammaButton.node.style.backgroundImage = `url('${grammaButtonBg.src}')`;
        }
        grammaButton.node.addEventListener('click', () => createPage(NAVIGATION_ID.glossary));
        const gamesButton = new ElementHTML('button', 'button-main', '', '', buttonsCont.node);
        const gamesButtonBg = new Image();
        gamesButtonBg.src = 'assets/niadi26/games-icon.png';
        gamesButtonBg.onload = () => {  
            gamesButton.node.style.backgroundImage = `url('${gamesButtonBg.src}')`;
        }
        gamesButton.node.addEventListener('click', () => createPage(NAVIGATION_ID.minigames));

        const sectionAbout = new ElementHTML('section', 'section section__about', '', '', mainWrapper.node);
        const sectionAboutWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionAbout.node);
        const aboutAppWr = new ElementHTML('div', 'section__item', '', '', sectionAboutWrapper.node);
        const titleApp = new ElementHTML('p', 'section__txt', 'Application', '', aboutAppWr.node);
        const aboutApp = new ElementHTML('p', 'section__txt', `The <span class='weidth'> glossary </span>  contains 3600 very helpful English words. 
                                                                They are sorted from simpler to more difficult. 
                                                                You can read and listen definition in English and see Russian translate!`,
                                                                '', aboutAppWr.node);
        const aboutApp2 = new ElementHTML('p', 'section__txt', `If you <span class='weidth'>autorised</span>, you can mark difficult words for more detailed study. 
                                                                Mark what you have learned and get only new knowledge. 
                                                                Thanks to the statistics, you can follow your progress: how many words you have learned in a day?`,
                                                                '', aboutAppWr.node);
        const aboutGamesWr = new ElementHTML('div', 'section__item', '', '', sectionAboutWrapper.node);
        const titleGames = new ElementHTML('p', 'section__txt', 'Games', '', aboutGamesWr.node);
        const aboutSprint = new ElementHTML('p', 'section__txt', `In the <span class='weidth'> sprint</span> game you have to guess the correct translation or not! 
                                                                The more correct answers in a row - the more points you get for each. 
                                                                Be careful: you only have a minute!`, '', aboutGamesWr.node);
        const aboutAudio = new ElementHTML('p', 'section__txt', `It is important not only to know the translation of a word, 
                                                                but also to be able to pronounce it correctly, as well as to understand pronouncing. 
                                                                In the game <span class='weidth'>audiochallenge </span> you can train this skill!`, '', aboutGamesWr.node);
        const sectionTeam = new ElementHTML('section', 'section section__team', '', '', mainWrapper.node);
        const titleTeam = new ElementHTML('h2', 'section__title', 'About our team', '', sectionTeam.node);
        const sectionTeamWrapper = new ElementHTML('div', 'section__wrapper wrapper', '', '', sectionTeam.node);
        const teamMember1 = new TeamMember('Diana', 'Team Lead, Frontend developer', '1', 'https://github.com/Niadi26', `
                            Designed layout of the application, made main,minigames and statistics page. Set up page navigation and burger-menu. 
                            Developed all stuffs on textbook page: design, word cards, links to mini games, group selection, pagination.`);
        const teamMember2 = new TeamMember('Dmitry', 'Frontend developer', '2', 'https://github.com/Mowgle88', `
                            Did basic project settings, setting up webpack, ESlint, typescript, set up user registration and authorization, backend, author of the mini-game "Sprint"!`);
        const teamMember3 = new TeamMember('Elena', 'Frontend developer', '3', 'https://github.com/lenka-w1', 'Author of the mini-game Audiochallange');
        sectionTeamWrapper.node.append(teamMember1.node, teamMember2.node, teamMember3.node);
        this.node = mainWrapper.node;
    }

}

export const mainPage = new MainPage(rootElem);

