var express = require('express');
var router = express.Router();
const jugadoresCtrl = require('../controllers/jugadores');

router.get('/', jugadoresCtrl.getJugadores);

module.exports = router;