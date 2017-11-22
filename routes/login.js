const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.user_login_get);
router.get('/:service', userController.user_auth_login);
router.get('/:service/redirect', userController.user_auth_login_callback);

module.exports = router;
