import Score from './Score.js';
import { createElement } from './library.js';

export default class Leaderboard {

  constructor() {
    this.scores = [];
  }

  setEventListener() {
    const submitButton = document.querySelector('form button');
    submitButton.addEventListener('click', (e) => this.add(e));
  }

  add(e) {
    
    //get values and clear fields
    const inputValues = document.querySelectorAll('form input');
    const name = inputValues[0].value;
    const score = inputValues[1].value;
    inputValues[0].value = '';
    inputValues[1].value = '';
    inputValues[0].focus();

    //save values in array
    this.scores.push(new Score(name, score));

    //repopulate list
    let list = document.querySelector('ul');
    let listItems = [];
    this.scores.forEach(score => {
      listItems.push(createElement('li', '', '', `${score.name}: ${score.score}`));
    });
    list.innerHTML = '';
    list.append(...listItems);

    e.preventDefault();
  }

}