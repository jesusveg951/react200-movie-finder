import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

const mapStoreToProps = store => ({
  title: store.movieData.title,
  movies: store.movieData.movies,
  movieInfo: store.movieData.movieInfo,
  year: store.movieData.year,
  runtime: store.movieData.runtime,
  genre: store.movieData.genre,
  plot: store.movieData.plot,
  awards: store.movieData.awards,
  poster: store.movieData.poster,
  metascore: store.movieData.metascore,
  imdbrating: store.movieData.imdbrating
});

export default connect(mapStoreToProps)(MovieDetailContainer);