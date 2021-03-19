import React, { Component } from 'react';
import axios from 'axios';

import MoviesList from '../Components/MoviesList/MoviesList';

class HomePageView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    this.fetchPopularMovies();
  }

  async fetchPopularMovies() {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=ec0633f4801b6d57348783906eedf2d2',
    );

    this.setState({ movies: responce.data.results });
  }

  render() {
    const { movies } = this.state;
    return <div>{movies.length > 0 && <MoviesList movies={movies} />}</div>;
  }
}

export default HomePageView;
