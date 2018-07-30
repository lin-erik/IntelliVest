const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

const discovery = new DiscoveryV1({
  url: 'https://gateway-wdc.watsonplatform.net/discovery/api/',
  version: '2018-03-05',
  iam_apikey: `${process.env.API_KEY}`,
});

module.exports = discovery;
