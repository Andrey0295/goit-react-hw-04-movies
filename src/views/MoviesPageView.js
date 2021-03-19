import React, { Component } from 'react';
import shortid from 'shortid';

import moviesApi from '../services/movies-api';

import MoviesList from '../Components/MoviesList/MoviesList';
import SearchForm from '../Components/SearchForm/SearchForm';

class MoviesPageView extends Component {
  state = {
    movies: [],
    searchQuery: '',
    error: null,
  };

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
    const { searchQuery } = this.state;

    moviesApi
      .fetchSearchMovies(searchQuery)
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
