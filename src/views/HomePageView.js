import React, { Component } from 'react';
import axios from 'axios';

import PopularMovies from '../Components/PopularMovies/PopularMovies';

class HomePageView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=ec0633f4801b6d57348783906eedf2d2',
    );
    const { results } = responce.data;

    this.setState({ movies: results });
  }

  render() {
    const { movies } = this.state;
    return <div>{movies.length > 0 && <PopularMovies movies={movies} />}</div>;
  }
}

export default HomePageView;
