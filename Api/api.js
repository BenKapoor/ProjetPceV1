// API/TMDBApi.js
import TicketData from '../Helper/data'
// Récupération du détail d'un film
export function getTicketDetailFromApi (id) {
    return fetch('https://api.myjson.com/bins/y8aaw?pretty='+id)
      .then((response) => response.json())
      .then((data => {
          console.log('data:', data)
      }))
      .catch((error) => console.error(error));
  }

  export function getTicketFromApi () {
    return fetch('https://api.myjson.com/bins/y8aaw')
      .then((response) => response.json())
      .then((data => {
          console.log('data:', data)
      }))
      .catch((error) => console.error(error));
  }