const getMovieDetails = (id) => {

  console.log(1)

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

export default { getMovieDetails };
