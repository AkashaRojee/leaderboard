export default class API {
  constructor(id) {
    this.id = id;
  }

  async get(leaderboard) {
    
    let response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.id}/scores`);
    
    let data = await response.json();

    leaderboard.load(data.result);
    
  }

  async post(score) {

    await fetch(
      
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.id}/scores`,
      
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(score)
      }
    )


  }
}