class Pokemon {
  constructor(id, name, type, owner) {
    this.id = Number(id);
    this.name = name;
    this.type = type;
    this.owner = owner;
  }
}

class GrassPokemon extends Pokemon {
  constructor(id, name, owner) {
    super(id, name, 'grass', owner)
  }
}

class FirePokemon extends Pokemon {
  constructor(id, name, owner) {
    super(id, name, 'fire', owner)
  }
}

module.exports = {
  Pokemon,
  GrassPokemon,
  FirePokemon
}