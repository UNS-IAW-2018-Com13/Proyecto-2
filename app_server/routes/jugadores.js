var express = require('express');
var router = express.Router();
const jug = require('../controllers/jug');

/* GET home page. */
router.get('/', jug.getJugadores);

module.exports = router;