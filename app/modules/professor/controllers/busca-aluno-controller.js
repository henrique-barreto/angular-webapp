(function() {


	angular.module('app.professor')
	.controller('BuscaAlunoController', function($http, AlunoService, NovaAvaliacaoService){

		var controller = this;
		this.nome = '';
		this.mostrarInfo = false;
		this.alunos = [];

		this.buscarAluno = function() {

			AlunoService.buscarPorNome(this.nome)
			.success(function (data){
				controller.alunos = data;
				controller.mostrarInfo = true;
			});

		};

		this.novaAvaliacao = function (aluno){

			NovaAvaliacaoService.novaAvaliacao(aluno);
			//muda pagina para avaliacao
		};

	});

})();