import { ElementHTML } from "./create-element";

export class TeamMember {
    // eslint-disable-next-line prettier/prettier
    public node: HTMLElement;
    
    constructor(name: string, post: string, imgSrc: string, githubSrc: string, work: string) {
        const container = new ElementHTML('div', 'section__item member', '');
        const avatar = new ElementHTML('div', 'member__photo', '', '', container.node);
        const img = new Image();
        img.src = `assets/photo/${imgSrc}.jpg`;
        img.onload = () => {  
            avatar.node.style.backgroundImage = `url('${img.src}')`;
        }
        const link = new ElementHTML('a', 'member__link', name, '', container.node);
        link.node.setAttribute('target', 'blank');
        link.node.setAttribute('href', githubSrc);
        const role = new ElementHTML('p', 'member__role', post, '', container.node);
        const workItems = new ElementHTML('p', '', work, '', container.node);
        this.node = container.node;
    }
}