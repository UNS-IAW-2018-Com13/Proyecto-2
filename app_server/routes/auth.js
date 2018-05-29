const express = require('express');
const router = express.Router();
const authControl = require('../controllers/auth');

router.get('/auth/facebook', authControl.login_auth);
router.get('/auth/facebook/callback', authControl.login_auth_cb);
router.get('/logout', authControl.logout);

module.exports = router;