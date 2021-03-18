import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import HomePageView from './views/HomePageView';

import MovieDetailsPageView from './views/MovieDetailsPageView';
import MoviesPageView from './views/MoviesPageView';
import NotFoundView from './views/NotFoundView';

import styles from './styles/styles.module.css';

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
            to="/movies"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePageView} />
        <Route exact path="/movies" component={MoviesPageView} />
        <Route path="/movies/:movieId" component={MovieDetailsPageView} />

        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
