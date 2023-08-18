import axios from 'axios';
axios.defaults.headers.common["x-api-key"] = "live_5ZjqzsyncD8R0rMzM5igbYRGwjrBEgiiY319YEtEwizcXjjHiOwOC9xhYn8KiLf2";
const url = 'https://api.thecatapi.com/v1';
const api_key = `live_5ZjqzsyncD8R0rMzM5igbYRGwjrBEgiiY319YEtEwizcXjjHiOwOC9xhYn8KiLf2`;

function fetchBreeds() {
  return fetch(`${url}/breeds?api_key=${api_key}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(response.status);
          }
          return response.json();
      });       
};

function fetchCatByBreed(breedId) {
  return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(response.status);
          }
          return response.json();
      });  
};

export { fetchBreeds, fetchCatByBreed }  