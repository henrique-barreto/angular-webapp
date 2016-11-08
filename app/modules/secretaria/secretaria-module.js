(function() {

	angular.module('app.secretaria', ['ui.router'])
	.config(['$stateProvider', function($stateProvider) {

		$stateProvider
		.state('secretaria', {
			abstract: true,
			templateUrl: '/app/shared/view-template/seguro.html'
			// ,
			// onEnter: function(){
			// 	alert('hfghfghfghello');	
			// }
			
		})
		.state('secretaria.home', {
			url: '/secretaria',
			templateUrl : "app/modules/secretaria/views/home.html"
		})
		.state('secretaria.buscar', {
			url: '/secretaria/buscar-aluno',
			templateUrl : "app/modules/secretaria/views/buscar-aluno.html"
		})
		.state('secretaria.cadastrar', {
			url: '/secretaria/cadastro-aluno',
			templateUrl : "app/modules/secretaria/views/cadastro-aluno.html"
		})
		;

	}])

})();