const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.user_register_get);

module.exports = router;
