import '../scss/style.scss';
import Leaderboard from './Leaderboard.js';
import ScoreForm from './ScoreForm.js';
import API from './API.js';

const init = () => {
  const leaderboard = new Leaderboard();
  const scoreForm = new ScoreForm();
  const api = new API('RK3lPI9SZZhIA6Kd7O2K');

  leaderboard.setEventListener(api);
  scoreForm.setEventListener(leaderboard, api);
  api.get(leaderboard);
};

window.addEventListener('load', init);