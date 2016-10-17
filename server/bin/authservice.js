var jwt = require('express-jwt');

var authCheck = jwt({
    secret: new Buffer('eIeL48lLUWIkVZLH7leatnprFkGOlIjRo3w0cuqW7-ZCiQwAf9ftlTIIiIfqkNzR', 'base64'),
    audience: 'neCYBEyJpofhgpBClkCbxpCvWpnmNnAy'
})

module.exports = authCheck;
