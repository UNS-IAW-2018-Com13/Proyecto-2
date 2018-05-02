var express = require('express');
var router = express.Router();
const est = require('../controllers/est');

/* GET home page. */
router.get('/estadisticas', est.index);

module.exports = router;