var express = require('express');
var router = express.Router();
const jugadorApi = require('../controllers/jugadorApi');

/* GET home page. */
router.get('/jugadores', jugadorApi.getJugadores);

module.exports = router;