ismobile
========

# INSTALL

### NODE
	
	npm install ifmobile
### BROWSER
	<script src="ifmobile.js"></script>

# EXPRESS 
	
## app.js
	
	global setting
	var isMobile = require('ifmobile');
	app.use(ifMobile);

	//then: in routes files you can use
		req.ifMobile  detect is or not mobile

		//true/false/undefined
## routes files
	
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

## In Browser
	
	ifMobile()  //true/false