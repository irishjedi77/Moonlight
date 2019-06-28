var API_KEY = '2b778fc3-053b1212';
var DOMAIN = 'sandboxdbd73862b8624196930987c397b11e27.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: "2b778fc3-053b1212, domain: sandboxdbd73862b8624196930987c397b11e27.mailgun.org"});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'foo@example.com, bar@example.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});