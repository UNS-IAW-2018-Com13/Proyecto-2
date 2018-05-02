var express = require('express');
var router = express.Router();
const grp = require('../controllers/grp');

/* GET home page. */
router.get('/grupos', grp.index);

module.exports = router;