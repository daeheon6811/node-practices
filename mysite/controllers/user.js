const logger = require('../logging');
const models = require('../models');
module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    joinform: function(req, res) {
        res.render('user/joinform');
    },
    join: async function(req, res) {
        const result = await models.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        });
        console.log(result);
        res.redirect('/user/joinsuccess');
    },
    loginform: function(req, res) {
        res.render('user/loginform');
    },
    login: async function(req, res) {
        const user = await models.User.findOne({
            attributes: ['no', 'name', 'role' , 'email' ],
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).catch(error => {
            
        })
      ;
        
        if(user == null){
            res.render('user/loginform',  Object.assign(req.body , {
                result: 'fail',
                password: ''
            }));
            return;
        }
               //로그인 처리
        req.session.authUser = user;
        
        res.redirect('/');
    },
    logout: async function(req, res) {
       await req.session.destroy()
       res.redirect('/');
    },
    updateform: function(req, res) {
   
            console.log("user/updateform")
            res.render('user/updateform' , {
                 name : req.session.authUser.name , 
                 email : req.session.authUser.email ,
            });       


    },
    update: async function(req, res) {
    

        const user = await models.User.update(
            {
                name : req.body.name ,
                email : req.body.email,
                password: req.body.password,
                gender : req.body.gender
            },
            {
            where: {
                email: req.session.authUser.email
            }
            
        })
        .then( result => {
            console.log("데이터 수정 끝");
            req.session.authUser.email = req.body.email;
            req.session.authUser.name = req.body.name;
            res.redirect("/");
        }).catch(error => {
            
          })
        
        

   
    },  
}
