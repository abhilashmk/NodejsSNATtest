var express = require('express');
const https = require('https');
//var agent=require('./keepaliveagent.js');
const HttpsAgent = require('agentkeepalive').HttpsAgent;

const keepaliveAgent = new HttpsAgent({
    maxSockets: 100,
    maxFreeSockets: 10
  });
//const superagent = require('superagent');
var app = express();

const options = {
    host: 'www.google.com',
    port: 443,
    path: '/search?q=nodejs&sugexp=chrome,mod=12&sourceid=chrome&ie=UTF-8',
    method: 'GET',
    agent: keepaliveAgent,
  };

app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
//var response=superagent.agent(keepaliveAgent).get('https://google.com');

        const req1 = https.request(options, res1 => {
        console.log('STATUS: ' + res1.statusCode);
        req1.end();
        });
        req1.on('error', e => {
            console.log('problem with request: ' + e.message);
          });
        req1.end();
    
      
        setTimeout(() => {
            console.log('agent status: %j', keepaliveAgent.getCurrentStatus());
          }, 2000);

res.send("SNAT keepalive agent test with SUperAgent HTTP client");
 
});

port = process.env.PORT || 7755;
var server = app.listen(port,function(){
	
});

console.log("Server running at http://localhost:%d", port);
