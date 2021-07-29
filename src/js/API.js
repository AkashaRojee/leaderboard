export default class API {
  constructor(id) {
    this.url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  }

  async get(leaderboard) {
    const response = await fetch(this.url);

    const data = await response.json();

    leaderboard.load(data.result);
  }

  async post(score) {
    await fetch(

      this.url,

      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(score),
      },
    );
  }
}