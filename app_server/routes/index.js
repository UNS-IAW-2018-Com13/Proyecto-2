var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.getIndex);
router.post('/usuario', indexCtrl.postUsuario);
router.get('/usuario', indexCtrl.getUsuario);

module.exports = router;