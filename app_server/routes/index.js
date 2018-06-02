var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index');
const authControl = require('../controllers/auth');

router.get('/', indexCtrl.getIndex);
router.get('/logueado', authControl.estaLogueado, indexCtrl.getIndexLogueado);

module.exports = router;