const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const users = require("./users");
// const userController = require('../controllers/user_controller');

console.log(`Router is loaded`);

router.get('/', homeController.home);
router.use('/users',users);
// router.get('/user', userController.user);

module.exports = router;