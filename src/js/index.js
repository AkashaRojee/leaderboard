import '../scss/style.scss';
import Leaderboard from './Leaderboard.js';
import ScoreForm from './ScoreForm.js';
import API from './API.js';

const init = () => {
  const leaderboard = new Leaderboard();
  const scoreForm = new ScoreForm();
  const api = new API('8sOA1diZKlbkrqVkTAWO');

  leaderboard.setEventListener(api);
  scoreForm.setEventListener(leaderboard, api);
  api.get(leaderboard);
};

window.addEventListener('load', init);