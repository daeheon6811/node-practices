const express = require("express");
const controller = require('../controllers/gallery')
const authorized = require('./authorized');
const router = express.Router();
router.route("/").get(controller.index)
 router.route("/upload").post(controller.upload)
 router.route("/delete/:no").get(authorized('ADMIN') ,controller.delete)

// router.route("/delete").post(controller.delete)
module.exports = router;
