
const {HttpsAgent} = require('agentkeepalive');

const keepaliveAgent = new HttpsAgent({
    maxSockets: 100
  });

module.exports.agent=keepaliveAgent;