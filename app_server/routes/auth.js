const express = require('express');
const router = express.Router();
const authControl = require('../controllers/auth');

router.get('/auth/facebook', authControl.login_facebook);
router.get('/auth/facebook/callback', authControl.login_facebook_failure, authControl.login_facebook_cb);
router.post('/auth/guardar_estilo', authControl.estaLogueado, authControl.guardarEstilo);
router.get('/auth/cargar_estilo', authControl.estaLogueado, authControl.cargarEstilo);

module.exports = router;