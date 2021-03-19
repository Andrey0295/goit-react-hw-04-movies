import React, { Component } from 'react';

import moviesApi from '../services/movies-api';

import MoviesList from '../Components/MoviesList/MoviesList';

class HomePageView extends Component {
  state = {
    movies: [],
    error: null,
  };

  async componentDidMount() {
    this.fetchPopularMovies();
  }

  async fetchPopularMovies() {
    const responce = await moviesApi
      .fetchPopular()
      .catch(error => this.setState({ error }));

    const { results } = responce.data;
    this.setState({ movies: results });
  }

  render() {
    const { movies, error } = this.state;
    return (
      <>
        {movies.length > 0 && <MoviesList movies={movies} />}
        {error && <h1>Error!!!</h1>}
      </>
    );
  }
}

export default HomePageView;
