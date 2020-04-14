const express = require('express');
const PokemonController = require('../controllers/pokemon');
const router = express.Router();

// /

router.get('/', PokemonController.readAll); // masuk
router.get('/create', PokemonController.showCreateForm);
router.post('/create', PokemonController.create);
router.get('/:id', PokemonController.detail);

module.exports = router;