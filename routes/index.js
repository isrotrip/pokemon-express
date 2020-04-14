const express = require('express');
const router = express.Router();

const homeRouter = require('./home.js');
const pokemonRouter = require('./pokemons.js');

// /pokemons

router.use('/', homeRouter); // masuk dulu
router.use('/pokemons', pokemonRouter); // masuk lagi

module.exports = router;