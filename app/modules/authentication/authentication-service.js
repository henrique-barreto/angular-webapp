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
		}

		var setLoggedInUser = function() {
			$http({
				url: authUsuarioUrl,
				method: "GET",
			}).success(function (data) {
				localStorageService.set('loggedUser', data);
				usuarioLogado = true;
			}).error(function (data, status, headers, config) {
				console.log('Erro ao buscar usuario logado!');
			});
		}

		var clearCredentials = function() {
			$rootScope.globals = {};
			$cookies.remove('globals');
			$http.defaults.headers.common.Authorization = 'Basic';
		}

		var removeLoggedInUser = function() {
			localStorageService.remove('loggedUser');
		}


		return {

			login: function (username, password) {

				var data = 'username=' + username + '&password=' + password;
				$http({
					url: loginUrl,
					method: "POST",
					data: data,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).success(function (data, status, headers, config) {
					console.log(headers);
					setCredentials(username, password);
					setLoggedInUser();
					$state.transitionTo('professor.home', {});
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

			getCurrentUser: function() {
				return localStorageService.get('loggedUser');
			}

		};



	});


})();