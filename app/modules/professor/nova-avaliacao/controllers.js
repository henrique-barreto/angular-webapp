(function() {

	angular.module('app.professor')
	.controller('NovaAvaliacaoController', function($state, NovaAvaliacaoService){

		this.aluno = NovaAvaliacaoService.getAluno();
		this.professor = NovaAvaliacaoService.getProfessor();

		this.anamnese = {};
		this.perimetria = {};
		this.dobras = {};

		this.nextAnamnese = function () {
			NovaAvaliacaoService.setAnamnese(this.anamnese);
			$state.transitionTo('professor.novaAvaliacao.perimetria', {});
		}

		this.nextPerimetria = function () {
			NovaAvaliacaoService.setPerimetria(this.perimetria);
			$state.transitionTo('professor.novaAvaliacao.dobras', {});
		}

		this.nextDobras = function () {
			NovaAvaliacaoService.setDobras(this.dobras);
			NovaAvaliacaoService.salvar();
			$state.transitionTo('professor.novaAvaliacao.resultado', {});
		}

	});

})();