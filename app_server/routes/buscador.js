var express = require('express');
var router = express.Router();
const buscadorCtrl = require('../controllers/buscador');

router.get('/', buscadorCtrl.getBuscador);
router.post('/g_carta', buscadorCtrl.getCarta);
router.post('/getstats', buscadorCtrl.getCardStats);
module.exports = router;