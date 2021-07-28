import Leaderboard from "./Leaderboard";

export default class ScoreForm {
  constructor() {
    this.name = '';
    this.score = '';
  }

  setEventListener(leaderboard) {
    const submitButton = document.querySelector('form button');
    submitButton.addEventListener('click', (e) => this.submitScore(e, leaderboard));
  }

  submitScore(e, leaderboard) {
    e.preventDefault(); 
    this.createScore();
    leaderboard.add(this);
  }

  createScore() {
    const inputValues = document.querySelectorAll('form input');
    this.name = inputValues[0].value;
    this.score = inputValues[1].value;
    inputValues[0].value = '';
    inputValues[1].value = '';
    inputValues[0].focus();
  }
}