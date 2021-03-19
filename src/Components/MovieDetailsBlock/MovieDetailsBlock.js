import React from 'react';

const MovieDetailsBlock = ({
  imageUrl,
  movieTitle,
  vote_average,
  overview,
  genres,
  location,
}) => {
  return (
    <div>
      <div>
        {imageUrl !== '' && (
          <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt="" />
        )}
        <div>
          <h1>{movieTitle}</h1>
          <p>Vote average: {vote_average}</p>
        </div>
      </div>
      <div>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
      <div>
        <h3>Genres: </h3>
        {genres.map(({ id, name }) => (
          <span key={id}>{name}, </span>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailsBlock;
