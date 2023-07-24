
const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const multer = require('multer');
const upload = multer();

router.post('/register', upload.none(), controller.register);
router.post('/login', upload.none(), controller.login);

module.exports = router;



