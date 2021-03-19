import React, { Component } from 'react';

import moviesApi from '../../services/movies-api';

import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    actors: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const responce = await moviesApi.fetchCast(movieId);

    this.setState({ actors: responce.data.cast });
  }

  render() {
    const { actors } = this.state;
    return (
      <>
        {actors.length > 0 ? (
          <ul className={styles.castList}>
            {actors.map(({ id, name, profile_path }) => (
              <li key={id}>
                <p>{name}</p>
                {profile_path ? (
                  <img
                    className={styles.CastPhoto}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have cast for this movie.</p>
        )}
      </>
    );
  }
}

export default Cast;
