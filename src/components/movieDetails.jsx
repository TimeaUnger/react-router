import React from 'react';
import { Outlet } from "react-router-dom"
import { Link, useLoaderData } from "react-router-dom";

const MovieDetails = (props) => {

  const getMovieDetails = useLoaderData();

  console.log(getMovieDetails)

  return (
    <div className='MovieListPage'>
      <div>MovieDetails</div>
      <div>
        <Link to="/"><button type='button'>Serach Header</button></Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default MovieDetails;