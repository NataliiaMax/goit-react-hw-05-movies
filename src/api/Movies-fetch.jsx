import axios from 'axios';

const MOVIES_API_KEY = '067705c909e37a633e5abed845a3422c';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3//trending/movie/day?api_key=${MOVIES_API_KEY}`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const searchMoviesByQuery = async q => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie?api_key=${MOVIES_API_KEY}&query=${q}&page=1&include_adult=false`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie//movie/{movieId}?api_key=?${MOVIES_API_KEY}`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesCredits = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie//movie/${movieId}/credits?api_key=?${MOVIES_API_KEY}`
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
      `https://api.themoviedb.org/3/search/movie//movie/${movieId}/reviews?api_key=?${MOVIES_API_KEY}&page=1`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
