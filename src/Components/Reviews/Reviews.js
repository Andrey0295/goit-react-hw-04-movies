import React, { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US&page=1`,
    );
    this.setState({ reviews: responce.data.results });
  }

  render() {
    return (
      <>
        <h1>Обзоры для кинофильмов</h1>
        {this.state.reviews.length > 0 && (
          <ul>
            {this.state.reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
