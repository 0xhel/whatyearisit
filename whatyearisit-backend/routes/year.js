var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var currentYear = new Date().getFullYear();
    res.send('year : ' + currentYear);
});

module.exports = router;
