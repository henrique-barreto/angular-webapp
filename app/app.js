(function() {




	angular.module('app', [
		'ui.router', 
		'LocalStorageModule',
		'app.professor',
		'app.secretaria',  
		'app.aluno',  
		'app.authentication'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

		$locationProvider.html5Mode(true);
		
		$urlRouterProvider.otherwise('/login');
		

		$stateProvider
		.state('publico', {
			abstract: true,
			templateUrl: '/app/shared/view-template/publico.html'
		})
		.state('publico.inicial', {
			url: '/',
			templateUrl: '/app/modules/authentication/login.html'
		})
		.state('publico.login', {
			url: '/login',
			templateUrl: '/app/modules/authentication/login.html'
		});



	}])
	

	.config(function (localStorageServiceProvider) {
		localStorageServiceProvider
		.setPrefix('app');
	})


	.run(
		function($rootScope, $transitions, $state, AuthService ) {

			$transitions.onBefore( { to: '**' , from: '**' }, function($state$) {
				var state = $state$._targetState._identifier;
				if (!state) {
					state = state.name;
				}
				var canAcess = AuthService.canAcess(state + '');
				if (!canAcess) {
					//console.log($state);
					$state.transitionTo('publico.login', {});
				}
			});

		});


})();


