import React from 'react';
import { Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import MovieCreditsView from './views/MovieCreditsView';
import MovieDetailsView from './views/MovieDetailsView';
import SearchMoviesView from './views/SearchMoviesView';

// import axios from 'axios';

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomeView} />
      <Route path="/movies" component={SearchMoviesView} />
      <Route path="/details" component={MovieDetailsView} />
      <Route path="/credits" component={MovieCreditsView} />
    </>
  );
};

export default App;
