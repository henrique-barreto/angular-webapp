(function() {

	angular.module('app')
	.service('AlunoService', function ($http) {
		
		var alunosResourceUrl = 'http://localhost:8080/treinoapp/api/v1/aluno'

		return {
			
			buscarPorNome: function(nome) {
				return $http({method: 'GET', url: alunosResourceUrl + '/busca-nome?nome=' + nome});
			},

			adicionar: function(aluno) {
				return $http({
					method: 'POST', 
					url: alunosResourceUrl,
					data: aluno
				});
			},

			atualizar: function(aluno) {
				return $http({
					method: 'PUT', 
					url: alunosResourceUrl,
					data: aluno
				});
			},

			buscarPorId: function(id) {
				return $http({
					method: 'GET', 
					url: alunosResourceUrl + '?id=' + id
				});
			}

		};
	});

})();