/*I have a question : if I wanted to pass the delay time to the setTimeout
instead of giving fix 3 second, how could I do that?
I think I must to pass it as an argument to the myPromise function, 
is that correct?
then I must to call that like: 
.then(movies => myPromise(movies, 5)) and also change the function to have two 
input parameter.
*/

const movieApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
const myPromise = function(movie) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(movie)
      }, 3000)
    })
  }


fetch(movieApi)
.then(response => response.json())
.then(movies => myPromise(movies))
.then(movies => console.log(movies))


