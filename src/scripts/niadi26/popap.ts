import { ElementHTML } from './create-element';

export class WarningGlossary {
    // eslint-disable-next-line prettier/prettier
    public node: HTMLElement;
    
    constructor(text: string) {
      const wrapper = new ElementHTML('div', 'message-wrapper', '');
      const warningText = new ElementHTML('p', '', text, '', wrapper.node);
      this.node = wrapper.node;
    }
  }