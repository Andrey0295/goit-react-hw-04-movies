import React, { Component } from 'react';
import axios from 'axios';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=ec0633f4801b6d57348783906eedf2d2',
    );
    console.log(responce.data.results);
    this.setState({ movies: responce.data.results });
  }

  render() {
    return (
      <div>
        <h1>Это домашняя страница</h1>;
        {this.state.movies.length > 0 && (
          <ul>
            {this.state.movies.map(movie => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default HomeView;
