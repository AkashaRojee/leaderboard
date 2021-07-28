import '../scss/style.scss';
import Leaderboard from './Leaderboard.js';
import ScoreForm from './ScoreForm.js';

function init() {

  let leaderboard = new Leaderboard();
  let scoreForm = new ScoreForm();
  leaderboard.setEventListener();
  scoreForm.setEventListener(leaderboard);

}

window.addEventListener('load', init);