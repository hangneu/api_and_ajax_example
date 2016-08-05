var express = require('express');
var app = express();
app.use(express.static(__dirname+"/public"));
console.log("hello!");
app.listen(3003);
