var express = require('express');
var router = express.Router();
const jug = require('../controllers/jug');

/* GET home page. */
router.get('/jugadores', jug.index);

module.exports = router;