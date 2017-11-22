const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.user_logout_get);

module.exports = router;
