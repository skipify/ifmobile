var express = require('express');
var router = express.Router();
var ifMobile = require('ifmobile');

router.use('/',ifMobile); // req.ifMobile  true /false /undefined
//router.use(ifMobile); all path  req.ifMobile  true /false
/* GET home page. */
router.get('/', function(req, res) {
	console.log(req.ifMobile);
  res.render('index', { title: 'Express' });
})