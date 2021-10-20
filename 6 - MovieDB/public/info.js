const IMG_URL = 'https://image.tmdb.org/t/p/w500';


function addPag() {
  let page = document.getElementById('page').value
  if (page != "" && page > 0 && page <= 500) {
      fetchTest(page)
  } else {
      alert('Tente novamente')
  }
} 


async function fetchTest(page) {
    document.getElementById ('main').innerHTML = ""
    const response = await fetch(`/api/${page}`);
    const data = await response.json();

     data.results.forEach((film) => {   
      document.getElementById ('main').innerHTML += 
      `
      <div id = "movieCard">
      <img src="${film.poster_path == null ? 'yw47098_created.jpg' : IMG_URL + film.poster_path}" alt = "Sem poster"> 
            <div id = "movieInfo">
              <h4>${film.title}</h4>
              <span id = "span" class = "${checkNote(film.vote_average)}">${film.vote_average}</span>
            </div>
            <div id = "overview">
              <h4 class = "${checkNote(film.vote_average)}">${film.original_title}</h4>
              <h5>Lançamento: ${film.release_date == '' ? 'Data não encontrada' : (film.release_date).substring(0, 4)}</h5>
              <p>${film.overview == '' ? 'Sem descrição' : film.overview}</p>
              <p>Idioma: ${film.original_language}</p>
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
