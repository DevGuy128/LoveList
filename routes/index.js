var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LoveList' });
});

router.get('/profile', function(req, res, next) {
  res.render('index', { title: 'Your Profile' });
});

router.get('/my-list', function(req, res, next) {
  res.render('index', { title: 'My LoveList' });
});

module.exports = router;
