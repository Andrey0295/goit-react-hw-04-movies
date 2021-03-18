import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/styles.module.css';

import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
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
