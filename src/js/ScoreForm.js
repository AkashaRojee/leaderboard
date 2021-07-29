export default class ScoreForm {
  constructor() {
    this.user = '';
    this.score = '';
  }

  setEventListener(api) {
    const submitButton = document.querySelector('form button');
    submitButton.addEventListener('click', (e) => this.submitScore(e, api));
  }

  submitScore(e, api) {
    e.preventDefault();
    this.createScore();
    api.post(this);
  }

  createScore() {
    const inputValues = document.querySelectorAll('form input');
    this.user = inputValues[0].value;
    this.score = inputValues[1].value;
    inputValues[0].value = '';
    inputValues[1].value = '';
    inputValues[0].focus();
  }
}