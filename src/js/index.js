import '../scss/style.scss';
import Leaderboard from './Leaderboard.js';
import ScoreForm from './ScoreForm.js';
import API from './API.js';

const init = () => {
  const leaderboard = new Leaderboard();
  const scoreForm = new ScoreForm();
  leaderboard.setEventListener();
  scoreForm.setEventListener(leaderboard);

  const api = new API('lI1z1EFW1xGXNj2JItHX');
  api.get(leaderboard);
};

window.addEventListener('load', init);