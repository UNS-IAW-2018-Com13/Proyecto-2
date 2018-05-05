var express = require('express');
var router = express.Router();
const partidosCtrl = require('../controllers/partidos');

/* GET home page. */
router.get('/', partidosCtrl.getPartidos);

module.exports = router;