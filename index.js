var express = require('express');
//var agent=require('./keepaliveagent.js');
const Agent = require('agentkeepalive');

const keepaliveAgent = new Agent({
    maxSockets: 100
  });
const superagent = require('superagent');
var app = express();

app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
//var response=superagent.agent(keepaliveAgent).get('https://google.com');
try {
superagent
.agent(keepaliveAgent)
.get('https://google.com')
.end((err, response) => {
    // Calling the end function will send the request
    console.log(response.status)
  });
}
catch(e)
{
    console.log(e);
}
res.send("SNAT keepalive agent test with SUperAgent HTTP client");
 
});

port = process.env.PORT || 7755;
var server = app.listen(port,function(){
	
});

console.log("Server running at http://localhost:%d", port);
