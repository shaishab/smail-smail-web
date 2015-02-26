var express = require('express');
var route = express.Router();

/* GET home page. */
// route.get('/', function(req, res, next) {
//   res.render('index', { title: 'Smail' });
// });

// module.exports = router;

module.exports = function(app) {
	"use strict";

	app.route("/").get(function(req, res) {
		res.render("index", {title: "Smile"});
	});
	
};
