var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.getIndex);

module.exports = router;