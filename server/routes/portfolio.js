var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Portfolio = mongoose.model('Portfolio');
var authCheck = require('../bin/authservice');
var loggerService = require('../bin/loggerService');

router.param('portfolio', function(req, res, next, id) {
    var query = Portfolio.findById(id);

    query.exec(function(err, portfolio) {
        if (err) {
            return next(err)
                loggerService.log('error',err);
        }
        if (!portfolio) {
           loggerService.log('info','Portfolio mit der ID ' + id + ' konnte nicht gefunden werden');
            return next(new Error('cant find portfolio'));

        }

        req.portfolio = portfolio;
        return next();
    })
})


router.get('/:portfolio', function(req, res) {
    res.json(req.portfolio);
});



router.post('/', authCheck, function(req, res, next) {
    var portfolio = new Portfolio(req.body);
    portfolio.save(function(err, portfolio) {
        if (err) {
            return next(err);
            loggerService.log('error',err);
        };
        res.json(portfolio);
    })
});




module.exports = router;
