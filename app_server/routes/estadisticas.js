var express = require('express');
var router = express.Router();
const estadisticasCtrl = require('../controllers/estadisticas');

router.get('/', estadisticasCtrl.getEstadisticas);

module.exports = router;