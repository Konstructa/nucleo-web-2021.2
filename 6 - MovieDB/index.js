const express = require('express');
const app = express();
const fetch = require('cross-fetch'); 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=';


app.use(express.static('public'))

app.get('/api/:page', async (req, res) => {
  const response = await fetch(API_URL + req.params.page);
  const data = await response.json();
  res.json(data)
});


app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
);


