ismobile
========

# INSTALL

### NODE
	
	npm install is-mobile
### BROWSER
	<script src="ismobile.js"></script>

# EXPRESS 
	
## app.js
	
	global setting
	var isMobile = require('is-mobile');
	app.use(isMobile);

	//then: in routes files you can use
		req.isMobile  detect is or not mobile

		//true/false/undefined
## routes files
	
	var express = require('express');
	var router = express.Router();
	var isMobile = require('is-mobile');

	router.use('/',isMobile); // req.isMobile  true /false /undefined
	//router.use(isMobile); all path  req.isMobile  true /false

	/* GET home page. */
	router.get('/', function(req, res) {
		console.log(req.isMobile);
	  res.render('index', { title: 'Express' });
	})

## In Browser
	
	isMobile()  //true/false