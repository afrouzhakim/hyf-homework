//Movies exercise
const movieApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"

function fetchMovies (url) {
  fetch (url)
  .then (response => response.json())
  .then (movies => {
    //console.log(movies);
    editMovies(movies);
  })
}

function editMovies (movies) {
  const badMovies = movies.filter(item => item.rating < 6);
  const badMoviesSince2000 = badMovies.filter(item => item.year >= 2000);
  const badMoviesSince2000Title = badMoviesSince2000.map(item => item.title);
  console.log(badMovies,badMoviesSince2000, badMoviesSince2000Title);
}

fetchMovies(movieApi);


