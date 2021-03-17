import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import MovieCreditsView from './views/MovieCreditsView';
import MovieDetailsView from './views/MovieDetailsView';
import SearchMoviesView from './views/SearchMoviesView';
import MovieReviewsView from './views/MovieReviewsView';
import NotFoundView from './views/NotFoundView';

import styles from './styles/styles.module.css';

// import axios from 'axios';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search-movies"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/search-movies" component={SearchMoviesView} />
        <Route path="/details" component={MovieDetailsView} />
        <Route path="/credits" component={MovieCreditsView} />
        <Route path="/reviews" component={MovieReviewsView} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
