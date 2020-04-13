const fs = require('fs');
const { PokemonFactory } = require('./pokemonFactory.js');

class Model {
  static readPokemons(filter, cb) {
    console.log(filter)
    fs.readFile('./pokemon.json', { encoding: 'utf-8' }, function (err, data) {
      if (err) {
        cb(err);
      } else {
        data = JSON.parse(data);

        let pokemons = [];
        
        for (let i = 0; i < data.length; i++) {
          pokemons.push(PokemonFactory.create(data[i]));
        }

        if (!filter) {
          cb(null, pokemons);
        } else {
          let filterPokemons = [];

          filterPokemons = pokemons.filter(pokemon => pokemon.type === filter);

          cb(null, filterPokemons);
        }
      }
    });
  }

  static createPokemon(pokemon, cb) {
    Model.readPokemons(function (err, pokemons) {
      if (err) {
        cb(err);
      } else {
        const newPokemon = PokemonFactory.create(pokemon);

        pokemons.push(newPokemon);

        let saveData = JSON.stringify(pokemons, null, 2);

        Model.save(saveData, function (err) {
          if (err) {
            cb(err);
          } else {
            cb(null, newPokemon);
          }
        });
      }
    })
  }

  static save(data, cb) {
    fs.writeFile('./pokemon.json', data, { encoding: 'utf-8' }, function (err) {
      if (err) {
        cb(err);
      } else {
        cb(null);
      }
    })
  }
}

module.exports = Model;