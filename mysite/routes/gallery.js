const express = require("express");
const controller = require('../controllers/gallery')

const router = express.Router();
router.route("/").get(controller.index)
// router.route("/update").post(controller.upload)
// router.route("/delete/:no").get(controller.deleteform)
// router.route("/delete").post(controller.delete)
module.exports = router;
exports.emaillistsRouter = router;