import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className={styles.navigation_block}>
      <NavLink
        exact
        to={routes.home}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
