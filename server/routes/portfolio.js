var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Portfolio = mongoose.model('Portfolio');
var authCheck = require('../bin/authservice');

router.param('portfolio', function(req, res, next, id) {
    var query = Portfolio.findById(id);

    query.exec(function(err, portfolio) {
        if (err) {
            return next(err)
                //TODO: Log
        }
        if (!portfolio) {
            return next(new Error('cant find portfolio'));
            //TODO: Log
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
            //TODO: Log
        };
        res.json(portfolio);
    })
});




module.exports = router;
