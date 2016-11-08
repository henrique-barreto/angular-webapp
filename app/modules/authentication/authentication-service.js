(function() {

	angular.module('app.authentication', ['ngCookies'])
	.factory('AuthService', function($http, $cookies, $location, $rootScope, $state, localStorageService){

		var loginUrl = 'http://localhost:8080/treinoapp/login';
		var authUsuarioUrl = 'http://localhost:8080/treinoapp/api/v1/auth/usuario';

		var setCredentials = function(username, password) {
			console.log('colocando credentials');
			var authdata = btoa(username + ':' + password);
			$rootScope.globals = {
				currentUser: {
					username: username,
					authdata: authdata
				}
			};
			$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
			$cookies.put('globals', $rootScope.globals);
		};

		var getLoggedInUser = function() {
			console.log('setLoggedInUser');
			return $http({
				url: authUsuarioUrl,
				method: "GET",
			});

		};

		var clearCredentials = function() {
			$rootScope.globals = {};
			$cookies.remove('globals');
			$http.defaults.headers.common.Authorization = 'Basic';
		};

		var removeLoggedInUser = function() {
			localStorageService.remove('loggedUser');
		};


		var getRoleState = function() {

			if (!AuthService.isLoggedIn) {
				console.log('Nenhum usuario logado');
				return 'publico.login';
			}

			var usuario = localStorageService.get('loggedUser');
			if (usuario.permissao === 'ROLE_ALUNO') {
				console.log('Usuario com role de aluno, sendo redirecionado para: aluno.home');
				return 'aluno.home';
			} else if (usuario.permissao === 'ROLE_PROFESSOR') {
				console.log('Usuario com role de professor, sendo redirecionado para: professor.home');
				return 'professor.home';
			} else if (usuario.permissao === 'ROLE_SECRETARIA') {
				console.log('Usuario com role de ROLE_SECRETARIA, sendo redirecionado para: secretaria.home');
				return 'secretaria.home';
			}

			alert('Role nao mapeada');
			return 'publico.login';
		};



		var AuthService = {

			login: function (username, password) {

				clearCredentials();
				removeLoggedInUser();

				var data = 'username=' + username + '&password=' + password;
				$http({
					url: loginUrl,
					method: "POST",
					data: data,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).success(function (data, status, headers, config) {
					console.log(headers);
					setCredentials(username, password);

					getLoggedInUser().success(function (data) {
						localStorageService.set('loggedUser', data);
						var state = getRoleState();
						$state.transitionTo(state, {});
					}).error(function (data, status, headers, config) {
						console.log('Erro ao buscar usuario logado!');
						return false;
					});
				}).error(function (data, status, headers, config) {
					alert('error: ' + status);
				});

			},

			logout: function() {
				console.log('fazendo logout...');
				clearCredentials();
				removeLoggedInUser();
				$state.transitionTo('publico.login', {});
			},

			isLoggedIn: function() {
				if (localStorageService.get('loggedUser')) {
					return true;
				}
				return false;
			},

			canAcess: function(state) {

				console.log('Verificando acesso para:  ' + state);

				//publico
				if (state.indexOf('publico') !== -1)  {
					return true;
				}
				
				if (!this.isLoggedIn()) {
					return false;
				}

				var usuario = this.getCurrentUser();
				//professor
				if (state.indexOf('professor') !== -1) {
					if (usuario.permissao === 'ROLE_PROFESSOR') {
						return true;
					}
				}

				//aluno
				if (state.indexOf('aluno') !== -1) {
					if (usuario.permissao === 'ROLE_ALUNO') {
						return true;
					}
				}

								//aluno
				if (state.indexOf('secretaria') !== -1) {
					if (usuario.permissao === 'ROLE_SECRETARIA') {
						return true;
					}
				}

				return false;

			},

			getCurrentUser: function() {
				//console.log('AuthService: getCurrentUser');
				//console.log(localStorageService.get('loggedUser'));
				return localStorageService.get('loggedUser');
			}


		};

		return AuthService;



	});


})();