import axios from 'axios';

const API_KEY = `live_5ZjqzsyncD8R0rMzM5igbYRGwjrBEgiiY319YEtEwizcXjjHiOwOC9xhYn8KiLf2`;
axios.defaults.headers.common["x-api-key"] = API_KEY;

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(resp => {
    return resp.data;
  });  
};

function fetchCatByBreed(breedId) {
  const params = new URLSearchParams({
    breed_ids: breedId,
  });

  return axios.get(`${BASE_URL}/images/search?${params}`).then(resp => {
    if (!resp.data.length) {
      throw new Error(resp.statusText);
    }
    return resp.data;
  }); 
    
}; 
export { fetchBreeds, fetchCatByBreed };   