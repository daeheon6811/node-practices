const models = require('../models');

module.exports = {
    index: async function(req, res) {
        
        const guestbook = await models.Guestbook.findAll({
            attributes: ['no', 'name' ,'message' , 'regdate'],
        });

        res.render("guestbook/list" , {
            list : guestbook,
        })
    },

    
    add: async function(req, res) {


    
        const result = await models.Guestbook.create({
            name: req.body.name,
            password: req.body.password,
            message: req.body.message,
            regdate: Date.now()
        });
        console.log(result);
        res.redirect('/guestbook');
    },
    deleteform: function(req, res) {   
      
        res.render('guestbook/deleteform' , {
            no : req.params.no || []
        });
        console.log(req.params.no);
      
    },
    delete: async function(req, res) {
             

        console.log("딜리트 실행!!");
        const result = await models.Guestbook.destroy(
            {
            where: {
                no: req.body.no ,
                password: req.body.password
                
            }
            
        })
        .then( result => {
            console.log("데이터 삭제 끝");
            res.redirect("/guestbook");
        })
    }
}