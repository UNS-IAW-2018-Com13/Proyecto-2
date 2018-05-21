var express = require('express');
var router = express.Router();
const partidosCtrl = require('../controllers/partidos');

router.get('/', partidosCtrl.getPartidos);

module.exports = router;