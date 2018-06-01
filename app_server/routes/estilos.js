const express = require('express');
const router = express.Router();
const estilosControl = require('../controllers/estilos');

router.post('/guardar_estilo', estilosControl.guardarEstilo);
router.get('/cargar_estilo', estilosControl.cargarEstilo);

module.exports = router;