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

	angular.module('app.professor')
	.directive('cardResultadoGordura', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/card-resultado-gordura.html'
		};
	});

	angular.module('app.professor')
	.directive('cardResultadoPeso', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/card-resultado-peso.html'
		};
	});


	angular.module('app.professor')
	.directive('cardUltimasAvaliacoes', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/card-ultimas-avaliacoes.html'
		};
	});

	angular.module('app.professor')
	.directive('cardEvolucaoGordura', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/card-evolucao-gordura.html'
		};
	});

	angular.module('app.professor')
	.directive('cardEvolucaoPeso', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/card-evolucao-peso.html'
		};
	});


	angular.module('app.professor')
	.directive('cardPerimetriaInferior', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/estatisticas-card/card-perimetria-inferior.html'
		};
	});


	angular.module('app.professor')
	.directive('cardPerimetriaSuperior', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/estatisticas-card/card-perimetria-superior.html'
		};
	});

	angular.module('app.professor')
	.directive('cardPerimetriaBracos', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/nova-avaliacao/estatisticas-card/card-perimetria-bracos.html'
		};
	});


})();