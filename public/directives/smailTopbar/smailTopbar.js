var _app = angular.module("smail", []);

(function(app) {
	"use strict";
	app.directive('smailTopbar', [function(){
		// Runs during compile
		return {

			restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: '/directives/smailTopbar/template.html',
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);
})(_app);