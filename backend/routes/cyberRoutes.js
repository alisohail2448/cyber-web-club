const express = require('express');
const { ContactUs, RegisterUser } = require('../controller/cyberCtrl.js');
const router = express.Router();

router.post("/contact", ContactUs);
router.post("/register", RegisterUser);


module.exports = router;