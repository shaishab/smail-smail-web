module.exports = function(app) {
	"use strict";

	app.route("/").get(function(req, res) {
		res.render("index", {title: "Smail"});
	});

	app.route("/signIn").get(function(req, res) {
		res.render("account/signIn");
	});

	app.route("/signUp").get(function(req, res) {
		res.render("account/signUp");
	});

};
