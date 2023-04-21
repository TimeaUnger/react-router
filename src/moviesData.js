 // const moviesUrl = `http://localhost:4000/movies?${searchParams}&sortOrder=asc&limit=20`;
// const movieUrl = `http://localhost:4000/movies/${movieId}`;


const getMovies = () =>{
  const moviesUrl = `http://localhost:4000/movies`;
  fetch(moviesUrl)
  .then((response) => response.json())
        .then((res) => {
          console.log(res)
          return res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    
      }
      
      
  const getMoviesDetails = (id) =>{
    const moviesUrl = `http://localhost:4000/movies/337167`;
    fetch(moviesUrl)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
export {getMovies, getMoviesDetails};

