var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.send("olá pedrin");
});

app.listen(port, () => {
    console.log('Servidor rodante com a porta ${port}')
});