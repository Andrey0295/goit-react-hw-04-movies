import React, { Component } from 'react';
import shortid from 'shortid';
import axios from 'axios';

import MoviesList from '../Components/MoviesList/MoviesList';
import SearchForm from '../Components/SearchForm/SearchForm';

class MoviesPageView extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}
  searchInputId = shortid.generate();

  onChangeQuery = query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US&query=${query}&page=1&include_adult=false`,
      )
      .then(responce => this.setState({ movies: responce.data.results }));

    console.log(query);
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesPageView;
