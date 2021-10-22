const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const searchM = document.getElementById('searchM')
const search = document.getElementById('search')
let legend = document.getElementById('legenda')
let main = document.getElementById ('main')

function addPag() {
  let page = document.getElementById('page').value
  if (page != "" && page > 0 && page <= 500) {
      fetchTest(page)
  } else {
      alert('Tente novamente')
  }
} 

async function fetchTest(page) {
    legend.innerHTML = "Filmes populares"
    document.getElementById ('main').innerHTML = ""
    const response = await fetch(`/api/${page}`);
    const data = await response.json();

     data.results.forEach((film) => {   
      document.getElementById ('main').innerHTML += 
      `
      <div id = "movieCard">
      <img src="${film.poster_path == null ? 'images/yw47098_created.jpg' : IMG_URL + film.poster_path}" alt = "Sem poster"> 
            <div id = "movieInfo">
              <h4>${film.title}</h4>
              <span id = "span" class = "${checkNote(film.vote_average)}">${film.vote_average}</span>
            </div>
            <div id = "overview">
              <h4 class = "${checkNote(film.vote_average)}">${film.original_title}</h4>
              <h5>${film.release_date == '' ? 'Data não encontrada' : 
                      ((film.release_date).substring(0, 4)) < 2021 ? `Lançamento : ${(film.release_date).substring(0, 4)}` : 
                      `Estreia: ${(film.release_date)}`}</h5>
              <p>${film.overview == '' ? 'Sem descrição' : film.overview}</p>
              <p>Idioma: ${(film.original_language).toUpperCase()}</p>
            </div>
        </div>
      ` 
  })  
}

async function searchTest() {
  legend.innerHTML = "Sem resultado"
  const search = document.getElementById('search').value
  search == "" ? `${alert('Valor invalido')}` :
  main.innerHTML = ""
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`);
  const data = await response.json();

   data.results.forEach((film) => {   
   main.innerHTML += 
    `
    <div id = "movieCard">
    <img src="${film.poster_path == null ? 'images/yw47098_created.jpg' : IMG_URL + film.poster_path}" alt = "Sem poster"> 
          <div id = "movieInfo">
            <h4>${film.title}</h4>
            <span id = "span" class = "${checkNote(film.vote_average)}">${film.vote_average}</span>
          </div>
          <div id = "overview">
            <h4 class = "${checkNote(film.vote_average)}">${film.original_title}</h4>
            <h5>${film.release_date == '' ? 'Data não encontrada' : 
                    ((film.release_date).substring(0, 4)) < 2021 ? `Lançamento : ${(film.release_date).substring(0, 4)}` : 
                    `Estreia: ${(film.release_date)}`}</h5>
            <p>${film.overview == '' ? 'Sem descrição' : film.overview}</p>
            <p>Idioma: ${(film.original_language).toUpperCase()}</p>
          </div>
      </div>
    ` 
    main.innerHTML != "" ? `${legend.innerHTML = 'Resultados'}` : ''
})  
}

function checkNote (span) {
  if (span < 5) {
    return 'red'
  } else if (span >= 5 && span < 8){
    return 'green'
  } else {
    return 'yellow'
  }
}


fetchTest(); 
