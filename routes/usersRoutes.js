const express = require("express");
const usersController = require("../controllers/usersController");
const validateRegister = require("../middlewares/validatorMiddleware");

const router = express.Router();

router.post('/login', usersController.login);
router.post('/register', validateRegister, usersController.register);

module.exports = router;