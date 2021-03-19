import React, { Component } from 'react';
import axios from 'axios';

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
    const responce = await axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=ec0633f4801b6d57348783906eedf2d2',
      )
      .catch(error => this.setState({ error }));

    this.setState({ movies: responce.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.length > 0 && <MoviesList movies={movies} />}
        {this.state.error && <h1>Error!!!</h1>}
      </div>
    );
  }
}

export default HomePageView;
