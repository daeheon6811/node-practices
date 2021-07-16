const express = require('express');
const auth = require('./auth');
const authorized = require('./authorized');
const controller = require("../controllers/user");
const { route } = require('./main');

const router = express.Router();
router.route("/joinsuccess").get(controller.joinsuccess);
router.route("/join").get(controller.joinform);
router.route("/join").post(controller.join);

router.route("/login").get(controller.loginform);
router.route("/login").post(controller.login);
router.route("/logout").get(controller.logout);

router.route("/update").get(authorized() , controller.updateform);
router.route("/update").post(authorized() , controller.update);

module.exports = router;




