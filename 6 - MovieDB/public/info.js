const API_KEY = 'api_key=04c35731a5ee918f014970082a0088b1&page=1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc' + '&'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let page = 1

function addPag() {
  let pag = document.getElementById('pag').value
  if (pag != "") {
      page = pag
      fetchTest(page)
      console.log(page)
  } else {
      alert('Tente novamente')
  }
} 


async function fetchTest(page) {
    const response = await fetch(`/api/${page}`);
    const data = await response.json();

     data.results.forEach((film) => {
      document.getElementById ('main').innerHTML += 

      `
      <div id = "movieCard">
      <img src="${IMG_URL + film.poster_path}" alt = "yw47098_created.jpg"> 
            <div id = "movieInfo">
              <h4>${film.title}</h4>
              <span id = "span" class = "${checkNote(film.vote_average)}">${film.vote_average}</span>
            </div>
            <div id = "overview">
              <h4 class = "${checkNote(film.vote_average)}" >${film.original_title}</h4>
              <h5>Lançamento: ${film.release_date}</h5>
              <p>${film.overview}</p>
              <p>Language: ${film.original_language}</p>
            </div>
        </div>
      `
      
  })  
}


function checkNote (span) {
  if (span < 5) {
    return 'red'
  } else if (span >= 5 && span < 9){
    return 'green'
  } else {
    return 'yellow'
  }
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