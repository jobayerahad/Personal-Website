const express = require("express");
const router = express.Router();

const reCaptchaController = require("../controllers/reCaptcha");

// @route    GET api/recaptcha?token
// @access   Public
router.get("/", reCaptchaController.validateHuman);

module.exports = router;
