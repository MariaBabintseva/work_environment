/* eslint-disable class-methods-use-this */
import './Cards.styl';
import { TemplateBlock, templateEngine } from '../../lib/templateEngine';
import 'playing-card'

export class Cards {
  container: HTMLElement;

  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  rankRandom = Math.floor(Math.random() * this.rank.length)

  suit = ['D', 'H', 'C', 'S']

  suitRandom = Math.floor(Math.random() * this.suit.length)

  template(): TemplateBlock {
    return {
      block: 'playing-card',
      cls: 'cards',
      attrs: { rank: `${this.rank[this.rankRandom]}`, suit: `${this.suit[this.suitRandom]}`, flippable: '' }
    };
  }

  render(): void {
    this.container.textContent = '';

    const element = templateEngine(this.template()) as HTMLElement;
    this.container.appendChild(element);
    this.element = element;
  }
}
