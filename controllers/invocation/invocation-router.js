"use strict";
const express = require("express");
const Controller = require("./invocation-controller");
const validator = require("./invocation-validator");

const controller = new Controller();
const router = express.Router();

// const recaptchaModel = require('express-recaptcha').RecaptchaV3;
// const recaptcha = new recaptchaModel(
//     process.env.SITE_KEY,
//     process.env.SECRET_KEY,
//     {
//         callback: 'cb',
//     }
// );
router.get('/:id', controller.createInvocationRender);
router.post('/', validator.invocationValidator,  controller.createInvocation);

module.exports = router;
