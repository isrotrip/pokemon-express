const express = require('express');
const PokemonController = require('../controllers/pokemon');
const router = express.Router();

// /pokemons

router.get('/', PokemonController.showHomePage);
// router.get('/pokemons', (req, res) => {
//   res.send('hello')
// })

module.exports = router;