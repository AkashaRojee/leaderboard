import '../scss/style.scss';
import Leaderboard from './Leaderboard.js';
import ScoreForm from './ScoreForm.js';
import API from './API.js';

const init = () => {
  const leaderboard = new Leaderboard();
  const scoreForm = new ScoreForm();
  const api = new API('CDN0na2QRL1u7wB93Fh0');

  leaderboard.setEventListener(api);
  scoreForm.setEventListener(leaderboard, api);
  api.get(leaderboard);
};

window.addEventListener('load', init);