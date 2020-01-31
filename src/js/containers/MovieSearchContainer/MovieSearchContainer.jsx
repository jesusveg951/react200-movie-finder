import React, { Component } from 'react';
import { searchMovieTitle, findMovie } from './searchActions';
import { Link } from 'react-router-dom';

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(searchMovieTitle(value));
  }

  handleSubmit() {
    const { title, dispatch } = this.props;
    dispatch(findMovie(title));
  }

  render() {
    const { value, movies } = this.props;
    return (
      <div className='container'>
        <h3 className='text-primary l text-center'>The Movie Finder App.</h3>
        <div style={ { marginBottom: '10px' } } className='input-group'>
          <input type='text' className='form-control' placeholder='Enter A Movie' value={ value } onChange={ this.handleSearch } />
          <span className='input-group-lg'>
            <button className='btn btn-primary' type='button' onClick={ this.handleSubmit }>Find it!</button>
          </span>
        </div>
        <div className='row text-center'>
          {movies.map(searchedMovie => (
            <div className='col-sm-4' key={ searchedMovie.imdbID } style={ { marginBottom: '25px' } }>
              <div className='card' style={ { height: '100%' } } key={ searchedMovie.imdbID }>
                <div className='card-body'>
                  <img className='card-img'
                    src={ searchedMovie.Poster }
                    alt={ searchedMovie.Title }
                  />
                </div>
                <div className='card-footer'>
                  <Link to={ `/movie/${searchedMovie.imdbID}` } className='btn btn-outline-primary'>More Information</Link>
                </div>
              </div>
            </div>
        ))}
        </div>
      </div>
    );
  }
}