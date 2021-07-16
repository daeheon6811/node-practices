module.exports = function(role)
{     
console.log("wrap - authorized() called")
const roleAuthorized = role;

    return function(req, res, next) {



        console.log("call authorized(amdin) called" + roleAuthorized)
      if(req.session.authUser && 
        (role !== 'ADMIN' || req.session.authUser.role === 'ADMIN' )) {
          next();
          return;
      }
  
      if(req.accepts('html')){
          
          res.redirect(req.session.authUser ? '/ ' : '/user/login' );
          return;
      }
  
      res.send({
          result: "fail",
          data: null,
          message: "Access Denied"
      })
    }
  }