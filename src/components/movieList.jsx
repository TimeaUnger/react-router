import React from 'react';
import { Link } from "react-router-dom";

const MovieList = (props) => {

  return (
    <div className='MovieListPage'>
      <ul>
      <li><Link to={`/337167`}>MOVIE 1</Link></li>
      <li><Link to={`/269149`}>MOVIE 2</Link></li>
      <li><Link to={`/181808`}>MOVIE 3</Link></li>
      </ul>
    </div>
  );
}

export default MovieList;