const express = require('express');
const authorized = require('./auth')
const controller = require("../controllers/user-api");
const router = express.Router();
router.route("/checkemail").get(controller.checkemail);
router.route("/needauth").get(authorized , (res,req) => {
    res.send({
        result: "sucess"
    })
});


module.exports = router;




