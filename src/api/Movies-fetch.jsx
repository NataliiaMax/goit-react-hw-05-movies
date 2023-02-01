import axios from 'axios';
import { toast } from 'react-toastify';

const MOVIES_API_KEY = '067705c909e37a633e5abed845a3422c';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${MOVIES_API_KEY}`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const searchMoviesByQuery = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${MOVIES_API_KEY}&query=${query}&language=en-US`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
     toast.error(error.message);
  }
};

export const getMoviesDetails = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIES_API_KEY}&language=en-US`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesCast = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${MOVIES_API_KEY}&language=en-US`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesRevieews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${MOVIES_API_KEY}&page=1&language='en-US'`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
