import '../scss/style.scss';
import Leaderboard from './Leaderboard.js';
import ScoreForm from './ScoreForm.js';
import API from './API.js';

const init = () => {
  const leaderboard = new Leaderboard();
  const scoreForm = new ScoreForm();
  const api = new API('lI1z1EFW1xGXNj2JItHX');

  leaderboard.setEventListener();
  scoreForm.setEventListener(api);
  api.get(leaderboard);
};

window.addEventListener('load', init);