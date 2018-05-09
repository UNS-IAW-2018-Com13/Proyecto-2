var express = require('express');
var router = express.Router();
const estadisticasCtrl = require('../controllers/estadisticas');

/* GET home page. */
router.get('/', estadisticasCtrl.getEstadisticas);

router.post('/estadisticas', estadisticasCtrl.getCartas);

module.exports = router;