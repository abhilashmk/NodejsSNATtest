var express = require('express');
var agent=require('./keepaliveagent.js');
const superagent = require('superagent');
var app = express();

app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
 (async () => {
    try {
        const res= await superagent.agent(agent).get('https://google.com');
        console.log(res.status);
        }catch (err) {
        console.error(err);
      }
    })();

res.send("SNAT keepalive agent test with SUperAgent HTTP client");
 
});

port = process.env.PORT || 7755;
var server = app.listen(port,function(){
	
});

console.log("Server running at http://localhost:%d", port);
