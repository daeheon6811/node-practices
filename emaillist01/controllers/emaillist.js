const mysql = require("mysql");

const model = require('../models/emaillist');

module.exports = {

  
    
index : async function(req,res){
    const results =  await model.findAll();
    console.log(results);
    res.render("index");
},
form : function(req,res){
   res.render('form');  
},
add : function(req,res){
    console.log(req.body);
    res.redirect("/")
},
addform : function(req,res){
    
},


}

/*
exports.index = function(req,res){

}
exports.form = function(req,res){
    
}
exports.add = function(req,res){
    
}
*/