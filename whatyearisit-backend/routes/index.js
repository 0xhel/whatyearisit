var express = require('express');
var router = express.Router();

router.get('/year', function (req, res, next) {
  var currentYear = new Date().getFullYear();
  res.json({ year: currentYear });
});

module.exports = router;
