const axios = require('axios');

export const searchMovieTitle = title => ({
  type: 'UPDATE_MOVIE_SEARCH',
  payload: title
});

export const findMovie = title => ({
  type: 'FIND_MOVIE',
  payload: axios.get(`/movies/${title}`)
});

export const getInfo = id => ({
  type: 'GET_INFO',
  payload: axios.get(`/movie/${id}`)
});