(function() {

	angular.module('app.aluno', ['ui.router'])
	.config(['$stateProvider', function($stateProvider) {

		$stateProvider
		.state('aluno', {
			abstract: true,
			templateUrl: '/app/shared/view-template/seguro.html'
		})
		.state('aluno.home', {
			url: '/aluno',
			templateUrl : "app/modules/aluno/views/home.html"
		})
		.state('aluno.estatisticas', {
			url: '/aluno/estatisticas',
			templateUrl : "app/modules/aluno/views/estatisticas.html"
		})
		.state('aluno.historico', {
			url: '/aluno/historico',
			templateUrl : "app/modules/aluno/views/historico.html"
		})
		.state('aluno.agendamento', {
			url: '/aluno/agendamento',
			templateUrl : "app/modules/aluno/views/agendamento.html"
		})
		.state('aluno.meusDados', {
			url: '/aluno/meus-dados',
			templateUrl : "app/modules/aluno/views/meus-dados.html"
		})
		.state('aluno.notificacoes', {
			url: '/aluno/notificacoes',
			templateUrl : "app/modules/aluno/views/notificacoes.html"
		})
		;

	}])

})();