import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import routes from '../routes';

import moviesApi from '../services/movies-api';

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

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const { movieId } = this.props.match.params;
    const responce = await moviesApi.fetchDetails(movieId);

    this.setState({ ...responce.data });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.movies);
  };

  render() {
    const { title, vote_average, overview, genres, poster_path } = this.state;
    const { url } = this.props.match;
    const { location } = this.props;

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
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location,
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location,
                },
              }}
            >
              Reviews
            </NavLink>
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
