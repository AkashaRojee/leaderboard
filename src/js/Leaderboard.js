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
    this.scores.push(Object.assign({}, score));
    this.refresh();
  }

  refresh() {
    let list = document.querySelector('ul');
    let listItems = [];
    this.scores.forEach(score => {
      listItems.push(createElement('li', '', '', `${score.name}: ${score.score}`));
    });
    list.innerHTML = '';
    list.append(...listItems);
  }

}