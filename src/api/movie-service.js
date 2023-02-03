import axios from 'axios';

const API_KEY = 'ecf1e97b02d331ed89fab73e637afa61';

const BASE_URL = 'http://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const data = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedMovie = async query => {
  try {
    const data = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};
