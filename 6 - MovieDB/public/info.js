const API_KEY = 'api_key=04c35731a5ee918f014970082a0088b1&page=1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc' + '&'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


async function fetchTest() {
    const response = await fetch('/api');
    const data = await response.text();
    console.log(data)

    data.results.forEach(film => {
      document.getElementById ('test').innerHTML += 
      `
      <div id="movie-card">
              <h3>${film.original_title}</h3>
          </div>
      `
      
      
  })      
}



fetchTest(); 

/* fetch (BASE_URL + API_KEY).then((response) => {
    console.log('resolved', response);
    return response.json();
   }).then((data) => {
     console.log(data)
   }).catch((err) => {
     console.error('rejected', err)
   }) */


  /*const response = await fetch('/api');
    const data = await response.text();
    console.log(data) */