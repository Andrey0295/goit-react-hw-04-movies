import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

class MovieDetailsPageView extends Component {
  state = {
    // book: [],
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
    id: null,
  };

  async componentDidMount() {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US`,
    );
    console.log(responce.data);
    this.setState({ ...responce.data });
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <p>Vote average: {this.state.vote_average}</p>
        <div>
          <h2>Overview</h2>
          <p>{this.state.overview}</p>
        </div>
        <div>
          <h3>Genres: </h3>
          {this.state.genres.map(genre => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </div>

        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
        </ul>
        <Route
          path="/movies/:movieId/cast"
          render={() => <p>Это актеры данного фильма</p>}
        />
      </>
    );
  }
}

export default MovieDetailsPageView;
