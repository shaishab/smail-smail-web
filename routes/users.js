module.exports = function(app) {
	"use strict";

	app.route("/welcome").get(function(req, res) {
		res.render("account/signUpSuccess");
	});

	app.route("/smail").get(function(req, res) {
		res.render("pages/inbox");
	});
};
