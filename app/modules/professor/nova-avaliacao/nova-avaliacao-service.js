(function() {

	angular.module('app.professor')
	.service('NovaAvaliacaoService', function ($state) {

		var novaAvaliacaoService = this;

		this.aluno = {};
		this.professor = {
			"nome": "XXXXXXXX"
		};
		
		this.anamnese = {};
		this.perimetria = {};
		this.dobras = {};

		this.novaAvaliacao = function(aluno){ 
			novaAvaliacaoService.limparDados();
			alert('fazer nova avaliacao para aluno: ' + aluno.nome);
			this.aluno = aluno;

			$state.transitionTo('professor.novaAvaliacao.anamnese', {});
		};


		this.limparDados = function(){
			this.aluno = {};
			this.professor = {};
			this.anamnese = {};
			this.perimetria = {};
			this.dobras = {};
		}

		this.getAluno = function (){
			return this.aluno;
		}

		this.getProfessor = function (){
			return this.professor;
		}
		

	});

})();