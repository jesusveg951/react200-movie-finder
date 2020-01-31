import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getInfo } from '../MovieSearchContainer/searchActions';

export default class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInfo(this.props.match.params.id));
  }

  render() {
    const { movieInfo } = this.props;
    return (
      <div className='container'>
        <div id={ 'movie' }>
          <div className='card'>
            <div className='card-header text-white bg-primary'>Movie details</div>
            <div className='card-body'>
              <div className='col'>
                <img className='rounded float-left img-thumbnail' src={ movieInfo.Poster } />
              </div>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <h3 className='card-title font-weight-bold'>{ movieInfo.Title }</h3>
                    <span className='badge badge-pill badge-success m-2'>Released: { movieInfo.Year }</span>
                    <span className='badge badge-pill badge-success m-2'>Length: { movieInfo.Runtime }</span>
                    <span className='badge badge-pill badge-success m-2'>Genre: { movieInfo.Genre }</span>
                    <p>{ movieInfo.Plot }</p>
                    <p>Awards: { movieInfo.Awards }</p>
                    <p className='font-weight-bold'>MetaScore: { movieInfo.Metascore }
                      <br />
                      <p>IMDB: { movieInfo.imdbRating }</p>
                      <Link to='/' className='btn btn-outline-primary my-2 my-sm-0'>Go Back</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}