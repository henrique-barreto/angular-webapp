(function() {

	angular.module('app').controller('LoginController', function($http, AuthService){

		this.username = '';
		this.password = '';

		this.submitLogin = function() {
			AuthService.login(this.username, this.password);
		};

	});


})();