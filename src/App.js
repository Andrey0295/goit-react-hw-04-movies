import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './Components/AppBar/AppBar';
import NotFoundView from './views/NotFoundView';

import routes from '../src/routes';

const HomePageView = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "home-view" */),
);
const MoviesPageView = lazy(() =>
  import('./views/MoviesPageView' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPageView' /* webpackChunkName: "movies-details-view" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePageView} />
          <Route exact path={routes.movies} component={MoviesPageView} />
          <Route path={routes.movieDetails} component={MovieDetailsPageView} />

          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
