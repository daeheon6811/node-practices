const connect = require('connect');
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 8080;
const app = connect();
app.use(serveStatic(__dirname + '/public' )); // 정적인거 다 보내줌

app.use(connectRoute(function(router) {
    
     router.get("/" , function(req,res) {
        res.writeHead(200 ,{
             'Content-Type' : "text/html"
         });
         res.end("<h1>board view(" + req.params.no  + ") <h1>");
     });

     

  
}));
app.listen(port,function(){
    console.log(`Http Server running port ${port}`);
});