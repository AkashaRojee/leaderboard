import { createElement } from './library.js';

export default class Leaderboard {
  constructor() {
    this.scores = [];
  }

  setEventListener() {
    const refreshButton = document.querySelector('button');
    refreshButton.addEventListener('click', () => this.refresh());
  }

  add(score) {
    this.scores.push({ ...score });
    this.refresh();
  }

  refresh() {
    const list = document.querySelector('ul');
    const listItems = [];
    this.scores.forEach((score) => {
      listItems.push(createElement('li', '', '', `${score.name}: ${score.score}`));
    });
    list.innerHTML = '';
    list.append(...listItems);
  }
}