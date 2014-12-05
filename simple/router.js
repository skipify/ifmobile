var express = require('express');
var router = express.Router();
var isMobile = require('is-mobile');

router.use('/',isMobile); // req.isMobile  true /false /undefined
//router.use(isMobile); all path  req.isMobile  true /false
/* GET home page. */
router.get('/', function(req, res) {
	var colors = require('colors');
	console.log(req.isMobile);
  res.render('index', { title: 'Express' });
})