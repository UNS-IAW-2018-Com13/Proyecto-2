const express = require('express');
const router = express.Router();
const favoritosControl = require('../controllers/favoritos');

router.post('/guardar_favoritos', favoritosControl.guardarFavoritos);

module.exports = router;