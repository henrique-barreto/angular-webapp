(function() {

	angular.module('app.professor', ['ui.router'])
	.config(['$stateProvider', function($stateProvider) {

		$stateProvider
		.state('professor', {
			abstract: true,
			templateUrl: '/app/shared/view-template/seguro.html'
		})
		.state('professor.home', {
			url: '/professor',
			templateUrl : "app/modules/professor/views/home.html"
		})
		.state('professor.buscar', {
			url: '/professor/buscar-aluno',
			templateUrl : "app/modules/professor/views/buscar-aluno.html"
		})
		//=== avaliacao ===
		.state('professor.novaAvaliacao', {
			abstract: true,
			templateUrl : "app/modules/professor/nova-avaliacao/nova-avaliacao.html"
		})
		.state('professor.novaAvaliacao.anamnese', {
			url: '/professor/nova-avaliacao/anamnese',
			templateUrl : "app/modules/professor/nova-avaliacao/anamnese.html"
		})
		.state('professor.novaAvaliacao.perimetria', {
			url: '/professor/nova-avaliacao/perimetria',
			templateUrl : "app/modules/professor/nova-avaliacao/perimetria.html"
		})
		.state('professor.novaAvaliacao.dobras', {
			url: '/professor/nova-avaliacao/dobras',
			templateUrl : "app/modules/professor/nova-avaliacao/dobras.html"
		})
		.state('professor.novaAvaliacao.resultado', {
			url: '/professor/nova-avaliacao/anamnese',
			templateUrl : "app/modules/professor/nova-avaliacao/anamnese.html"
		})
		;

	}])

})();