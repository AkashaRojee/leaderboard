import createElement from './library.js';

export default class Leaderboard {
  constructor() {
    this.scores = [];
  }

  setEventListener(api) {
    const refreshButton = document.querySelectorAll('button')[1];
    refreshButton.addEventListener('click', () => this.refresh(api));
  }

  refresh(api) {
    this.reset();
    api.get(this);
  }

  add(score) {
    this.scores.unshift(score);
    return this;
  }

  reset() {
    this
      .setScores([])
      .populate();
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
      const user = createElement('span', '', '', `${score.user}`);
      const userScore = createElement('span', '', '', `${score.score}`);
      const listItem = createElement('li', 'flex-row justify-between p-y-10 p-x-15 default-border');
      listItem.append(user, userScore);
      listItems.push(listItem);
    });
    list.innerHTML = '';
    list.append(...listItems);
  }
}