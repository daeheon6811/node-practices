module.exports = function(req , res , next){
      if(req.session.authUser){
            next();
           return
      }

      if(req.accpes('html')){
            res.redirect("user/login");
            return;
      }


      res.send({
            result: "faile",
            data: null ,
            message : "auth failed"

      })
      
}