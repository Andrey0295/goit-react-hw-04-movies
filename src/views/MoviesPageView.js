import React, { Component } from 'react';
import shortid from 'shortid';
import axios from 'axios';

import MoviesList from '../Components/MoviesList/MoviesList';
import SearchForm from '../Components/SearchForm/SearchForm';

class MoviesPageView extends Component {
  state = {
    movies: [],
    searchQuery: '',
    error: null,
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }
  searchInputId = shortid.generate();

  onChangeQuery = query => {
    this.setState({ searchQuery: query, movies: [], error: null });
  };

  fetchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US&query=${this.state.searchQuery}&page=1&include_adult=false`,
      )
      .then(responce => this.setState({ movies: responce.data.results }))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />
        {this.state.error && <h1>Error!!! Please enter again</h1>}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesPageView;
