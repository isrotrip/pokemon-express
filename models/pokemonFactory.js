const { Pokemon, FirePokemon, GrassPokemon } = require('./pokemon.js');

class PokemonFactory {
  static create(pokemon) {
    // {
    //   "id": 1,
    //   "name": "bulbasaur",
    //   "type": "grass",
    //   "owner": "ash"
    // }
    const { id, name, type, owner } = pokemon;

    if (type === 'grass') {
      return new GrassPokemon(id, name, owner);
    } else if (type === 'fire') {
      return new FirePokemon(id, name, owner);
    } else {
      return new Pokemon(id, name, type, owner);
    }
  }
}

module.exports = {
  PokemonFactory
}