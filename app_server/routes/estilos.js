const express = require('express');
const router = express.Router();
const estilosControl = require('../controllers/estilos');

router.post('/guardar_estilo', estilosControl.guardarEstilo);

module.exports = router;