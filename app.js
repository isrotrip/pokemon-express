const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // req.body

// cara pertama - best practice
const router = require('./routes/index.js');
// http://localhost:3000/pokemons

app.use(router); 

// cara kedua
// const homeRouter = require('./routes/home.js');
// const pokemonRouter = require('./routes/pokemons.js');

// app.use('/', homeRouter); // masuk dulu
// app.use('/pokemons', pokemonRouter); // masuk lagi

app.listen(port, () => {
  console.log(`Listening on the port: ${port}`);
});