import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './Components/AppBar/AppBar';

import HomePageView from './views/HomePageView';
import MovieDetailsPageView from './views/MovieDetailsPageView';
import MoviesPageView from './views/MoviesPageView';
import NotFoundView from './views/NotFoundView';
import routes from '../src/routes';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePageView} />
        <Route exact path={routes.movies} component={MoviesPageView} />
        <Route path={routes.movieDetails} component={MovieDetailsPageView} />

        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
