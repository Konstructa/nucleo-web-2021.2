const express = require('express');
const app = express();
const fetch = require('cross-fetch'); 
// respond with "hello world" when a GET request is made to the homepage

const API_KEY = 'api_key=04c35731a5ee918f014970082a0088b1&page=1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


app.use(express.static('public'));

app.get('/api', async (req, res) => {
  await fetch (BASE_URL + API_KEY)
  .then ((response) => response.json())
  .then((data) => res.json(data))
 });


app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
);
