var winston = require('winston');
require('loggly-winston-bulk');

winston.add(winston.transports.Loggly, {
    inputToken: "985eff94-bc71-4d53-a6b0-bb70a4178a3c",
    subdomain: "fgruehn",
    tags: ["Winston-NodeJS"],
    json: true
});

var loggerService = winston;

module.exports = loggerService;
