import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import axios from 'axios';

class MoviesPageView extends Component {
  state = {
    query: '',
    movies: [],
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component did update');
  }
  searchInputId = shortid.generate();

  async fetchMOvies() {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
    );
    const { results } = responce.data;
    // console.log(responce.data);
    this.setState({ movies: [...results] });
  }

  handleInputChange = e => {
    const { value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({ query: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.setState({ query: '' });
    this.fetchMOvies();
  };

  render() {
    // console.log(this.props.match.url);
    const { query, movies } = this.state;
    const { url } = this.props.match;
    return (
      <>
        <h1>Это страница для поиска фильмов</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.searchInputId}></label>
          <input
            type="text"
            value={query}
            id={this.searchInputId}
            onChange={this.handleInputChange}
          />
        </form>
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPageView;
