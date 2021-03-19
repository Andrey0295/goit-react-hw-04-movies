import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import routes from '../routes';

import MovieDetailsBlock from '../Components/MovieDetailsBlock/MovieDetailsBlock';
import Cast from '../Components/Cast/Cast';
import Reviews from '../Components/Reviews/Reviews';

class MovieDetailsPageView extends Component {
  state = {
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
    id: null,
    poster_path: '',
  };

  async componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US`,
    );

    this.setState({ ...responce.data });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.movies);
    // history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { title, vote_average, overview, genres, poster_path } = this.state;
    const { url } = this.props.match;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <MovieDetailsBlock
          movieTitle={title}
          imageUrl={poster_path}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          path="/movies/:movieId/cast"
          render={props => <Cast {...props} />}
        />
        <Route
          path="/movies/:movieId/reviews"
          render={props => <Reviews {...props} />}
        />
      </>
    );
  }
}

export default MovieDetailsPageView;
