const Model = require('../models/model.js');

class PokemonController {
  static showHomePage(req, res) {
    res.send('Menampilkan homepage');
  }

  static readAll(req, res) {
    let filter = req.query.type;
  
    Model.readPokemons(filter, function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.render('pokemons.ejs', { pokemons: data });
      }
    });
  }

  static create(req, res) {
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
  }

  static showCreateForm(req, res) {
    res.render('formPokemon.ejs');
  }

  static detail(req, res) {
    res.send('detail pokemon with id ' + req.params.id);
  }
}

module.exports = PokemonController;