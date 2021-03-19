import React from 'react';

import styles from './MovieDetailsBlock.module.css';

const MovieDetailsBlock = ({
  imageUrl,
  movieTitle,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <div className={styles.mainBlock}>
      <div>
        {' '}
        {imageUrl !== '' && (
          <img
            src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
            alt=""
            className={styles.posterMovie}
          />
        )}
      </div>
      <div className={styles.descriptionBlock}>
        <div>
          <h1>{movieTitle}</h1>
          <p>Vote average: {vote_average}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres: </h3>
          {genres.map(({ id, name }) => (
            <p key={id}>{name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBlock;
