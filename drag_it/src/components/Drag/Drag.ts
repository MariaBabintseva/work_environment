/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import './Drag.styl';
import { TemplateBlock, templateEngine } from '../../lib/templateEngine';
import DragSelect from 'dragselect';

export class Drag {
container: HTMLElement;

element: HTMLElement;

constructor(container: HTMLElement) {
  this.container = container;

  this.render();
  const ds = new DragSelect({
    selectables: document.querySelector('.selectable-nodes')
  });

}

template(): TemplateBlock {
  return {
    block: 'div',
    cls: 'selectable-nodes',
  };
}

render(): void {
  this.container.textContent = '';

  const element = templateEngine(this.template()) as HTMLElement;
  this.container.appendChild(element);
  this.element = element;
}
}
