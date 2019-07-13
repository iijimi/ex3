var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'โครตงงจ้าาาาาาาาา' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'โครตงงจ้าาาาาาาาา' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โครตงงจ้าาาาาาาาา' });
});

module.exports = router;
