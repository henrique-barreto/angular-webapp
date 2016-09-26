(function() {

	angular.module('app')
	.service('AvaliacaoService', function ($http) {
		
		var avaliacaoResourceUrl = 'http://localhost:8080/treinoapp/api/v1/avaliacao'

		return {
			

			salvar: function(avaliacao, idAluno, idProfessor) {
				console.log(avaliacao);

				console.log('idaluno:' + idAluno);
				console.log('idProfessor:' + idProfessor);
				
				return $http({
					method: 'POST', 
					url: avaliacaoResourceUrl + '/aluno/' + idAluno +'/professor/' + idProfessor,
					data: avaliacao
				});
			},

			atualizar: function(avaliacao) {
				return $http({
					method: 'PUT', 
					url: avaliacaoResourceUrl,
					data: avaliacao
				});
			},

			buscarPorId: function(id) {
				return $http({
					method: 'GET', 
					url: avaliacaoResourceUrl + '?id=' + id
				});
			},


			getResultado: function(id) {
				return $http({
					method: 'GET', 
					url: avaliacaoResourceUrl + '/resultado?id=' + id
				});
			}

		};

	});

})();