import createElement from './library.js';

export default class Leaderboard {
  constructor() {
    this.scores = [];
  }

  setEventListener() {
    const refreshButton = document.querySelector('button');
    refreshButton.addEventListener('click', () => this.refresh());
  }

  load(scores) {
    this
      .setScores(scores)
      .refresh();
  }

  setScores(scores) {
    this.scores = scores;
    return this;
  }

  add(score) {
    this.scores.push({ ...score });
    this.refresh();
  }

  refresh() {
    const list = document.querySelector('ul');
    const listItems = [];
    this.scores.forEach((score) => {
      listItems.push(createElement('li', '', '', `${score.user}: ${score.score}`));
    });
    list.innerHTML = '';
    list.append(...listItems);
  }
}