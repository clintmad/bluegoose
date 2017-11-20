var express = require('express');
var router = express.Router();

var Ship = require('../models/ship');

router.get('/', function(req, res, next) {
    Ship.find({}, (error, docs) => {
        if(err) {
            res.send(err);
        }
        res.render(JSON.stringify(docs));
    });
});

module.exports = router;
