var express = require('express');
var manager = require('./../manager/Manager');

var router = express.Router();

router.get('/', function(req, res) {
    manager.test().then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });
});

module.exports = router;
