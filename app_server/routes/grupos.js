var express = require('express');
var router = express.Router();
const gruposCtrl = require('../controllers/grupos');

/* GET home page. */
router.get('/', gruposCtrl.getGrupos);

module.exports = router;