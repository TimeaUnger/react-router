import React from 'react';
import { Routes, Route } from "react-router-dom";
import MovieDetails from './movieDetails'
import MovieList from './movieList'
import SearchForm from './searchForm'

const MoviesListPage = (props) => {

  return (
    <div className='moviesListPage'>
      <Routes>
          <Route path='/' element={<SearchForm />} />
          <Route path='/:movieId' element={<MovieDetails />} />
      </Routes>
      <MovieList />
    </div>
  );
}

export default MoviesListPage;