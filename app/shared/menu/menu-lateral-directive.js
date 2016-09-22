(function() {

	angular.module('app')
	.directive('menuLateral', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/shared/menu/menu-comlistas.html',
			controller: 'MenuController',
			controllerAs: 'menuCtrl'
		};

	});


	angular.module('app')
	.directive('menuItem', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {
				nome: '@',
				items: '='
			},
			templateUrl: 'app/shared/menu/menu-item.html'
		};

	});



})();