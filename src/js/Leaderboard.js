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
    this.scores.forEach((score, index) => {
      const user = createElement('span', '', '', `${score.user}`);
      const userScore = createElement('span', '', '', `${score.score}`);
      const listItem = createElement('li', 'flex-row justify-between');
      listItem.append(user, userScore);
      if (index < 6) listItems.push(listItem);
    });
    list.innerHTML = '';
    list.append(...listItems);
  }
}