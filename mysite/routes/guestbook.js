const express = require("express");
const controller = require('../controllers/guestbook')

const router = express.Router();
router.route("/").get(controller.index)
router.route("/").post(controller.add)
router.route("/delete/:no").get(controller.deleteform, (req, res, next) =>{
 
});
router.route("/delete").post(controller.delete , (req,res,next) => {
   
})
router.route('/spa').get(controller.spalanding);
module.exports = router;
