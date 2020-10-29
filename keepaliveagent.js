
const http = require('http');
const {HttpsAgent} = require('agentkeepalive');

const superagent = require('superagent');


const keepaliveAgent = new HttpsAgent({
    maxSockets: 100
  });

module.exports.agent=keepaliveAgent;