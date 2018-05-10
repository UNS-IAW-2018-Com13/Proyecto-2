var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.getIndex);
router.post('/g_usuario', indexCtrl.guardarUsuario);
router.post('/c_usuario', indexCtrl.getUsuario);

module.exports = router;