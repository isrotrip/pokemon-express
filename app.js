const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const Model = require('./models/model.js');

app.get('/', (req, res) => {
  res.send('Menampilkan homepage');
});

app.get('/pokemons', (req, res) => {
  let filter = req.query.type;
  
  Model.readPokemons(filter, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.render('pokemons.ejs', { pokemons: data });
    }
  });
});

app.get('/pokemons/create', (req, res) => {
  res.render('formPokemon.ejs');
});

app.post('/pokemons/create', (req, res) => {
  const newPokemon = {
    id: Number(req.body.id),
    name: req.body.name,
    type: req.body.type,
    owner: req.body.owner
  }
  Model.createPokemon(newPokemon, function (err, newPokemon) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/pokemons');
    }
  });
});

app.get('/pokemons/:id', (req, res) => {
  res.send('detail pokemon with id ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Listening on the port: ${port}`);
});