var express = require('express');
var sleep = require('system-sleep');
var port = 0;
var app = express();
app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
 
sleep(123*1000);  

res.send("Hello world Windows Abhilash");



 
});

port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});

console.log("Server running at http://localhost:%d", port);
