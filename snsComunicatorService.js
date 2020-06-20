const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');
require('dotenv').config();
const AWS = require('aws-sdk');

if (!AWS.config.region) {
  AWS.config.update({
    region: 'eu-west-1',
  });
}

client.on('connect', function () {
  client.subscribe('alarm/sounding');
});

client.on('message', function (topic, message) {
  message = JSON.parse(message);

  let messageSNS = `!!! ALERTA !!! \n \nExiste um possível vazamento de gás em uma das instalações: 
    \n
    \nNível: ${message.level.toString()}
    \nData: ${getDate()} 
    \nLocal: Estação ${message.place}`;

  sendMessage(messageSNS, '{someNumberHere}'); //replace with your cellphone code and number
});

function sendMessage(message, number) {
  var params = {
    Message: message,
    PhoneNumber: '+' + number,
    MessageAttributes: {
      'AWS.SNS.SMS.SenderID': {
        DataType: 'String',
        StringValue: Math.floor(Math.random() * 20).toString(),
      },
    },
  };
  snsPublishMessage(params);
}

function snsPublishMessage(params) {
  var publishTextPromise = new AWS.SNS({ apiVersion: '2020-06-20' })
    .publish(params)
    .promise();

  publishTextPromise
    .then(function (data) {
      console.info(data);

      client.publish('alarm/log', 'A new fire risk alarm was send to SNS');
      client.publish('alarm/log', JSON.stringify(data));
    })
    .catch(function (err) {
      let jsonError = JSON.stringify({ Error: err });

      console.error(jsonError);

      client.publish(
        'alarm/log',
        'An error ocurred when trying to send the SMS through SNS.'
      );
      client.publish('alarm/log', jsonError);
    });
}

function getDate() {
  let localDate = new Date();
  return (
    localDate.toLocaleDateString('pt-BR') + ' ' + localDate.toLocaleTimeString()
  );
}
