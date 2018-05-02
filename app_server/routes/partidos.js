var express = require('express');
var router = express.Router();
const par = require('../controllers/par');

/* GET home page. */
router.get('/', par.getPartidos);

module.exports = router;