/* eslint-disable class-methods-use-this */
import './CodeEditor.styl';
import * as monaco from 'monaco-editor';
import { TemplateBlock, templateEngine } from '../../lib/templateEngine';




export class Drag {
  container: HTMLElement;

  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();

    monaco.editor.create(document.querySelector('.code-editor'), {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: 'javascript'
    });
  }

 

  template(): TemplateBlock {
    return {
      block: 'div',
      cls: 'code-editor',
    };
  }

  render(): void {
    this.container.textContent = '';

    const element = templateEngine(this.template()) as HTMLElement;
    this.container.appendChild(element);
    this.element = element;
  }
}
