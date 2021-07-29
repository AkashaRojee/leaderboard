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
    if (Object.values(this).every((value) => value !== '')) api.post(this);
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