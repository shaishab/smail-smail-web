module.exports = function(app) {
	"use strict";

	app.route("/welcome").get(function(req, res) {
		res.render("account/signUp");
	});
};
