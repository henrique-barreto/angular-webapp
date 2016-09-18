(function() {

	angular.module('app.professor')
	.controller('NovaAvaliacaoController', function(NovaAvaliacaoService){

		this.aluno = NovaAvaliacaoService.getAluno();
		this.professor = NovaAvaliacaoService.getProfessor();

		this.anamnese = {};
		this.perimetria = {};
		this.dobras = {};

	});

})();