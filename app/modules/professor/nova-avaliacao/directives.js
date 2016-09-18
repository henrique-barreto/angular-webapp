(function() {

	angular.module('app.professor')
	.directive('avaliacaoHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/avaliacao-header.html'
		};

	});

	angular.module('app.professor')
	.directive('avaliacaoTracker', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/avaliacao-tracker.html'
		};

	});

})();