import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, match }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${match.url}/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
