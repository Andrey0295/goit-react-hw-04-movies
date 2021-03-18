import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import CastView from './CastView';
import ReviewsView from './ReviewsView';

class MovieDetailsPageView extends Component {
  state = {
    // book: [],
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
    id: null,
    poster_path: '',
  };

  async componentDidMount() {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US`,
    );
    console.log(responce.data);
    this.setState({ ...responce.data });
  }

  render() {
    const { title, vote_average, overview, genres, poster_path } = this.state;
    const { url } = this.props.match;
    return (
      <>
        <div>
          {poster_path !== '' && (
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          )}
          <div>
            <h1>{title}</h1>
            <p>Vote average: {vote_average}</p>
          </div>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres: </h3>
          {genres.map(({ id, name }) => (
            <span key={id}>{name}, </span>
          ))}
        </div>

        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route path="/movies/:movieId/cast" component={CastView} />
        <Route path="/movies/:movieId/reviews" component={ReviewsView} />
      </>
    );
  }
}

export default MovieDetailsPageView;
