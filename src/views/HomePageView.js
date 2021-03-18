import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HomePageView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=ec0633f4801b6d57348783906eedf2d2',
    );
    const { results } = responce.data;
    // console.log(responce.data.results);
    this.setState({ movies: results });
  }

  render() {
    // console.log(this.props.match.url);
    const { movies } = this.state;
    return (
      <div>
        <h1>Это домашняя страница</h1>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                {/* <p>{movie.title}</p> */}
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default HomePageView;
