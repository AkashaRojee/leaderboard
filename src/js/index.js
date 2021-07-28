import '../scss/style.scss';
import Leaderboard from './Leaderboard.js';

function init() {

  let leaderboard = new Leaderboard();
  leaderboard.setEventListener();

}

window.addEventListener('load', init);