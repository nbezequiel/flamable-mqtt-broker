const mosca = require('mosca');
const settings = {
  port: 1883,
};

const server = new mosca.Server(settings);

server.on('ready', () => {
  console.log('Broker running on port : ' + 1883);
});
