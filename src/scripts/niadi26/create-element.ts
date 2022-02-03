
export class ElementHTML {
    public node: HTMLElement;
  
    constructor(
      tagName: string,
      className = '',
      innerText = '',
      parentClass?: string,
      parentElement?: HTMLElement,
    ) {
      const el = document.createElement(tagName);
      el.className = className;
      el.innerHTML = innerText;
      if (parentElement) {
        parentElement.append(el);
      } else if (parentClass) {
        const parent = document.querySelector(parentClass) as HTMLElement;
        parent.append(el);
      }
  
      this.node = el as HTMLElement;
    }
  
    delete(): void {
      this.node.remove();
    }
  }