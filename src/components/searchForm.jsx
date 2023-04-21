import React from 'react';
import { Outlet } from "react-router-dom"

const SearchForm = (props) => {


  return (


          <div className='MovieListPage'>
            SearchForm
            <Outlet/>
          </div>
  );
}

export default SearchForm;