"use strict";

var playCast = angular.module("playCast", [
	"ui.bootstrap",
	"ngRoute"
]);

playCast.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.
		when("/", {
			templateUrl: "templates/home.html"
		}).
		otherwise({
			redirectTo: "/home"
		});
	}
]);