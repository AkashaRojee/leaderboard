export default class ScoreForm {
  constructor() {
    this.user = '';
    this.score = '';
  }

  setEventListener(leaderboard, api) {
    const submitButton = document.querySelector('form button');
    submitButton.addEventListener('click', (e) => this.submitScore(e, leaderboard, api));
  }

  submitScore(e, leaderboard, api) {
    e.preventDefault();
    this.createScore();
    if (Object.values(this).every((value) => value !== '')) {
      leaderboard.add(JSON.parse(JSON.stringify(this))).populate();
      api.post(this);
    };
  }

  createScore() {
    const inputValues = document.querySelectorAll('form input');
    if (Array.from(inputValues).every((inputValue) => inputValue.value !== '')) {
      [this.user, this.score] = [inputValues[0].value, inputValues[1].value];
      Array.from(inputValues).forEach((inputValue) => { inputValue.value = ''; });
      inputValues[0].focus();
    }
  }
}