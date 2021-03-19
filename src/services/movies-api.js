/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ec0633f4801b6d57348783906eedf2d2';

const fetchPopular = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

const fetchSearchMovies = searchQuery => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  );
};

const fetchDetails = movieId => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
};

const fetchCast = movieId => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
};

const fetchReviews = movieId => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
};
export default {
  fetchPopular,
  fetchSearchMovies,
  fetchDetails,
  fetchCast,
  fetchReviews,
};
