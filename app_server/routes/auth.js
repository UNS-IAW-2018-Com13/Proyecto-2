const express = require('express');
const router = express.Router();
const authControl = require('../controllers/auth');

router.get('/auth/facebook', authControl.login_facebook);
router.get('/auth/facebook/callback', authControl.login_facebook_cb);
router.get('/auth/logout', authControl.logout);

module.exports = router;