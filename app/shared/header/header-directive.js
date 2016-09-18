(function() {

	angular.module('app')
	.directive('headerPublico', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/shared/header/header-publico.html'
		};

	});

	angular.module('app')
	.directive('headerRestrito', function(AuthService) {
		return {
			restrict: 'E',
			templateUrl: 'app/shared/header/header-restrito.html',
			link: function (scope) {

				scope.usuario = AuthService.getCurrentUser();
				scope.isLoggedIn = false;

				scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
					scope.isLoggedIn = isLoggedIn;
					scope.usuario = AuthService.getCurrentUser();
				});

				scope.logout = function (){
					AuthService.logout();
				};

			},
			controllerAs: 'headerCtrl'
		};

	});

})();