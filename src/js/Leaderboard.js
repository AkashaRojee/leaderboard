import createElement from './library.js';

export default class Leaderboard {
  constructor() {
    this.scores = [];
  }

  setEventListener(api) {
    const refreshButton = document.querySelector('button');
    refreshButton.addEventListener('click', () => this.refresh(api));
  }

  refresh(api) {
    api.get(this);
  }

  load(scores) {
    this
      .setScores(scores)
      .populate();
  }

  setScores(scores) {
    this.scores = scores;
    return this;
  }

  populate() {
    const list = document.querySelector('ul');
    const listItems = [];
    this.scores.forEach((score) => {
      listItems.push(createElement('li', '', '', `${score.user}: ${score.score}`));
    });
    list.innerHTML = '';
    list.append(...listItems);
  }
}