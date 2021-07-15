const models = require("../models")

module.exports = {
    checkemail : async function(req,res,next){
         console.log("체크이메일 ");
         console.log(req.query.email);        
         await models.User.findOne({
              atrributes : ['no'],
              where: {
                   email : req.query.email || ''
              }
         }).then(result => {

         }).catch(error => {
 next(error);
         });
         
         res.send({
              result: "success",
              data : user !== null,
              message: null
         })
    }
}